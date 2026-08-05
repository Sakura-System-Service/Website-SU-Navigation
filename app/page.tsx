"use client";

import { useEffect, useState } from "react";
import { OperatingRoutesMap } from "./components/operating-routes-map";

const vessels = [
  { name: "SUN MERCURY", year: "2023", dwt: "12,555.9", loa: "127.02 m", tanks: "16", flag: "Singapore" },
  { name: "SUN NEPTUNE", year: "2022", dwt: "12,618.97", loa: "127.02 m", tanks: "16", flag: "Panama" },
  { name: "SUN IRIS", year: "2020", dwt: "12,601.57", loa: "127.02 m", tanks: "16", flag: "Panama" },
  { name: "SUN JUPITER", year: "2019", dwt: "12,605.77", loa: "127.02 m", tanks: "16", flag: "Panama" },
  { name: "SUN SIRIUS", year: "2021", dwt: "9,118.61", loa: "114.22 m", tanks: "16", flag: "Panama" },
  { name: "SUN ORION", year: "2014", dwt: "8,720.58", loa: "112.02 m", tanks: "16", flag: "Panama" },
];

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("revealed")),
      { threshold: 0.14 },
    );
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="SU Navigation home">
          <span className="brand-word">SU N<span className="brand-sail">◆</span>VI</span>
          <span className="brand-sub">SHOKUYU TANKER GROUP</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span /><span />
        </button>

        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="/Website-SU-Navigation/about" onClick={closeMenu}>About</a>
          <a href="/Website-SU-Navigation/services" onClick={closeMenu}>Services</a>
          <a href="/Website-SU-Navigation/fleet" onClick={closeMenu}>Fleet</a>
          <a href="/Website-SU-Navigation/services#safety" onClick={closeMenu}>Safety</a>
          <a className="nav-contact" href="/Website-SU-Navigation/contact" onClick={closeMenu}>Contact <Arrow /></a>
        </nav>
      </header>

      <section className="hero" aria-label="SU Navigation maritime transport">
        <div className="hero-image" />
        <div className="hero-scrim" />
        <div className="route-graphic" aria-hidden="true">
          <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path className="route-path route-path-one" d="M-30,390 C180,310 270,440 470,290 S760,140 1030,210" />
            <path className="route-path route-path-two" d="M-20,430 C220,360 320,470 520,320 S770,175 1020,245" />
          </svg>
        </div>

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> Chemical &amp; oil transportation</p>
          <h1><span>Moving vital cargo.</span><span>Advancing industry.</span></h1>
          <p className="hero-copy">
            Reliable marine transportation across Far East and Southeast Asia — delivered with disciplined safety, technical expertise and care.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Website-SU-Navigation/services">Explore our services <Arrow /></a>
            <a className="text-link" href="/Website-SU-Navigation/fleet">View our fleet <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-meta">
          <span>Singapore</span><span>Tokyo</span><span>Shanghai</span><span>Busan</span>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll</span><i /></a>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div><strong>04</strong><span>Regional locations</span></div>
        <div><strong>07</strong><span>Specialist tankers</span></div>
        <div><strong>ASIA</strong><span>Far East to Southeast Asia</span></div>
        <div><strong>IMO</strong><span>II &amp; III capable fleet</span></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label" data-reveal><span>01</span> Our mission</div>
        <div className="about-grid">
          <div data-reveal>
            <p className="eyebrow dark"><span /> Built on reliability</p>
            <h2>Safe passage.<br /><em>Shared progress.</em></h2>
          </div>
          <div className="about-copy" data-reveal>
            <p className="lead">We support the chemical and oil industries through safe, dependable marine transport.</p>
            <p>As part of Shokuyu Tanker Group, SU Navigation combines regional reach with specialist knowledge of liquid bulk cargo. We build long-term relationships by putting customer confidence and operational discipline first.</p>
            <a className="line-link" href="/Website-SU-Navigation/about">Discover our approach <Arrow /></a>
          </div>
        </div>
        <div className="values-grid" data-reveal>
          <article><span>01</span><h3>Safety without compromise</h3><p>Clear standards, experienced teams and continuous improvement guide every voyage.</p></article>
          <article><span>02</span><h3>Customer-first thinking</h3><p>Responsive service and practical solutions built around every cargo requirement.</p></article>
          <article><span>03</span><h3>Knowledge in motion</h3><p>Deep understanding of vessels, cargo and markets supports confident decisions.</p></article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="services-head" data-reveal>
          <div className="section-label light"><span>02</span> Our services</div>
          <h2>Specialist transport,<br /><em>connected across Asia.</em></h2>
          <p>Purpose-built vessels and experienced crews move complex liquid bulk cargo safely between the region&apos;s essential ports.</p>
        </div>

        <div className="service-list">
          <article data-reveal>
            <div className="service-number">01</div>
            <div className="service-icon">CH</div>
            <div><h3>Chemical transportation</h3><p>Specialty and commodity chemicals handled with dedicated systems, cargo awareness and precise operational control.</p></div>
            <Arrow />
          </article>
          <article data-reveal>
            <div className="service-number">02</div>
            <div className="service-icon">PT</div>
            <div><h3>Petrochemical cargo</h3><p>Reliable regional carriage supported by stainless-steel tanks and flexible parcel capability.</p></div>
            <Arrow />
          </article>
          <article data-reveal>
            <div className="service-number">03</div>
            <div className="service-icon">OL</div>
            <div><h3>Petroleum products</h3><p>Efficient movement of oil products on domestic and international routes throughout our core operating region.</p></div>
            <Arrow />
          </article>
        </div>

        <div className="route-card" data-reveal>
          <div>
            <p className="eyebrow"><span /> Primary operating region</p>
            <h3>Far East<br />to Southeast Asia</h3>
            <p>Singapore • Japan • Korea • China • Regional ports</p>
          </div>
          <div className="radar" aria-hidden="true"><i /><i /><i /><b>SG</b><b>JP</b><b>KR</b><b>CN</b></div>
        </div>

        <div className="operating-region-detail">
          <div className="operating-region-copy">
            <h3>Regional routes, grounded in local knowledge.</h3>
            <p>We are engaged in marine transportation, shipping a wide variety of liquid bulk cargoes including specialty and commodity chemicals, petrochemicals and petroleum products for domestic and overseas customers — mainly on courses in the Far East and Southeast Asia.</p>
            <p>Shokuyu Tanker Group also carries animal and vegetable oils in the Far East and Japan. The route maps show the operating areas represented on the original SU Navigation site, rebuilt with a geographic base and precise port locations.</p>
          </div>
          <div className="route-map-grid"><OperatingRoutesMap variant="corridor"/><OperatingRoutesMap variant="farEast"/></div>
        </div>
      </section>

      <section className="fleet section" id="fleet">
        <div className="fleet-intro" data-reveal>
          <div className="section-label"><span>03</span> Fleet</div>
          <div><h2>Engineered for<br /><em>complex cargo.</em></h2></div>
          <p>Double-hull chemical and oil tankers designed for flexible, safe and efficient regional service.</p>
        </div>

        <div className="fleet-table" data-reveal>
          <div className="fleet-row fleet-header"><span>Vessel</span><span>Built</span><span>DWT (MT)</span><span>LOA</span><span>Tanks</span><span>Flag</span><span /></div>
          {vessels.map((vessel, index) => (
            <div className="fleet-row" key={vessel.name}>
              <span className="vessel-name"><i>{String(index + 1).padStart(2, "0")}</i>{vessel.name}</span>
              <span data-label="Built">{vessel.year}</span>
              <span data-label="DWT">{vessel.dwt}</span>
              <span data-label="LOA">{vessel.loa}</span>
              <span data-label="Tanks">{vessel.tanks}</span>
              <span data-label="Flag">{vessel.flag}</span>
              <Arrow />
            </div>
          ))}
        </div>
      </section>

      <section className="safety section" id="safety">
        <div className="safety-glow" />
        <div className="safety-grid">
          <div data-reveal>
            <div className="section-label light"><span>04</span> Safety management</div>
            <p className="eyebrow"><span /> One standard, every voyage</p>
            <h2>Safety is not a target.<br /><em>It is how we operate.</em></h2>
          </div>
          <div className="safety-copy" data-reveal>
            <p>Our group policy places the protection of people, vessels, cargo and the environment at the centre of every decision.</p>
            <ul>
              <li><span>01</span>Compliance-led operations</li>
              <li><span>02</span>Continuous crew development</li>
              <li><span>03</span>Proactive risk management</li>
              <li><span>04</span>Environmental responsibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-card" data-reveal>
          <div>
            <p className="eyebrow dark"><span /> Start a conversation</p>
            <h2>Let&apos;s navigate<br /><em>what&apos;s next.</em></h2>
          </div>
          <div>
            <p>For chartering, service enquiries or more information about our regional fleet, contact our Singapore head office.</p>
            <a className="button button-dark" href="tel:+6562250800">Call Singapore office <Arrow /></a>
          </div>
        </div>

        <div className="office-grid" data-reveal>
          <article><span>Head office</span><h3>Singapore</h3><p>200 Cantonment Road<br />#14-04 Southpoint<br />Singapore 089763</p><a href="tel:+6562250800">+65 6225 0800</a></article>
          <article><span>Regional office</span><h3>Tokyo</h3><p>14-1 Kyobashi, 2-Chome<br />Chuo-ku, Tokyo<br />104-0031 Japan</p><a href="tel:+81355795092">+81 3 5579 5092</a></article>
          <article><span>Group network</span><h3>Shanghai &amp; Busan</h3><p>Local representation supporting<br />customers and vessel operations<br />across East Asia.</p><a href="#top">Explore the group <Arrow /></a></article>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-word">SU N<span className="brand-sail">◆</span>VI</span><p>SU Navigation Pte. Ltd.<br />A Shokuyu Tanker Group company</p></div>
        <div className="footer-links"><a href="/Website-SU-Navigation/about">About</a><a href="/Website-SU-Navigation/services">Services</a><a href="/Website-SU-Navigation/fleet">Fleet</a><a href="/Website-SU-Navigation/services#safety">Safety</a><a href="/Website-SU-Navigation/contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 SU Navigation Pte. Ltd.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
