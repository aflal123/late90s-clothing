'use client'
import './globals.css'
import { useState } from 'react'
import {
  Shirt, Truck, Banknote, Star, Package, Sparkles,
  Camera, Music2, Share2, MessageCircle, ChevronRight,
  MapPin, Phone, Mail, Clock, ShoppingBag, Eye, Tag,
  Scissors, Palette, Zap, Globe, Heart
} from 'lucide-react'

const PRODUCTS = [
  { id: 1, name: 'Grunge Oversized Tee', category: 'Oversized Fit', price: 'LKR 2,490', badge: 'HOT', icon: Shirt },
  { id: 2, name: 'Vintage Wash Hoodie', category: 'Streetwear', price: 'LKR 3,990', badge: 'NEW', icon: Package },
  { id: 3, name: '90s Logo Cargo Pants', category: 'Bottoms', price: 'LKR 4,290', badge: null, icon: Tag },
  { id: 4, name: 'Distressed Graphic Tee', category: 'Graphic Tee', price: 'LKR 1,990', badge: 'SALE', icon: Shirt },
  { id: 5, name: 'Skate Culture Jacket', category: 'Outerwear', price: 'LKR 5,490', badge: 'NEW', icon: Package },
  { id: 6, name: 'Washed Baggy Shorts', category: 'Bottoms', price: 'LKR 2,190', badge: null, icon: ShoppingBag },
]

const SERVICES = [
  { icon: Scissors, title: 'Premium Fabric', desc: 'Heavyweight 240GSM cotton. Built to last, feels legendary.' },
  { icon: Palette, title: '90s Designs', desc: 'Authentic vintage-inspired graphics you won\'t find anywhere else.' },
  { icon: Banknote, title: 'Affordable', desc: 'Street prices for street culture. No overcharging, ever.' },
  { icon: Truck, title: 'Island Delivery', desc: 'We ship to every corner of Sri Lanka. Fast and reliable.' },
  { icon: Zap, title: 'Cash on Delivery', desc: 'Pay when it arrives. No card needed, no stress.' },
]

const REVIEWS = [
  { stars: 5, text: '"Bro the quality is unreal for this price. Got the oversized hoodie and literally everyone at campus asked where I got it from."', name: 'Kavindu M.', loc: 'Colombo', initial: 'K' },
  { stars: 5, text: '"Finally a local brand that actually understands streetwear. The fit is perfect and the fabric is thick, not those thin garbage ones."', name: 'Tharushi P.', loc: 'Kandy', initial: 'T' },
  { stars: 5, text: '"Ordered on Friday, got it Monday. COD made it super easy. The graphic tee is insane, proper 90s energy."', name: 'Dineth S.', loc: 'Galle', initial: 'D' },
]

const GALLERY_ITEMS = [
  { icon: Shirt, label: 'Tees' },
  { icon: Package, label: 'Hoodies' },
  { icon: Sparkles, label: 'Lookbook' },
  { icon: Star, label: 'Archive' },
  { icon: Zap, label: 'Drops' },
  { icon: Tag, label: 'Pants' },
  { icon: Globe, label: 'Culture' },
  { icon: Heart, label: 'Vibes' },
]

const MARQUEE_ITEMS = ['Late 90s', '★', 'Streetwear', '★', 'Sri Lanka', '★', 'Premium Fits', '★', 'Est. 2024', '★', 'Islandwide', '★']

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
            <a href="#products" className="btn-primary">Shop Now <ChevronRight size={16} style={{display:'inline',verticalAlign:'middle'}} /></a>
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
          <a href="#" className="view-all">View All Collection <ChevronRight size={14} style={{display:'inline',verticalAlign:'middle'}} /></a>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.id} className="product-card">
                <div className="product-image">
                  <Icon size={80} className="product-icon" strokeWidth={0.6} />
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                  <div className="product-overlay">
                    <button className="add-cart-btn">
                      <ShoppingBag size={14} style={{display:'inline',verticalAlign:'middle',marginRight:'6px'}} />
                      Add to Cart
                    </button>
                    <a href="#" className="quick-view">
                      <Eye size={12} style={{display:'inline',verticalAlign:'middle',marginRight:'4px'}} />
                      Quick View
                    </a>
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
            )
          })}
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
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="service-card">
                <span className="service-num">0{i + 1}</span>
                <Icon size={28} className="service-icon" strokeWidth={1.2} color="var(--accent)" />
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="section-tag">Social Proof</div>
        <h2 className="section-title">The Streets<br />Are Talking</h2>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {[...Array(r.stars)].map((_, s) => (
                  <Star key={s} size={13} fill="var(--accent)" color="var(--accent)" style={{display:'inline',marginRight:'2px'}} />
                ))}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-loc">
                    <MapPin size={10} style={{display:'inline',verticalAlign:'middle',marginRight:'3px'}} />
                    {r.loc}, Sri Lanka
                  </div>
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
          {GALLERY_ITEMS.map((g, i) => {
            const Icon = g.icon
            return (
              <div key={i} className="gallery-cell">
                <Icon size={60} className="gcell-inner" strokeWidth={0.5} color="rgba(201,185,154,0.07)" />
                <div className="gcell-overlay">
                  <Heart size={22} color="var(--accent)" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* SOCIAL */}
      <section className="social-section">
        <div className="section-tag">Connect</div>
        <h2 className="section-title">Follow the Drops</h2>
        <p className="social-cta-text">Follow us for latest drops, restocks & exclusive offers</p>
        <div className="social-icons">
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <Camera size={26} color="var(--white)" strokeWidth={1.5} />
            <span className="social-icon-label">Instagram</span>
          </a>
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <Music2 size={26} color="var(--white)" strokeWidth={1.5} />
            <span className="social-icon-label">TikTok</span>
          </a>
          <a href="#" className="social-icon-card" target="_blank" rel="noopener noreferrer">
            <Share2 size={26} color="var(--white)" strokeWidth={1.5} />
            <span className="social-icon-label">Facebook</span>
          </a>
        </div>
      </section>

      {/* CTA */}
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
              YOU ARE IN. WE WILL HIT YOU UP SOON.
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
          <MessageCircle size={16} strokeWidth={2} />
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
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer">
                <Camera size={15} strokeWidth={1.5} color="var(--gray)" />
              </a>
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer">
                <Music2 size={15} strokeWidth={1.5} color="var(--gray)" />
              </a>
              <a href="#" className="footer-soc" target="_blank" rel="noopener noreferrer">
                <Share2 size={15} strokeWidth={1.5} color="var(--gray)" />
              </a>
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
              <p><MapPin size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'5px'}} />Colombo, Sri Lanka</p>
              <p style={{marginTop:'0.5rem'}}><Phone size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'5px'}} />+94 XX XXX XXXX</p>
              <p style={{marginTop:'0.5rem'}}><Mail size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'5px'}} />hello@late90s.online</p>
              <p style={{marginTop:'0.5rem'}}><Clock size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'5px'}} />Mon–Sat, 9AM–8PM</p>
            </div>
            <a href="https://wa.me/94XXXXXXXXX" className="footer-wa" style={{marginTop:'1.5rem', display:'inline-flex'}}>
              <MessageCircle size={14} strokeWidth={2} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2024 Late 90s. All rights reserved.</span>
          <span className="footer-copy" style={{textAlign:'center'}}>
            Designed & Developed by{' '}
            <a
              href="https://www.evliqlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:'var(--accent)', textDecoration:'none', fontWeight:'700', letterSpacing:'0.05em'}}
            >
              EVLIQLABS
            </a>
            {' '}· All design patterns & UI copyright{' '}
            <a
              href="https://www.evliqlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:'var(--accent)', textDecoration:'none'}}
            >
              www.evliqlabs.com
            </a>
          </span>
          <div style={{display:'flex', gap:'1.5rem'}}>
            <a href="#" style={{fontFamily:'var(--font-body)', fontSize:'0.6rem', color:'rgba(138,130,121,0.4)', textDecoration:'none'}}>Privacy</a>
            <a href="#" style={{fontFamily:'var(--font-body)', fontSize:'0.6rem', color:'rgba(138,130,121,0.4)', textDecoration:'none'}}>Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}
