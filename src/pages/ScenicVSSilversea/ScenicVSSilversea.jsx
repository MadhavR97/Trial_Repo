import React, { useState, useEffect } from "react";
import {
  Snowflake,
  Anchor,
  Ship,
  AlertCircle,
  CheckCircle2,
  Globe,
  Key,
  LayoutGrid,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import "../ScenicVSSilversea/ScenicVSSilversea.css";
import scenisilver5 from "../../assets/scenic-vs-silversea-antarctica/scenisilver5.webp";
import scenisilver1 from "../../assets/scenic-vs-silversea-antarctica/scenisilver1.webp";
import scenisilver2 from "../../assets/scenic-vs-silversea-antarctica/scenisilver2.webp";
import scenisilver3 from "../../assets/scenic-vs-silversea-antarctica/scenisilver3.webp";
import { Helmet } from "react-helmet";

const AntarcticaPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "Which is better for Antarctica, Scenic or Silversea?",
      answer:
        "Both Scenic and Silversea operate at a high level, but the better choice depends on your preference for a modern all-inclusive experience versus a more traditional luxury cruise environment.",
    },
    {
      question: "Is Scenic Eclipse newer than Silversea ships?",
      answer:
        "Scenic Eclipse is a purpose-built discovery yacht with a modern design, while Silversea operates a mix of newer senianta-expedition ships and established vessels with a traditional feel.",
    },
    {
      question: "Do Scenic and Silversea offer similar Antarctica itineraries?",
      answer:
        "Both typically visit the Antarctic Peninsula, but exact routes vary based on conditions, timing, and senianta-expedition planning.",
    },
    {
      question: "Which cruise line is more all-inclusive?",
      answer:
        "Scenic emphasizes a simplified all-inclusive structure, while Silversea also includes many elements but may vary by itinerary.",
    },
    {
      question: "Which is more luxurious, Scenic or Silversea?",
      answer:
        "Both are luxury, but Scenic leans modern luxury while Silversea reflects classic luxury.",
    },
    {
      question: "Which is better for first-time Antarctica travelers?",
      answer:
        "Scenic’s simplified structure may appeal to first-time travelers, while Silversea suits those familiar with traditional luxury cruising.",
    },
    {
      question: "Which has better suites?",
      answer:
        "Both offer high-end suites, though Scenic is known for modern design and Silversea for refined, classic accommodations.",
    },
    {
      question: "Is the senianta-expedition experience different?",
      answer:
        "Both offer zodiac landings and guided excursions, though delivery style differs slightly.",
    },
    {
      question: "Which is better value?",
      answer:
        "Value depends on how inclusions align with your expectations rather than price alone.",
    },
    {
      question: "Should I use a travel advisor to choose?",
      answer:
        "Yes. Antarctica requires careful planning, and an advisor ensures the right match.",
    },
    {
      question: "Which ship is better for the Drake Passage?",
      answer:
        "Both use ships designed for polar conditions. Comfort depends more on conditions and ship design than brand alone.",
    },
    {
      question: "How do I decide between Scenic and Silversea?",
      answer:
        "The decision comes down to whether you prefer a modern all-inclusive structure or a traditional luxury cruise environment.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [scenisilver1, scenisilver2, scenisilver3];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.tripsandships.com/scenic-vs-silversea-antarctica#webpage",
        url: "https://www.tripsandships.com/scenic-vs-silversea-antarctica",
        name: "Scenic vs Silversea Antarctica: Which Expedition Is Right for You",
        headline:
          "Scenic vs Silversea Antarctica: Which Expedition Is Right for You",
        description:
          "Compare Scenic vs Silversea Antarctica cruises. Ships, experience, pricing, and expert recommendations from Angela Hughes to help you choose the right expedition.",
        isPartOf: { "@id": "https://www.tripsandships.com/#website" },
        about: [
          { "@type": "Organization", name: "Scenic Luxury Cruises & Tours" },
          { "@type": "Organization", name: "Silversea Cruises" },
          { "@type": "Thing", name: "Antarctica expedition cruises" },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          contentUrl:
            "https://www.tripsandships.com/path-to-comparison-image.webp",
        },
        breadcrumb: {
          "@id":
            "https://www.tripsandships.com/scenic-vs-silversea-antarctica#breadcrumb",
        },
        author: { "@id": "https://www.tripsandships.com/#angela-hughes" },
        publisher: { "@id": "https://www.tripsandships.com/#organization" },
        mainEntity: {
          "@id":
            "https://www.tripsandships.com/scenic-vs-silversea-antarctica#faq",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
        publisher: { "@id": "https://www.tripsandships.com/#organization" },
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com/",
        logo: {
          "@type": "ImageObject",
          contentUrl: "https://www.tripsandships.com/path-to-logo.webp",
        },
        sameAs: [
          "https://www.luxuryhostagency.com/",
          "https://www.luxurytraveluniversity.com/",
        ],
        areaServed: "Worldwide",
        description:
          "Luxury travel agency specializing in expedition cruises, Antarctica travel, and high-end global experiences.",
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        name: "Angela Hughes",
        jobTitle: "CEO",
        worksFor: { "@id": "https://www.tripsandships.com/#organization" },
        description:
          "Angela Hughes is the CEO of Trips & Ships Luxury Travel with over 40 years in the travel industry and travel experience across 121 countries and territories. She specializes in luxury and expedition travel.",
        sameAs: ["https://www.travelleaders.com/agent/17255"],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.tripsandships.com/scenic-vs-silversea-antarctica#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.tripsandships.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Antarctica",
            item: "https://www.tripsandships.com/antarctica",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Scenic vs Silversea Antarctica",
            item: "https://www.tripsandships.com/scenic-vs-silversea-antarctica",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.tripsandships.com/scenic-vs-silversea-antarctica#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is better for Antarctica, Scenic or Silversea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both Scenic and Silversea offer high-quality Antarctica expeditions. The better choice depends on whether you prefer a modern all-inclusive experience or a more traditional luxury cruise environment.",
            },
          },
          {
            "@type": "Question",
            name: "Is Scenic Eclipse newer than Silversea ships?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Scenic Eclipse is a purpose-built discovery yacht with a modern design, while Silversea operates both newer expedition ships and established vessels with a more traditional luxury feel.",
            },
          },
          {
            "@type": "Question",
            name: "Do Scenic and Silversea offer similar Antarctica itineraries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both typically operate similar routes to the Antarctic Peninsula, though exact itineraries vary based on timing, weather conditions, and expedition planning.",
            },
          },
          {
            "@type": "Question",
            name: "Which cruise line is more all-inclusive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Scenic emphasizes a simplified all-inclusive structure, while Silversea also includes many elements but may vary depending on itinerary.",
            },
          },
          {
            "@type": "Question",
            name: "Which is more luxurious, Scenic or Silversea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both operate in the luxury segment. Scenic offers a modern luxury experience, while Silversea reflects a more classic luxury cruise style.",
            },
          },
          {
            "@type": "Question",
            name: "Which is better for first-time Antarctica travelers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Scenic may appeal to first-time travelers due to its simplified structure, while Silversea suits those familiar with traditional luxury cruising.",
            },
          },
          {
            "@type": "Question",
            name: "Which has better suites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both offer high-end suites. Scenic is known for modern design, while Silversea offers refined accommodations with a classic aesthetic.",
            },
          },
          {
            "@type": "Question",
            name: "Is the expedition experience different between Scenic and Silversea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both offer zodiac landings and guided excursions, though delivery style and onboard experience differ slightly between the two brands.",
            },
          },
          {
            "@type": "Question",
            name: "Which is better value for Antarctica cruises?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Value depends on how inclusions and overall experience align with your expectations rather than price alone.",
            },
          },
          {
            "@type": "Question",
            name: "Should I use a travel advisor to choose between Scenic and Silversea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Antarctica requires careful planning, and a travel advisor ensures the right expedition is selected and structured properly.",
            },
          },
          {
            "@type": "Question",
            name: "Which ship is better for the Drake Passage crossing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both brands use ships designed for polar conditions. Comfort depends more on ship design and sea conditions than brand alone.",
            },
          },
          {
            "@type": "Question",
            name: "How do I decide between Scenic and Silversea?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The decision depends on whether you prefer a modern all-inclusive structure or a traditional luxury cruise environment. Working with an expert helps align the choice with your travel style.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="senianta-wrapper">
      <Helmet>
        <title>
          Scenic vs Silversea Antarctica | Which Expedition Is Better
        </title>
        <meta
          name="title"
          content="Scenic vs Silversea Antarctica | Luxury Expedition Comparison"
        />
        <meta
          name="description"
          content="Compare Scenic vs Silversea Antarctica cruises. Ships, experience, pricing, and expert recommendations from Angela Hughes to help you choose the right expedition."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Navbar />

      <section className="anta_hero_section">
        <div
          className="anta_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="anta_hero_overlay"></div>

        <div className="anta_hero_content">
          <h1>Scenic vs Silversea Antarctica</h1>

          <p className="anta_hero_p">
            Choosing the right luxury senianta-expedition experience
          </p>

          <p>
            The difference is not simply in features. It is in how you want to
            experience the journey.
          </p>
          <p>
            Choosing the right senianta-expedition cruise line for Antarctica
            impacts more than your itinerary. It shapes how you experience the
            destination from start to finish.
          </p>

          {readMore && (
            <>
              <p>
                Two of the most commonly compared options are Scenic Luxury
                Cruises &amp; Tours and Silversea Cruises. Both operate at the
                highest level of the market. Both provide access to Antarctica.
              </p>
            </>
          )}

          <div className="anta_readmore_wrapper">
            <button
              className="anta_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          <div className="senianta-hero-buttons senianta-hero-buttons--centered">
            <button className="senianta-primary senianta-primary--no-offset">
              Get Expert Recommendation
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1 — HERO ===== */}
      {/* <section className="senianta-hero senianta-antarctica-senianta-hero">
        <div className="senianta-hero-content">
          <h1>
            Scenic vs Silversea Antarctica
          </h1>

          <p className="senianta-lead">
            Choosing the right luxury senianta-expedition experience
          </p>

          <p className="senianta-sub">
            The difference is not simply in features. It is in how you want to experience the journey.
          </p>

          <p className="senianta-extra-text">
            Choosing the right senianta-expedition cruise line for Antarctica impacts more than your itinerary.
            It shapes how you experience the destination from start to finish.
          </p>

          <p className="senianta-extra-text">
            Two of the most commonly compared options are Scenic Luxury Cruises &amp; Tours and Silversea Cruises.
            Both operate at the highest level of the market. Both provide access to Antarctica.
          </p>

          <div className="senianta-hero-buttons senianta-hero-buttons--centered">
            <button className="senianta-primary senianta-primary--no-offset">
              Get Expert Recommendation
            </button>
            <button className="senianta-secondary">
              View Scenic Antarctica Expeditions
            </button>
          </div>
        </div>
      </section> */}

      {/* ===== SECTION 2 — QUICK COMPARISON ===== */}
      <section className="senianta-glance">
        <div className="senianta-glance-inner">
          <h2>Scenic vs Silversea at a Glance</h2>

          <div className="senianta-glance-table-wrap">
            <table className="senianta-glance-table">
              <thead>
                <tr>
                  <th className="senianta-glance-th senianta-glance-th--feature">
                    Feature
                  </th>
                  <th className="senianta-glance-th senianta-glance-th--scenic">
                    Scenic
                  </th>
                  <th className="senianta-glance-th senianta-glance-th--silversea">
                    Silversea
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="senianta-glance-row">
                  <td className="senianta-glance-td senianta-glance-td--label">
                    Overall Style
                  </td>
                  <td className="senianta-glance-td">Modern luxury yacht</td>
                  <td className="senianta-glance-td">Classic luxury cruise</td>
                </tr>
                <tr className="senianta-glance-row senianta-glance-row--alt">
                  <td className="senianta-glance-td senianta-glance-td--label">
                    Pricing Structure
                  </td>
                  <td className="senianta-glance-td">Fully all-inclusive</td>
                  <td className="senianta-glance-td">High inclusion, varies</td>
                </tr>
                <tr className="senianta-glance-row">
                  <td className="senianta-glance-td senianta-glance-td--label">
                    Ship Design
                  </td>
                  <td className="senianta-glance-td">
                    Contemporary, design-forward
                  </td>
                  <td className="senianta-glance-td">Traditional, refined</td>
                </tr>
                <tr className="senianta-glance-row senianta-glance-row--alt">
                  <td className="senianta-glance-td senianta-glance-td--label">
                    Experience Focus
                  </td>
                  <td className="senianta-glance-td">
                    Balance of luxury + senianta-expedition
                  </td>
                  <td className="senianta-glance-td">Heritage + service</td>
                </tr>
                <tr className="senianta-glance-row">
                  <td className="senianta-glance-td senianta-glance-td--label">
                    Best For
                  </td>
                  <td className="senianta-glance-td">
                    Simplicity and modern comfort
                  </td>
                  <td className="senianta-glance-td">
                    Familiar luxury experience
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — THE BIGGEST DIFFERENCES ===== */}
      <section className="senianta-differences">
        <div className="senianta-differences-bg"></div>

        <div className="senianta-differences-content">
          <div className="senianta-differences-card">
            <h2>The Biggest Differences Between Scenic and Silversea</h2>

            <div className="senianta-differences-columns">
              <div className="senianta-diff-col senianta-diff-scenic">
                <h3 className="senianta-diff-brand">Scenic</h3>
                <ul className="senianta-diff-list">
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      className="senianta-differences-icon"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>
                      Delivers a modern, all-inclusive experience with
                      simplified structure.
                    </span>
                  </li>
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      className="senianta-differences-icon"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>
                      Emphasizes contemporary design and absolute clarity in
                      pricing.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="senianta-diff-divider">
                <span className="senianta-diff-vs">VS</span>
              </div>

              <div className="senianta-diff-col senianta-diff-silversea">
                <h3 className="senianta-diff-brand">Silversea</h3>
                <ul className="senianta-diff-list">
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      className="senianta-differences-icon"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>
                      Offers a more traditional luxury cruise environment with
                      strong heritage.
                    </span>
                  </li>
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      className="senianta-differences-icon"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>
                      Emphasizes classic service tradition and high brand
                      familiarity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="senianta-differences-senianta-emphasis">
              The difference is not in access to Antarctica. It is in how that
              access is experienced.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — SHIP EXPERIENCE ===== */}
      <section className="senianta-ship-exp">
        <div className="senianta-ship-exp-inner">
          <div className="senianta-ship-exp-image"></div>

          <div className="senianta-ship-exp-text">
            <h2>Ship Design and Onboard Experience</h2>

            <p>
              Scenic Eclipse was built as a discovery yacht designed
              specifically for senianta-expedition environments. The onboard
              experience is modern, with open spaces, multiple dining venues,
              and a contemporary layout.
            </p>

            <p>
              Silversea's senianta-expedition ships reflect the brand's heritage
              in luxury cruising, combining senianta-expedition capability with
              a more classic onboard environment.
            </p>

            <p className="senianta-emphasis">
              Travelers who prefer a modern, design-forward experience often
              choose Scenic. Those who value a traditional luxury atmosphere
              often prefer Silversea.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — EXPEDITION EXPERIENCE ===== */}
      <section className="senianta-expedition">
        <div className="senianta-expedition-inner">
          <h2>Expedition Style and Execution</h2>

          <p>
            Both Scenic and Silversea deliver full senianta-expedition programs,
            including zodiac landings and guided exploration.
          </p>

          <p>
            Scenic focuses on delivering senianta-expedition access within a
            highly structured, all-inclusive framework.
          </p>

          <p>
            Silversea brings a longer senianta-expedition heritage with a
            refined service approach.
          </p>

          <p className="senianta-emphasis">
            In practice, both provide strong senianta-expedition execution. The
            difference lies in how the experience is delivered.
          </p>
        </div>
      </section>

      {/* ===== SECTION 6 — PRICING AND VALUE ===== */}
      <section className="senianta-pricing-value">
        <div className="senianta-pricing-value-inner">
          <h2>Pricing and Value Positioning</h2>
          <div className="senianta-pricing-content">
            <p className="senianta-pricing-intro">
              Both Scenic and Silversea navigate the ultra-luxury segment of
              Antarctica travel.
            </p>

            <div className="senianta-value-grid">
              <div className="senianta-value-card">
                <Snowflake className="senianta-value-icon" />
                <p>Limited access to Antarctica</p>
              </div>
              <div className="senianta-value-card">
                <Anchor className="senianta-value-icon" />
                <p>Expedition logistics and execution</p>
              </div>
              <div className="senianta-value-card">
                <Ship className="senianta-value-icon" />
                <p>Ship capacity and onboard experience</p>
              </div>
            </div>

            <div className="senianta-brand-positioning">
              <div className="senianta-brand-pill">
                <h4>Scenic</h4>
                <p>
                  Appeals to travelers who want clarity and simplicity in
                  pricing.
                </p>
              </div>
              <div className="senianta-brand-pill">
                <h4>Silversea</h4>
                <p>
                  Appeals to those who value brand heritage and a traditional
                  luxury model.
                </p>
              </div>
            </div>

            <p className="senianta-emphasis senianta-emphasis--decision">
              The decision is less about cost and more about how value is
              structured and perceived.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — DRAKE PASSAGE EXPERIENCE ===== */}
      <section className="senianta-drake-passage">
        <div className="senianta-drake-passage-inner">
          <h2>Drake Passage Experience</h2>
          <div className="senianta-drake-content">
            <p>
              Both brands operate ships designed for polar conditions with
              stabilization systems to manage open water crossings.
            </p>
            <p>
              The Drake Passage experience depends more on conditions and ship
              design than brand choice alone.
            </p>
            <div className="senianta-cta-container">
              <button className="senianta-secondary">
                Read Drake Passage Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 & 9 — WHO SHOULD CHOOSE ===== */}
      <section className="senianta-choice-section">
        <div className="senianta-choice-inner">
          <div className="senianta-choice-grid">
            <div className="senianta-choice-card senianta-scenic-choice">
              <h2>Choose Scenic If</h2>
              <ul className="senianta-choice-list">
                <li>You prefer a modern, design-forward ship</li>
                <li>You want a clearly defined all-inclusive structure</li>
                <li>You value simplicity in planning and pricing</li>
                <li>
                  You want a balance between senianta-expedition and onboard
                  luxury
                </li>
              </ul>
            </div>
            <div className="senianta-choice-card senianta-silversea-choice">
              <h2>Choose Silversea If</h2>
              <ul className="senianta-choice-list">
                <li>You prefer a traditional luxury cruise environment</li>
                <li>You value established brand heritage</li>
                <li>You prioritize service style and familiarity</li>
                <li>You appreciate a classic approach to luxury travel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="senianta-promo-video-wrapper">
        <video
          className="senianta-promo-video-player"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="/Scenic - Yacht - 15 sec - CBS.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ===== SECTION 10 — COMMON MISTAKES ===== */}
      <section className="senianta-mistakes">
        <div className="senianta-mistakes-inner">
          <h2>Common Mistakes When Choosing Between Scenic and Silversea</h2>
          <div className="senianta-mistakes-grid">
            <div className="senianta-mistake-card">
              <AlertCircle className="senianta-mistake-icon" />
              <div className="senianta-mistake-text">
                <span className="senianta-mistake-title"></span>
                <span className="senianta-mistake-desc">
                  Choosing based on price alone without understanding inclusions
                </span>
              </div>
            </div>
            <div className="senianta-mistake-card">
              <AlertCircle className="senianta-mistake-icon" />
              <div className="senianta-mistake-text">
                <span className="senianta-mistake-title"></span>
                <span className="senianta-mistake-desc">
                  Not aligning the ship experience with personal travel style
                </span>
              </div>
            </div>
            <div className="senianta-mistake-card">
              <AlertCircle className="senianta-mistake-icon" />
              <div className="senianta-mistake-text">
                <span className="senianta-mistake-title"></span>
                <span className="senianta-mistake-desc">
                  Booking too late and losing preferred inventory
                </span>
              </div>
            </div>
            <div className="senianta-mistake-card">
              <AlertCircle className="senianta-mistake-icon" />
              <div className="senianta-mistake-text">
                <span className="senianta-mistake-desc">
                  Assuming all senianta-expedition experiences are identical
                </span>
              </div>
            </div>
          </div>
          <div className="senianta-consultant-tip">
            <p>
              <strong>Expert Advice:</strong> The right choice comes from
              understanding how each experience is structured, not simply
              comparing features.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — EXPERT RECOMMENDATION ===== */}
      <section className="senianta-expert-rec">
        <div className="senianta-expert-inner">
          <h2>Our Recommendation</h2>
          <div className="senianta-verdict-container">
            <div className="senianta-verdict-card senianta-verdict-card--scenic">
              <CheckCircle2 className="senianta-verdict-icon" />
              <h3>The Scenic Recommendation</h3>
              <p>
                For most clients seeking a modern, all-inclusive experience with
                clear pricing and contemporary design, <strong>Scenic</strong>{" "}
                is often the stronger fit.
              </p>
            </div>
            <div className="senianta-verdict-card senianta-verdict-card--silversea">
              <CheckCircle2 className="senianta-verdict-icon" />
              <h3>The Silversea Recommendation</h3>
              <p>
                For clients who prefer a more traditional luxury cruise
                environment with established service style,{" "}
                <strong>Silversea</strong> remains a strong choice.
              </p>
            </div>
          </div>
          <div className="senianta-expert-seal">
            <p>
              We regularly guide clients through this exact decision, ensuring
              the selection aligns with expectations before any booking is
              confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 12 — WHAT HAPPENS NEXT ===== */}
      <section className="senianta-what-next">
        <div className="senianta-what-next-inner">
          <h2>What Happens Next</h2>
          <div className="senianta-steps-grid">
            <div className="senianta-step-item">
              <span className="senianta-step-num">01</span>
              <p>Consultation to understand your travel style and priorities</p>
            </div>
            <div className="senianta-step-item">
              <span className="senianta-step-num">02</span>
              <p>Side-by-side recommendation based on your preferences</p>
            </div>
            <div className="senianta-step-item">
              <span className="senianta-step-num">03</span>
              <p>Booking and full Antarctica senianta-expedition planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 13 — WHY BOOK WITH ANGELA HUGHES ===== */}
      <section className="senianta-why-book">
        <div className="senianta-why-book-inner">
          <h2>Why Book with Angela Hughes and Trips & Ships Luxury Travel</h2>
          <div className="senianta-why-book-flex">
            <div className="senianta-why-book-left">
              <div className="senianta-why-story">
                <p className="senianta-lead-expertise">
                  Choosing between expedition cruise lines requires experience
                  and perspective.
                </p>
                <p className="senianta-p">
                  Angela Hughes has over four decades in the travel industry and
                  has traveled to 121 countries and territories, working with
                  clients on complex, high-value itineraries.
                </p>
                <p className="senianta-emphasis senianta-emphasis--guided">
                  The decision is guided, not guessed.
                </p>
              </div>

              <div className="senianta-why-benefits-grid">
                <h3>Clients benefit from:</h3>
                <div className="senianta-benefit-item">
                  <div className="senianta-benefit-icon-wrap">
                    <Globe className="senianta-benefit-icon" />
                  </div>
                  <p>Clear positioning across competing brands</p>
                </div>
                <div className="senianta-benefit-item">
                  <div className="senianta-benefit-icon-wrap">
                    <Key className="senianta-benefit-icon" />
                  </div>
                  <p>Access to preferred inventory and timing</p>
                </div>
                <div className="senianta-benefit-item">
                  <div className="senianta-benefit-icon-wrap">
                    <LayoutGrid className="senianta-benefit-icon" />
                  </div>
                  <p>Full itinerary coordination</p>
                </div>
                <div className="senianta-benefit-item">
                  <div className="senianta-benefit-icon-wrap">
                    <ShieldCheck className="senianta-benefit-icon" />
                  </div>
                  <p>Ongoing support throughout the journey</p>
                </div>
              </div>
            </div>

            <div className="senianta-why-book-right">
              <div className="senianta-why-book-image-wrapper">
                <img
                  src={scenisilver5}
                  alt="Angela Hughes - Luxury Travel Advisor"
                  className="senianta-why-book-portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 14 — AUTHOR PROOF ===== */}
      <section className="senianta-author-proof">
        <div className="senianta-author-proof-inner">
          <div className="senianta-professional-card">
            <div className="senianta-card-header">
              <Award className="senianta-auth-icon" />
              <div className="senianta-auth-title">
                <h3>Planned and Curated by Angela Hughes</h3>
                <p className="senianta-auth-role">
                  CEO, Trips & Ships Luxury Travel
                </p>
              </div>
            </div>

            <div className="senianta-auth-stats-grid">
              <div className="senianta-auth-stat-item">
                <Clock className="senianta-stat-icon" />
                <div className="senianta-stat-content">
                  <span className="senianta-stat-val">40+</span>
                  <span className="senianta-stat-label">Years Experience</span>
                </div>
              </div>
              <div className="senianta-auth-stat-item">
                <MapPin className="senianta-stat-icon" />
                <div className="senianta-stat-content">
                  <span className="senianta-stat-val">121</span>
                  <span className="senianta-stat-label">Countries Visited</span>
                </div>
              </div>
            </div>

            <div className="senianta-auth-recognition">
              <h4>Industry Recognition</h4>
              <ul className="senianta-recognition-list">
                <li>
                  Luxury Travel Influencer of the Year (2024), Travel Leaders
                  Network
                </li>
                <li>Most Influential Women in Travel (2026), TravelPulse</li>
                <li>Featured across leading travel media</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 15 — FAQ ===== */}
      <section className="senianta-faq-section">
        <div className="senianta-faq-inner">
          <h2>Frequently Asked Questions About Scenic vs Silversea</h2>
          <div className="senianta-faq-accordion">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`senianta-faq-item ${activeFaq === index ? "senianta-active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="senianta-faq-question">
                  <span>{faq.question}</span>
                  <span className="senianta-faq-icon">
                    {activeFaq === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </div>
                <div className="senianta-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 16 — FINAL CTA ===== */}
      <section className="senianta-final-reach">
        <div className="senianta-final-overlay"></div>
        <div className="senianta-final-reach-inner">
          <h2>Choose the Right Antarctica Expedition</h2>
          <p>
            The difference between Scenic and Silversea is not obvious on the
            surface. It is in how the experience is delivered.
          </p>
          <p>
            Work with a team that understands both and can guide you to the
            right decision from the start.
          </p>
          <div className="senianta-hero-buttons senianta-hero-buttons--centered">
            <button className="senianta-primary senianta-primary--no-offset">
              Get Expert Recommendation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntarcticaPage;
