import React, { useEffect } from 'react';
import { ShoppingBag, Search, Menu, ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import './index.css';

function App() {
  // Simple scroll animation hook
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="glass-panel" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1200px', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ margin: 0, fontSize: '24px', letterSpacing: '1px' }} className="text-gradient">RNT FOOTWEAR</h1>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
          <a href="#" style={{ fontWeight: 500, transition: 'var(--transition)' }}>Home</a>
          <a href="#about" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>About Us</a>
          <a href="#products" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Products</a>
          <a href="#contact" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Contact</a>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Search size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
          <ShoppingBag size={20} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
          <Menu size={24} style={{ cursor: 'pointer', display: 'none' }} className="mobile-menu-icon" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div className="hero-content animate-fade-in">
            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', borderRadius: '20px', fontWeight: 600, marginBottom: '20px', border: '1px solid var(--accent-glow)' }}>
              New Collection 2026
            </div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
              Step Into <br/><span className="text-gradient">The Future</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '450px' }}>
              Premium Manufacturer of Children's School Shoes, Sports Shoes, and Casual Footwear. Experience comfort designed for tomorrow.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Explore Collection <ArrowRight size={18} />
              </button>
              <button className="btn-outline">Watch Video</button>
            </div>
            
            <div style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
              <div>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>20+</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years Experience</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>50k+</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', zIndex: -1 }}></div>
            {/* Find the generated filename from output */}
            <img src="/hero_shoe_animated_1788886549404.jpg" alt="Future Shoe" className="animate-float" style={{ width: '120%', marginLeft: '-10%', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))', borderRadius: '20px', mixBlendMode: 'screen' }} />
          </div>
        </div>
      </section>

      {/* Features / About */}
      <section id="about" className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container fade-up-element" style={{ opacity: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Why <span className="text-gradient">Choose Us?</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Established in 2004, Anjaniputra Paduka delivers market-leading quality with exceptional durability for daily wear.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '40px 30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <ShieldCheck size={48} color="var(--accent-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Quality Assurance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Strict quality control ensures every pair meets our high standards before leaving the factory.</p>
            </div>
            <div className="glass-panel" style={{ padding: '40px 30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <Truck size={48} color="var(--accent-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Fast Delivery</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Efficient logistics network to ensure your orders reach you right on time, everywhere.</p>
            </div>
            <div className="glass-panel" style={{ padding: '40px 30px', textAlign: 'center', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => e.currentTarget.style.transform='translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <Clock size={48} color="var(--accent-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>24/7 Support</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Our dedicated team is always ready to assist you with your queries and orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="section container fade-up-element" style={{ opacity: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Featured <span className="text-gradient">Products</span></h2>
            <p style={{ color: 'var(--text-secondary)' }}>Discover our most popular styles</p>
          </div>
          <button className="btn-outline">View All</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { name: "RNT Diva 100", img: "/product_diva_1788886566197.jpg", category: "Women's Sports" },
            { name: "Premium Derby", img: "/product_school_1788886581361.jpg", category: "School Shoes" },
            { name: "Urban Explorer", img: "/product_casual_1788886597764.jpg", category: "Men's Casual" },
          ].map((product, idx) => (
            <div key={idx} className="glass-panel" style={{ overflow: 'hidden', padding: '15px', position: 'relative', group: 'product' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '300px', marginBottom: '20px', position: 'relative' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseEnter={e => e.currentTarget.style.transform='scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform='scale(1)'} />
              </div>
              <div style={{ padding: '0 10px 10px' }}>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px', textTransform: 'uppercase' }}>{product.category}</p>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{product.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>₹1,500</span>
                  <button style={{ background: 'var(--bg-surface)', padding: '8px 15px', borderRadius: '20px', color: 'white', fontWeight: 600, transition: 'var(--transition)' }} onMouseEnter={e => {e.currentTarget.style.background='var(--gradient-primary)'}} onMouseLeave={e => e.currentTarget.style.background='var(--bg-surface)'}>Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-surface)', padding: '60px 0 30px', marginTop: '60px', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>RNT FOOTWEAR</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>RAJ Footwear in Nangloi, Delhi is one of the best Manufacturer, Supplier and Wholesaler of Shoes.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Products</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>School Shoes</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>Kids Sports Shoes</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>Women's Sports Shoes</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>Men's Eva Sports</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>About Us</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>Quality Assurance</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='var(--text-secondary)'}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Newsletter</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px' }}>Subscribe for latest offers.</p>
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', borderRadius: '30px', padding: '5px', border: '1px solid var(--border-color)' }}>
              <input type="email" placeholder="Your email" style={{ background: 'transparent', border: 'none', color: 'white', padding: '8px 15px', outline: 'none', width: '100%' }} />
              <button className="btn-primary" style={{ padding: '8px 20px', borderRadius: '25px' }}>Send</button>
            </div>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
          &copy; 2026 RAJ Footwear. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
