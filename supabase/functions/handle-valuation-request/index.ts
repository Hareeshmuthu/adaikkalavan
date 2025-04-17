
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = "https://efnneffbdacwcsqjkzkj.supabase.co";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ValuationRequest {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  purpose: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ValuationRequest = await req.json();
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Store the request in the database
    const { data, error: dbError } = await supabase
      .from('valuation_requests')
      .insert([requestData])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store valuation request");
    }

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Valuation Request <onboarding@resend.dev>",
      to: "adaikkalavanvaluer@gmail.com",
      subject: `New Valuation Request from ${requestData.name}`,
      html: `
        <h2>New Valuation Request</h2>
        <p><strong>Name:</strong> ${requestData.name}</p>
        ${requestData.company ? `<p><strong>Company:</strong> ${requestData.company}</p>` : ''}
        <p><strong>Phone:</strong> ${requestData.phone}</p>
        ${requestData.email ? `<p><strong>Email:</strong> ${requestData.email}</p>` : ''}
        <p><strong>Purpose:</strong> ${requestData.purpose}</p>
        ${requestData.message ? `<p><strong>Additional Details:</strong> ${requestData.message}</p>` : ''}
        <p><strong>Request Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // If email was sent successfully, also send a confirmation to the requester if they provided an email
    if (requestData.email) {
      await resend.emails.send({
        from: "Adaikkalavan Property Valuer <onboarding@resend.dev>",
        to: requestData.email,
        subject: "Your Valuation Request Has Been Received",
        html: `
          <h2>Thank you for your valuation request!</h2>
          <p>Dear ${requestData.name},</p>
          <p>We have received your valuation request and our team will review it shortly.</p>
          <p>We will contact you at ${requestData.phone} to discuss your requirements in detail.</p>
          <p>Best regards,<br>Adaikkalavan Property Valuer</p>
        `,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in handle-valuation-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
