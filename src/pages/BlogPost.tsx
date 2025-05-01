
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { MessageSquare, BookOpen } from 'lucide-react';
import { blogPosts } from './Blogs';

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find(post => post.id === parseInt(id as string));

  if (!blogPost) {
    return <Navigate to="/blogs" replace />;
  }

  // Content for the "Market Approach" blog post (id: 1)
  const renderContent = () => {
    if (blogPost.id === 1) {
      return (
        <>
          <h2 className="text-2xl font-semibold mb-4">Unlocking Property Value: A Deep Dive into the Market Approach</h2>
          
          <p className="mb-4">
            When it comes to understanding the value of real property, various methods exist. One of the most widely accepted and frequently used is the Market Approach, also known as the Sales Comparison Approach. This method offers a practical way to estimate property value by looking at what similar properties have recently sold for in the market.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">The Economic Principles Behind Valuation</h3>
          <p className="mb-4">
            At its core, property valuation is influenced by fundamental economic principles. For assets like real property, four essential factors play a significant role in determining value:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Utility</strong>: The usefulness or ability of an asset to satisfy a need or provide a benefit. Real estate in a prime location, for example, offers high utility due to its potential uses (residential, commercial, etc.).</li>
            <li><strong>Scarcity</strong>: The limited availability of an asset. The scarcer a property is, the more valuable it tends to be, assuming there is demand.</li>
            <li><strong>Transferability</strong>: The ease with which an asset can be transferred or sold from one party to another. Properties that are easy to trade or convert into cash tend to have greater value.</li>
            <li><strong>Demand</strong>: The level of desire or need for an asset. High demand generally increases a property's value, while low demand decreases it.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">What is Real Estate?</h3>
          <p className="mb-4">
            Before diving deeper into the Market Approach, it's helpful to define what we mean by real estate. <strong>Real estate refers to property consisting of land and the buildings or structures on it</strong>. This encompasses several property types, including residential homes, commercial buildings, industrial properties, and undeveloped land. It's important to note that <strong>cultivated land, also known as agricultural real estate or farmland, is considered part of real estate</strong> and includes the land itself plus supporting structures like barns and irrigation systems.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Defining the Market Approach</h3>
          <p className="mb-4">
            The Market Approach operates on the principle of comparison. According to the sources, it is defined as:
          </p>
          <blockquote className="border-l-4 border-lavender pl-4 py-2 italic mb-4">
            "The process of deriving a value indication for the subject property by comparing sales of similar properties to the property being valued, identifying appropriate units of comparison, and making adjustments to the sale prices of the comparable properties based on relevant, market-derived elements of comparison."
          </blockquote>
          <p className="mb-4">
            Essentially, it involves comparing the property being valued (the subject property) with other similar properties that have recently sold. The sale prices of these comparable properties are then adjusted to account for differences between them and the subject property.
          </p>
          
          <div className="my-6 md:float-right md:ml-6 md:w-2/5">
            <img 
              src="/lovable-uploads/45e7ad9a-efb5-4e95-ac87-3385b37de81e.png" 
              alt="M. Adaikkalavan Property Valuer - Comparable Evidence" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">The Power of Comparables</h3>
          <p className="mb-4">
            The success of the Market Approach hinges on finding suitable <strong>comparables</strong>. A comparable is an item of information, typically a recent sale of a similar property, used as evidence to support the valuation.
          </p>
          <p className="mb-4">
            Ideally, comparable evidence should meet several criteria:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Comprehensive</strong>: There should be several comparables, not just one.</li>
            <li><strong>Very similar or identical</strong>: The comparables should be as similar as possible to the subject property.</li>
            <li><strong>Recent</strong>: Representing the market conditions close to the valuation date.</li>
            <li><strong>Arm's-length transaction</strong>: Resulting from a transaction between unrelated parties under no duress.</li>
            <li><strong>Verifiable</strong>: The details should be confirmable.</li>
            <li>Consistent with local market practice.</li>
            <li>The result of underlying demand, indicating an active market.</li>
          </ul>
          
          <p className="mb-4 clear-right">
            Direct transactional evidence from open market sales near the valuation date is normally the best and most reliable source. However, obtaining full details of real estate transactions can be challenging as they are rarely fully public. Publicly available information, such as data from government sources or real estate agents' websites, can be useful but often requires further investigation and analysis to confirm all relevant details that impacted the sale price.
          </p>
          <p className="mb-4">
            It is absolutely <strong>essential that comparable evidence is carefully examined for accuracy</strong>. Important details like building quality, lease terms, or incentives can significantly impact the reported figure and should be verified.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Pros of the Market Approach</h3>
          <p className="mb-4">
            The Market (Sales Comparison) Approach has several advantages:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Widely Accepted and Understood</strong>: It is one of the most widely accepted valuation methods among real estate professionals and financial institutions, making it a reliable choice for various transactions.</li>
            <li><strong>Straightforward to Implement</strong>: Compared to methods requiring complex calculations, this approach is relatively straightforward, provided good comparables and adjustment factors are available.</li>
            <li><strong>Effective for Properties with Many Similar Comparables</strong>: It works best when there are plenty of similar, recently sold properties to compare with, leading to a more accurate valuation.</li>
            <li><strong>Real-World Data</strong>: It uses actual sales data, grounding the valuation in real-world transactions and adding credibility.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cons of the Market Approach</h3>
          <p className="mb-4">
            Despite its strengths, the Market Approach also has limitations:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Limited Availability of Comparables</strong>: Finding suitable comparables can be challenging in some markets or for unique properties.</li>
            <li><strong>Subjectivity in Adjustments</strong>: Adjusting for differences between properties can involve subjective judgment, which might lead to varying valuations depending on the valuer's interpretation.</li>
            <li>Lack of up-to-date evidence in fast-changing markets.</li>
            <li>Potential for special purchasers (buyers with unique motivations) affecting comparable prices.</li>
            <li>Real estate markets are not fully transparent.</li>
          </ul>
          
          <div className="my-6 md:float-left md:mr-6 md:w-2/5">
            <img 
              src="/lovable-uploads/8d88295e-8099-4c73-a6a7-2daf38d6d7bb.png" 
              alt="M. Adaikkalavan Property Valuer - Market Approach" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Market Approach vs. Other Valuation Methods</h3>
          <p className="mb-4">
            The Market Approach is just one tool in the valuer's toolkit. Other common methods include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Income Approach</strong>: Estimates value based on the income a property can generate. This is particularly useful for investment properties where income generation is the primary goal. Unlike the Market Approach which uses sales data, the Income Approach uses potential income and expenses. It can be more complex as it requires detailed income and expense analysis.</li>
            <li><strong>Cost Approach</strong>: Estimates value by calculating the cost to build a similar property from scratch today, plus land value, minus depreciation. This approach is often used for unique or specialized properties where comparable sales data is scarce. It is based on construction costs and land value, whereas the Market Approach uses market sales data. The Cost Approach also explicitly considers depreciation, which is not directly factored in the Market Approach.</li>
          </ul>
          
          <div className="my-6 md:float-right md:ml-6 md:w-2/5">
            <img 
              src="/lovable-uploads/6932a2de-daa7-42a1-b55b-02ecb89f99e0.png" 
              alt="Adjustment Factors in property valuation" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 clear-left">The Art of Adjustment Factors</h3>
          <p className="mb-4">
            A crucial part of the Market Approach is making accurate adjustments to the sale prices of comparable properties. These adjustments account for the differences between the comparable property and the subject property.
          </p>
          
          <p className="mb-4">
            <strong>Why are adjustments crucial?</strong> They are essential for fine-tuning the estimated value. Without proper adjustments, the final valuation could be significantly inaccurate.
          </p>
          <p className="mb-4">
            Adjustment factors can be broadly categorized as Objective or Subjective:
          </p>
          
          <div className="my-6 md:float-left md:mr-6 md:w-2/5">
            <img 
              src="/lovable-uploads/dfce7b09-d3cb-4593-949f-acfd170d8fc0.png" 
              alt="Objective vs Subjective in property valuation" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="clear-both"></div>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">Objective Adjustments</h4>
          <p className="mb-4">
            These are based on quantifiable and measurable factors that are relatively consistent and supported by verifiable data. They are less prone to personal interpretation.
          </p>
          <p className="mb-4">Examples include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Size (Square Footage)</strong>: Measured objectively, adjusted based on price per square foot from market data.</li>
            <li><strong>Number of Rooms</strong>: Measurable (e.g., bedrooms, bathrooms), adjusted based on market value per room.</li>
            <li><strong>Time of Sale</strong>: Adjusted objectively using market appreciation or depreciation rates derived from market data.</li>
            <li><strong>Lot Size</strong>: Objectively measurable, adjusted using value per square foot of land.</li>
          </ul>
          
          <h4 className="text-lg font-semibold mt-4 mb-2">Subjective Adjustments</h4>
          <p className="mb-4">
            These adjustments involve more personal judgment, interpretation, and experience. Subjective factors are harder to quantify precisely and can vary depending on market perception, buyer preferences, trends, or local dynamics.
          </p>
          <p className="mb-4">Examples include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Condition</strong>: Assessing the overall condition (e.g., "excellent" vs. "fair") can be subjective.</li>
            <li><strong>Location Quality</strong>: While proximity can be measured, the desirability or 'quality' of a neighborhood is often subjective, influenced by factors like street noise, view, or prestige.</li>
            <li><strong>Aesthetic Appeal and Design</strong>: Architectural style, landscaping, and interior design preferences are subjective and market-dependent.</li>
            <li><strong>View and Exposure</strong>: Quantifying the value of a scenic view (e.g., ocean, mountain) precisely is challenging and often requires subjective judgment based on market experience.</li>
            <li><strong>Amenities</strong>: While an amenity like a pool adds objective value, the <em>amount</em> of adjustment can be subjective, depending on factors like climate and local market preferences.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 clear-right">Balancing Objective and Subjective</h3>
          <p className="mb-4">
            In practice, <strong>a mix of both objective and subjective adjustments is necessary for an accurate valuation</strong>. The valuer must start with objective factors and then incorporate subjective judgments based on their experience and market knowledge, ensuring these subjective adjustments are reasonable and aligned with market trends.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">The Lesson of the Three Dolls</h3>
          <p className="mb-4">
            The sources share an insightful story about Akbar and Birbal and three identical-looking dolls. Tasked with valuing them, Birbal declared one worthless, the second valued at 1,000 gold coins, and the third at 1,00,000 gold coins.
          </p>
          <p className="mb-4">
            His justification revealed that the dolls differed based on how they processed information represented by a wire inserted in the ear:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The first doll's wire came out of the mouth, symbolising someone who spreads secrets and is thus worthless in society.</li>
            <li>The second doll's wire came out of the other ear, representing someone who neither helps nor harms by keeping secrets, valued more than the first.</li>
            <li>The third doll's wire stayed inside, symbolising someone who keeps secrets and tries to solve problems, making them invaluable.</li>
          </ul>
          <p className="mb-4">
            The moral of this story for valuers is profound:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>The similarity of property may be deceptive.</strong> It is crucial to thoroughly investigate and find differences in attributes, even between seemingly similar properties.</li>
            <li><strong>Do not immediately jump to conclusions.</strong> A case must be thoroughly studied, taking time if needed, before giving a considered opinion.</li>
            <li><strong>Valuation requires reasoning and supporting evidence.</strong> The valuer should be able to support their valuation and provide reasons, especially when asked by the client or court.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Conclusion</h3>
          <p>
            The Market (Sales Comparison) Approach is a powerful tool for valuing real property, grounded in real-world transactions and economic principles. Its effectiveness relies on finding suitable comparables and making careful adjustments, a process that requires both objective analysis of data and the skilled subjective judgment of the valuer. While it has limitations, particularly with unique properties or in less active markets, understanding its mechanics, the nature of comparables, and the balance between objective and subjective factors is key to unlocking a property's likely market value.
          </p>
        </>
      );
    } else {
      // For other blog posts, just display a placeholder message
      return (
        <p className="text-muted-foreground italic">Full content for this blog post is coming soon...</p>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="container mx-auto pt-24 pb-16 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{blogPost.title}</CardTitle>
            <CardDescription className="flex justify-between items-center text-base">
              <span>{blogPost.category} • {blogPost.date}</span>
              <span className="flex items-center gap-2">
                <BookOpen size={16} className="text-lavender" />
                <span className="text-sm">8 min read</span>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            {renderContent()}
          </CardContent>
          <CardFooter className="flex flex-col items-start border-t pt-6">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-semibold">Written by M. Adaikkalavan</p>
                <p className="text-sm text-muted-foreground">
                  Registered Valuer under IBBI and Companies Act
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <MessageSquare size={16} className="mr-2" /> Share
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(post => post.id !== blogPost.id)
              .slice(0, 3)
              .map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription className="text-xs">{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blogs/${post.id}`}>
                      <Button variant="link" className="px-0">
                        Read more →
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
