import Link from "next/link";

const services = [
  "Global sourcing",
  "Export documentation",
  "Customs coordination",
  "Freight forwarding",
];

const industries = ["Agriculture", "Textiles", "Handicrafts", "Consumer goods"];

export default function Home() {
  return (
    <main>
      <Nav />

      <section className="hero">
        <div>
          <p className="eyebrow">Global Trade With Purpose</p>
          <h1>Import-export solutions built on trust, speed, and social responsibility.</h1>
          <p>
            GlobeBridge Exports helps businesses move quality products across borders
            while supporting ethical sourcing, local communities, and sustainable growth.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn primary">Send Inquiry</Link>
            <Link href="/services" className="btn secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="section grid2">
        <div>
          <p className="eyebrow">Company Overview</p>
          <h2>Connecting markets with responsible trade.</h2>
        </div>
        <p>
          We provide end-to-end import and export support for growing brands,
          manufacturers, and distributors. Our work combines professional logistics,
          supplier verification, documentation, and impact-focused partnerships.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Services</p>
        <h2>Import & export services</h2>
        <div className="cards">
          {services.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
              <p>Reliable support designed for smooth international business operations.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <p className="eyebrow">Industries Served</p>
        <h2>Serving diverse product categories worldwide.</h2>
        <div className="chips">
          {industries.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section grid2">
        <div>
          <p className="eyebrow">CSR Impact</p>
          <h2>Trade that supports people and communities.</h2>
        </div>
        <p>
          We prioritize fair sourcing, women-led supplier networks, rural entrepreneurship,
          recyclable packaging, and long-term community development.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Global Reach</p>
        <h2>Trusted across Asia, Europe, the Middle East, and Africa.</h2>
        <div className="stats">
          <div><strong>18+</strong><span>Countries</span></div>
          <div><strong>120+</strong><span>Shipments</span></div>
          <div><strong>45+</strong><span>Verified partners</span></div>
        </div>
      </section>

      <section className="section cards">
        {["Verified suppliers", "Transparent process", "On-time coordination"].map((x) => (
          <article className="card" key={x}>
            <h3>{x}</h3>
            <p>Professional systems that keep clients informed and confident.</p>
          </article>
        ))}
      </section>

      <section className="cta">
        <h2>Ready to expand your business globally?</h2>
        <Link href="/contact" className="btn primary">Contact Us</Link>
      </section>

      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">GlobeBridge</Link>
      <div className="navLinks">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/import-export">Import Export</Link>
        <Link href="/csr">CSR</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return <footer className="footer">© 2026 GlobeBridge Exports. Responsible global trade.</footer>;
}