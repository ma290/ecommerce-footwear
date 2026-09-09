import { useEffect } from 'react';
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
            <span className="nav-brand">RNT FOOTWEAR</span>
          </div>
          <div className="global-nav-links">
            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-icons">
            <button className="nav-icon-btn" aria-label="Search products">
              <Search size={16} />
            </button>
            <button className="nav-icon-btn" aria-label="Shopping bag">
              <ShoppingBag size={16} />
            </button>
            <button className="nav-icon-btn mobile-menu-icon" aria-label="Open navigation menu" style={{ display: 'none' }}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Navigation (Sticky) */}
      <div className="sub-nav-frosted">
        <div className="sub-nav-content">
          <div className="tagline">Store</div>
          <button className="button-primary-sm">Buy</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="product-tile-dark fade-up-element">
        <h1 className="hero-display fade-up-element" style={{ transitionDelay: '0.1s' }}>Step Into The Future.</h1>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.2s' }}>Premium Footwear for Tomorrow.</p>
        <div className="cta-group fade-up-element" style={{ transitionDelay: '0.3s' }}>
          <button className="button-primary">Learn more</button>
          <button className="text-link-on-dark-btn">Buy &gt;</button>
        </div>
        <div className="img-hero-container fade-up-element" style={{ transitionDelay: '0.4s' }}>
          <img src="/hero_shoe_animated_1788886549404.jpg" alt="RNT Footwear premium shoe — step into the future" className="product-shadow" loading="eager" />
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="product-tile-parchment section-pb fade-up-element">
        <h2 className="display-lg fade-up-element">Why Choose Us.</h2>
        <p className="lead max-w-prose fade-up-element" style={{ transitionDelay: '0.1s' }}>Market-leading quality since 2004.</p>
        
        <div className="store-grid section-mt">
          <div className="store-utility-card text-center items-center fade-up-element" style={{ transitionDelay: '0.2s' }}>
            <h3 className="body-strong feature-card-title">Quality Assurance</h3>
            <p className="body text-muted">Strict control ensures every pair meets high standards.</p>
          </div>
          <div className="store-utility-card text-center items-center fade-up-element" style={{ transitionDelay: '0.3s' }}>
            <h3 className="body-strong feature-card-title">Fast Delivery</h3>
            <p className="body text-muted">Efficient logistics network everywhere.</p>
          </div>
          <div className="store-utility-card text-center items-center fade-up-element" style={{ transitionDelay: '0.4s' }}>
            <h3 className="body-strong feature-card-title">24/7 Support</h3>
            <p className="body text-muted">Our dedicated team is ready to assist.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="product-tile-light section-pb fade-up-element">
        <h2 className="display-lg fade-up-element">Featured Products.</h2>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.1s' }}>Discover our most popular styles.</p>
        
        <div className="store-grid section-mt">
          {[
            { name: "RNT Diva 100", img: "/product_diva_1788886566197.jpg", category: "Women's Sports", price: "₹1,500" },
            { name: "Premium Derby", img: "/product_school_1788886581361.jpg", category: "School Shoes", price: "₹1,200" },
            { name: "Urban Explorer", img: "/product_casual_1788886597764.jpg", category: "Men's Casual", price: "₹1,800" },
            { name: "Active Kids Pro", img: "/product_kids_sports.jpg", category: "Kids Sports", price: "₹999" },
            { name: "Aero Max EVA", img: "/product_mens_eva.jpg", category: "Men's Sports", price: "₹1,600" },
            { name: "Cloud Runner", img: "/product_womens_running.jpg", category: "Running Shoes", price: "₹1,450" },
          ].map((product, idx) => (
            <div key={idx} className="store-utility-card fade-up-element" style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}>
              <img src={product.img} alt={product.name} loading="lazy" />
              <p className="caption text-muted-48 text-uppercase">{product.category}</p>
              <h3 className="body-strong mb-xs">{product.name}</h3>
              <div className="product-card-footer">
                <span className="body">{product.price}</span>
                <button className="button-primary-sm">Buy</button>
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
