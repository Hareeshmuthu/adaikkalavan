
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import ImageOptimizer from '@/components/ui/image-optimizer';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Market Approach for Real Property Interest Valuation",
    excerpt: "A deep dive into the market approach for valuing real estate, examining comparables, adjustment factors, and the delicate balance between objective and subjective assessments.",
    date: "April 15, 2025",
    category: "Valuation Methods"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="container mx-auto pt-24 pb-16 px-4">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Insights and updates from M. Adaikkalavan on property valuation, market trends, 
            and more to help you stay informed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-muted p-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 rounded-md overflow-hidden h-auto">
                      <ImageOptimizer
                        src="/lovable-uploads/cb787287-db1a-4333-9af1-11e3ae2060a1.png"
                        alt="Property valuation concept"
                        className="w-full h-full aspect-[4/3]"
                        priority={true}
                      />
                    </div>
                    <div className="md:w-2/3">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Link to={`/blogs/${post.id}`} className="text-sm text-primary hover:underline">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest articles, insights and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
