import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/DrakePassagePage/DrakePassagePage.css";
import ProfilePicture from "../../assets/image.jpg";
import {
  Anchor,
  Ship,
  Compass,
  ChevronDown,
  Sparkles,
  Check,
  AlertCircle,
  Anchor as AnchorIcon,
  Ship as ShipIcon,
  Compass as CompassIcon,
  Plus,
  Minus,
} from "lucide-react";

// Import all Drake Passage images from assets folder
import section1_Image from "../../assets/DrakePassage/section1_image.png";
import section2_Image1 from "../../assets/DrakePassage/section2_image1.png";
import section2_Image2 from "../../assets/DrakePassage/section2_image2.png";
import section3_Image1 from "../../assets/DrakePassage/section3_image1.png";
import section3_Image2 from "../../assets/DrakePassage/section3_image2.jpeg";
import section5_Image1 from "../../assets/DrakePassage/section5_image1.jpeg";
import section6_Image1 from "../../assets/DrakePassage/section06_image1.jpeg";
import section6_Image2 from "../../assets/DrakePassage/section06_image2.jpeg";
import section8_Image1 from "../../assets/DrakePassage/section8_image1.png";
import section8_Image2 from "../../assets/DrakePassage/section8_image2.jpeg";
import section8_Image3 from "../../assets/DrakePassage/section8_image3.jpeg";
import section8_Image4 from "../../assets/DrakePassage/section8_image4.jpeg";

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "What is the Drake Passage and where is it located?",
      a: "The Drake Passage is the body of water between the southern tip of South America and Antarctica. It connects the Atlantic and Pacific Oceans and serves as the primary route for expedition cruises traveling to the Antarctic Peninsula.",
    },
    {
      q: "How rough is the Drake Passage crossing?",
      a: "Conditions vary depending on weather systems and time of year. Some crossings are relatively calm, while others involve more noticeable ocean movement. Modern expedition ships are designed to handle both scenarios effectively.",
    },
    {
      q: "Is the Drake Passage dangerous for cruise passengers?",
      a: "No. The Drake Passage is not considered dangerous when traveled on modern expedition ships operated by experienced crews who monitor conditions and adjust operations as needed.",
    },
    {
      q: "How long does it take to cross the Drake Passage?",
      a: "Most crossings take approximately two days each way, depending on itinerary and weather conditions.",
    },
    {
      q: "What does Drake Lake vs Drake Shake mean?",
      a: "These informal terms describe calm versus more active sea conditions during the crossing.",
    },
    {
      q: "Do all Antarctica cruises cross the Drake Passage?",
      a: "Most do, though some fly-cruise itineraries bypass the crossing by flying directly to Antarctica.",
    },
    {
      q: "Can you avoid seasickness in the Drake Passage?",
      a: "Preparation, ship selection, and motion management strategies help reduce the likelihood, though sensitivity varies by individual.",
    },
    {
      q: "Is Scenic Eclipse stable in the Drake Passage?",
      a: "Yes. Scenic Eclipse is designed for polar conditions and includes advanced stabilization systems to enhance comfort.",
    },
    {
      q: "What should I pack for the Drake Passage crossing?",
      a: "Layered clothing and motion management options are recommended to ensure comfort during varying conditions.",
    },
    {
      q: "Is the Drake Passage worth experiencing?",
      a: "For many travelers, it is an integral part of the Antarctica journey and contributes to the overall expedition experience.",
    },
    {
      q: "What is the best ship for the Drake Passage crossing?",
      a: "Ships specifically designed for polar expedition travel with modern stabilization systems are best suited for the crossing.",
    },
    {
      q: "Should I be worried about the Drake Passage?",
      a: "With proper planning and the right ship, the Drake Passage is a manageable and expected part of traveling to Antarctica.",
    },
  ];

  return (
    <div className="drake-faq-list emerald-style">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`drake-faq-item emerald-faq-item${open === i ? " drake-open emerald-faq-item--open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="drake-faq-q emerald-faq-question">
            <span>{item.q}</span>
            <span className="drake-faq-icon emerald-faq-icon">
              {open === i ? (
                <Minus size={20} strokeWidth={1.5} />
              ) : (
                <Plus size={20} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="drake-faq-a emerald-faq-answer">
              <div className="drake-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ReadMoreText({ children, maxLength = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convert children to string to check length
  const contentString =
    typeof children === "string" ? children : String(children);

  if (contentString.length <= maxLength) {
    return <>{children}</>;
  }

  return (
    <>
      <p className="drake-section-p">
        {isExpanded ? children : `${contentString.substring(0, maxLength)}...`}
      </p>
      <button
        className="drake-read-more-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </>
  );
}

const styles = `
/* Add your component-specific styles here */
`;

export default function DrakePassagePage() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: "Angela Hughes",
                jobTitle: "CEO",
                worksFor: {
                  "@type": "TravelAgency",
                  name: "Trips & Ships Luxury Travel",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <style>{styles}</style>

      <Navbar />

      {/* ===== HERO SECTION — Main hero with animated background, eyebrow title, heading, description, and call-to-action buttons ===== */}
      <section className="drake-hero">
        <div className="drake-hero-content">
          <span className="drake-hero-eyebrow">
            Antarctica Expedition Planning
          </span>
          <h1>The Drake Passage</h1>
          <p className="drake-hero-sub">
            What to expect when crossing to Antarctica
          </p>

          <p className="drake-hero-lead">
            For most travelers heading to Antarctica, the journey includes
            crossing the Drake Passage, the body of water between South America
            and the Antarctic Peninsula.
          </p>

          {/* This container expands when the button below is clicked */}
          <div className="drake-hero-details">
            <p className="drake-hero-note">
              It is often the most talked about part of the trip, not because it
              defines the experience, but because it is unfamiliar.
            </p>
            <p className="drake-hero-note">
              For most of our clients, the Drake Passage becomes a short
              transition, not the defining part of the journey.
            </p>
            <p className="drake-hero-note">
              The reality is that the crossing is a standard, managed component
              of Antarctica expeditions, shaped by ship design, weather systems,
              and preparation.
            </p>
            <p className="drake-hero-note">
              What lies beyond it is what defines the experience.
            </p>
          </div>

          <button
            className="drake-hero-read-more"
            onClick={() => {
              const details = document.querySelector(".drake-hero-details");
              if (details) {
                details.classList.toggle("expanded");
              }
            }}
          >
            Read More
          </button>

          <div className="drake-hero-btns">
            <button className="drake-btn-primary">
              Plan Your Antarctica Expedition
            </button>
            <button className="drake-btn-secondary">
              View Scenic Antarctica Expeditions
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: WHAT IS THE DRAKE PASSAGE — Reverted Width & Sticky Design ===== */}
      <section className="drake-section drake-bg-white">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper">
            {/* Left Column: Sticky Title and Editorial Note */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">01</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  What Is the <br />
                  Drake Passage
                </h2>

                {/* Editorial box placed here to fill the gap on the left */}
                <div className="drake-editorial-note">
                  <p>
                    The Drake Passage crossing experience in Antarctica is not
                    an optional add-on. It is part of the structure of the
                    journey and is built into expedition planning from the
                    beginning.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Narrative Content and Main Image */}
            <main className="drake-content-column">
              <p className="drake-lead-text">
                The Drake Passage is the stretch of ocean between the southern
                tip of South America and Antarctica, connecting the Atlantic and
                Pacific Oceans.
              </p>

              <div className="drake-narrative-body">
                <p className="drake-section-p-clean">
                  It is the primary route used by expedition ships traveling to
                  the Antarctic Peninsula. Most voyages cross the Drake Passage
                  twice, once heading south and once returning north.
                </p>

                {/* SEO-Optimized Image */}
                <figure className="drake-figure-box">
                  <div className="drake-img-container">
                    <img
                      src={section1_Image}
                      alt="Luxury expedition ship crossing the Drake Passage in open ocean waters"
                      className="drake-img-main"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <figcaption className="drake-img-caption">
                    Modern expedition ships are designed to handle the
                    unpredictable conditions of the Drake Passage crossing
                  </figcaption>
                </figure>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: HOW ROUGH IS THE DRAKE PASSAGE — Consistent Sticky Design with Section 1 ===== */}
      <section className="drake-section drake-bg-soft drake-roughness-clean">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper flipped">
            {/* Left Column: Sticky Title & Info (Matches Section 1 layout) */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">02</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  How Rough Is the <br />
                  Drake Passage
                </h2>

                <p className="drake-sticky-lead-text">
                  Conditions in the Drake Passage vary based on weather systems,
                  wind patterns, and time of year.
                </p>
                <p className="drake-roughness-term-intro">
                  Travelers often hear two terms:
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Content */}
            <main className="drake-content-column">
              {/* SEO Image 2: Drake Lake (Matches Section 1 Figure Style) */}
              <figure className="drake-hero-figure">
                <div className="drake-figure-inner">
                  <img
                    src={section2_Image1}
                    alt="Calm waters in the Drake Passage during a smooth Antarctica cruise crossing known as Drake Lake"
                    className="drake-img-fluid"
                  />
                </div>
                <figcaption className="drake-hero-caption">
                  <span className="drake-caption-tag">Conditions: Calm</span>
                  When conditions are calm, known as the "Drake Lake," the
                  crossing can feel surprisingly smooth and peaceful.
                </figcaption>
              </figure>

              <div className="drake-lake-shake-cards">
                <div className="drake-term-card drake-lake">
                  <span className="drake-term-badge">Drake Lake</span>
                  <h3>Drake Lake</h3>
                  <p className="drake-section-p-clean">
                    referring to calmer crossings
                  </p>
                </div>

                <div className="drake-term-card drake-shake">
                  <span className="drake-term-badge drake-navy-badge">
                    Drake Shake
                  </span>
                  <h3>Drake Shake</h3>
                  <p
                    className="drake-section-p-clean drake-white-text"
                    style={{ color: "#ffffff" }}
                  >
                    referring to more active conditions
                  </p>
                </div>
              </div>

              {/* SEO Image 3: Drake Shake (Matches Section 1 Figure Style) */}
              <figure className="drake-hero-figure">
                <div className="drake-figure-inner">
                  <img
                    src={section2_Image2}
                    alt="Rough seas and powerful waves in the Drake Passage during stormy Southern Ocean conditions"
                    className="drake-img-fluid"
                  />
                </div>
                <figcaption className="drake-hero-caption">
                  <span className="drake-caption-tag">Conditions: Active</span>
                  The "Drake Shake" brings powerful swells that make this
                  crossing one of the most talked about parts of an Antarctica
                  expedition.
                </figcaption>
              </figure>

              <div className="drake-roughness-summary">
                <p className="drake-section-p-clean">
                  Both occur. Most crossings fall somewhere in between. Modern
                  expedition ships are designed to manage these conditions, and
                  the experience is influenced as much by ship design and
                  preparation as it is by weather.
                </p>
                {/* Consistent White Editorial Box */}
                <div className="drake-editorial-note-white">
                  <p>
                    Understanding this variability is key to setting
                    expectations correctly.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HOW SHIPS HANDLE — Consistent Sticky Design with Navy Schema ===== */}
      <section className="drake-section drake-bg-white">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper">
            {/* Left Column: Sticky Title & Intro (Consistent with Section 1 & 2) */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">03</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  How Expedition Ships <br />
                  Handle the Drake Passage
                </h2>

                <p className="drake-sticky-lead-text">
                  Ships designed for Antarctica, including vessels operated by
                  Scenic Luxury Cruises & Tours, are engineered for stability
                  and performance in open water.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Content & Features */}
            <main className="drake-content-column">
              <p className="drake-section-p-clean">
                While ocean movement cannot be eliminated, it can be managed.
                Key factors in modern maritime engineering allow for a
                controlled and professional crossing.
              </p>

              {/* SEO Image 4: Stabilization (Matches Section 1 Figure Style) */}
              <figure className="drake-hero-figure">
                <div className="drake-figure-inner">
                  <img
                    src={section3_Image1}
                    alt="Expedition ship stabilization systems reducing movement during Drake Passage crossing"
                    className="drake-img-fluid"
                  />
                </div>
                <figcaption className="drake-hero-caption">
                  <span className="drake-caption-tag">Technology</span>
                  Advanced stabilization systems are built into the hull to
                  significantly reduce rolling and enhance guest comfort.
                </figcaption>
              </figure>

              {/* Feature Cards Grid */}
              <div className="drake-ship-feature-grid-redesign">
                <div className="drake-feature-pill-card">
                  <div className="drake-pill-icon-navy">
                    <AnchorIcon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>Stabilization systems</h3>
                </div>

                <div className="drake-feature-pill-card">
                  <div className="drake-pill-icon-navy">
                    <ShipIcon size={24} strokeWidth={1.5} />
                  </div>
                  <h3>Hull design suited for polar conditions</h3>
                </div>
              </div>

              {/* SEO Image 5: Observation Deck (Matches Section 1 Figure Style) */}
              <figure className="drake-hero-figure">
                <div className="drake-figure-inner">
                  <img
                    src={section3_Image2}
                    alt="Passengers watching Drake Passage waves from ship observation deck during expedition"
                    className="drake-img-fluid"
                  />
                </div>
                <figcaption className="drake-hero-caption">
                  <span className="drake-caption-tag">Experience</span>
                  The observation deck offers front-row views of the Drake
                  Passage experience while maintaining a secure environment.
                </figcaption>
              </figure>

              <div className="drake-feature-pill-card drake-full-width-pill">
                <div className="drake-pill-icon-navy">
                  <CompassIcon size={24} strokeWidth={1.5} />
                </div>
                <h3>Experienced crews monitoring real-time weather</h3>
              </div>

              <div className="drake-ship-footer">
                {/* Consistent White Editorial Box */}
                <div className="drake-editorial-note-white">
                  <p>
                    The Drake Passage is not avoided. It is anticipated and
                    managed as part of the expedition.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: IS IT DANGEROUS — Sticky Layout with Navy and Soft Blue Schema ===== */}
      <section className="drake-section drake-bg-soft drake-safety-section">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper flipped">
            {/* Left Column: Sticky Title (Consistent with previous sections) */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">04</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  Is the Drake Passage <br />
                  Dangerous
                </h2>

                <p className="drake-sticky-lead-text">
                  The Drake Passage is widely discussed, but often misunderstood
                  within the context of modern travel.
                </p>
              </div>
            </aside>

            {/* Right Column: Content Box */}
            <main className="drake-content-column">
              <div className="drake-danger-box">
                {/* Safety Badge: Replaced Gold with Navy/White contrast */}
                <div className="drake-safe-badge-navy">
                  <span className="drake-safe-icon">
                    <Check size={20} strokeWidth={2.5} />
                  </span>
                  Verified Safety Standards
                </div>

                <div className="drake-danger-content">
                  <p className="drake-section-p-white drake-danger-lead">
                    The Drake Passage is widely discussed, but often
                    misunderstood.
                  </p>

                  <p className="drake-section-p-white">
                    Within the context of modern expedition travel, it is not
                    considered dangerous. Crossings are conducted by experienced
                    crews using ships built specifically for these environments.
                  </p>

                  <p className="drake-section-p-white">
                    Weather systems are monitored continuously, and itineraries
                    are adjusted when necessary.
                  </p>

                  <div className="drake-danger-conclusion-line">
                    <p className="drake-section-p-white">
                      For travelers, the Drake Passage is a controlled and
                      expected part of the journey rather than a risk factor.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT IT FEELS LIKE — Consistent Sticky Design with Navy/Soft-Blue Schema ===== */}
      <section className="drake-section drake-bg-white">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper">
            {/* Left Side: Sticky Title & Eyebrow */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">05</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  What the Drake <br />
                  Passage Feels Like
                </h2>

                <p className="drake-sticky-lead-text">
                  The experience varies by traveler and conditions, shaped by
                  preparation and ship selection.
                </p>
              </div>
            </aside>

            {/* Right Side: Narrative Content */}
            <main className="drake-content-column">
              <p className="drake-section-p-clean">
                The experience varies by traveler and conditions. For most, the
                journey across these waters is a bridge between the world they
                know and the wilderness of Antarctica.
              </p>

              {/* SEO Image 6: Guest Experience (Matches Section 1 Figure Style) */}
              <figure className="drake-hero-figure">
                <div className="drake-figure-inner">
                  <img
                    src={section5_Image1}
                    alt="Travelers walking on deck during calm conditions in the Drake Passage Antarctica cruise"
                    className="drake-img-fluid"
                  />
                </div>
                <figcaption className="drake-hero-caption">
                  <span className="drake-caption-tag">Guest Perspective</span>
                  On calmer days, guests can fully enjoy time on deck while
                  crossing the Drake Passage, watching for wildlife and
                  icebergs.
                </figcaption>
              </figure>

              <div className="drake-feels-accent-box">
                <p className="drake-section-p-clean">
                  Some guests experience light movement similar to ocean
                  cruising. Others may feel more pronounced motion during active
                  crossings.
                </p>
              </div>

              <div className="drake-narrative-block">
                <p className="drake-section-p-clean">
                  Preparation, ship selection, and mindset significantly
                  influence how the crossing is experienced. Modern technology
                  ensures the transition is managed professionally.
                </p>
              </div>

              <div className="drake-ship-footer">
                {/* Consistent White Editorial Box with Navy Border */}
                <div className="drake-editorial-note-white">
                  <p>
                    For most travelers, the Drake Passage becomes part of the
                    story, not a disruption to the journey.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CROSS OR FLY — Consistent Sticky Design with Navy/Soft-Blue Schema ===== */}
      <section className="drake-section drake-bg-soft drake-choice-section">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper flipped">
            {/* Left Side: Sticky Title & Intro */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">06</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  Should You Cross the <br />
                  Drake Passage or Fly Over It
                </h2>

                <p className="drake-sticky-lead-text">
                  Travelers have two primary options when planning Antarctica.
                  The right decision depends on comfort level and travel
                  priorities.
                </p>
              </div>
            </aside>

            {/* Right Side: Scrolling Comparison Content */}
            <main className="drake-content-column">
              <div className="drake-choice-grid">
                {/* Option 1: Cross */}
                <div className="drake-choice-card-redesign">
                  {/* SEO Image 7: Full Expedition (Consistent Figure Style) */}
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section6_Image1}
                        alt="Full expedition ship crossing the Drake Passage toward Antarctica with open ocean"
                        className="drake-img-fluid"
                      />
                    </div>
                    <figcaption className="drake-hero-caption">
                      <span className="drake-caption-tag">Option 01</span>
                      The standard crossing offers a gradual transition into the
                      Antarctic wilderness.
                    </figcaption>
                  </figure>

                  <span className="drake-choice-badge-navy">
                    Expedition Standard
                  </span>
                  <h3>Cross the Drake Passage</h3>
                  <ul className="drake-choice-list-navy">
                    <li>Full expedition experience</li>
                    <li>Gradual transition into Antarctica</li>
                    <li>More time onboard the expedition vessel</li>
                  </ul>
                </div>

                {/* Option 2: Fly */}
                <div className="drake-choice-card-redesign">
                  {/* SEO Image 8: Scenic Southern Ocean (Consistent Figure Style) */}
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section6_Image2}
                        alt="Scenic Southern Ocean views during Drake Passage cruise expedition"
                        className="drake-img-fluid"
                      />
                    </div>
                    <figcaption className="drake-hero-caption">
                      <span className="drake-caption-tag">Option 02</span>
                      Fly-cruise itineraries bypass the water crossing for
                      faster arrival.
                    </figcaption>
                  </figure>

                  <span className="drake-choice-badge-navy">
                    Time Optimized
                  </span>
                  <h3>Fly-Cruise Option</h3>
                  <ul className="drake-choice-list-navy">
                    <li>Avoids the ocean crossing</li>
                    <li>Reduces transit time</li>
                    <li>Appeals to highly motion-sensitive travelers</li>
                  </ul>
                </div>
              </div>

              <div className="drake-choice-footer">
                <p className="drake-section-p-clean">
                  Travelers seeking the full Antarctica narrative often choose
                  to cross. Those prioritizing speed or comfort may prefer to
                  fly.
                </p>

                {/* Consistent White Editorial Box */}
                <div className="drake-editorial-note-white">
                  <p>
                    The right decision depends on comfort level and travel
                    priorities.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: WHO IS IT RIGHT FOR — Side-by-Side Cards with Centered Heading ===== */}
      <section className="drake-section drake-bg-white drake-audience-redesign">
        <div className="drake-section-inner drake-wide">
          {/* Centered Header Area */}
          <div className="drake-audience-header-center">
            <span className="drake-section-number">07</span>
            <h2 className="drake-section-h2" style={{ textAlign: "center" }}>
              Who the Drake Passage <br />
              Is Right For
            </h2>
            <div className="drake-navy-divider-center"></div>
          </div>

          <div className="drake-audience-grid-side">
            {/* Group 1: Best Suited For */}
            <div className="drake-audience-card-clean drake-bg-soft-blue">
              <div className="drake-card-icon-circle">
                <span className="drake-icon-check">
                  <Check size={24} strokeWidth={2.5} />
                </span>
              </div>
              <h3>Best suited for travelers who:</h3>
              <ul className="drake-audience-list-navy">
                <li>Are comfortable with ocean travel</li>
                <li>Want the full Antarctica expedition experience</li>
                <li>Value the journey as part of the destination</li>
              </ul>
            </div>

            {/* Group 2: May prefer alternatives */}
            <div className="drake-audience-card-clean drake-card-outline">
              <div className="drake-card-icon-circle">
                <span className="drake-icon-alert">
                  <AlertCircle size={24} strokeWidth={2.5} />
                </span>
              </div>
              <h3>May prefer alternatives if:</h3>
              <ul className="drake-audience-list-navy">
                <li>Highly sensitive to motion</li>
                <li>Limited mobility or balance concerns</li>
                <li>Prefer minimal transit time</li>
              </ul>
            </div>
          </div>

          <div className="drake-audience-footer-center">
            <div className="drake-editorial-note-centered">
              <p>
                This distinction allows the journey to be aligned correctly from
                the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: HOW TO PREPARE — Consistent Sticky Design with Navy Schema ===== */}
      <section className="drake-section drake-bg-soft drake-prepare-section">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper flipped">
            {/* Left Column: Sticky Title & Intro */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">08</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  How to Prepare for <br />
                  the Drake Passage
                </h2>

                <p className="drake-sticky-lead-text">
                  Preparation is straightforward when handled in advance.
                  Aligning expectations with planning ensures a manageable
                  experience.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Content */}
            <main className="drake-content-column">
              <div className="drake-prepare-grid-redesign">
                {/* Step 1 */}
                <div className="drake-prepare-step-card">
                  <div className="drake-prepare-badge">Step 01</div>
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section8_Image1}
                        alt="Polar expedition ship designed for Drake Passage Antarctica cruises"
                        className="drake-img-fluid"
                      />
                    </div>
                  </figure>
                  <p className="drake-prepare-text-navy">
                    Selecting a ship designed for polar stability
                  </p>
                </div>

                {/* Step 2 */}
                <div className="drake-prepare-step-card">
                  <div className="drake-prepare-badge">Step 02</div>
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section8_Image2}
                        alt="Motion management and preparation for Drake Passage crossing conditions"
                        className="drake-img-fluid"
                      />
                    </div>
                  </figure>
                  <p className="drake-prepare-text-navy">
                    Bringing motion management options if needed
                  </p>
                </div>

                {/* Step 3 */}
                <div className="drake-prepare-step-card">
                  <div className="drake-prepare-badge">Step 03</div>
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section8_Image3}
                        alt="Layered clothing and packing for Drake Passage cruise comfort"
                        className="drake-img-fluid"
                      />
                    </div>
                  </figure>
                  <p className="drake-prepare-text-navy">
                    Packing layered clothing for comfort
                  </p>
                </div>

                {/* Step 4 */}
                <div className="drake-prepare-step-card">
                  <div className="drake-prepare-badge">Step 04</div>
                  <figure className="drake-hero-figure">
                    <div className="drake-figure-inner">
                      <img
                        src={section8_Image4}
                        alt="Understanding varying Drake Passage weather and sea conditions"
                        className="drake-img-fluid"
                      />
                    </div>
                  </figure>
                  <p className="drake-prepare-text-navy">
                    Understanding that conditions vary
                  </p>
                </div>
              </div>

              <div className="drake-prepare-footer-redesign">
                {/* Consistent White Editorial Box with Navy Border */}
                <div className="drake-editorial-note-white">
                  <p>
                    When planned correctly, the Drake Passage becomes manageable
                    rather than uncertain.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: EXPERT INSIGHT — Redesigned side-by-side layout featuring Angela Hughes' photo and expert perspective ===== */}
      <section className="drake-section drake-bg-white drake-expert-redesign">
        <div className="drake-section-inner drake-wide">
          <div className="drake-expert-flex">
            {/* Left Column: Content area */}
            <div className="drake-expert-content-wrap">
              <div className="drake-expert-header-left">
                <span className="drake-section-number">09</span>
                <h2 className="drake-section-h2 left-bar">
                  Expert Insight from <br />
                  Angela Hughes
                </h2>
              </div>

              <div className="drake-expert-quote-body">
                <div className="drake-expert-icon-navy">"</div>

                <p className="drake-expert-paragraph drake-highlight">
                  In working with Antarctica clients, the concern around the
                  Drake Passage is almost always greater before the trip than
                  after.
                </p>

                <p className="drake-expert-paragraph">
                  Once travelers understand how the crossing is structured and
                  select the right ship, it becomes a manageable and expected
                  part of the journey.
                </p>

                <p className="drake-expert-paragraph drake-final-insight">
                  The difference is not in avoiding the Drake Passage. It is in
                  planning it correctly.
                </p>
              </div>

              <div className="drake-expert-author-footer">
                <div className="drake-expert-line-navy"></div>
                <p className="drake-expert-name">Angela Hughes</p>
                <p className="drake-expert-title">
                  Antarctica Expedition Specialist
                </p>
              </div>
            </div>

            {/* Right Column: Professional Photo - Sticky */}
            <div className="drake-expert-image-wrap">
              <div className="drake-expert-photo-container">
                <img
                  src={ProfilePicture}
                  alt="Angela Hughes - Antarctica Expedition Specialist"
                  className="drake-expert-img"
                />
                {/* Decorative Navy Frame Accent */}
                <div className="drake-expert-photo-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: WHAT HAPPENS NEXT — Consistent Sticky Design with Navy Schema ===== */}
      <section className="drake-section drake-bg-soft drake-next-section">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper flipped">
            {/* Left Column: Sticky Title & Eyebrow */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">10</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  What Happens Next
                </h2>

                <p className="drake-sticky-lead-text">
                  Our process is designed to ensure every Antarctica itinerary
                  is aligned with your expectations before the journey begins.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Process Timeline */}
            <main className="drake-content-column">
              <div className="drake-next-steps-timeline">
                {/* Step 1 */}
                <div className="drake-next-step-row-new">
                  <div className="drake-next-step-circle-navy">01</div>
                  <div className="drake-next-step-card-white">
                    <p className="drake-section-p-clean">
                      Consultation to define comfort level and expectations
                    </p>
                  </div>
                </div>

                <div className="drake-next-connector-navy"></div>

                {/* Step 2 */}
                <div className="drake-next-step-row-new">
                  <div className="drake-next-step-circle-navy">02</div>
                  <div className="drake-next-step-card-white">
                    <p className="drake-section-p-clean">
                      Selection of the right expedition ship and itinerary
                    </p>
                  </div>
                </div>

                <div className="drake-next-connector-navy"></div>

                {/* Step 3 */}
                <div className="drake-next-step-row-new">
                  <div className="drake-next-step-circle-navy">03</div>
                  <div className="drake-next-step-card-white">
                    <p className="drake-section-p-clean">
                      Full preparation for the Antarctica journey
                    </p>
                  </div>
                </div>
              </div>

              <div className="drake-next-footer-redesign">
                {/* Consistent White Editorial Box with Navy Border */}
                <div className="drake-editorial-note-white">
                  <p>
                    Every detail is structured before confirmation to ensure
                    alignment.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: WHY BOOK — Consistent Sticky Design with Navy Schema ===== */}
      <section className="drake-section drake-bg-white drake-why-book-section">
        <div className="drake-section-inner drake-wide">
          <div className="drake-sticky-wrapper">
            {/* Left Column: Sticky Title & Eyebrow */}
            <aside className="drake-side-sticky">
              <div className="drake-sticky-element">
                <span className="drake-section-number">11</span>
                <h2 className="drake-section-h2 drake-left-bar">
                  Why Book with Angela <br />
                  Hughes and Trips & Ships
                </h2>

                <p className="drake-sticky-lead-text">
                  Strategic expertise refined over four decades in the luxury
                  and expedition travel industry.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Content & Benefits */}
            <main className="drake-content-column">
              <div className="drake-why-bio-navy">
                <p className="drake-section-p-clean drake-why-intro-navy">
                  Understanding the Drake Passage is part of planning Antarctica
                  correctly.
                </p>
                <p className="drake-section-p-clean">
                  Angela Hughes has over four decades of experience and has
                  traveled to 121 countries and territories, working with
                  clients on complex global itineraries.
                </p>
              </div>

              <div className="drake-why-benefits-area-new">
                <p className="drake-why-benefit-title-navy">
                  Clients benefit from:
                </p>

                <div className="drake-why-benefits-grid-navy">
                  {/* Benefit 1 */}
                  <div className="drake-benefit-card-navy">
                    <span className="drake-benefit-icon-navy">
                      <Sparkles size={20} strokeWidth={1.5} />
                    </span>
                    <p>Strategic ship selection</p>
                  </div>
                  {/* Benefit 2 */}
                  <div className="drake-benefit-card-navy">
                    <span className="drake-benefit-icon-navy">
                      <Sparkles size={20} strokeWidth={1.5} />
                    </span>
                    <p>Preparation guidance tailored to comfort level</p>
                  </div>
                  {/* Benefit 3 */}
                  <div className="drake-benefit-card-navy">
                    <span className="drake-benefit-icon-navy">
                      <Sparkles size={20} strokeWidth={1.5} />
                    </span>
                    <p>Access to preferred expedition inventory</p>
                  </div>
                  {/* Benefit 4 */}
                  <div className="drake-benefit-card-navy">
                    <span className="drake-benefit-icon-navy">
                      <Sparkles size={20} strokeWidth={1.5} />
                    </span>
                    <p>Ongoing support throughout the journey</p>
                  </div>
                </div>
              </div>

              <div className="drake-why-footer-redesign">
                {/* Consistent Soft Blue Editorial Box with Navy Border */}
                <div className="drake-editorial-note-blue">
                  <p>
                    Every Antarctica itinerary is reviewed in advance to ensure
                    it is structured correctly.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION — Full-Width Design with Navy and Soft-Blue Schema ===== */}
      <section className="drake-section drake-bg-soft drake-faq-fullwidth">
        <div className="drake-section-inner drake-wide">
          {/* Centered Header Area */}
          <div className="drake-faq-header-centered">
            <span className="drake-section-number">12</span>
            <h2 className="drake-section-h2" style={{ textAlign: "center" }}>
              Frequently Asked Questions
            </h2>
            <div className="drake-navy-divider-center"></div>
            <p className="drake-faq-intro-text">
              Everything you need to know about the Drake Passage crossing
              experience.
            </p>
          </div>

          {/* Full Width Accordion Area */}
          <div className="drake-faq-full-container">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — Redesigned without Gold, using high-contrast White and Navy schema ===== */}
      <section className="drake-final-cta-section">
        {/* Dark Navy Overlay for maximum text clarity */}
        <div className="drake-cta-overlay-navy"></div>

        <div className="drake-final-cta-inner">
          {/* Heading with Soft Blue divider replacing gold */}
          <h2 className="drake-section-h2 drake-text-white">
            Plan Your Antarctica Expedition
          </h2>
          <div className="drake-cta-divider-blue"></div>

          <div className="drake-cta-content-wrap">
            <p className="drake-cta-paragraph drake-cta-lead">
              The Drake Passage is not something to avoid. It is something to
              approach correctly.
            </p>
            <p className="drake-cta-paragraph">
              The difference is in how it is planned.
            </p>
          </div>

          <div className="drake-cta-button-wrap">
            {/* Button: White background with Navy text for high visibility */}
            <button className="drake-cta-btn-white">
              Start Your Antarctica Plan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
