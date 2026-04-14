'use client'
import './globals.css'
import { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Grunge Oversized Tee', category: 'Oversized Fit', price: 'LKR 2,490', badge: 'HOT', icon: '👕' },
  { id: 2, name: 'Vintage Wash Hoodie', category: 'Streetwear', price: 'LKR 3,990', badge: 'NEW', icon: '🧥' },
  { id: 3, name: '90s Logo Cargo Pants', category: 'Bottoms', price: 'LKR 4,290', badge: null, icon: '👖' },
  { id: 4, name: 'Distressed Graphic Tee', category: 'Graphic Tee', price: 'LKR 1,990', badge: 'SALE', icon: '👕' },
  { id: 5, name: 'Skate Culture Jacket', category: 'Outerwear', price: 'LKR 5,490', badge: 'NEW', icon: '🧥' },
  { id: 6, name: 'Washed Baggy Shorts', category: 'Bottoms', price: 'LKR 2,190', badge: null, icon: '🩳' },
]

const SERVICES = [
  { icon: '🧵', title: 'Premium Fabric', desc: 'Heavyweight 240GSM cotton. Built to last, feels legendary.' },
  { icon: '✦', title: '90s Designs', desc: 'Authentic vintage-inspired graphics you won\'t find anywhere else.' },
  { icon: '💰', title: 'Affordable', desc: 'Street prices for street culture. No overcharging, ever.' },
  { icon: '🚚', title: 'Island Delivery', desc: 'We ship to every corner of Sri Lanka. Fast and reliable.' },
  { icon: '💵', title: 'Cash on Delivery', desc: 'Pay when it arrives. No card needed, no stress.' },
]

const REVIEWS = [
  { stars: 5, text: '"Bro the quality is unreal for this price. Got the oversized hoodie and literally everyone at campus asked where I got it from."', name: 'Kavindu M.', loc: 'Colombo', initial: 'K' },
  { stars: 5, text: '"Finally a local brand that actually understands streetwear. The fit is perfect and the fabric is thick, not those thin garbage ones."', name: 'Tharushi P.', loc: 'Kandy', initial: 'T' },
  { stars: 5, text: '"Ordered on Friday, got it Monday. COD made it super easy. The graphic tee is insane, proper 90s energy 🔥"', name: 'Dineth S.', loc: 'Galle', initial: 'D' },
]

const GALLERY_ITEMS = [
  { emoji: '👕', label: 'Tees' },
  { emoji: '🧥', label: 'Hoodies' },
  { emoji: '📸', label: 'Lookbook' },
  { emoji: '✦', label: 'Archive' },
  { emoji: '🔥', label: 'Drops' },
  { emoji: '👖', label: 'Pants' },
  { emoji: '🎭', label: 'Culture' },
  { emoji: '🌊', label: 'Vibes' },
]

const MARQUEE_ITEMS = ['Late 90s', '★', 'Streetwear', '★', 'Sri Lanka', '★', 'Premium Fits', '★', 'Est. 2024', '★', 'Islandwide', '★']

const IgIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.97a8.17 8.17 0 004.78 1.52V7.04a4.85 4.85 0 01-1.01-.35z"/>
  </svg>
)

const FbIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const WaIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width:'14px',height:'14px',fill:'currentColor'}}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  const marqueeContent = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">LATE <span>90s</span></a>
        <ul className="nav-links">
          <li><a href="#products">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#products" className="nav-cta">Shop Now</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-watermark">90s</div>
        <div className="hero-content">
          <div className="hero-eyebrow">Sri Lanka Streetwear</div>
          <h1 className="hero-headline">
            Bring Back<br />
            the <span className="outline">Late</span><br />
            90s Vibe
          </h1>
          <p className="hero-sub">
            Premium streetwear designed for today, inspired by the past. 
            Locally made, globally styled.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">Shop Now →</a>
            <a href="#about" className="btn-ghost">Our Story</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-label">Drops Shipped</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div>
              <div className="stat-num">25+</div>
              <div className="stat-label">Unique Designs</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {marqueeContent.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-header">
          <div>
            <div className="section-tag">Trending Now</div>
            <h2 className="section-title">Featured<br />Drops</h2>
          </div>
          <a href="#" className="view-all">View All Collection →</a>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-image">
                <span className="product-icon">{p.icon}</span>
                {p.badge && <span className="product-badge">{p.badge}</span>}
                <div className="product-overlay">
                  <button className="add-cart-btn">Add to Cart</button>
                  <a href="#" className="quick-view">Quick View</a>
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-meta">
                  <span className="product-price">{p.price}</span>
                  <span className="product-category">{p.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-corner" />
            <div className="about-corner br" />
            <span className="about-visual-glyph">L9</span>
            <div className="about-chip">Est. 2024 · Colombo, LK</div>
          </div>
          <div className="about-text">
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">Built in Sri Lanka.<br />Worn Worldwide.</h2>
            <p className="about-body">
              Late 90s was born from a simple obsession — the golden era of streetwear, when baggy fits,
              bold graphics, and raw authenticity ruled the culture. We brought that energy to Sri Lanka,
              crafting pieces that honor the past while living in the now.
              <br /><br />
              Every drop is designed to make you stand out. Heavy fabrics, unique cuts, and 
              graphics you won't find anywhere else on the island. This isn't just clothing — 
              it's a statement. A nod to an era that defined cool, reimagined for Gen Z.
            </p>
            <div className="about-tags">
              {['Authenticity', 'Local Pride', 'Heavy GSM', '90s DNA', 'Gen Z', 'Unisex Cuts', 'Limited Drops'].map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">Why Choose<br />Late 90s</h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-num">0{i + 1}</span>
              <span className="service-icon">{s.icon}</span>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="section-tag">Social Proof</div>
        <h2 className="section-title">The Streets<br />Are Talking</h2>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{'★'.repeat(r.stars)}</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-loc">📍 {r.loc}, Sri Lanka</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <div className="gallery">
        <div className="gallery-header">
          <div className="section-tag">@late90s.lk</div>
          <h2 className="section-title">The Feed</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((g, i) => (
            <div key={i} className="gallery-cell">
              <span className="gcell-inner">{g.emoji}</span>
              <div className="gcell-overlay">
                <span>♡</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL */}
      <section className="social-section">
        <div className="section-tag">Connect</div>
        <h2 className="section-title">Follow the Drops 🔥</h2>
        <p className="social-cta-text">Follow us for latest drops, restocks & exclusive offers</p>
        <div className="social-icons">
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <IgIcon />
            <span className="social-icon-label">Instagram</span>
          </a>
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <TikTokIcon />
            <span className="social-icon-label">TikTok</span>
          </a>
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <FbIcon />
            <span className="social-icon-label">Facebook</span>
          </a>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cta-section" id="contact">
        <p className="cta-eyebrow">// Next Drop Coming Soon</p>
        <h2 className="cta-title">Don't Miss<br />the Next<br />Drop</h2>
        <p className="cta-subtitle">
          Join the crew. Be first to know about new releases,<br />
          exclusive offers and limited edition drops.
        </p>
        <form className="cta-form" onSubmit={handleSubscribe}>
          {subscribed ? (
            <div style={{fontFamily:'var(--font-condensed)', color:'var(--accent)', fontSize:'0.9rem', letterSpacing:'0.15em', padding:'1rem'}}>
              ✦ YOU'RE IN. WE'LL HIT YOU UP SOON.
            </div>
          ) : (
            <>
              <input
                type="email"
                className="cta-input"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-submit">Notify Me</button>
            </>
          )}
        </form>
        <div className="cta-divider">or reach us on</div>
        <a href="https://wa.me/94XXXXXXXXX" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <WaIcon />
          WhatsApp Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">LATE <span>90s</span></div>
            <p className="footer-tagline">
              Premium streetwear designed for today,<br />
              inspired by the past. Based in Sri Lanka.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer"><IgIcon /></a>
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer"><FbIcon /></a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Shop</div>
            <ul className="footer-links">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Oversized Tees</a></li>
              <li><a href="#">Hoodies</a></li>
              <li><a href="#">Cargo Pants</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sizing Guide</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact">
              <p>📍 Colombo, Sri Lanka</p>
              <p style={{marginTop:'0.5rem'}}>📞 +94 XX XXX XXXX</p>
              <p style={{marginTop:'0.5rem'}}>✉️ hello@late90s.lk</p>
              <p style={{marginTop:'0.5rem'}}>⏰ Mon–Sat, 9AM–8PM</p>
            </div>
            <a href="https://wa.me/94XXXXXXXXX" className="footer-wa" style={{marginTop:'1.5rem', display:'inline-flex'}}>
              <WaIcon /> WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2024 Late 90s. All rights reserved. Made with ✦ in Sri Lanka.</span>
          <div style={{display:'flex', gap:'1.5rem'}}>
            <a href="#" style={{fontFamily:'var(--font-body)', fontSize:'0.6rem', color:'rgba(138,130,121,0.4)', textDecoration:'none'}}>Privacy</a>
            <a href="#" style={{fontFamily:'var(--font-body)', fontSize:'0.6rem', color:'rgba(138,130,121,0.4)', textDecoration:'none'}}>Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}
