import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import "./ScenicvsEmeraldYachts.css";
import myImage from "../../assets/image.jpg";
import FourthPage1 from "../../assets/FourthPage/FourthPage1.jpg";
import FourthPage2 from "../../assets/FourthPage/FourthPage2.jpeg";
import FourthPage3 from "../../assets/FourthPage/FourthPage3.jpg";

function YachtsComparison() {
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const images = [FourthPage2, FourthPage1, FourthPage3];

  const faqData = [
    {
      question: "Which is better, Scenic or Emerald yachts?",
      answer:
        "Scenic is ultra-luxury with a fully all-inclusive model, while Emerald offers a more accessible yacht experience. The better choice depends on your expectations and travel style.",
    },
    {
      question: "How much more expensive is Scenic compared to Emerald?",
      answer:
        "Scenic is typically 40 to 100 percent more expensive depending on itinerary and suite level due to its higher level of inclusions and service.",
    },
    {
      question: "Is Scenic worth the higher price?",
      answer:
        "For travelers seeking a seamless, high-end experience, Scenic often justifies the higher investment.",
    },
    {
      question: "Are Scenic and Emerald owned by the same company?",
      answer:
        "Yes. Both brands operate under the same parent company but are positioned in different tiers.",
    },
    {
      question: "Which is better for first-time yacht travelers?",
      answer:
        "Emerald is often a strong entry point due to its approachable pricing and relaxed environment.",
    },
    {
      question: "Do Scenic and Emerald visit the same destinations?",
      answer:
        "Yes, both operate in similar regions such as the Mediterranean and Caribbean.",
    },
    {
      question: "Is Scenic all-inclusive compared to Emerald?",
      answer:
        "Scenic emphasizes a fully all-inclusive structure, while Emerald includes many elements but is less comprehensive.",
    },
    {
      question: "Which yacht has better service?",
      answer:
        "Both offer strong service, though Scenic is positioned at a higher level.",
    },
    {
      question: "What type of traveler chooses Emerald?",
      answer:
        "Travelers seeking value, relaxation, and a boutique yacht experience.",
    },
    {
      question: "What type of traveler chooses Scenic?",
      answer:
        "Travelers seeking a structured, ultra-luxury, all-inclusive experience.",
    },
    {
      question: "Should I use a travel advisor?",
      answer:
        "Yes. Choosing the right yacht requires aligning expectations with experience.",
    },
    {
      question: "How do I decide between Scenic and Emerald?",
      answer:
        "The decision depends on whether you prioritize a high-end all-inclusive experience or a relaxed, value-driven yacht journey.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <div>
      <Helmet>
        <title>
          Scenic vs Emerald Yachts: Which Experience Is Right for You
        </title>
        <meta
          name="description"
          content="Compare Scenic vs Emerald yacht cruises. Pricing, inclusions, experience, and expert recommendations from Angela Hughes to help you choose the right luxury yacht."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#webpage",
                url: "https://www.tripsandships.com/scenic-vs-emerald-yachts",
                name: "Scenic vs Emerald Yachts: Which Experience Is Right for You",
                headline:
                  "Scenic vs Emerald Yachts: Which Experience Is Right for You",
                description:
                  "Compare Scenic vs Emerald yacht cruises. Pricing, inclusions, experience, and expert recommendations from Angela Hughes to help you choose the right luxury yacht.",
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.tripsandships.com/#website" },
                about: [
                  {
                    "@type": "Organization",
                    name: "Scenic Luxury Cruises & Tours",
                  },
                  { "@type": "Organization", name: "Emerald Cruises" },
                  { "@type": "Thing", name: "Luxury yacht cruises" },
                ],
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#primaryimage",
                  contentUrl:
                    "https://www.tripsandships.com/path-to-yacht-comparison-image.jpg",
                },
                breadcrumb: {
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#breadcrumb",
                },
                author: {
                  "@id": "https://www.tripsandships.com/#angela-hughes",
                },
                publisher: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
                mainEntity: {
                  "@id":
                    "https://www.tripsandships.com/scenic-vs-emerald-yachts#faq",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.tripsandships.com/#website",
                url: "https://www.tripsandships.com/",
                name: "Trips & Ships Luxury Travel",
                inLanguage: "en-US",
                publisher: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
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
                  "Luxury travel agency specializing in yacht cruises, expedition travel, and high-end global experiences.",
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
                worksFor: {
                  "@id": "https://www.tripsandships.com/#organization",
                },
                description:
                  "Angela Hughes is the CEO of Trips & Ships Luxury Travel with more than 40 years in the travel industry and travel experience across 121 countries and territories. She specializes in luxury travel, yacht cruises, and expedition planning.",
                sameAs: ["https://www.travelleaders.com/agent/17255"],
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#breadcrumb",
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
                    name: "Yacht Cruises",
                    item: "https://www.tripsandships.com/yacht-cruises",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Scenic vs Emerald Yachts",
                    item: "https://www.tripsandships.com/scenic-vs-emerald-yachts",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.tripsandships.com/scenic-vs-emerald-yachts#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which is better, Scenic or Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic is positioned as an ultra-luxury, fully all-inclusive yacht experience, while Emerald offers a more accessible luxury yacht experience. The better choice depends on your expectations, budget, and preferred travel style.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the main difference between Scenic and Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The main difference is positioning. Scenic delivers a fully all-inclusive, ultra-luxury experience, while Emerald provides a boutique yacht experience at a lower price point with fewer inclusions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much more expensive is Scenic compared to Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic is typically 40 to 100 percent more expensive than Emerald depending on itinerary and suite category, reflecting its higher level of inclusions and service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenic worth the higher price?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For travelers seeking a seamless, all-inclusive, high-end experience, Scenic often justifies the higher investment. The value depends on how much you prioritize inclusions and service.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are Scenic and Emerald owned by the same company?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Scenic Luxury Cruises & Tours and Emerald Cruises operate under the same parent company but are positioned in different segments of the luxury yacht market.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which is better for first-time yacht travelers?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald is often a strong entry point for first-time yacht travelers due to its approachable pricing and relaxed atmosphere, while Scenic is better suited for those seeking a higher-end experience.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do Scenic and Emerald yachts visit the same destinations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Both brands operate in similar regions such as the Mediterranean and Caribbean, though specific itineraries may vary.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenic all-inclusive compared to Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic emphasizes a fully all-inclusive structure, while Emerald includes many core elements but may not be as comprehensive depending on the itinerary.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which yacht has better service, Scenic or Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Both offer strong service, but Scenic is positioned at a higher luxury tier with a more structured and elevated service experience.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What type of traveler chooses Emerald yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Emerald appeals to travelers who want a yacht experience with strong value, a relaxed atmosphere, and fewer formalities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What type of traveler chooses Scenic yachts?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Scenic attracts travelers seeking a high-end, fully inclusive, and design-forward yacht experience with minimal friction during the journey.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I use a travel advisor to choose between Scenic and Emerald?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. A travel advisor helps match your expectations with the right yacht experience and ensures your trip is structured correctly from the beginning.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="Yachts_hero_section">
        <div
          className="Yachts_hero_bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        <div className="Yachts_hero_overlay"></div>

        <div className="Yachts_hero_content">
          <h1>Scenic vs Emerald Yachts</h1>

          {/* FIRST PARAGRAPH (VISIBLE) */}
          <p className="Yachts_hero_p">
            Choosing the right luxury yacht experience
          </p>

          <p>
            For travelers considering a yacht cruise, the decision often comes
            down to choosing between Scenic Luxury Cruises & Tours and Emerald
            Cruises.
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                Both brands operate under the same ownership and visit similar
                destinations.
              </p>

              <p>The difference is not where they go.</p>
              <p>It is how the experience is delivered.</p>
              <p>
                The right decision ensures your expectations align with the
                journey from the beginning.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
          <div className="Yachts_readmore_wrapper">
            <button
              className="Yachts_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="Yachts_hero_buttons">
            <button className="Yachts_primary_btn">
              Get a Personalized Yacht Recommendation
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="Yachts_compare_section">
        <div className="Yachts_compare_inner">
          <h2>Scenic vs Emerald at a Glance</h2>

          <p>Feature Scenic Emerald</p>
          <p>Positioning Ultra-luxury Luxury</p>
          <p>Pricing Higher, all-inclusive Lower, value-driven</p>
          <p>Ship Style Discovery yacht Boutique yacht</p>
          <p>Experience Structured, elevated Relaxed, social</p>
          <p>Best For High-end seamless travel Approachable yacht experience</p>
        </div>
      </section>

      {/* SECTION 3 */}
      {/* <section className="Yachts_price_section">
        <div className="Yachts_price_inner">
          <h2>Scenic vs Emerald Price Difference</h2>

          <p>Typical pricing reflects their positioning:</p>
          <p>Emerald yachts: approximately $6,000 to $12,000 per person</p>
          <p>Scenic yachts: approximately $10,000 to $25,000 or more per person</p>
          <p>Scenic is typically 40 to 100 percent higher depending on itinerary and suite level.</p>
          <p>The difference is driven by inclusions, service level, and overall experience structure.</p>
        </div>
      </section> */}

      <section className="Yachts_price_section">
        <div className="Yachts_price_inner">
          <h2>Scenic vs Emerald Price Difference</h2>

          <p className="Yachts_price_subtext">
            Typical pricing reflects their positioning:
          </p>

          {/* CARDS */}
          <div className="Yachts_price_cards">
            <div className="Yachts_price_card">
              <i className="fas fa-dollar-sign"></i>
              <span>
                Emerald yachts: approximately $6,000 to $12,000 per person
              </span>
            </div>

            <div className="Yachts_price_card">
              <i className="fas fa-gem"></i>
              <span>
                Scenic yachts: approximately $10,000 to $25,000 or more per
                person
              </span>
            </div>

            <div className="Yachts_price_card">
              <i className="fas fa-chart-line"></i>
              <span>
                Scenic is typically 40 to 100 percent higher depending on
                itinerary and suite level.
              </span>
            </div>

            <div className="Yachts_price_card">
              <i className="fas fa-layer-group"></i>
              <span>
                The difference is driven by inclusions, service level, and
                overall experience structure.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      {/* <section className="Yachts_difference_section">
        <div className="Yachts_difference_inner">
          <h2>The Biggest Differences Between Scenic and Emerald</h2>
          
          <p>Scenic delivers a fully all-inclusive, ultra-luxury experience</p>
          <p>Emerald offers a more accessible luxury yacht experience</p>
          <p>Scenic emphasizes seamless service and structure</p>
          <p>Emerald focuses on relaxed, easygoing travel</p>
          <p>The difference is not access. It is experience level.</p>
        </div>
      </section> */}

      <section className="Yachts_difference_section">
        <div className="Yachts_difference_inner">
          <h2>The Biggest Differences Between Scenic and Emerald</h2>

          <div className="Yachts_difference_cards">
            <div className="Yachts_difference_card">
              <p>
                Scenic delivers a fully all-inclusive, ultra-luxury experience
              </p>
            </div>

            <div className="Yachts_difference_card">
              <p>Emerald offers a more accessible luxury yacht experience</p>
            </div>

            <div className="Yachts_difference_card">
              <p>Scenic emphasizes seamless service and structure</p>
            </div>

            <div className="Yachts_difference_card">
              <p>Emerald focuses on relaxed, easygoing travel</p>
            </div>

            <div className="Yachts_difference_card Yachts_difference_full">
              <p>The difference is not access. It is experience level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="Yachts_feel_section">
        <div className="Yachts_feel_inner">
          <h2>How the Experience Feels Onboard</h2>

          <p>Scenic feels structured, elevated, and seamless.</p>
          <p>Emerald feels relaxed, social, and easy.</p>
          <p>The difference is not just in features.</p>
          <p>It is in how you experience each day onboard.</p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="Yachts_ship_section">
        <div className="Yachts_ship_inner">
          <h2>Ship Design and Onboard Experience</h2>

          <p>
            Scenic yachts are designed as ultra-luxury discovery vessels with
            expansive suites, multiple dining venues, and a design-forward
            environment.
          </p>
          <p>
            Emerald yachts are smaller and more intimate, offering a boutique
            experience that prioritizes simplicity and comfort.
          </p>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="Yachts_inclusion_section">
        <div className="Yachts_inclusion_inner">
          <h2>What Is Included?</h2>

          <p>
            Scenic operates a fully all-inclusive model designed to eliminate
            additional costs and simplify the experience.
          </p>
          <p>
            Emerald includes many core elements but may offer a more flexible
            structure depending on itinerary.
          </p>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="Yachts_best_section">
        <div className="Yachts_best_inner">
          <h2>Best Choice Based on Travel Style</h2>

          <p>Choose Scenic for:</p>

          <p>Luxury anniversaries or milestone trips</p>
          <p>Travelers who value structure and inclusions</p>
          <p>High-end, design-forward experiences</p>

          <p>Choose Emerald for:</p>
          <p>First-time yacht travelers</p>
          <p>Relaxed, social travel style</p>
          <p>Strong value within yacht cruising</p>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="Yachts_notfor_section">
        <div className="Yachts_notfor_inner">
          <h2>Who Each Option Is Not For</h2>

          <p>Scenic may not be ideal for:</p>
          <p>Travelers focused primarily on lower pricing</p>
          <p>Those who do not value all-inclusive structure</p>

          <p>Emerald may not be ideal for:</p>
          <p>Travelers expecting ultra-luxury service</p>
          <p>Those wanting a highly structured experience</p>
        </div>
      </section>

      {/* SECTION 10 */}
      <section className="Yachts_mistake_section">
        <div className="Yachts_mistake_inner">
          <h2>Common Mistakes When Choosing</h2>

          <p>Choosing based only on price</p>
          <p>Assuming both experiences are identical</p>
          <p>Not aligning the choice with personal expectations</p>
        </div>
      </section>

      {/* SECTION 11 */}
      <section className="Yachts_expert_section">
        <div className="Yachts_expert_inner">
          <h2>Expert Insight from Angela Hughes</h2>

          <p>
            We work with both Scenic and Emerald regularly and guide clients
            through this exact decision based on how they want to travel, not
            just price.
          </p>
          <p>The goal is alignment.</p>
          <p>The difference is not which brand is better.</p>
          <p>It is which experience fits you.</p>

          {/* <div className="Yachts_expert_images">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
      <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="" />
      <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" />
    </div> */}
        </div>
      </section>

      {/* SECTION 12 */}
      <section className="Yachts_recommend_section">
        <div className="Yachts_recommend_inner">
          <h2>Our Recommendation</h2>

          <p>
            For travelers seeking a fully structured, ultra-luxury experience
            with seamless inclusions, Scenic is typically the stronger fit.
          </p>
          <p>
            For travelers looking for a relaxed yacht experience with strong
            value, Emerald is an excellent option.
          </p>
        </div>
      </section>

      {/* SECTION 13 */}
      <section className="Yachts_next_section">
        <div className="Yachts_next_inner">
          <h2>What Happens Next?</h2>

          <p>Consultation to define travel style</p>
          <p>Personalized yacht recommendation</p>
          <p>Booking and full planning</p>
        </div>
      </section>

      {/* SECTION 14 */}
      <section className="Yachts_why_section">
        <div className="Yachts_why_inner">
          <h2>Why Work with Angela Hughes and Trips & Ships Luxury Travel</h2>

          <p>
            Angela Hughes has over four decades in the travel industry and has
            traveled to 121 countries and territories.
          </p>
          <p>
            She leads a team of more than 140 luxury travel advisors and
            specializes in matching clients to the right travel experience.
          </p>

          <p>Clients benefit from:</p>
          <p>Clear positioning across yacht brands</p>
          <p>Access to preferred inventory</p>
          <p>Full itinerary coordination</p>
          <p>Ongoing support</p>
        </div>
      </section>

      {/* SECTION 15 */}
      {/* <section className="Yachts_author_section">
        <div className="Yachts_author_inner">
          <h2>Planned and Curated by Angela Hughes CEO, Trips & Ships Luxury Travel</h2>


          <p>40+ years of experience</p>
          <p>121 countries traveled</p>
          <p>Luxury Travel Influencer of the Year (2024)</p>
          <p>Most Influential Women in Travel (2026)</p>
        </div>
      </section> */}

      <section className="Yachts_author_section">
        <div className="Yachts_author_inner Yachts_author_split">
          {/* LEFT CONTENT */}
          <div className="Yachts_author_content">
            <h2>
              Planned and Curated by Angela Hughes CEO, Trips & Ships Luxury
              Travel
            </h2>

            <p>40+ years of experience</p>
            <p>121 countries traveled</p>
            <p>Luxury Travel Influencer of the Year (2024)</p>
            <p>Most Influential Women in Travel (2026)</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="Yachts_author_image">
            <img src={myImage} alt="Yacht Experience" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="Scenic-faq-section">
        <div className="Scenic-faq-inner">
          <h2>Frequently Asked Questions About Scenic vs Emerald Yachts</h2>

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

      {/* SECTION 17 */}
      <section className="Yachts_cta_section">
        <div className="Yachts_cta_inner">
          <h2>Choose the Right Yacht Experience</h2>

          <p>The difference between Scenic and Emerald is not just price.</p>
          <p>It is how you want to experience the journey.</p>
          <p>
            Yacht inventory is limited and popular sailings often sell out in
            advance.
          </p>
          <button className="Yachts_primary_btn">
            Get a Personalized Yacht Recommendation
          </button>

          <button className="Yachts_secondary_btn">
            Explore Scenic Yacht Cruises
          </button>
        </div>
      </section>
    </div>
  );
}

export default YachtsComparison;
