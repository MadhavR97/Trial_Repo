import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../AntarcticaCruise/AntarcticaCruise.css";
import myImage from "../../assets/image.jpg";
import { Award, Globe, Shield, Star } from "lucide-react";
import anta1 from "../../assets/antarctica-cruise-cost/anta1.jpg";
import anta2 from "../../assets/antarctica-cruise-cost/anta2.jpg";
import anta3 from "../../assets/antarctica-cruise-cost/anta3.jpg";
import anta5 from "../../assets/antarctica-cruise-cost/anta5.jpg";

const AntarcticaCostPage = () => {
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const images = [anta1, anta2, anta3];

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
        "@id": "https://www.tripsandships.com/antarctica-cruise-cost#webpage",
        url: "https://www.tripsandships.com/antarctica-cruise-cost",
        name: "How Much Does an Antarctica Cruise Cost",
        headline: "How Much Does an Antarctica Cruise Cost",
        description:
          "How much does Antarctica cost? Real pricing examples, full trip cost breakdown, and expert guidance from Angela Hughes to plan your Antarctica expedition.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.tripsandships.com/#website" },
        about: [
          { "@type": "Thing", name: "Antarctica cruise cost" },
          { "@type": "Thing", name: "Antarctica expedition travel" },
          { "@type": "Thing", name: "Luxury Antarctica cruises" },
        ],
        breadcrumb: {
          "@id":
            "https://www.tripsandships.com/antarctica-cruise-cost#breadcrumb",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id":
            "https://www.tripsandships.com/antarctica-cruise-cost#primaryimage",
          contentUrl:
            "https://www.tripsandships.com/path-to-antarctica-cost-hero-image.jpg",
        },
        author: { "@id": "https://www.tripsandships.com/#angela-hughes" },
        publisher: { "@id": "https://www.tripsandships.com/#organization" },
        mainEntity: {
          "@id": "https://www.tripsandships.com/antarctica-cruise-cost#faq",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        url: "https://www.tripsandships.com/",
        name: "Trips & Ships Luxury Travel",
        publisher: { "@id": "https://www.tripsandships.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#organization",
        name: "Trips & Ships Luxury Travel",
        url: "https://www.tripsandships.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.tripsandships.com/#logo",
          contentUrl: "https://www.tripsandships.com/path-to-logo.png",
        },
        description:
          "Luxury travel agency specializing in expedition cruises, Antarctica travel, and high-end global experiences.",
        areaServed: "Worldwide",
        sameAs: [
          "https://www.luxuryhostagency.com/",
          "https://www.luxurytraveluniversity.com/",
          "https://www.travelleaders.com/agent/17255",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        name: "Angela Hughes",
        jobTitle: "CEO",
        worksFor: { "@id": "https://www.tripsandships.com/#organization" },
        description:
          "Angela Hughes is the CEO of Trips & Ships Luxury Travel with more than 40 years in the travel industry and travel experience across 121 countries and territories. She specializes in luxury and expedition travel.",
        sameAs: ["https://www.travelleaders.com/agent/17255"],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.tripsandships.com/antarctica-cruise-cost#breadcrumb",
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
            name: "Antarctica Cruise Cost",
            item: "https://www.tripsandships.com/antarctica-cruise-cost",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tripsandships.com/antarctica-cruise-cost#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does Antarctica cost in total?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A full Antarctica trip typically ranges from $18,000 to over $60,000 per person depending on cruise, flights, hotels, insurance, and overall travel structure.",
            },
          },
          {
            "@type": "Question",
            name: "Why is Antarctica so expensive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Antarctica pricing reflects limited access, strict environmental regulations, specialized ships, expedition teams, and the logistics required to operate in a remote and protected region.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cheapest way to go to Antarctica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Entry-level expedition cruises generally offer the lowest pricing, though availability is limited and the onboard experience is typically more expedition-focused than luxury-focused.",
            },
          },
          {
            "@type": "Question",
            name: "How much is a luxury Antarctica cruise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luxury Antarctica expeditions typically range from about $25,000 to $50,000 or more per person depending on the ship, suite category, itinerary length, and travel dates.",
            },
          },
          {
            "@type": "Question",
            name: "Are Antarctica cruises all-inclusive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many Antarctica cruises in the premium and luxury segments include accommodations, meals, beverages, guided landings, and expedition excursions, though exact inclusions vary by brand and itinerary.",
            },
          },
          {
            "@type": "Question",
            name: "When is Antarctica cheapest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Early and late season departures may offer different pricing opportunities depending on demand, itinerary, and cabin availability.",
            },
          },
          {
            "@type": "Question",
            name: "How far in advance should I book Antarctica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most travelers book Antarctica 12 to 24 months in advance because capacity is limited and the best suite inventory often sells early.",
            },
          },
          {
            "@type": "Question",
            name: "Is Antarctica worth the cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For many travelers, Antarctica is considered one of the most meaningful and unique travel experiences in the world because of its rarity, restricted access, and depth of experience.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          How Much Does an Antarctica Cruise Cost | Full Pricing Guide
        </title>
        <meta
          name="title"
          content="Antarctica Cruise Cost | What You Should Expect to Pay"
        />
        <meta
          name="description"
          content="How much does Antarctica cost? Real pricing examples, full trip cost breakdown, and expert guidance from Angela Hughes to plan your Antarctica expedition."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Navbar />

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="anta_hero_section">
        <div
          className="anta_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="anta_hero_overlay"></div>

        <div className="anta_hero_content">
          <h1>How Much Does an Antarctica Cruise Cost</h1>

          <p className="anta_hero_p">
            Understanding the real investment in Antarctica travel
          </p>

          <p>
            Antarctica is one of the most exclusive travel experiences in the
            world. Access is limited, capacity is controlled, and every journey
            operates under strict environmental regulations.
          </p>

          {readMore && (
            <>
              <p>
                The question is not simply what Antarctica costs. It is what is
                required to access it correctly.
              </p>
              <p>
                For most travelers, Antarctica is a once-in-a-lifetime
                expedition. Pricing reflects the logistics, execution, and
                limited access behind that experience.
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

          <div className="anta_hero_buttons">
            <button className="anta_primary_btn">
              Get Antarctica Pricing Guidance
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — QUICK COST OVERVIEW ===== */}
      <section className="anta_overview_section">
        <div className="anta_overview_inner">
          <h2>Antarctica Cruise Cost at a Glance</h2>

          <p className="anta_overview_lead">
            Typical Antarctica expedition pricing falls into the following
            ranges:
          </p>

          <div className="anta_tier_cards">
            <div className="anta_tier_card anta_tier_card--entry">
              <div className="anta_tier_icon">
                <i className="fas fa-anchor"></i>
              </div>
              <div className="anta_tier_label">Entry Expedition</div>
              <div className="anta_tier_price"> $8,000 – $15,000</div>
              <div className="anta_tier_sub">per person</div>
            </div>

            <div className="anta_tier_card anta_tier_card--premium">
              <div className="anta_tier_icon">
                <i className="fas fa-compass"></i>
              </div>
              <div className="anta_tier_label">Premium Expedition</div>
              <div className="anta_tier_price">$15,000 – $25,000</div>
              <div className="anta_tier_sub">per person</div>
            </div>

            <div className="anta_tier_card anta_tier_card--luxury">
              <div className="anta_tier_icon">
                <i className="fas fa-gem"></i>
              </div>
              <div className="anta_tier_label">Ultra-Luxury Expedition</div>
              <div className="anta_tier_price">$25,000 – $50,000+</div>
              <div className="anta_tier_sub">per person</div>
            </div>
          </div>

          <div className="anta_overview_note">
            <i className="fas fa-info-circle"></i>
            <p>
              Most clients planning Antarctica with our team fall within the
              <strong> $20,000 to $40,000</strong> range, where the experience
              is fully structured and aligned with expectations. Antarctica is
              not priced like traditional travel — it reflects restricted
              access, limited capacity, and the level of execution required to
              operate in one of the most remote environments in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — REAL PRICING EXAMPLES ===== */}
      <section className="anta_examples_section">
        <div className="anta_examples_inner">
          <h2>Real Antarctica Cruise Pricing Examples</h2>

          <p className="anta_examples_lead">
            To provide context beyond general ranges, here are typical
            real-world pricing scenarios:
          </p>

          <div className="anta_voyage_cards">
            <div className="anta_voyage_card">
              <div className="anta_voyage_nights">10 nights</div>
              <div className="anta_voyage_brand">HX Expeditions</div>
              <div className="anta_voyage_divider"></div>
              <div className="anta_voyage_price">
                <span className="anta_voyage_from">approx.</span>
                $9,500 – $14,000
              </div>
              <div className="anta_voyage_pp">per person</div>
              <div className="anta_voyage_bar anta_voyage_bar--1"></div>
            </div>

            <div className="anta_voyage_card">
              <div className="anta_voyage_nights">12 nights</div>
              <div className="anta_voyage_brand">
                Lindblad Expeditions
                <br />
                <span>with National Geographic</span>
              </div>
              <div className="anta_voyage_divider"></div>
              <div className="anta_voyage_price">
                <span className="anta_voyage_from">approx.</span>
                $16,000 – $22,000
              </div>
              <div className="anta_voyage_pp">per person</div>
              <div className="anta_voyage_bar anta_voyage_bar--2"></div>
            </div>

            <div className="anta_voyage_card">
              <div className="anta_voyage_nights">12 nights</div>
              <div className="anta_voyage_brand">Silversea Cruises</div>
              <div className="anta_voyage_divider"></div>
              <div className="anta_voyage_price">
                <span className="anta_voyage_from">approx.</span>
                $22,000 – $35,000
              </div>
              <div className="anta_voyage_pp">per person</div>
              <div className="anta_voyage_bar anta_voyage_bar--3"></div>
            </div>

            <div className="anta_voyage_card">
              <div className="anta_voyage_nights">11 nights</div>
              <div className="anta_voyage_brand">
                Scenic Luxury Cruises
                <br />
                <span>&amp; Tours</span>
              </div>
              <div className="anta_voyage_divider"></div>
              <div className="anta_voyage_price">
                <span className="anta_voyage_from">approx.</span>
                $28,000 – $55,000+
              </div>
              <div className="anta_voyage_pp">per person</div>
              <div className="anta_voyage_bar anta_voyage_bar--4"></div>
            </div>
          </div>

          <p className="anta_examples_note">
            Pricing varies based on suite category, timing, and availability,
            but these examples reflect how Antarctica pricing typically scales
            across brands.
          </p>
        </div>
      </section>

      {/* ===== SECTION 4 — PRICING LADDER ===== */}
      <section className="anta_ladder_section">
        <div className="anta_ladder_inner">
          <h2>Antarctica Cruise Pricing by Expedition Level</h2>

          <div className="anta_ladder_grid">
            <div className="anta_ladder_card">
              <div className="anta_ladder_badge">Entry Expedition</div>
              <div className="anta_ladder_price">
                $8,000 – $15,000 <span>per person</span>
              </div>
              <p className="anta_ladder_label">Typical brands</p>
              <p>HX Expeditions, Atlas Ocean Voyages</p>
              <p className="anta_ladder_focus">
                Focus: expedition-first experience with minimal luxury
              </p>
            </div>

            <div className="anta_ladder_card">
              <div className="anta_ladder_badge anta_ladder_badge--premium">
                Premium Expedition
              </div>
              <div className="anta_ladder_price">
                $15,000 – $25,000 <span>per person</span>
              </div>
              <p className="anta_ladder_label">Typical brands</p>
              <p>Lindblad Expeditions, Ponant</p>
              <p className="anta_ladder_focus">
                Focus: balance of comfort and exploration
              </p>
            </div>

            <div className="anta_ladder_card">
              <div className="anta_ladder_badge anta_ladder_badge--luxury">
                Ultra-Luxury Expedition
              </div>
              <div className="anta_ladder_price">
                $25,000 – $50,000+ <span>per person</span>
              </div>
              <p className="anta_ladder_label">Typical brands</p>
              <p>Silversea Cruises, Seabourn Cruise Line</p>
              <p className="anta_ladder_focus">
                Focus: luxury accommodations with full expedition access
              </p>
            </div>

            <div className="anta_ladder_card">
              <div className="anta_ladder_badge anta_ladder_badge--discovery">
                Ultra-Luxury Discovery Yacht
              </div>
              <div className="anta_ladder_price">
                $30,000 – $60,000+ <span>per person</span>
              </div>
              <p className="anta_ladder_label">Typical brands</p>
              <p>Scenic Luxury Cruises &amp; Tours</p>
              <p className="anta_ladder_focus">
                Focus: modern, all-inclusive, design-forward experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — WHERE MOST CLIENTS FALL & AUTHOR PROOF ===== */}
      <section className="anta_clients_section">
        <div className="anta_clients_inner">
          <div className="anta_clients_content">
            <h2>Where Most Clients Travel</h2>

            <p>
              Clients planning Antarctica with our team span multiple tiers
              depending on their priorities.
            </p>

            <p>
              Some prioritize expedition depth and choose brands such as HX or
              Lindblad. Others prefer a balance of comfort and exploration. Many
              opt for fully structured luxury experiences with Scenic or
              Silversea.
            </p>

            <p className="anta_clients_highlight">
              We do not recommend Antarctica based on brand alone. We recommend
              it based on how you want to experience it.
            </p>

            <div className="anta_author_merge">
              <div className="anta_author_card">
                <div className="anta_author_header">
                  <div className="anta_author_signature">
                    <h2>Planned and Curated by Angela Hughes</h2>
                    <p className="anta_author_role">
                      CEO & Founder, Trips & Ships Luxury Travel
                    </p>
                  </div>
                </div>

                <div className="anta_author_highlights">
                  <div className="anta_author_tag">
                    <Star size={14} className="anta_icon" />
                    <span>40+ years of expertise</span>
                  </div>
                  <div className="anta_author_tag">
                    <Globe size={14} className="anta_icon" />
                    <span>121 countries traveled</span>
                  </div>
                  <div className="anta_author_tag">
                    <Award size={14} className="anta_icon" />
                    <span>Luxury Travel Influencer of the Year</span>
                  </div>
                  <div className="anta_author_tag">
                    <Award size={14} className="anta_icon" />
                    <span>Most Influential Women in Travel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="anta_clients_image">
            <img
              src={myImage}
              alt="Luxury Antarctica Expedition with Angela Hughes"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — MID-PAGE CTA ===== */}
      <section className="anta_midcta_section">
        <div className="anta_midcta_overlay"></div>
        <div className="anta_midcta_inner">
          <h2>Get a Personalized Antarctica Price Range</h2>
          <p>
            Every Antarctica journey is different. Receive a tailored estimate
            based on your travel style, timing, and expectations.
          </p>
          <button className="anta_primary_btn">
            Get Antarctica Pricing Guidance
          </button>
        </div>
      </section>

      {/* ===== SECTION 7 — TOTAL TRIP COST ===== */}
      <section className="anta_total_section">
        <div className="anta_total_inner">
          <div className="anta_section_header">
            <h2>What Your Total Antarctica Trip Really Costs</h2>
            <p>
              Beyond the cruise fare, plan for the full journey from doorstep to
              doorstep:
            </p>
          </div>

          <div className="anta_total_grid">
            <div className="anta_total_card">
              <div className="anta_total_icon">
                <i className="fas fa-ship"></i>
              </div>
              <h3>Cruise</h3>
              <div className="anta_total_price">$15,000 – $50,000+</div>
              <p>Per Person</p>
            </div>

            <div className="anta_total_card">
              <div className="anta_total_icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Flights</h3>
              <div className="anta_total_price">$1,500 – $6,000+</div>
              <p>Main Cabin to Biz</p>
            </div>

            <div className="anta_total_card">
              <div className="anta_total_icon">
                <i className="fas fa-hotel"></i>
              </div>
              <h3>Hotels and transfers</h3>
              <div className="anta_total_price">$500 – $2,000</div>
              <p>Average Stay</p>
            </div>

            <div className="anta_total_card">
              <div className="anta_total_icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Travel insurance</h3>
              <div className="anta_total_price">$500 – $2,500</div>
              <p>Essential Prep</p>
            </div>
          </div>

          <div className="anta_total_summary">
            <div className="anta_summary_content">
              <div className="anta_summary_label">Typical Total Investment</div>
              <div className="anta_summary_value">$18,000 – $60,000+</div>
              <p>Per Person — Door-to-Door Experience</p>
            </div>
            <div className="anta_summary_cta">
              <i className="fas fa-info-circle"></i>
              <span>
                Reflects the full cost of executing the journey with premium
                standards.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — WHAT IMPACTS YOUR COST ===== */}
      <section className="anta_impacts_section">
        <div className="anta_impacts_inner">
          <h2>What Impacts Your Antarctica Cost Most</h2>

          <div className="anta_expert_cards">
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-bed"></i>
              </div>
              <p>Suite category</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <p>Length of itinerary</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-snowflake"></i>
              </div>
              <p>Travel month</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-ship"></i>
              </div>
              <p>Expedition brand</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-plane"></i>
              </div>
              <p>Air and pre/post arrangements</p>
            </div>
          </div>

          <p>
            Two travelers can have very different costs based on these factors.
          </p>
        </div>
      </section>

      {/* ===== SECTION 9 — WHY PRICES CHANGE QUICKLY ===== */}
      <section className="anta_pricing_section">
        <div className="anta_pricing_inner">
          <h2>Why Antarctica Pricing Changes Quickly</h2>

          <div className="anta_method_steps">
            <div className="anta_method_step">
              <span className="anta_step_number">01</span>
              <p>Limited ship capacity due to environmental regulations</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">02</span>
              <p>High demand during peak season</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">03</span>
              <p>Dynamic pricing based on cabin availability</p>
            </div>
          </div>

          <p>
            The best inventory is typically secured 12 to 18 months in advance.
          </p>
        </div>
      </section>

      {/* ===== SECTION 10 — WHAT YOU GET AT EACH LEVEL ===== */}
      <section className="anta_levels_section">
        <div className="anta_levels_inner">
          <h2>What You Actually Get at Each Price Level</h2>

          <div className="anta_cost_list">
            <div className="anta_cost_item">
              <p>Entry</p>
              <span>
                Expedition-focused experience with minimal onboard luxury
              </span>
            </div>
            <div className="anta_cost_item">
              <p>Premium</p>
              <span>Balance between comfort and exploration</span>
            </div>
            <div className="anta_cost_item">
              <p>Luxury</p>
              <span>
                Full service, structure, and elevated onboard experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — COMMON MISTAKES ===== */}
      <section className="anta_mistakes_section">
        <div className="anta_mistakes_inner">
          <h2>Common Mistakes When Evaluating Antarctica Cost</h2>

          <div className="anta_method_steps">
            <div className="anta_method_step">
              <span className="anta_step_number">01</span>
              <p>Comparing Antarctica to traditional cruises</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">02</span>
              <p>
                Focusing only on base price without understanding inclusions
              </p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">03</span>
              <p>Waiting too long to book</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">04</span>
              <p>Choosing the wrong expedition style</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 12 — WHY ANTARCTICA IS PRICED DIFFERENTLY ===== */}
      <section className="anta_why_section">
        <div className="anta_why_inner">
          <div className="anta_why_flex">
            {/* CONTENT (LEFT) */}
            <div className="anta_why_content">
              <h2>Why Antarctica Is Priced Differently</h2>

              <p>
                Antarctica is one of the few destinations in the world where
                pricing reflects access rather than amenities.
              </p>

              <p>
                The investment is driven by logistics, regulation, and the
                ability to operate in a remote and protected environment.
              </p>

              <div className="anta_why_highlight_box">
                <p>
                  Every voyage operates under strict environmental guidelines
                  and requires specialized equipment, crew, and insurance to
                  ensure safe and responsible exploration.
                </p>
              </div>
            </div>

            {/* IMAGE (RIGHT) */}
            <div className="anta_why_image">
              <img src={anta5} alt="Antarctic Expedition Logistics" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 13 — IS ANTARCTICA WORTH THE COST ===== */}
      <section className="anta_worth_section">
        <div className="anta_worth_inner">
          <h2>Is Antarctica Worth the Cost</h2>

          <p>
            Antarctica is one of the few destinations where the experience
            consistently justifies the investment.
          </p>

          <p>The value lies in access, scale, and rarity.</p>
        </div>
      </section>

      {/* ===== SECTION 13.5 — ANTARCTICA VIDEO SHOWCASE ===== */}
      <section className="anta_video_section">
        <div className="anta_video_inner">
          <div className="anta_video_wrapper">
            <video
              src="/Antarctica LTT _ 30sec TVC.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="anta_showcase_video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ===== SECTION 14 — EXPERT INSIGHT ===== */}
      <section className="anta_insight_section">
        <div className="anta_insight_inner">
          <h2>Expert Insight from Angela Hughes</h2>

          <p>
            We guide clients through Antarctica planning every day, ensuring the
            right balance between experience, value, and execution.
          </p>

          <p>
            The difference is not what you spend. It is how well the experience
            is structured.
          </p>
        </div>
      </section>

      {/* ===== SECTION 15 — WHAT HAPPENS NEXT ===== */}
      <section className="anta_next_section">
        <div className="anta_next_inner">
          <h2>What Happens Next</h2>

          <div className="anta_method_steps">
            <div className="anta_method_step">
              <span className="anta_step_number">01</span>
              <p>Define budget and expectations</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">02</span>
              <p>Receive curated recommendations</p>
            </div>
            <div className="anta_method_step">
              <span className="anta_step_number">03</span>
              <p>Confirm and plan the full journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 16 — WHY BOOK WITH ANGELA HUGHES ===== */}
      <section className="anta_angela_section">
        <div className="anta_angela_inner">
          <h2>Why Book with Angela Hughes</h2>

          <p>
            Angela Hughes has over four decades in the travel industry and has
            traveled to 121 countries and territories. She leads a team of more
            than 140 luxury travel advisors and specializes in complex,
            high-value travel planning.
          </p>

          <p>
            <span className="anta_highlight_blue">Clients benefit from:</span>
          </p>

          <div className="anta_expert_cards">
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-compass"></i>
              </div>
              <p>Strategic guidance across all expedition brands</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-star"></i>
              </div>
              <p>Access to preferred inventory</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <p>Full itinerary planning</p>
            </div>
            <div className="anta_expert_card">
              <div className="anta_icon_box">
                <i className="fas fa-headset"></i>
              </div>
              <p>Ongoing support throughout the journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 18 — FAQ ===== */}
      <section className="anta_faq_section">
        <div className="anta_faq_inner">
          <h2>Frequently Asked Questions</h2>

          <AntaFAQ
            items={[
              {
                q: "How much does Antarctica cost in total?",
                a: "A full Antarctica trip typically ranges from $18,000 to over $60,000 per person depending on cruise, flights, and overall travel structure.",
              },
              {
                q: "Why is Antarctica so expensive?",
                a: "Pricing reflects limited access, specialized ships, expedition teams, and strict environmental regulations.",
              },
              {
                q: "What is the cheapest way to go to Antarctica?",
                a: "Entry-level expedition cruises offer lower pricing, though availability is limited and experience varies significantly.",
              },
              {
                q: "How much is a luxury Antarctica cruise?",
                a: "Luxury expeditions typically range from $25,000 to $50,000 or more per person.",
              },
              {
                q: "Are Antarctica cruises all-inclusive?",
                a: "Many include accommodations, meals, and excursions, though details vary by brand.",
              },
              {
                q: "When is Antarctica cheapest?",
                a: "Early and late season departures may offer different pricing depending on demand and availability.",
              },
              {
                q: "How far in advance should I book Antarctica?",
                a: "Most travelers book 12 to 24 months in advance due to limited capacity.",
              },
              {
                q: "Is Antarctica worth the cost?",
                a: "For many travelers, Antarctica is considered one of the most meaningful travel experiences in the world.",
              },
            ]}
          />
        </div>
      </section>

      {/* ===== SECTION 19 — FINAL CTA ===== */}
      <section className="anta_finalcta_section">
        <div className="anta_finalcta_overlay"></div>
        <div className="anta_finalcta_inner">
          <h2>Plan Your Antarctica Investment</h2>

          <p>
            Antarctica is not a trip to price shop. It is a journey to structure
            correctly.
          </p>

          <div className="anta_hero_buttons">
            <button className="anta_primary_btn">
              Get Antarctica Pricing Guidance
            </button>
            <button className="anta_secondary_btn">
              Compare Scenic vs Silversea
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===== INLINE FAQ ACCORDION ===== */
const AntaFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="anta_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`anta_faq_item ${open === i ? "anta_faq_item--open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="anta_faq_question">
            <span>{item.q}</span>
            <span className="anta_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="anta_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default AntarcticaCostPage;
