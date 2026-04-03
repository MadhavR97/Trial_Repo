import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import "../ScenicAntarctica/ScenicAntarctica.css";
import myImage from "../../assets/image.webp";
import SecondPage1 from "../../assets/SecondPage/SecondPage1.webp";
import SecondPage2 from "../../assets/SecondPage/SecondPage2.webp";
import SecondPage3 from "../../assets/SecondPage/SecondPage3.webp";
import SecondPage4 from "../../assets/SecondPage/SecondPage4.webp";
import SecondPage5 from "../../assets/SecondPage/SecondPage5.webp";
import SecondPage6 from "../../assets/SecondPage/SecondPage6.webp";
import SecondPage7 from "../../assets/SecondPage/SecondPage7.webp";
import SecondPage8 from "../../assets/SecondPage/SecondPage8.webp";
import SecondPage9 from "../../assets/SecondPage/SecondPage9.webp";
import SecondPage10 from "../../assets/SecondPage/SecondPage10.webp";

function ScenicAntarctica() {
  const [current, setCurrent] = useState(0);
  const [galleryCurrent, setGalleryCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "What is a Scenic Antarctica cruise?",
      answer:
        "An expedition voyage with guided landings, zodiac excursions, and all-inclusive luxury.",
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies based on suite, timing, and itinerary.",
    },
    {
      question: "What is included?",
      answer: "Accommodation, dining, beverages, and guided excursions.",
    },
    {
      question: "Best time to travel?",
      answer:
        "December–February for wildlife, November & March for unique conditions.",
    },
    {
      question: "How early to book?",
      answer: "12–24 months in advance.",
    },
    {
      question: "Is it physically demanding?",
      answer: "Moderate mobility required.",
    },
  ];
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const images = [SecondPage10, SecondPage8];

  const galleryImages = [
    SecondPage7,
    SecondPage6,
    SecondPage5,
    SecondPage4,
    SecondPage3,
    SecondPage1,
  ];

  useEffect(() => {
    const heroSlider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    const gallerySlider = setInterval(() => {
      setGalleryCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => {
      clearInterval(heroSlider);
      clearInterval(gallerySlider);
    };
  }, [images.length, galleryImages.length]);

  return (
    <div>
      <Helmet>
        <title>
          Scenic Antarctica Cruise | Scenic Eclipse Expedition Antarctica
        </title>
        <meta
          name="title"
          content="Scenic Antarctica Cruise | Scenic Eclipse"
        />
        <meta
          name="description"
          content="Plan a Scenic Antarctica cruise aboard Scenic Eclipse. Ultra-luxury, all-inclusive expeditions with expert guidance from Angela Hughes and Trips & Ships Luxury Travel."
        />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="Scenic_hero_section">
        <div
          className="Scenic_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>Scenic Antarctica Cruises</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p>Ultra-luxury expedition travel aboard Scenic Eclipse</p>

          <p>
            Antarctica is one of the most remote and controlled travel
            environments in the world. The success of the journey is determined
            long before departure, based on the ship, the expedition team, and
            the planning behind it.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Scenic Luxury Cruises & Tours designed Scenic Eclipse as a
                discovery yacht specifically for Antarctica, combining
                expedition capability with a fully all-inclusive luxury
                experience.
              </p>

              <p>
                This is structured exploration. Every element is built for
                access, operational precision, and a high level of comfort in an
                extreme environment.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="Scenic_hero_buttons">
            <button className="Scenic_primary_btn">
              Request Antarctica Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="Scenic_team_section">
        <div className="Scenic_team_inner">
          <h2>Why Choose Scenic for Antarctica?</h2>

          <p>
            Scenic operates in the ultra-luxury expedition category with a clear
            positioning: deliver Antarctica access without sacrificing onboard
            experience.
          </p>

          <p>
            Scenic Eclipse is purpose-built for polar travel while offering a
            level of space, design, and service not commonly found in expedition
            vessels.
          </p>

          <p>
            The all-inclusive structure simplifies the journey. Instead of
            managing incremental costs, clients move through the experience with
            clarity around what is included.
          </p>

          <p>Scenic is best suited for travelers who want:</p>

          <p className="Scenic_team_points">
            • A modern expedition yacht designed for polar conditions <br />
            • A seamless, all-inclusive pricing model <br />
            • Elevated accommodations and onboard environment <br />
          </p>
        </div>
      </section>

      <section className="Scenic_about_yachts_Experience_section">
        <div className="Scenic_about_yachts_Experience_inner">
          <h2>The Scenic Eclipse Experience</h2>

          <p>
            Scenic Eclipse operates as a discovery yacht engineered for
            expedition environments.
          </p>

          <p>
            Each day is structured around guided landings led by a professional
            expedition team. Guests access Antarctica via zodiac, reaching areas
            that cannot be accessed by larger vessels.
          </p>

          <p>
            Operations are shaped by weather, ice conditions, and wildlife
            movement. No two voyages are identical. Between landings, the ship
            provides a refined onboard environment designed for recovery,
            observation, and comfort.
          </p>

          <p>This balance defines Scenic’s position in Antarctica.</p>
        </div>
      </section>

      <section className="Scenic_expert_section">
        <div className="Scenic_expert_inner">
          <h2>What Is Included on a Scenic Antarctica Expedition?</h2>

          <p>
            Scenic structures its Antarctica voyages as all-inclusive. Details
            should always be confirmed at time of booking, but the model is
            designed to eliminate fragmented pricing.
          </p>

          <p>Typical inclusions:</p>

          <div className="Scenic_expert_cards">
            <div className="Scenic_expert_card">
              {/* <div className="Scenic_icon_box"><i className="fas fa-route"></i></div> */}
              <p>Suite accommodations</p>
            </div>

            <div className="Scenic_expert_card">
              {/* <div className="Scenic_icon_box"><i className="fas fa-sun"></i></div> */}
              <p>Dining across multiple venues</p>
            </div>

            <div className="Scenic_expert_card">
              {/* <div className="icon_box"><i className="fas fa-clock"></i></div> */}
              <p>Beverages</p>
            </div>

            <div className="Scenic_expert_card">
              {/* <div className="icon_box"><i className="fas fa-ship"></i></div> */}
              <p>Guided expedition landings and zodiac excursions</p>
            </div>

            <div className="Scenic_expert_card">
              {/* <div className="icon_box"><i className="fas fa-plane"></i></div> */}
              <p>Onboard lectures and enrichment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 ================= */}
      <section className="Scenic_team_Cruises_section">
        <div className="Scenic_team_Cruises_inner">
          <h2>How Scenic Compares to Other Antarctica Expedition Cruises?</h2>

          <p>
            Travelers evaluating Antarctica often compare multiple expedition
            cruise lines.
          </p>

          <p>Scenic’s position is distinct within the market:</p>

          <p className="Scenic_team_Cruises_points">
            • Scenic: all-inclusive structure with a modern luxury yacht
            environment <br />
            • Silversea Cruises: strong expedition heritage with a more
            traditional luxury approach <br />
            • Seabourn Cruise Line: refined, smaller ship experience with
            expedition capability <br />• Ponant: boutique expedition style with
            a European design influence
          </p>

          <p>
            The right choice depends on travel style, expectations, and
            priorities. Scenic is ideal for clients who want simplicity,
            structure, and a contemporary luxury experience.
          </p>
        </div>
      </section>

      {/* ================= SECTION 6 ================= */}
      <section className="Scenic_right_experience_section">
        <div className="Scenic_right_experience_inner">
          <div className="Scenic_right_experience_content">
            <h2>Is Antarctica the Right Experience for You?</h2>

            <p>
              Antarctica is not a passive destination. It requires flexibility
              and a clear understanding of what the experience involves.
            </p>

            <p>Considerations include:</p>

            <ul className="Scenic_styled_list">
              <li>
                <i className="fas fa-check"></i> The Drake Passage crossing,
                which can vary in conditions
              </li>
              <li>
                <i className="fas fa-check"></i> Zodiac transfers and uneven
                terrain during landings
              </li>
              <li>
                <i className="fas fa-check"></i> Weather-driven itinerary
                adjustments
              </li>
            </ul>

            <p>
              Scenic is designed to provide a high level of comfort throughout,
              but the experience remains an active expedition.
            </p>

            <p>
              For many travelers, Antarctica becomes one of the most meaningful
              journeys they will take. The key is approaching it with the right
              expectations and preparation.
            </p>
          </div>

          <div className="Scenic_right_experience_image">
            <img src={SecondPage3} alt="Scenic Antarctica Explorer" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 ================= */}
      <section className="Scenic_team_Routes_section">
        <div className="Scenic_team_Routes_inner">
          <h2>Antarctica Itineraries and Routes</h2>

          <p>
            Most Scenic Antarctica voyages depart from South America, typically
            Argentina or Chile. The journey includes crossing the Drake Passage
            before entering the Antarctic Peninsula.
          </p>

          <p>
            Routes remain flexible. Weather, ice conditions, and wildlife
            activity determine daily operations.
          </p>

          <p>This variability is a defining part of Antarctica travel.</p>
        </div>
      </section>

      {/* ================= SECTION 8 ================= */}
      <section className="Scenic_pricing_investment_section">
        <div className="Scenic_pricing_investment_inner">
          <h2>Pricing and Investment Strategy</h2>

          <p className="Scenic_pricing_lead">
            Antarctica is a limited-access destination with strict capacity
            controls. Scenic operates within the ultra-luxury segment.
            Expeditions represent a significant travel investment. The value is
            driven by:
          </p>

          <div className="Scenic_investment_factors">
            <div className="Scenic_factor_card">
              <i className="fas fa-map-marked-alt"></i>
              <h4>Restricted Access</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-ship"></i>
              <h4>Limited Capacity</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-shield-alt"></i>
              <h4>Safety Standards</h4>
            </div>
            <div className="Scenic_factor_card">
              <i className="fas fa-glass-cheers"></i>
              <h4>All-Inclusive</h4>
            </div>
          </div>

          <p className="Scenic_pricing_footer">
            Pricing varies based on suite category, itinerary length, timing,
            and availability. Strategic planning allows clients to secure the
            right experience well in advance.
          </p>
        </div>
      </section>

      {/* ================= SECTION 9 ================= */}
      <section className="Scenic_season_section">
        <div className="Scenic_season_inner">
          <div className="Scenic_section_header">
            <h2>When to Travel to Antarctica</h2>
            <p>
              The Antarctica expedition season runs exclusively from November
              through March.
            </p>
          </div>

          <div className="Scenic_season_cards">
            <div className="Scenic_season_card Scenic_season_card--early">
              <div className="Scenic_season_icon">
                <i className="fas fa-snowflake"></i>
              </div>
              {/* <div className="Scenic_season_label">November – Early December</div> */}
              <h4>Early Season</h4>
              <p>
                Pristine ice, untouched landscapes, and courtship behaviors
                among penguins.
              </p>
            </div>

            <div className="Scenic_season_card Scenic_season_card--mid">
              <div className="Scenic_season_icon">
                <i className="fas fa-paw"></i>
              </div>
              {/* <div className="Scenic_season_label">Late December – January</div> */}
              <h4>Mid Season</h4>
              <p>
                Peak summer temperatures, hatching penguin chicks, and peak
                wildlife activity.
              </p>
            </div>

            <div className="Scenic_season_card Scenic_season_card--late">
              <div className="Scenic_season_icon">
                <i className="fas fa-water"></i>
              </div>
              {/* <div className="Scenic_season_label">February – March</div> */}
              <h4>Late Season</h4>
              <p>
                Incredible whale activity, receding ice opening up new channels,
                and spectacular sunsets.
              </p>
            </div>
          </div>

          <div className="Scenic_season_footer">
            <i className="fas fa-info-circle"></i>
            <p>
              The best timing depends entirely on your personal priorities. All
              months offer exceptional expedition conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10 ================= */}
      <section className="Scenic_about_yachts_Happens_section">
        <div className="Scenic_about_yachts_Happens_inner">
          <h2>What Happens Next?</h2>

          <p>Initial consultation to define timing, goals, and comfort level</p>
          <p>Curated Scenic options with strategic recommendations</p>
          <p>Booking, logistics, and full expedition preparation</p>

          <p>
            This process ensures the journey is structured correctly before
            confirmation.
          </p>
        </div>
      </section>

      {/* ================= SECTION 11 — EXPERT TEAM & PERSONAL CURATOR ================= */}
      <section className="Scenic_expert_team_merged_section">
        <div className="Scenic_insight_inner">
          <div className="Scenic_insight_flex">
            {/* CONTENT (LEFT) */}
            <div className="Scenic_insight_content">
              <h2>
                Why Book with Angela Hughes and Trips & Ships Luxury Travel?
              </h2>

              <div className="Scenic_expert_sub">
                <p>Antarctica requires strategic planning and execution.</p>
                <p>
                  Angela Hughes brings over four decades of experience in the
                  travel industry and has traveled to 121 countries and
                  territories.
                </p>
              </div>

              <ul className="Scenic_styled_list Scenic_team_points_styled">
                <li>
                  <i className="fas fa-check-circle"></i> Strategic positioning
                  across expedition inventory
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Access to preferred
                  availability and timing
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Full itinerary
                  coordination
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Ongoing support
                  throughout the journey
                </li>
              </ul>

              <div className="Scenic_curated_card">
                <div className="Scenic_curated_card_header">
                  <div className="Scenic_curated_card_title">
                    <h2>Planned and Curated by Angela Hughes</h2>
                    <p className="Scenic_curator_subtitle">
                      CEO & Founder, Trips & Ships Luxury Travel
                    </p>
                  </div>
                </div>

                <div className="Scenic_curated_badges">
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-award"></i>
                    <span>40+ years of expertise</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-globe-americas"></i>
                    <span>121 countries traveled</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-star"></i>
                    <span>Luxury Travel Influencer of the Year</span>
                  </div>
                  <div className="Scenic_curated_badge_item">
                    <i className="fas fa-crown"></i>
                    <span>Most Influential Women in Travel (2026)</span>
                  </div>
                </div>

                <p className="Scenic_curator_featured">
                  Featured in <strong>Travel Weekly</strong>,{" "}
                  <strong>TravelPulse</strong>, and other leading industry
                  publications.
                </p>
              </div>

              <div className="Scenic_expert_sub Scenic_margin_top">
                <p>
                  Clients are often positioned into inventory that is no longer
                  publicly available due to timing and relationships.
                </p>
                <p>
                  Every Antarctica journey is reviewed and structured prior to
                  confirmation to ensure accuracy and alignment.
                </p>
              </div>
            </div>

            {/* IMAGE (RIGHT) */}
            <div className="Scenic_insight_image_container">
              <div className="Scenic_insight_image_wrapper">
                <img
                  src={myImage}
                  alt="Angela Hughes - Luxury Travel Advisor"
                  className="Scenic_insight_expert_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 11.5 — IMAGE GALLERY SLIDER ================= */}
      <section className="Scenic_gallery_section">
        <div className="Scenic_gallery_inner">
          <div className="Scenic_gallery_wrapper">
            {/* NAVIGATION ARROWS */}
            <button
              className="Scenic_gallery_arrow Scenic_gallery_arrow--prev"
              onClick={() =>
                setGalleryCurrent(
                  (prev) =>
                    (prev - 1 + galleryImages.length) % galleryImages.length,
                )
              }
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              className="Scenic_gallery_arrow Scenic_gallery_arrow--next"
              onClick={() =>
                setGalleryCurrent((prev) => (prev + 1) % galleryImages.length)
              }
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* IMAGES */}
            <div
              className="Scenic_gallery_slide"
              style={{
                backgroundImage: `url(${galleryImages[galleryCurrent]})`,
              }}
            >
              <div className="Scenic_gallery_overlay">
                <span className="Scenic_image_counter">
                  {galleryCurrent + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* PAGINATION DOTS */}
            <div className="Scenic_gallery_dots">
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={`Scenic_gallery_dot ${index === galleryCurrent ? "active" : ""}`}
                  onClick={() => setGalleryCurrent(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13 ================= */}
      <section className="Scenic_team_Hughes_section">
        <div className="Scenic_team_Hughes_inner">
          <h2>About Angela Hughes</h2>

          <p>
            Angela Hughes is the CEO and Founder of Trips & Ships Luxury Travel
            and Luxury Travel University.
          </p>

          <p>
            She specializes in luxury and expedition travel and works with
            clients seeking high-level, customized global experiences.
          </p>
        </div>
      </section>

      {/* ================= SECTION 14 (FAQ) ================= */}

      <section className="Scenic-faq-section">
        <div className="Scenic-faq-inner">
          <h2>Frequently Asked Questions About Scenic Antarctica</h2>

          <div className="Scenic-faq-accordion">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`Scenic-faq-item ${
                  activeFaq === index ? "Scenic-active" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="Scenic-faq-question">
                  <span>{faq.question}</span>
                  <span className="Scenic-faq-icon">
                    {activeFaq === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </div>

                <div className="Scenic-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 15 CTA ================= */}
      <section className="Scenic_cta_section">
        <div className="Scenic_cta_overlay"></div>
        <div className="Scenic_cta_inner">
          <h2>Plan Your Scenic Antarctica Expedition</h2>

          <p>
            Antarctica is not a destination to approach casually. Work with a
            team that understands how to structure the experience correctly from
            the beginning.
          </p>

          <div className="Scenic_hero_buttons">
            <button className="Scenic_primary_btn">
              Start Your Antarctica Plan
            </button>
            <button className="Scenic_secondary_btn">
              Download Antarctica Planning Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScenicAntarctica;
