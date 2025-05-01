
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Latest Trends in Property Valuation",
    excerpt: "Discover how modern technologies are reshaping the landscape of property valuation in today's market.",
    date: "April 15, 2025",
    category: "Market Trends"
  },
  {
    id: 2,
    title: "Understanding Land Value Assessment",
    excerpt: "An in-depth look at the factors that influence land valuation and how to interpret assessment reports.",
    date: "March 28, 2025",
    category: "Valuation Insights"
  },
  {
    id: 3,
    title: "The Impact of Infrastructure on Property Values",
    excerpt: "How new infrastructure developments can significantly affect property valuations in surrounding areas.",
    date: "February 10, 2025",
    category: "Market Analysis"
  },
  {
    id: 4,
    title: "Commercial Property Valuation: Key Considerations",
    excerpt: "Essential factors to consider when assessing the value of commercial properties in today's economic climate.",
    date: "January 22, 2025",
    category: "Commercial Real Estate"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-muted p-4">
                  <div className="h-40 flex items-center justify-center bg-primary/10 rounded-md mb-4">
                    <BookOpen size={48} className="text-primary opacity-70" />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <button className="text-sm text-primary hover:underline">Read More →</button>
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
