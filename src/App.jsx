import React, { useEffect } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Global Navigation */}
      <nav className="global-nav">
        <div className="global-nav-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1 style={{ margin: 0, fontSize: '18px', letterSpacing: '0px', color: 'var(--c-on-dark)', fontWeight: 600 }}>RNT FOOTWEAR</h1>
          </div>
          <div className="global-nav-links">
            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Search size={16} style={{ cursor: 'pointer', color: 'var(--c-body-muted)' }} />
            <ShoppingBag size={16} style={{ cursor: 'pointer', color: 'var(--c-body-muted)' }} />
            <Menu size={20} style={{ cursor: 'pointer', display: 'none' }} className="mobile-menu-icon" />
          </div>
        </div>
      </nav>

      {/* Sub Navigation (Sticky) */}
      <div className="sub-nav-frosted">
        <div className="sub-nav-content">
          <div className="tagline">Store</div>
          <button className="button-primary" style={{ padding: '6px 14px', fontSize: '14px' }}>Buy</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="product-tile-dark fade-up-element">
        <h1 className="hero-display fade-up-element" style={{ transitionDelay: '0.1s' }}>Step Into The Future.</h1>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.2s' }}>Premium Footwear for Tomorrow.</p>
        <div className="cta-group fade-up-element" style={{ transitionDelay: '0.3s' }}>
          <button className="button-primary">Learn more</button>
          <button className="text-link-on-dark" style={{ alignSelf: 'center', background: 'transparent', border: 'none', marginLeft: '10px' }}>Buy &gt;</button>
        </div>
        <div className="img-hero-container fade-up-element" style={{ transitionDelay: '0.4s' }}>
          <img src="/hero_shoe_animated_1788886549404.jpg" alt="Future Shoe" className="product-shadow" />
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="product-tile-parchment fade-up-element" style={{ paddingBottom: '80px' }}>
        <h2 className="display-lg fade-up-element">Why Choose Us.</h2>
        <p className="lead fade-up-element" style={{ maxWidth: '600px', margin: '0 auto', transitionDelay: '0.1s' }}>Market-leading quality since 2004.</p>
        
        <div className="store-grid" style={{ marginTop: '60px' }}>
          <div className="store-utility-card fade-up-element" style={{ textAlign: 'center', alignItems: 'center', transitionDelay: '0.2s' }}>
            <h3 className="body-strong" style={{ fontSize: '24px', marginBottom: '8px' }}>Quality Assurance</h3>
            <p className="body" style={{ color: 'var(--c-ink-muted-80)' }}>Strict control ensures every pair meets high standards.</p>
          </div>
          <div className="store-utility-card fade-up-element" style={{ textAlign: 'center', alignItems: 'center', transitionDelay: '0.3s' }}>
            <h3 className="body-strong" style={{ fontSize: '24px', marginBottom: '8px' }}>Fast Delivery</h3>
            <p className="body" style={{ color: 'var(--c-ink-muted-80)' }}>Efficient logistics network everywhere.</p>
          </div>
          <div className="store-utility-card fade-up-element" style={{ textAlign: 'center', alignItems: 'center', transitionDelay: '0.4s' }}>
            <h3 className="body-strong" style={{ fontSize: '24px', marginBottom: '8px' }}>24/7 Support</h3>
            <p className="body" style={{ color: 'var(--c-ink-muted-80)' }}>Our dedicated team is ready to assist.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="product-tile-light fade-up-element" style={{ paddingBottom: '80px' }}>
        <h2 className="display-lg fade-up-element">Featured Products.</h2>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.1s' }}>Discover our most popular styles.</p>
        
        <div className="store-grid" style={{ marginTop: '60px' }}>
          {[
            { name: "RNT Diva 100", img: "/product_diva_1788886566197.jpg", category: "Women's Sports" },
            { name: "Premium Derby", img: "/product_school_1788886581361.jpg", category: "School Shoes" },
            { name: "Urban Explorer", img: "/product_casual_1788886597764.jpg", category: "Men's Casual" },
            { name: "Active Kids Pro", img: "/product_kids_sports.jpg", category: "Kids Sports" },
            { name: "Aero Max EVA", img: "/product_mens_eva.jpg", category: "Men's Sports" },
            { name: "Cloud Runner", img: "/product_womens_running.jpg", category: "Running Shoes" },
          ].map((product, idx) => (
            <div key={idx} className="store-utility-card fade-up-element" style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}>
              <img src={product.img} alt={product.name} />
              <p className="caption" style={{ color: 'var(--c-ink-muted-48)', textTransform: 'uppercase' }}>{product.category}</p>
              <h3 className="body-strong" style={{ marginBottom: '8px' }}>{product.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span className="body">₹1,500</span>
                <button className="button-primary" style={{ padding: '6px 16px', fontSize: '14px' }}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="caption-strong">Products</h3>
              <ul className="dense-link">
                <li><a href="#">School Shoes</a></li>
                <li><a href="#">Kids Sports Shoes</a></li>
                <li><a href="#">Women's Sports Shoes</a></li>
                <li><a href="#">Men's Eva Sports</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="caption-strong">Company</h3>
              <ul className="dense-link">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Quality Assurance</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="caption-strong">Newsletter</h3>
              <ul className="dense-link">
                <li><a href="#">Subscribe</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="caption-strong">RNT FOOTWEAR</h3>
              <p className="caption">RAJ Footwear in Nangloi, Delhi is one of the best Manufacturer, Supplier and Wholesaler of Shoes.</p>
            </div>
          </div>
          <div className="footer-legal">
            <p>Copyright © 2026 RAJ Footwear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
