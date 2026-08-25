import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const bikes = [
  { name: "TVS HLX 150", tag: "New", image: "/images/tvs-hlx-black.jpeg", type: "bike", description: "Practical, rugged and built for everyday commercial use." },
  { name: "Bajaj Boxer BM 150", tag: "New", image: "/images/boxer-red-side.jpeg", type: "bike", description: "A dependable workhorse for riders who need durability." },
  { name: "TVS HLX Series", tag: "New", image: "/images/tvs-red-new.jpeg", type: "bike", description: "Fresh stock with flexible financing options." },
  { name: "Bajaj Boxer", tag: "Available", image: "/images/boxer-blue.jpeg", type: "bike", description: "Strong road presence and practical everyday performance." },
  { name: "Motorbike Stock", tag: "Various", image: "/images/bikes-pair.jpeg", type: "bike", description: "Ask about current models, colours and availability." },
  { name: "Boxer", tag: "Available", image: "/images/boxer-closeup.jpeg", type: "bike", description: "Contact us for the current cash price and stock status." },
];

const tuktuks = [
  { name: "Passenger Tuk-Tuk", tag: "Tuk-Tuk", image: "/images/tuktuk-yellow.jpeg", type: "tuktuk", description: "Passenger transport option for business and daily income." },
  { name: "Cargo Tuk-Tuk", tag: "Cargo", image: "/images/cargo-blue.jpeg", type: "tuktuk", description: "Useful for deliveries, farm produce and local logistics." },
  { name: "Heavy-Duty Cargo", tag: "Cargo", image: "/images/cargo-red.jpeg", type: "tuktuk", description: "Practical cargo configuration for commercial work." },
];

const allVehicles = [...bikes, ...tuktuks];

function App() {
  const [filter, setFilter] = useState("all");
  const [financeType, setFinanceType] = useState("bike");
  const [formOpen, setFormOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const visible = useMemo(
    () => filter === "all" ? allVehicles : allVehicles.filter(v => v.type === filter),
    [filter]
  );

  const deposit = financeType === "bike" ? 15000 : 30000;
  const installmentTotal = 150 * 30 * 21;

 const openApplication = (vehicle = "") => {
  const phone = "254751604649"; // your WhatsApp number
  let message;

  if (vehicle) {
    message = `Hello, I want to apply for ${vehicle}.`;
  } else {
    message = `Hello, I want to apply for a bike or tuk-tuk.`; // fallback for generic buttons
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  return (
    <div className="app">
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Mwananchi Motorbike and Tuk Tuk Dealers logo" />
            <span className="brand-name">MWANANCHI <b>MOTORBIKE & TUK TUK DEALERS</b></span>
          </a>
          <div className="header-contact">
            <a href="tel:+254786275195"><span>Call</span><strong>0786 275 195</strong></a>
            <a href="https://wa.me/254751604649" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>0751 604 649</strong></a>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">☰</button>
          <nav className={menuOpen ? "navlinks open" : "navlinks"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#vehicles" onClick={() => setMenuOpen(false)}>Motorbikes</a>
            <a href="#tuktuks" onClick={() => setMenuOpen(false)}>Tuk-Tuks</a>
            <a href="#financing" onClick={() => setMenuOpen(false)}>Lipa Mdogo Mdogo</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button className="nav-cta" onClick={() => openApplication()}>Apply Now</button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow one"></div>
          <div className="hero-glow two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-brand-lockup">
                <img src="/logo.png" alt="Mwananchi Motorbike and Tuk Tuk Dealers" />
                <div className="hero-company-name">MWANANCHI MOTORBIKE AND TUK TUK DEALERS</div>
              </div>
              <div className="hero-contact-row">
                <a href="tel:+254786275195">☎ 0786 275 195</a>
                <a href="https://wa.me/254751604649" target="_blank" rel="noreferrer">WhatsApp 0751 604 649</a>
              </div>
              <div className="eyebrow">- Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenya • DELIVERY COUNTRYWIDE</div>
              <h1>Get your <span>motorbike</span> or <span>tuk-tuk</span> and start moving.</h1>
              <p className="hero-text">
                Quality work vehicles with a simple path to ownership. Buy for cash or ask about our
                Lipa Mdogo Mdogo option with a guarantor and verification.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#vehicles">Browse Vehicles</a>
                <button className="btn ghost" onClick={() => openApplication()}>Apply for Financing</button>
              </div>
              <div className="trust-row">
                <div><strong>KSh 15K</strong><small>Bike deposit</small></div>
                <div><strong>KSh 30K</strong><small>Tuk-tuk deposit</small></div>
                <div><strong>KSh 150</strong><small>Daily instalment</small></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card back"><img src="/images/cargo-blue.jpeg" alt="Blue cargo tuk-tuk" /></div>
              <div className="hero-card main"><img src="/images/boxer-red-side.jpeg" alt="Bajaj Boxer motorbike" /></div>
              <div className="hero-badge"><b>21</b><span>months</span><small>financing period</small></div>
            </div>
          </div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <div><span className="qicon">✓</span><div><b>Flexible financing</b><small>Subject to assessment</small></div></div>
            <div><span className="qicon">▣</span><div><b>Guarantor supported</b><small>Verification included</small></div></div>
            <div><span className="qicon">↗</span><div><b>Kenya-wide delivery</b><small>Based in - Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenya</small></div></div>
            <div><span className="qicon">☎</span><div><b>Talk to support</b><small>0786 275 195</small></div></div>
          </div>
        </section>

        <section id="vehicles" className="section light">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow blue">OUR STOCK</div><h2>Find your next workhorse.</h2><p>Browse the vehicles currently featured on our catalogue.</p></div>
              <div className="filters">
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                <button className={filter === "bike" ? "active" : ""} onClick={() => setFilter("bike")}>Motorbikes</button>
                <button className={filter === "tuktuk" ? "active" : ""} onClick={() => setFilter("tuktuk")}>Tuk-Tuks</button>
              </div>
            </div>
            <div className="vehicle-grid">
              {visible.map((v, i) => (
                <article className="vehicle-card" key={v.name + i}>
                  <div className="vehicle-image" onClick={() => setLightbox(v)} role="button" tabIndex="0" onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setLightbox(v)} aria-label={`View ${v.name} image in detail`}>
                    <img src={v.image} alt={v.name} />
                    <span className="zoom-hint">Click to view</span>
                    <span className="pill">{v.tag}</span>
                    <span className="finance-pill">Lipa Mdogo Mdogo</span>
                  </div>
                  <div className="vehicle-body">
                    <h3>{v.name}</h3>
                    <p>{v.description}</p>
                    <div className="price-row"><span>Deposit</span><strong>{v.type === "bike" ? "KSh 15,000" : "KSh 30,000"}</strong></div>
                    <div className="mini-finance"><span>KSh 150/day</span><span>21 months</span></div>
                    <div className="card-actions">
                      <button className="outline-btn" onClick={() => openApplication(v.name)}>Enquire</button>
                      <button className="dark-btn" onClick={() => openApplication(v.name)}>Apply Now</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tuktuks" className="section blue-section">
          <div className="container tuktuk-feature">
            <div>
              <div className="eyebrow gold">TUK-TUK BUSINESS</div>
              <h2>Move people. Move goods. Build your income.</h2>
              <p>Passenger and cargo options for transport, delivery and commercial work. Ask about availability and the current cash price.</p>
              <div className="feature-points">
                <span>✓ KSh 30,000 deposit</span>
                <span>✓ KSh 150/day</span>
                <span>✓ 21-month period</span>
                <span>✓ Nationwide delivery</span>
              </div>
              <button className="btn gold-btn" onClick={() => { setFilter("tuktuk"); document.getElementById("vehicles").scrollIntoView({behavior:"smooth"}); }}>View Tuk-Tuks</button>
            </div>
            <div className="tuktuk-stack">
              <div className="tuktuk-photo cargo-photo" onClick={() => setLightbox(tuktuks[1])} role="button" tabIndex="0" onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setLightbox(tuktuks[1])}>
                <img src="/images/cargo-blue.jpeg" alt="Blue cargo tuk-tuk" />
                <span>Tap to view cargo tuk-tuk</span>
              </div>
              <div className="tuktuk-photo passenger-photo" onClick={() => setLightbox(tuktuks[0])} role="button" tabIndex="0" onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setLightbox(tuktuks[0])}>
                <img src="/images/tuktuk-yellow.jpeg" alt="Yellow passenger tuk-tuk" />
                <span>Tap to view</span>
              </div>
              <div className="tuktuk-label"><b>Cargo & Passenger Tuk-Tuks</b><span>Tap any vehicle photo to view it larger</span></div>
            </div>
          </div>
        </section>

        <section id="financing" className="section finance-section">
          <div className="container finance-grid">
            <div className="finance-copy">
              <div className="eyebrow blue">LIPA MDOGO MDOGO</div>
              <h2>Small daily payments. A bigger step forward.</h2>
              <p>Choose your vehicle type to see the standard deposit and daily instalment structure. Final approval follows verification and assessment.</p>
              <div className="finance-toggle">
                <button className={financeType === "bike" ? "active" : ""} onClick={() => setFinanceType("bike")}>Motorbike</button>
                <button className={financeType === "tuktuk" ? "active" : ""} onClick={() => setFinanceType("tuktuk")}>Tuk-Tuk</button>
              </div>
              <div className="finance-result">
                <div><small>Required deposit</small><b>KSh {deposit.toLocaleString()}</b></div>
                <div><small>Daily instalment</small><b>KSh 150</b></div>
                <div><small>Repayment period</small><b>21 months</b></div>
              </div>
              <p className="fine">Illustrative instalment total using 30 days/month: KSh {installmentTotal.toLocaleString()}. Actual agreements are subject to the applicable terms and assessment.</p>
              <button className="btn primary" onClick={() => openApplication(financeType === "bike" ? "Motorbike" : "Tuk-Tuk")}>Start Application</button>
            </div>
            <div className="finance-card">
              <div className="finance-card-top"><span>FINANCING PATH</span><b>01—04</b></div>
              <div className="step"><b>01</b><div><strong>Choose a vehicle</strong><p>Select a motorbike or tuk-tuk from our stock.</p></div></div>
              <div className="step"><b>02</b><div><strong>Submit your details</strong><p>Provide your ID, KRA PIN, income/business details and contact information.</p></div></div>
              <div className="step"><b>03</b><div><strong>Add a guarantor</strong><p>We verify the applicant and guarantor before an approval decision.</p></div></div>
              <div className="step"><b>04</b><div><strong>Pay the deposit</strong><p>Once approved and agreed, complete the deposit and delivery arrangements.</p></div></div>
            </div>
          </div>
        </section>

        <section id="how" className="section light">
          <div className="container">
            <div className="center-head"><div className="eyebrow blue">HOW IT WORKS</div><h2>From enquiry to your doorstep.</h2><p>Simple steps, with verification where it matters.</p></div>
            <div className="process-grid">
              <div className="process-card"><span>01</span><h3>Browse</h3><p>Choose a motorbike or tuk-tuk that fits your work.</p></div>
              <div className="process-card"><span>02</span><h3>Apply</h3><p>Send your application online or contact our support team.</p></div>
              <div className="process-card"><span>03</span><h3>Verify</h3><p>We review your information and guarantor details.</p></div>
              <div className="process-card"><span>04</span><h3>Receive</h3><p>After approval and agreed payment, arrange collection or delivery.</p></div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="container">
            <div className="center-head white"><div className="eyebrow gold">CUSTOMER VOICE</div><h2>Real stories from real customers.</h2><p>Verified customer reviews can be added here as the dealership receives them.</p></div>
            <div className="review-board">
              <div className="review-placeholder">★★★★★<strong>Verified customer reviews</strong><span>Your genuine customer stories will appear here.</span></div>
              <div className="review-placeholder floating-one">★★★★★<strong>Customer story</strong><span>Add a verified review after purchase.</span></div>
              <div className="review-placeholder floating-two">★★★★★<strong>Customer story</strong><span>Add a verified review after delivery.</span></div>
            </div>
          </div>
        </section>

        <section className="guarantee section">
          <div className="container guarantee-box">
            <div className="guarantee-icon">G</div>
            <div><div className="eyebrow blue">FINANCING REQUIREMENT</div><h2>Guarantor-supported applications.</h2><p>Applicants should provide a suitable guarantor. Applications are subject to identity, income/business and repayment-capacity checks before approval.</p></div>
            <button className="btn primary" onClick={() => openApplication()}>Check Eligibility</button>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div><div className="eyebrow gold">CONTACT MWANANCHI</div><h2>Ready to get moving?</h2><p>Visit us in - Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenya Town or contact the team for current stock, pricing, financing and delivery.</p></div>
            <div className="contact-cards">
              <a href="tel:0786275195"><small>CALL / SUPPORT</small><strong>0786 275 195</strong><span>Talk to our team</span></a>
              <a href="https://wa.me/254751604649" target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>0751 604 649</strong><span>Chat with us</span></a>
              <div><small>LOCATION</small><strong>- Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenya</strong><span>Delivery across Kenya</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><img src="/logo.png" alt="" /><p>Motorbike and tuk-tuk dealership based in - Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenya, serving customers across Kenya.</p></div>
          <div><h4>Explore</h4><a href="#vehicles">Motorbikes</a><a href="#tuktuks">Tuk-Tuks</a><a href="#financing">Lipa Mdogo Mdogo</a><a href="#how">How It Works</a></div>
          <div><h4>Contact</h4><a href="tel:0786275195">0786 275 195</a><a href="https://wa.me/254751604649">0751 604 649</a><span>- Ecobank Towers, Muindi Mbingu Street, Nairobi, Kenyay
            , Kenya</span></div>
        </div>
        <div className="copyright">© 2026 Mwananchi Motorbike and Tuk Tuk Dealers. All rights reserved.</div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/254751604649" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>

      {lightbox && (
        <div className="lightbox-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setLightbox(null)}>
          <div className="lightbox">
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image">×</button>
            <img src={lightbox.image} alt={lightbox.name} />
            <div className="lightbox-caption"><strong>{lightbox.name}</strong><span>{lightbox.description}</span><button className="btn primary" onClick={() => { setLightbox(null); openApplication(lightbox.name); }}>Apply / Enquire</button></div>
          </div>
        </div>
      )}

      {formOpen && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setFormOpen(false)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setFormOpen(false)}>×</button>
            <div className="eyebrow blue">FINANCING APPLICATION</div>
            <h2>Start your application</h2>
            <p className="modal-intro">Selected vehicle: <b>{selectedVehicle || "To be selected"}</b></p>
            <form onSubmit={(e) => { e.preventDefault(); setFormOpen(false); alert("Application form captured for the demo. Connect this form to your backend before launch."); }}>
              <div className="form-grid">
                <label>Full name<input required placeholder="Your full name" /></label>
                <label>Phone number<input required placeholder="07xx xxx xxx" /></label>
                <label>ID number<input required placeholder="National ID" /></label>
                <label>KRA PIN<input required placeholder="KRA PIN" /></label>
                <label>County<input required placeholder="County" /></label>
                <label>Town / area<input required placeholder="Town or area" /></label>
                <label>Occupation / business<input required placeholder="What do you do?" /></label>
                <label>Guarantor phone<input required placeholder="Guarantor phone" /></label>
              </div>
              <label className="full">Vehicle of interest<input value={selectedVehicle} onChange={e => setSelectedVehicle(e.target.value)} placeholder="e.g. TVS HLX 150" /></label>
              <label className="check"><input type="checkbox" required /> I confirm the information is accurate and understand that approval is subject to verification and assessment.</label>
              <button className="btn primary full-btn" type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
