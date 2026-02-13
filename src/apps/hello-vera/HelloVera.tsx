import { useState } from 'react'
import './HelloVera.css'

type Plan = 'weekly' | 'fortnightly' | 'monthly'

export function HelloVera() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('weekly')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  const plans = {
    weekly: { price: 12, label: 'Weekly', interval: 'week', badge: 'Most Popular', savings: '' },
    fortnightly: { price: 20, label: 'Fortnightly', interval: 'fortnight', badge: 'Best Value', savings: 'Save 17%' },
    monthly: { price: 35, label: 'Monthly', interval: 'month', badge: '', savings: 'Save 27%' },
  }

  const faqs = [
    {
      q: 'How fresh is the aloe vera?',
      a: 'Every leaf is harvested within 24 hours of delivery. We work with local Australian growers in Queensland and Northern NSW to ensure maximum freshness and potency.',
    },
    {
      q: 'Why does aloe vera expire so fast?',
      a: 'Fresh aloe vera gel oxidises quickly once the leaf is cut. Within 5-7 days, the active compounds (acemannan, vitamins, enzymes) break down significantly. That\'s why a regular supply of fresh leaves beats any bottled product.',
    },
    {
      q: 'Can I pause or cancel anytime?',
      a: 'Absolutely. No lock-in contracts, no cancellation fees. Pause for a holiday, skip a week, or cancel entirely — all from your dashboard in two clicks.',
    },
    {
      q: 'Where do you deliver?',
      a: 'We currently deliver to all metro areas in NSW, VIC, QLD, SA and WA. Regional delivery is rolling out — join the waitlist and we\'ll let you know when we reach your area.',
    },
    {
      q: 'Is this better than bottled aloe vera?',
      a: 'Night and day. Bottled aloe vera contains preservatives, stabilisers, and has lost most of its bioactive compounds during processing. Fresh aloe vera leaf has up to 200 active compounds working together at full potency.',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hv">
      {/* Navigation */}
      <nav className="hv-nav">
        <div className="hv-nav-inner">
          <div className="hv-logo">
            <span className="hv-logo-leaf">&#x1f33f;</span>
            hello vera
          </div>
          <div className="hv-nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#plans">Plans</a>
            <a href="#faq">FAQ</a>
            <button className="hv-btn hv-btn-nav" onClick={scrollToPlans}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hv-hero">
        <div className="hv-hero-bg-pattern" />
        <div className="hv-hero-content">
          <div className="hv-hero-badge">Fresh aloe vera, delivered to your door</div>
          <h1 className="hv-hero-title">
            Your skin deserves
            <br />
            <span className="hv-hero-highlight">better than a bottle.</span>
          </h1>
          <p className="hv-hero-subtitle">
            Australia's sun doesn't mess around. Neither should your after-sun care.
            Fresh aloe vera leaves delivered weekly — before they expire, so they
            actually work.
          </p>
          <div className="hv-hero-ctas">
            <button className="hv-btn hv-btn-primary hv-btn-lg" onClick={scrollToPlans}>
              Start your subscription
              <span className="hv-btn-arrow">&rarr;</span>
            </button>
            <a href="#how-it-works" className="hv-btn hv-btn-ghost hv-btn-lg">
              See how it works
            </a>
          </div>
          <div className="hv-hero-proof">
            <div className="hv-hero-avatars">
              <div className="hv-avatar" style={{ background: '#52B788' }}>T</div>
              <div className="hv-avatar" style={{ background: '#40916C' }}>S</div>
              <div className="hv-avatar" style={{ background: '#2D6A4F' }}>M</div>
              <div className="hv-avatar" style={{ background: '#1B4332' }}>K</div>
              <div className="hv-avatar" style={{ background: '#081C15' }}>R</div>
            </div>
            <p>Trusted by <strong>2,400+</strong> Australians who hate sunburn</p>
          </div>
        </div>
        <div className="hv-hero-visual">
          <div className="hv-hero-plant">
            <div className="hv-plant-glow" />
            <div className="hv-plant-icon">
              <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="60" cy="150" rx="35" ry="8" fill="#1B4332" opacity="0.15"/>
                <path d="M60 145 C60 100, 25 80, 15 30 C15 20, 25 10, 40 25 C50 35, 55 60, 60 90" fill="#52B788" stroke="#40916C" strokeWidth="1.5"/>
                <path d="M60 145 C60 100, 95 80, 105 30 C105 20, 95 10, 80 25 C70 35, 65 60, 60 90" fill="#52B788" stroke="#40916C" strokeWidth="1.5"/>
                <path d="M60 145 C60 95, 35 70, 30 15 C32 5, 42 0, 50 18 C55 30, 58 55, 60 85" fill="#40916C" stroke="#2D6A4F" strokeWidth="1.5"/>
                <path d="M60 145 C60 95, 85 70, 90 15 C88 5, 78 0, 70 18 C65 30, 62 55, 60 85" fill="#40916C" stroke="#2D6A4F" strokeWidth="1.5"/>
                <path d="M60 145 C58 110, 50 85, 48 35 C48 25, 54 15, 58 30 C60 40, 60 60, 60 80" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1"/>
                <path d="M60 145 C62 110, 70 85, 72 35 C72 25, 66 15, 62 30 C60 40, 60 60, 60 80" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1"/>
              </svg>
            </div>
            <div className="hv-plant-tag">
              <span className="hv-tag-dot" />
              Harvested today
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Stats */}
      <section className="hv-stats">
        <div className="hv-stats-inner">
          <div className="hv-stat">
            <div className="hv-stat-number">2 in 3</div>
            <div className="hv-stat-label">Australians will be diagnosed with skin cancer by age 70</div>
          </div>
          <div className="hv-stat-divider" />
          <div className="hv-stat">
            <div className="hv-stat-number">7 days</div>
            <div className="hv-stat-label">How long fresh aloe vera stays potent after harvest</div>
          </div>
          <div className="hv-stat-divider" />
          <div className="hv-stat">
            <div className="hv-stat-number">200+</div>
            <div className="hv-stat-label">Active compounds in fresh aloe vera vs. ~20 in bottled</div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="hv-problem">
        <div className="hv-problem-inner">
          <div className="hv-problem-text">
            <h2 className="hv-section-label">The problem</h2>
            <h3 className="hv-problem-title">
              That green bottle in your bathroom?
              <br />
              <span className="hv-text-muted">It's basically water.</span>
            </h3>
            <p className="hv-problem-body">
              Most "aloe vera" products contain less than 10% actual aloe. The rest?
              Thickeners, preservatives, fragrance, and artificial colour to make it
              look green. The real stuff is clear, thick, and comes straight from the
              leaf.
            </p>
            <p className="hv-problem-body">
              Fresh aloe vera loses its potency within a week. By the time a bottled
              product reaches your shelf, the good stuff is long gone.
              <strong> You deserve the real thing.</strong>
            </p>
          </div>
          <div className="hv-problem-comparison">
            <div className="hv-compare-card hv-compare-bad">
              <div className="hv-compare-icon">&#x1f6ab;</div>
              <h4>Bottled "Aloe Vera"</h4>
              <ul>
                <li>Months old by purchase</li>
                <li>&lt;10% actual aloe</li>
                <li>Preservatives &amp; additives</li>
                <li>Degraded active compounds</li>
                <li>Artificial green colour</li>
              </ul>
            </div>
            <div className="hv-compare-card hv-compare-good">
              <div className="hv-compare-icon">&#x2705;</div>
              <h4>Hello Vera</h4>
              <ul>
                <li>Harvested within 24 hours</li>
                <li>100% pure aloe leaf</li>
                <li>Zero preservatives</li>
                <li>200+ active compounds</li>
                <li>Naturally clear gel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="hv-how" id="how-it-works">
        <div className="hv-how-inner">
          <h2 className="hv-section-label">How it works</h2>
          <h3 className="hv-how-title">Fresh aloe vera in three simple steps</h3>
          <div className="hv-steps">
            <div className="hv-step">
              <div className="hv-step-num">1</div>
              <div className="hv-step-icon">&#x1f4e6;</div>
              <h4>Pick your plan</h4>
              <p>Choose weekly, fortnightly, or monthly delivery. No lock-in, cancel anytime.</p>
            </div>
            <div className="hv-step-connector" />
            <div className="hv-step">
              <div className="hv-step-num">2</div>
              <div className="hv-step-icon">&#x1f33f;</div>
              <h4>We harvest fresh</h4>
              <p>Your aloe vera is cut from the plant within 24 hours of delivery. Peak freshness, guaranteed.</p>
            </div>
            <div className="hv-step-connector" />
            <div className="hv-step">
              <div className="hv-step-num">3</div>
              <div className="hv-step-icon">&#x2600;&#xfe0f;</div>
              <h4>Use it all week</h4>
              <p>Slice, scoop, and apply. After-sun, face masks, smoothies — the real deal, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="hv-plans" id="plans">
        <div className="hv-plans-inner">
          <h2 className="hv-section-label">Simple pricing</h2>
          <h3 className="hv-plans-title">Pick the rhythm that suits your skin</h3>
          <p className="hv-plans-subtitle">All plans include free delivery. Pause or cancel anytime.</p>
          <div className="hv-plan-cards">
            {(Object.keys(plans) as Plan[]).map((key) => {
              const plan = plans[key]
              return (
                <div
                  key={key}
                  className={`hv-plan-card ${selectedPlan === key ? 'hv-plan-selected' : ''} ${plan.badge ? 'hv-plan-featured' : ''}`}
                  onClick={() => setSelectedPlan(key)}
                >
                  {plan.badge && <div className="hv-plan-badge">{plan.badge}</div>}
                  <h4 className="hv-plan-name">{plan.label}</h4>
                  <div className="hv-plan-price">
                    <span className="hv-plan-dollar">$</span>
                    <span className="hv-plan-amount">{plan.price}</span>
                    <span className="hv-plan-interval">/{plan.interval}</span>
                  </div>
                  {plan.savings && <div className="hv-plan-savings">{plan.savings}</div>}
                  <ul className="hv-plan-features">
                    <li>Fresh aloe vera leaves</li>
                    <li>Free Australia-wide delivery</li>
                    <li>Harvest-to-door in 24hrs</li>
                    <li>Cancel or pause anytime</li>
                  </ul>
                  <button
                    className={`hv-btn ${selectedPlan === key ? 'hv-btn-primary' : 'hv-btn-outline'} hv-btn-full`}
                  >
                    {selectedPlan === key ? 'Get started' : 'Select plan'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="hv-testimonials">
        <div className="hv-testimonials-inner">
          <h2 className="hv-section-label">Real people, real relief</h2>
          <div className="hv-testimonial-grid">
            <div className="hv-testimonial">
              <div className="hv-testimonial-stars">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              <p>"I used to buy the green bottle from Woolies and wonder why it never really helped. The difference with fresh aloe is unbelievable — the cooling effect alone is worth it."</p>
              <div className="hv-testimonial-author">
                <div className="hv-avatar" style={{ background: '#E76F51' }}>T</div>
                <div>
                  <strong>Tom R.</strong>
                  <span>Sydney, NSW</span>
                </div>
              </div>
            </div>
            <div className="hv-testimonial">
              <div className="hv-testimonial-stars">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              <p>"My kids are surf-mad. Every Sunday arvo it's sunburn central. Hello Vera has become part of our weekly routine — slice it up, gel on, done. They actually enjoy it."</p>
              <div className="hv-testimonial-author">
                <div className="hv-avatar" style={{ background: '#F4A261' }}>S</div>
                <div>
                  <strong>Sarah M.</strong>
                  <span>Gold Coast, QLD</span>
                </div>
              </div>
            </div>
            <div className="hv-testimonial">
              <div className="hv-testimonial-stars">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              <p>"I use it for everything — face mask Monday, after-beach recovery, even in smoothies. Genuinely the best subscription I've ever signed up for. No exaggeration."</p>
              <div className="hv-testimonial-author">
                <div className="hv-avatar" style={{ background: '#2D6A4F' }}>M</div>
                <div>
                  <strong>Mia K.</strong>
                  <span>Melbourne, VIC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hv-faq" id="faq">
        <div className="hv-faq-inner">
          <h2 className="hv-section-label">Frequently asked questions</h2>
          <div className="hv-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`hv-faq-item ${faqOpen === i ? 'hv-faq-open' : ''}`}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <div className="hv-faq-question">
                  <span>{faq.q}</span>
                  <span className="hv-faq-toggle">{faqOpen === i ? '\u2212' : '+'}</span>
                </div>
                {faqOpen === i && <div className="hv-faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hv-cta-final">
        <div className="hv-cta-final-inner">
          <h2>Stop putting chemicals on your sunburn.</h2>
          <p>Join 2,400+ Australians getting fresh aloe vera delivered to their door every week.</p>
          {!submitted ? (
            <form className="hv-cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="hv-btn hv-btn-primary hv-btn-lg">
                Start your subscription &rarr;
              </button>
            </form>
          ) : (
            <div className="hv-cta-success">
              <span>&#x2705;</span> You're in! We'll be in touch soon.
            </div>
          )}
          <p className="hv-cta-fine">Free delivery. No lock-in. Cancel anytime. First leaf on us.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="hv-footer">
        <div className="hv-footer-inner">
          <div className="hv-footer-brand">
            <span className="hv-logo-leaf">&#x1f33f;</span> hello vera
          </div>
          <div className="hv-footer-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#plans">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="hv-footer-copy">
            &copy; 2026 Hello Vera. Made with aloe in Australia.
          </div>
        </div>
      </footer>
    </div>
  )
}
