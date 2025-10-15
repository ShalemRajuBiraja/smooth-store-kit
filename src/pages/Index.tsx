import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productHeadphones from "@/assets/product-headphones.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productMouse from "@/assets/product-mouse.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";
import productBag from "@/assets/product-bag.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1243,
      image: productHeadphones,
      badge: "Best Seller",
    },
    {
      name: "Smart Watch Pro",
      price: 449,
      rating: 4.9,
      reviews: 892,
      image: productWatch,
      badge: "New",
    },
    {
      name: "Wireless Mechanical Keyboard",
      price: 179,
      originalPrice: 219,
      rating: 4.7,
      reviews: 654,
      image: productKeyboard,
    },
    {
      name: "Ergonomic Wireless Mouse",
      price: 89,
      rating: 4.6,
      reviews: 1105,
      image: productMouse,
    },
    {
      name: "Portable Bluetooth Speaker",
      price: 129,
      originalPrice: 169,
      rating: 4.8,
      reviews: 734,
      image: productSpeaker,
      badge: "Sale",
    },
    {
      name: "Premium Laptop Bag",
      price: 149,
      rating: 4.7,
      reviews: 421,
      image: productBag,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our hand-picked selection of premium tech products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Quality Guaranteed</h3>
                <p className="text-muted-foreground">Premium products with manufacturer warranty</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Best Prices</h3>
                <p className="text-muted-foreground">Competitive pricing on all products</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Fast Delivery</h3>
                <p className="text-muted-foreground">Free shipping on orders over $100</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t py-12 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">T</span>
                  </div>
                  <span className="font-bold text-xl">TechStore</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your trusted destination for premium technology products.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">All Products</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Sale</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 TechStore. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
