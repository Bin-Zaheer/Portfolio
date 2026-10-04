"use client";

const tech = [
  "NEXT.JS", "REACT", "JAVASCRIPT", "TYPESCRIPT", "HTML5",
  "CSS3", "TAILWIND CSS", "WORDPRESS", "ELEMENTOR", "GIT", "GITHUB"
];

export default function TechCarousel() {
  const items = [...tech, ...tech];

  return (
    <section className="tech-section" aria-label="Technologies">
      <div className="tech-label">Technologies we work with</div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span className="tech-item" key={`${item}-${i}`}>
              <i /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}