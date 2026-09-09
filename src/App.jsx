import { useEffect, useState, useCallback } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowUp, ChevronRight, Minus, Plus, Trash2 } from 'lucide-react';
import './index.css';

// T2-2: Product Data Model
const PRODUCTS = [
  { id: 'p1', name: "RNT Diva 100",    img: "/product_diva_1788886566197.jpg",   category: "Women's Sports", price: 1500, description: "Lightweight and flexible running shoes designed for ultimate comfort and energy return." },
  { id: 'p2', name: "Premium Derby",   img: "/product_school_1788886581361.jpg",  category: "School Shoes",   price: 1200, description: "Classic derby style school shoes with durable outsoles and comfortable footbeds." },
  { id: 'p3', name: "Urban Explorer",  img: "/product_casual_1788886597764.jpg",  category: "Men's Casual",   price: 1800, description: "Versatile casual sneakers perfect for everyday city exploration and comfort." },
  { id: 'p4', name: "Active Kids Pro", img: "/product_kids_sports.jpg",           category: "Kids Sports",    price: 999,  description: "Durable and breathable sports shoes for active kids, featuring velcro straps." },
  { id: 'p5', name: "Aero Max EVA",    img: "/product_mens_eva.jpg",              category: "Men's Sports",   price: 1600, description: "High-performance EVA sports shoes offering maximum cushioning and support." },
  { id: 'p6', name: "Cloud Runner",    img: "/product_womens_running.jpg",        category: "Running Shoes",  price: 1450, description: "Premium running shoes with cloud-like cushioning for long-distance runs." },
];

const HERO_IMAGES = [
  "/hero_shoe_animated_1788886549404.jpg",
  "/product_diva_1788886566197.jpg",
  "/product_mens_eva.jpg"
];

// Helper to format currency
const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

// T2-5: Skeleton Loading Image Component
const LoadedImage = ({ src, alt, className, style, loading }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`img-wrapper ${!loaded ? 'skeleton-shimmer' : ''}`} style={style}>
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${loaded ? 'img-loaded' : 'img-loading'}`}
        loading={loading}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // T2-4: Cart State
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  // T2-3: Product Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // T3-2: Hero Gallery State
  const [heroIndex, setHeroIndex] = useState(0);
  
  // T3-3: Back to top state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Close overlays on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setCartOpen(false);
        setSelectedProduct(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when any drawer/modal is open
  useEffect(() => {
    if (menuOpen || cartOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen, cartOpen, selectedProduct]);

  // Scroll observer for animations and Back-To-Top
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hero auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const closeModal = useCallback(() => setSelectedProduct(null), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart logic
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
    setSelectedProduct(null); // close modal if open
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">

      {/* ── Sticky Header: global-nav + sub-nav stacked ── */}
      <header className="sticky-header">
        {/* Global Navigation */}
        <nav className="global-nav" aria-label="Main navigation">
          <div className="global-nav-content">
            <span className="nav-brand">RNT FOOTWEAR</span>

            <div className="global-nav-links" role="list">
              <a href="#" role="listitem">Home</a>
              <a href="#about" role="listitem">About Us</a>
              <a href="#products" role="listitem">Products</a>
              <a href="#contact" role="listitem">Contact</a>
            </div>

            <div className="nav-icons">
              <button className="nav-icon-btn" aria-label="Search products">
                <Search size={16} />
              </button>
              <button className="nav-icon-btn cart-btn" aria-label="Shopping bag" onClick={() => setCartOpen(true)}>
                <ShoppingBag size={16} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
              {/* Hamburger */}
              <button
                className="nav-icon-btn mobile-menu-icon"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Sub Navigation */}
        <div className="sub-nav-frosted">
          <div className="sub-nav-content">
            <div className="tagline">Store</div>
            <button className="button-primary-sm" onClick={() => document.getElementById('products').scrollIntoView()}>Buy</button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={`drawer-overlay${menuOpen ? ' drawer-overlay--open' : ''}`} onClick={closeMenu} />
      <nav className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-drawer-header">
          <span className="nav-brand drawer-title-color">Menu</span>
          <button className="icon-btn" onClick={closeMenu}><X size={20} /></button>
        </div>
        <ul className="mobile-drawer-links" role="list">
          <li><a href="#" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="mobile-drawer-footer">
          <button className="button-primary" style={{ width: '100%' }} onClick={() => { closeMenu(); document.getElementById('products').scrollIntoView(); }}>Shop Now</button>
        </div>
      </nav>

      {/* ── Cart Drawer ── */}
      <div className={`drawer-overlay${cartOpen ? ' drawer-overlay--open' : ''}`} onClick={closeCart} />
      <div className={`cart-drawer${cartOpen ? ' cart-drawer--open' : ''}`} aria-hidden={!cartOpen}>
        <div className="mobile-drawer-header">
          <span className="nav-brand drawer-title-color">Your Bag</span>
          <button className="icon-btn" onClick={closeCart}><X size={20} /></button>
        </div>
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty text-center">
              <ShoppingBag size={48} className="text-muted mb-xs" style={{ margin: '0 auto', opacity: 0.5 }} />
              <p className="body text-muted">Your bag is empty.</p>
              <button className="button-primary-sm section-mt" onClick={closeCart}>Continue Shopping</button>
            </div>
          ) : (
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <h4 className="body-strong">{item.name}</h4>
                      <button className="icon-btn-small" onClick={() => removeFromCart(item.id)}><Trash2 size={16} /></button>
                    </div>
                    <p className="caption text-muted">{item.category}</p>
                    <div className="cart-item-footer">
                      <span className="body-strong">{formatPrice(item.price)}</span>
                      <div className="quantity-controls">
                        <button className="icon-btn-small" onClick={() => updateQuantity(item.id, -1)}><Minus size={14}/></button>
                        <span>{item.quantity}</span>
                        <button className="icon-btn-small" onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="body-strong">Total</span>
              <span className="display-md">{formatPrice(cartTotal)}</span>
            </div>
            <button className="button-primary" style={{ width: '100%' }}>Checkout</button>
          </div>
        )}
      </div>

      {/* ── Product Detail Modal ── */}
      <div className={`modal-overlay${selectedProduct ? ' modal-overlay--open' : ''}`} onClick={closeModal} />
      <div className={`product-modal${selectedProduct ? ' product-modal--open' : ''}`} aria-hidden={!selectedProduct}>
        {selectedProduct && (
          <div className="product-modal-content">
            <button className="modal-close-btn" onClick={closeModal}><X size={24} /></button>
            <div className="product-modal-grid">
              <div className="product-modal-img">
                <LoadedImage src={selectedProduct.img} alt={selectedProduct.name} />
              </div>
              <div className="product-modal-info">
                <p className="caption text-muted-48 text-uppercase">{selectedProduct.category}</p>
                <h2 className="display-lg mb-xs">{selectedProduct.name}</h2>
                <p className="display-md text-primary section-pb">{formatPrice(selectedProduct.price)}</p>
                <p className="body text-muted section-pb">{selectedProduct.description}</p>
                
                <div className="size-selector section-pb">
                  <h4 className="body-strong mb-xs">Select Size (UK)</h4>
                  <div className="size-grid">
                    {[6, 7, 8, 9, 10, 11].map(size => (
                      <button key={size} className="size-btn">{size}</button>
                    ))}
                  </div>
                </div>

                <button className="button-primary button-large w-full" onClick={() => addToCart(selectedProduct)}>
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="product-tile-dark fade-up-element section-transition">
        <h1 className="hero-display fade-up-element" style={{ transitionDelay: '0.1s' }}>Step Into The Future.</h1>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.2s' }}>Premium Footwear for Tomorrow.</p>
        <div className="cta-group fade-up-element" style={{ transitionDelay: '0.3s' }}>
          <button className="button-primary" onClick={() => document.getElementById('products').scrollIntoView()}>Learn more</button>
          <button className="text-link-on-dark-btn" onClick={() => document.getElementById('products').scrollIntoView()}>Buy &gt;</button>
        </div>
        <div className="img-hero-container fade-up-element" style={{ transitionDelay: '0.4s' }}>
          <div className="hero-gallery">
            {HERO_IMAGES.map((src, i) => (
              <img 
                key={src} 
                src={src} 
                alt="RNT Footwear premium shoe" 
                className={`product-shadow hero-gallery-img ${i === heroIndex ? 'active' : ''}`} 
                loading={i === 0 ? "eager" : "lazy"} 
              />
            ))}
          </div>
          <div className="hero-gallery-controls">
            <button className="gallery-dot" onClick={() => setHeroIndex(0)} aria-current={heroIndex === 0} />
            <button className="gallery-dot" onClick={() => setHeroIndex(1)} aria-current={heroIndex === 1} />
            <button className="gallery-dot" onClick={() => setHeroIndex(2)} aria-current={heroIndex === 2} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="product-tile-parchment section-pb fade-up-element section-transition">
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
      <section id="products" className="product-tile-light section-pb fade-up-element section-transition">
        <h2 className="display-lg fade-up-element">Featured Products.</h2>
        <p className="lead fade-up-element" style={{ transitionDelay: '0.1s' }}>Discover our most popular styles.</p>

        <div className="store-grid section-mt">
          {PRODUCTS.map((product, idx) => (
            <div 
              key={product.id} 
              className="store-utility-card fade-up-element interactive-card" 
              style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}
              onClick={() => setSelectedProduct(product)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProduct(product)}
            >
              <LoadedImage src={product.img} alt={product.name} loading="lazy" className="card-img" />
              <p className="caption text-muted-48 text-uppercase">{product.category}</p>
              <h3 className="body-strong mb-xs">{product.name}</h3>
              <div className="product-card-footer">
                <span className="body">{formatPrice(product.price)}</span>
                <button className="button-primary-sm" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-transition" id="contact">
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
              <p className="caption text-muted mb-xs">Subscribe for updates.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" aria-label="Email address" required />
                <button type="submit" aria-label="Subscribe"><ChevronRight size={16} /></button>
              </form>
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

      {/* Back to top button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
}

export default App;
