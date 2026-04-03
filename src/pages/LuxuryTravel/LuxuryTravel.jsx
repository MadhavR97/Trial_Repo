import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./LuxuryTravel.css";
import {
  ChevronDown,
  Star,
  Sparkles,
  Check,
  AlertCircle,
  Plus,
  Minus,
} from "lucide-react";

// Import Images
import ProfilePicture from "../../assets/image.webp";
import Hero1Img from "../../assets/LuxuryTravel/Hero1.webp";
import Hero2Img from "../../assets/LuxuryTravel/Hero2.webp";
import Hero3Img from "../../assets/LuxuryTravel/Hero3.webp";
import Section2Image1 from "../../assets/LuxuryTravel/section2_image1.webp";
import Section6Bg from "../../assets/LuxuryTravel/section6_bg.webp";
import Section6Image2 from "../../assets/LuxuryTravel/section6_image2.webp";
import Section7Image from "../../assets/LuxuryTravel/section7_image.webp";
import Section11Bg from "../../assets/LuxuryTravel/section11_bg.webp";

// --- FAQ Component Logic ---
function FAQComponent() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqData = [
    {
      q: "What makes Scenic Eclipse different from other luxury cruises?",
      a: "Scenic Eclipse is a discovery yacht, not a traditional cruise ship. The experience is designed around exploration, enrichment, and destination depth rather than onboard entertainment or volume sightseeing. It combines expedition capability with refined luxury in a smaller-ship environment.",
    },
    {
      q: "Is Scenic Eclipse considered expedition travel?",
      a: "Yes. Scenic Eclipse operates in the expedition and discovery travel space. While the onboard experience is highly comfortable, itineraries often involve remote regions, expert-led excursions, and flexible daily planning shaped by weather and local conditions.",
    },
    {
      q: "Do I need to be physically fit to travel on Scenic Eclipse?",
      a: "Scenic Eclipse offers a range of activity levels. Some excursions involve light walking, while others may be more active. Choosing the right itinerary and activity profile is an important part of planning, and guidance helps ensure expectations are aligned with comfort and mobility.",
    },
    {
      q: "Are prices higher when booking Scenic Eclipse through a travel agency?",
      a: "No. Scenic Eclipse pricing is the same whether you book directly with the cruise line or through a qualified travel agency. Working with an agency adds planning expertise and support without increasing the cruise cost.",
    },
    {
      q: "Is it better to book Scenic Eclipse direct or through a travel advisor?",
      a: "Booking direct secures the sailing. Working with a travel advisor helps design and support the entire journey, including itinerary alignment, seasonality guidance, cabin selection, travel coordination, and ongoing support before and after the trip.",
    },
    {
      q: "Will I receive the same onboard experience if I book through Trips & Ships Luxury Travel?",
      a: "Yes. Booking through Trips & Ships does not change the onboard experience in any way. It enhances the journey by providing expert planning and concierge-level support outside of the ship.",
    },
    {
      q: "What destinations does Scenic Eclipse travel to?",
      a: "Scenic Eclipse sails to polar regions, remote destinations, and select warm-water regions depending on the season. Itineraries may include Antarctica, the Arctic, South America, the South Pacific, and other destinations not accessible to traditional cruise ships.",
    },
    {
      q: "How important is seasonality when choosing a Scenic Eclipse itinerary?",
      a: "Seasonality is critical. Weather, wildlife activity, daylight hours, and sea conditions all influence the overall experience. Thoughtful planning ensures the timing of the journey aligns with what travelers hope to see and experience.",
    },
    {
      q: "How do I choose the right cabin on Scenic Eclipse?",
      a: "Cabin selection involves more than choosing a category. Location on the ship, deck placement, proximity to amenities, and overall ship flow all matter. Strategic guidance helps select a cabin that best fits comfort preferences and travel style.",
    },
    {
      q: "Is travel insurance recommended for Scenic Eclipse trips?",
      a: "Yes. Because Scenic Eclipse itineraries often involve remote or expedition-style travel, comprehensive travel insurance is strongly recommended. Coverage should be appropriate for the destination and nature of the journey.",
    },
    {
      q: "What happens if itineraries or daily plans change?",
      a: "Discovery yacht travel allows for flexibility. Weather and local conditions may influence daily plans. With experienced planning and support, adjustments are handled smoothly and communicated clearly so the experience remains positive and well-paced.",
    },
    {
      q: "Who will I work with when booking Scenic Eclipse through Trips & Ships Luxury Travel?",
      a: "You will work directly with Angela Hughes, CEO and Founder of Trips & Ships Luxury Travel. Angela personally guides the planning process for Scenic Eclipse journeys, ensuring itinerary selection, seasonality, cabin strategy, and travel details are thoughtfully aligned from the start.",
    },
  ];

  return (
    <div className="lux-faq-list emerald-style">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`lux-faq-item emerald-faq-item${openIndex === index ? " lux-open emerald-faq-item--open" : ""}`}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="lux-faq-question emerald-faq-question">
            <span className="lux-q-text">{item.q}</span>
            <span className="lux-faq-icon emerald-faq-icon">
              {openIndex === index ? (
                <Minus size={20} strokeWidth={1.5} />
              ) : (
                <Plus size={20} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="lux-faq-answer emerald-faq-answer">
              <div className="lux-a-inner">
                <p className="lux-section-p">{item.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function LuxuryTravel() {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com",
                logo: {
                  "@type": "ImageObject",
                  "@id": "https://www.tripsandships.com/#logo",
                  url: "https://www.tripsandships.com/logo.webp",
                },
              },
              {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                name: "Angela Hughes",
                jobTitle: "CEO & Founder",
                worksFor: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
              },
              {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                name: "Trips & Ships Luxury Travel",
                url: "https://www.tripsandships.com",
                logo: {
                  "@id": "https://www.tripsandships.com/#logo",
                },
                description:
                  "Luxury travel agency specializing in Scenic Eclipse discovery yacht planning, expedition cruising, and small-ship luxury travel.",
                founder: {
                  "@id": "https://www.tripsandships.com/#angela-hughes",
                },
                areaServed: "Worldwide",
                knowsAbout: [
                  "Scenic Eclipse Discovery Yachts",
                  "Luxury expedition cruising",
                  "Discovery yacht travel",
                  "Small ship luxury cruises",
                  "Antarctica expedition travel",
                  "Arctic expedition travel",
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-eclipse/#webpage",
                url: "https://www.tripsandships.com/scenic-eclipse/",
                name: "Scenic Eclipse Discovery Yachts | Expert Planning by Trips & Ships Luxury Travel",
                isPartOf: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
                about: [
                  {
                    "@id": "https://www.tripsandships.com/#travelagency",
                  },
                  {
                    "@id": "https://www.tripsandships.com/#angela-hughes",
                  },
                ],
                primaryImageOfPage: {
                  "@id": "https://www.tripsandships.com/#logo",
                },
                inLanguage: "en-US",
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/scenic-eclipse/#faq",
                isPartOf: {
                  "@id":
                    "https://www.tripsandships.com/scenic-eclipse/#webpage",
                },
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What makes Scenic Eclipse different from other luxury cruises?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic Eclipse is a discovery yacht, not a traditional cruise ship. The experience is designed around exploration, enrichment, and destination depth rather than onboard entertainment or volume sightseeing. It combines expedition capability with refined luxury in a smaller-ship environment.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenic Eclipse considered expedition travel?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Scenic Eclipse operates in the expedition and discovery travel space. While the onboard experience is highly comfortable, itineraries often involve remote regions, expert-led excursions, and flexible daily planning shaped by weather and local conditions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need to be physically fit to travel on Scenic Eclipse?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic Eclipse offers a range of activity levels. Some excursions involve light walking, while others may be more active. Choosing the right itinerary and activity profile is an important part of planning, and guidance helps ensure expectations are aligned with comfort and mobility.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are prices higher when booking Scenic Eclipse through a travel agency?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Scenic Eclipse pricing is the same whether you book directly with the cruise line or through a qualified travel agency. Working with an agency adds planning expertise and support without increasing the cruise cost.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is it better to book Scenic Eclipse direct or through a travel advisor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Booking direct secures the sailing. Working with a travel advisor helps design and support the entire journey, including itinerary alignment, seasonality guidance, cabin selection, travel coordination, and ongoing support before and after the trip.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will I receive the same onboard experience if I book through Trips & Ships Luxury Travel?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Booking through Trips & Ships does not change the onboard experience in any way. It enhances the journey by providing expert planning and concierge-level support outside of the ship.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What destinations does Scenic Eclipse travel to?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic Eclipse sails to polar regions, remote destinations, and select warm-water regions depending on the season. Itineraries may include Antarctica, the Arctic, South America, the South Pacific, and other destinations not accessible to traditional cruise ships.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How important is seasonality when choosing a Scenic Eclipse itinerary?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Seasonality is critical. Weather, wildlife activity, daylight hours, and sea conditions all influence the overall experience. Thoughtful planning ensures the timing of the journey aligns with what travelers hope to see and experience.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I choose the right cabin on Scenic Eclipse?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Cabin selection involves more than choosing a category. Location on the ship, deck placement, proximity to amenities, and overall ship flow all matter. Strategic guidance helps select a cabin that best fits comfort preferences and travel style.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is travel insurance recommended for Scenic Eclipse trips?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Because Scenic Eclipse itineraries often involve remote or expedition-style travel, comprehensive travel insurance is strongly recommended. Coverage should be appropriate for the destination and nature of the journey.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What happens if itineraries or daily plans change?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Discovery yacht travel allows for flexibility. Weather and local conditions may influence daily plans. With experienced planning and support, adjustments are handled smoothly and communicated clearly so the experience remains positive and well-paced.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who will I work with when booking Scenic Eclipse through Trips & Ships Luxury Travel?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You will work directly with Angela Hughes, CEO and Founder of Trips & Ships Luxury Travel. Angela personally guides the planning process for Scenic Eclipse journeys, ensuring itinerary selection, seasonality, cabin strategy, and travel details are thoughtfully aligned from the start.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* ===== SECTION 1: SCENIC ECLIPSE — High-impact introduction to Discovery Yachts and Trips & Ships expert planning ===== */}
      <section className="lux-hero">
        <div className="lux-hero-content">
          <span className="lux-hero-eyebrow">
            Expert Planning by Trips & Ships Luxury Travel
          </span>

          <h1 className="lux-h1">Scenic Eclipse Discovery Yachts</h1>

          <p className="lux-hero-lead">
            Scenic Eclipse Discovery Yachts represent a distinct category of
            ultra-luxury travel designed for exploration, immersion, and
            destination depth. These are not traditional cruise ships. They are
            purpose-built discovery yachts created for travelers who want to
            experience the world with intention, comfort, and expert guidance.
          </p>

          <div className="lux-hero-details">
            <p className="lux-hero-note">
              Trips & Ships Luxury Travel plans Scenic Eclipse journeys using a
              refined planning framework guided by Angela Hughes’ decades of
              experience in luxury and expedition travel. Every itinerary,
              season, cabin choice, and travel detail is thoughtfully considered
              before the journey begins, ensuring the experience feels aligned
              from the very first decision.
            </p>
          </div>

          {/* Visibility: Pure white text with gold bottom border */}
          <button
            className="lux-hero-read-more"
            onClick={() => {
              const details = document.querySelector(".lux-hero-details");
              if (details) {
                details.classList.toggle("lux-expanded");
              }
            }}
          >
            Explore Planning Expertise
          </button>

          <div className="lux-hero-btns">
            <button className="lux-btn-primary">
              Schedule a Scenic Eclipse Planning Consultation
            </button>
            <div className="lux-btn-secondary-wrap">
              <span className="lux-secondary-label">Prefer email?</span>
              <a
                href="mailto:sales@tripsandships.com"
                className="lux-btn-text-link"
              >
                sales@tripsandships.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: EXPERTISE — Sticky Editorial Layout with New Navy/Soft-Blue Schema ===== */}
      <section className="lux-section lux-bg-white lux-expertise-redesign">
        <div className="lux-inner">
          <div className="lux-sticky-split-layout">
            {/* Left Side: Sticky Header and Step Number */}
            <aside className="lux-title-side-sticky">
              <div className="lux-sticky-container">
                <span className="lux-section-number">01</span>
                <h2 className="lux-h2">
                  Expert Planning for <br />
                  Scenic Eclipse Discovery Yachts
                </h2>
                <div className="lux-navy-bar-accent"></div>
              </div>
            </aside>

            {/* Right Side: Narrative Content */}
            <main className="lux-content-side-scroll">
              <p className="lux-lead-text">
                Planning a Scenic Eclipse journey requires a different level of
                expertise than traditional luxury cruising. Discovery yachts
                operate in remote regions, follow expedition-style pacing, and
                are shaped by seasonality, weather, and regional conditions.
              </p>

              {/* Editorial box using the requested Soft Blue schema */}
              <div className="lux-editorial-box-blue">
                <p className="lux-section-p">
                  Our role is not simply to book the sailing. It is to help
                  travelers determine whether Scenic Eclipse is the right
                  experience and, if so, to design the journey thoughtfully and
                  intelligently from the start.
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: EXPERT INSIGHT — Sticky Editorial Layout with Navy Schema ===== */}
      <section className="lux-section lux-bg-soft lux-expert-redesign">
        <div className="lux-inner lux-wide">
          <div className="lux-sticky-wrapper flipped">
            {/* Left Side: Sticky Title & Recognition Sidebar */}
            <aside className="lux-side-sticky">
              <div className="lux-sticky-element">
                <span className="lux-section-number">02</span>
                <h2 className="lux-h2 lux-left-bar">
                  Expert Insight from <br />
                  Angela Hughes
                </h2>

                {/* Professional Recognition Box filling the sticky space */}
                <div className="lux-credentials-box-navy">
                  <div className="lux-expert-avatar-wrap">
                    <img
                      src={ProfilePicture}
                      alt="Angela Hughes"
                      className="lux-avatar-img"
                    />
                  </div>
                  <h4 className="lux-sidebar-title-navy">Recognition</h4>
                  <ul className="lux-credentials-list-navy">
                    <li>Travelpulse Most Influential Women in Travel 2026</li>
                    <li>Luxury Travel Advisor Trainer</li>
                    <li>International Strategy Speaker</li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Right Side: Scrolling Narrative Content */}
            <main className="lux-content-column">
              <h3 className="lux-h3-navy">
                Angela Hughes — CEO & Founder, Trips & Ships Luxury Travel
              </h3>

              <p className="lux-section-p-clean">
                Angela Hughes is the CEO and Founder of Trips & Ships Luxury
                Travel and a recognized authority in luxury cruising, expedition
                travel, and discovery yacht experiences. With more than four
                decades in the travel industry, Angela trains luxury travel
                advisors, consults with cruise leadership teams, and speaks
                internationally on premium travel strategy.
              </p>

              {/* SEO Image: (Consistent Figure Style) */}
              <figure className="lux-hero-figure">
                <div className="lux-figure-inner">
                  <img
                    src={Section2Image1}
                    alt="Expert planning for Drake Passage crossing on luxury expedition ship Antarctica"
                    className="lux-img-fluid"
                  />
                </div>
                <figcaption className="lux-hero-caption">
                  <span className="lux-caption-tag">Strategic Planning</span>
                  Decades of experience ensure that complex logistics like the
                  Drake Passage are managed professionally.
                </figcaption>
              </figure>

              <div className="lux-expert-highlight-box-white">
                <p className="lux-section-p-clean">
                  Her expertise with Scenic Eclipse Discovery Yachts comes from
                  real-world experience — understanding how expedition travel
                  unfolds day by day, how seasonality affects itineraries, and
                  how small planning decisions can significantly shape the guest
                  experience.
                </p>
              </div>

              <p className="lux-section-p-clean">
                Through decades of work in the luxury cruise and expedition
                space, Angela Hughes and the Trips & Ships Luxury Travel
                leadership team maintain direct access to the president and vice
                president of the Scenic Group. This relationship provides
                senior-level insight when planning Scenic Eclipse journeys,
                ensuring alignment and clarity.
              </p>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SUITABILITY — Full-Width Side-by-Side Design with Navy Schema ===== */}
      <section className="lux-section lux-bg-white lux-suitability-full">
        <div className="lux-inner-full">
          {/* Centered Header Area */}
          <div className="lux-suitability-header-centered">
            <span className="lux-section-number">03</span>
            <h2 className="lux-h2">Is Scenic Eclipse Right for You?</h2>
            <div className="lux-navy-divider-center"></div>
          </div>

          <div className="lux-suitability-side-grid">
            {/* Column 1: Ideal Fit - Soft Blue Background */}
            <div className="lux-suitability-box lux-bg-soft-blue">
              <div className="lux-box-header">
                <span className="lux-box-icon">
                  <Check size={24} strokeWidth={2.5} />
                </span>
                <h3>Scenic Eclipse Is Ideal If You:</h3>
              </div>
              <ul className="lux-suitability-list-navy">
                <li>
                  Want immersive discovery rather than mass-market cruising
                </li>
                <li>Value learning, enrichment, and destination depth</li>
                <li>Prefer smaller ships with elevated service</li>
                <li>Are comfortable with expedition-style pacing</li>
                <li>Want professional planning for complex itineraries</li>
              </ul>
            </div>

            {/* Column 2: Not Ideal Fit - Navy Outline */}
            <div className="lux-suitability-box lux-box-outline-navy">
              <div className="lux-box-header">
                <span className="lux-box-icon">
                  <AlertCircle size={24} strokeWidth={2.5} />
                </span>
                <h3>Scenic Eclipse May Not Be Ideal If You:</h3>
              </div>
              <ul className="lux-suitability-list-navy">
                <li>Prefer large-ship entertainment and nightlife</li>
                <li>Are shopping strictly on price</li>
                <li>Want rigid sightseeing schedules</li>
                <li>Expect a traditional cruise-ship atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: ABOUT THE YACHTS — Defining Discovery Yachts and the Scenic Eclipse philosophy ===== */}
      <section className="lux-section lux-bg-cream">
        <div className="lux-inner lux-narrow">
          {/* Centered Header Wrapper */}
          <div className="lux-about-header">
            <span className="lux-section-number">04</span>
            <h2 className="lux-h2">About Scenic Eclipse Discovery Yachts</h2>
          </div>

          <div className="lux-about-content">
            <p className="lux-about-lead">
              Scenic Eclipse I and II are classified as Discovery Yachts —
              vessels that blend ultra-luxury comfort with expedition-grade
              capability. They are designed to reach destinations traditional
              cruise ships cannot, offering curated experiences supported by
              expert teams and thoughtful onboard programming.
            </p>

            <div className="lux-editorial-divider"></div>

            <p className="lux-section-p">
              The experience prioritizes exploration, immersion, and pacing over
              volume sightseeing. Scenic Eclipse appeals to travelers who care
              deeply about how a journey feels, not just where it goes.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: PLANNING FACTORS — Redesigned with Sticky Side-Heading and Navy Schema ===== */}
      <section className="lux-section lux-bg-white lux-planning-redesign">
        <div className="lux-inner lux-wide">
          <div className="lux-sticky-wrapper">
            {/* Left Column: Sticky Title & Intro */}
            <aside className="lux-side-sticky">
              <div className="lux-sticky-element">
                <span className="lux-section-number">05</span>
                <h2 className="lux-h2 lux-left-bar">
                  How an Expert Chooses the <br />
                  Right Scenic Eclipse Sailing
                </h2>

                <p className="lux-sticky-lead-text">
                  Selecting the right Scenic Eclipse itinerary involves far more
                  than choosing a destination. Expert planning considers how
                  multiple factors interact to shape the overall experience.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Planning Cards Grid */}
            <main className="lux-content-column">
              <div className="lux-planning-grid-redesign">
                {/* Factor 1 */}
                <div className="lux-planning-card-navy">
                  <span className="lux-planning-icon-navy">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </span>
                  <p className="lux-planning-text-navy">
                    Experience alignment between discovery travel and comfort
                    expectations
                  </p>
                </div>

                {/* Factor 2 */}
                <div className="lux-planning-card-navy">
                  <span className="lux-planning-icon-navy">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </span>
                  <p className="lux-planning-text-navy">
                    Seasonality, including weather, wildlife, daylight, and sea
                    conditions
                  </p>
                </div>

                {/* Factor 3 */}
                <div className="lux-planning-card-navy">
                  <span className="lux-planning-icon-navy">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </span>
                  <p className="lux-planning-text-navy">
                    Itinerary pacing and expedition intensity
                  </p>
                </div>

                {/* Factor 4 */}
                <div className="lux-planning-card-navy">
                  <span className="lux-planning-icon-navy">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </span>
                  <p className="lux-planning-text-navy">
                    Cabin placement and ship flow
                  </p>
                </div>

                {/* Factor 5 - Full Width in the grid */}
                <div className="lux-planning-card-navy lux-grid-span-full">
                  <span className="lux-planning-icon-navy">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </span>
                  <p className="lux-planning-text-navy">
                    Flights, transfers, documentation, and pre- and post-cruise
                    planning
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: PLANNING METHOD — Integrating your custom Scenic Eclipse imagery ===== */}
      <section className="lux-section lux-bg-white">
        <div className="lux-inner">
          {/* Visual Title Block with Image 1 */}
          <div
            className="lux-method-hero"
            style={{ backgroundImage: `url(${Section6Bg})` }}
          >
            <div className="lux-method-hero-overlay"></div>
            <div className="lux-method-hero-content">
              <span className="lux-method-eyebrow">Strategic Methodology</span>
              <h2 className="lux-h2-white">
                The Trips & Ships Scenic Eclipse <br />
                Planning Approach
              </h2>
              <p className="lux-method-hero-intro">
                Every Scenic Eclipse journey planned through Trips & Ships
                follows a clear, experience-driven approach refined over decades
                in luxury and expedition travel.
              </p>
            </div>
          </div>

          <div className="lux-method-layout">
            {/* Left Column: The 5 Planning Pillars */}
            <div className="lux-method-steps">
              <div className="lux-method-step">
                <div className="lux-step-num">01</div>
                <div className="lux-step-content">
                  <h3 className="lux-h3-sm">Experience & Traveler Fit</h3>
                  <p className="lux-section-p">
                    Ensuring Scenic Eclipse is the right style of journey based
                    on curiosity, comfort, and expectations.
                  </p>
                </div>
              </div>

              <div className="lux-method-step">
                <div className="lux-step-num">02</div>
                <div className="lux-step-content">
                  <h3 className="lux-h3-sm">Destination & Seasonality</h3>
                  <p className="lux-section-p">
                    Matching itinerary timing to regional conditions, wildlife
                    activity, and overall experience quality.
                  </p>
                </div>
              </div>

              <div className="lux-method-step">
                <div className="lux-step-num">03</div>
                <div className="lux-step-content">
                  <h3 className="lux-h3-sm">Itinerary & Pacing</h3>
                  <p className="lux-section-p">
                    Evaluating how the journey unfolds day by day, balancing
                    exploration with time to recharge.
                  </p>
                </div>
              </div>

              <div className="lux-method-step">
                <div className="lux-step-num">04</div>
                <div className="lux-step-content">
                  <h3 className="lux-h3-sm">Cabin & Ship Considerations</h3>
                  <p className="lux-section-p">
                    Selecting the right cabin location based on ship movement,
                    access, noise, and onboard flow.
                  </p>
                </div>
              </div>

              <div className="lux-method-step">
                <div className="lux-step-num">05</div>
                <div className="lux-step-content">
                  <h3 className="lux-h3-sm">
                    Travel Coordination & Ongoing Support
                  </h3>
                  <p className="lux-section-p">
                    Thoughtfully coordinating flights, hotels, transfers,
                    documentation, travel insurance, and concierge-level
                    support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Image 2 */}
            <div className="lux-method-image-side">
              <div className="lux-image-frame">
                <img src={Section6Image2} className="lux-featured-img" />
                <div className="lux-image-caption">Discovery Destination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: DECISION MATRIX — Sticky Side-Heading Layout with Navy/Soft-Blue Schema ===== */}
      <section className="lux-section lux-bg-soft lux-matrix-redesign">
        <div className="lux-inner lux-wide">
          <div className="lux-sticky-wrapper">
            {/* Left Column: Sticky Title & Intro */}
            <aside className="lux-side-sticky">
              <div className="lux-sticky-element">
                <span className="lux-section-number">07</span>
                <h2 className="lux-h2 lux-left-bar">
                  Which Yacht <br />
                  Should You Choose?
                </h2>

                <p className="lux-sticky-lead-text">
                  Scenic Eclipse and Emerald Yachts serve very different
                  traveler profiles. Choosing the right yacht depends on how you
                  want your journey to feel.
                </p>
              </div>
            </aside>

            {/* Right Column: Scrolling Matrix Content */}
            <main className="lux-content-column">
              <div className="lux-matrix-container">
                <h3 className="lux-h3-matrix">
                  Scenic Eclipse vs Emerald Yachts — Decision Matrix
                </h3>

                {/* SEO Image: Consistent Figure Style */}
                <figure className="lux-hero-figure">
                  <div className="lux-figure-inner">
                    <img
                      src={Section7Image}
                      alt="Drake Passage expedition cruise compared to traditional luxury yacht experience"
                      className="lux-img-fluid"
                    />
                  </div>
                  <figcaption className="lux-hero-caption">
                    <span className="lux-caption-tag">Comparison</span>
                    Understanding the difference between Drake Passage
                    expeditions and traditional cruising helps determine the
                    right yacht for your journey.
                  </figcaption>
                </figure>

                <div className="lux-table-wrapper">
                  <table className="lux-comparison-table">
                    <thead>
                      <tr>
                        <th className="lux-th-aspect">If You Value…</th>
                        <th className="lux-th-scenic">Choose Scenic Eclipse</th>
                        <th className="lux-th-emerald">
                          Choose Emerald Yachts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="lux-td-label">
                          Exploration & Discovery
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Scenic"
                        >
                          Yes
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Emerald"
                        >
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">
                          Remote or Polar Destinations
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Scenic"
                        >
                          Yes
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Emerald"
                        >
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">Expert-Led Enrichment</td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Scenic"
                        >
                          Yes
                        </td>
                        <td
                          className="lux-td-res lux-val-lim"
                          data-label="Emerald"
                        >
                          Limited
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">
                          Relaxed Coastal Cruising
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Scenic"
                        >
                          No
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Emerald"
                        >
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">
                          Social Yacht Atmosphere
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Scenic"
                        >
                          No
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Emerald"
                        >
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">
                          Warm-Weather Lifestyle Focus
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Scenic"
                        >
                          No
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Emerald"
                        >
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">
                          Expedition-Style Pacing
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Scenic"
                        >
                          Yes
                        </td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Emerald"
                        >
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">Leisure-Forward Pacing</td>
                        <td
                          className="lux-td-res lux-val-no"
                          data-label="Scenic"
                        >
                          No
                        </td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Emerald"
                        >
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="lux-td-label">Destination Depth</td>
                        <td
                          className="lux-td-res lux-val-yes"
                          data-label="Scenic"
                        >
                          Yes
                        </td>
                        <td
                          className="lux-td-res lux-val-lim"
                          data-label="Emerald"
                        >
                          Moderate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: HIGH-LEVEL COMPARISON — Quick-reference summary of brand differences ===== */}
      <section className="lux-section lux-bg-white">
        <div className="lux-inner">
          {/* Centered Header Wrapper */}
          <div className="lux-summary-header">
            <span className="lux-section-number">08</span>
            <h2 className="lux-h2">
              Scenic Eclipse vs Emerald Yachts <br />
              (High-Level Comparison)
            </h2>
          </div>

          <div className="lux-summary-container">
            <div className="lux-summary-table-wrapper">
              <table className="lux-summary-table">
                <thead>
                  <tr>
                    <th className="lux-th-summary">Brand</th>
                    <th className="lux-th-summary">Yacht Style</th>
                    <th className="lux-th-summary">Passenger Count</th>
                    <th className="lux-th-summary">Destinations</th>
                    <th className="lux-th-summary">Best For</th>
                    <th className="lux-th-summary">Experience Type</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Scenic Eclipse Row */}
                  <tr className="lux-row-scenic">
                    <td className="lux-td-brand" data-label="Brand">
                      Scenic Eclipse
                    </td>
                    <td data-label="Yacht Style">Discovery Yacht</td>
                    <td data-label="Passenger Count">Approx. 200</td>
                    <td data-label="Destinations">Polar and remote regions</td>
                    <td data-label="Best For">Experience-driven explorers</td>
                    <td data-label="Experience Type">Expedition-focused</td>
                  </tr>
                  {/* Emerald Yachts Row */}
                  <tr className="lux-row-emerald">
                    <td className="lux-td-brand" data-label="Brand">
                      Emerald Yachts
                    </td>
                    <td data-label="Yacht Style">Boutique Yacht</td>
                    <td data-label="Passenger Count">Approx. 100</td>
                    <td data-label="Destinations">Mediterranean, Caribbean</td>
                    <td data-label="Best For">Relaxed luxury travelers</td>
                    <td data-label="Experience Type">Lifestyle-driven</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: ADVISOR ADVANTAGE — Comparing direct booking vs. expert planning with Trips & Ships ===== */}
      <section className="lux-section lux-bg-cream">
        <div className="lux-inner">
          {/* Centered Header Wrapper */}
          <div className="lux-adv-header">
            <span className="lux-section-number">09</span>
            <h2 className="lux-h2">
              Why Work With Trips & Ships Luxury Travel <br />
              Instead of Booking Scenic Eclipse Direct?
            </h2>
            <p className="lux-adv-intro">
              Scenic does an excellent job designing and operating the Scenic
              Eclipse experience. Where most travelers benefit from working with
              a travel advisor is not in purchasing the cruise, but in designing
              and supporting the journey around it.
            </p>
          </div>

          <div className="lux-comp-grid">
            {/* Panel 1: Direct Booking */}
            <div className="lux-comp-panel lux-direct-booking">
              <h3 className="lux-comp-title">Booking Scenic Eclipse Direct</h3>
              <ul className="lux-comp-list">
                <li>Secures the sailing</li>
                <li>Support focuses on the cruise itself</li>
                <li>Planning is primarily transactional</li>
              </ul>
            </div>

            {/* Panel 2: Trips & Ships Advantage (The Elevated Choice) */}
            <div className="lux-comp-panel lux-advisor-booking">
              <div className="lux-adv-badge">The Expert Approach</div>
              <h3 className="lux-comp-title">
                Booking with Trips & Ships Luxury Travel
              </h3>
              <ul className="lux-comp-list">
                <li>The entire journey is thoughtfully curated</li>
                <li>Expert guidance on itinerary fit and seasonality</li>
                <li>Intentional cabin selection</li>
                <li>Flights, hotels, and transfers coordinated</li>
                <li>Travel insurance reviewed for expedition-level travel</li>
                <li>
                  Dedicated advisor support before, during, and after travel
                </li>
              </ul>
            </div>
          </div>

          {/* Closing Callout */}
          <div className="lux-adv-footer">
            <p className="lux-adv-callout">
              Booking Scenic Eclipse direct secures the sailing. Working with
              Trips & Ships Luxury Travel curates and supports the journey.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: EXPERT FAQs — Detailed answers to common Scenic Eclipse planning questions ===== */}
      <section className="lux-section lux-bg-white">
        <div className="lux-inner lux-narrow-faq">
          {/* Centered Header Wrapper */}
          <div className="lux-faq-header">
            <span className="lux-section-number">10</span>
            <h2 className="lux-h2">Scenic Eclipse FAQs — Expert Answers</h2>
          </div>

          <FAQComponent />
        </div>
      </section>

      {/* ===== SECTION 12: FINAL CTA — The definitive call-to-action to schedule a Scenic Eclipse consultation ===== */}
      <section className="lux-final-cta-section">
        {/* Dark Wash Overlay for Typography Clarity */}
        <div className="lux-cta-overlay"></div>

        <div className="lux-final-cta-inner">
          {/* Centered Heading */}
          <h2 className="lux-h2-white">
            Schedule a Scenic Eclipse <br />
            Planning Consultation
          </h2>

          <div className="lux-cta-content-box">
            <p className="lux-cta-paragraph">
              A Scenic Eclipse journey deserves thoughtful planning. This
              consultation is designed to determine fit, align expectations, and
              ensure the experience is designed properly from the start.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="lux-cta-button-wrap">
            <button className="lux-cta-btn-primary">
              Schedule Your Scenic Eclipse Planning Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 13: ATTRIBUTION — Professional credentials and content metadata ===== */}
      <section className="lux-attribution-section lux-bg-cream">
        <div className="lux-inner lux-narrow">
          <div className="lux-attr-container">
            {/* Attribution Heading */}
            <h2 className="lux-attr-h2">Content Attribution</h2>

            <div className="lux-attr-content">
              <p className="lux-attr-item">
                <span className="lux-attr-label">Written by</span>
                <span className="lux-attr-value">Angela Hughes</span>
              </p>

              <p className="lux-attr-item">
                <span className="lux-attr-label">Reviewed by</span>
                <span className="lux-attr-value">
                  The Trips & Ships Luxury Travel Yacht Planning Team
                </span>
              </p>
            </div>

            {/* Date Metadata */}
            <div className="lux-attr-footer">
              <p className="lux-attr-date">Last updated April 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LuxuryTravel;
