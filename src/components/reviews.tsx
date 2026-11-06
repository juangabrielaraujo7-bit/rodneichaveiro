import { ArrowUpRight, Star } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { company } from "@/lib/content";
export function Reviews() {
  return (
    <section
      className="reviews-section container"
      id="avaliacoes"
      aria-labelledby="reviews-title"
    >
      <div className="reviews-summary">
        <svg
          className="google-reviews-logo"
          viewBox="0 0 180 65"
          role="img"
          aria-label="Google Reviews"
        >
          <text
            x="0"
            y="43"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fontWeight="600"
            letterSpacing="-3"
          >
            <tspan fill="#4285f4">G</tspan>
            <tspan fill="#ea4335">o</tspan>
            <tspan fill="#fbbc05">o</tspan>
            <tspan fill="#4285f4">g</tspan>
            <tspan fill="#34a853">l</tspan>
            <tspan fill="#ea4335">e</tspan>
          </text>
          <text
            x="4"
            y="63"
            fontFamily="Arial, sans-serif"
            fontSize="17"
            fontWeight="600"
            fill="#626262"
          >
            Reviews
          </text>
        </svg>
        <h2 id="reviews-title">
          Quem já precisou,
          <br />
          conta como foi.
        </h2>
        <p>Experiências de clientes compartilhadas no Google.</p>
        <a
          href={company.maps}
          className="button button-primary"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="maps_click"
          data-source="reviews"
        >
          Ver todas no Google <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div
        className="reviews-wall"
        role="region"
        aria-label="Avaliações de clientes — role para ler mais"
        tabIndex={0}
      >
        <div className="reviews-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.author}>
              <div
                className="review-stars"
                role="img"
                aria-label={`${review.rating} de 5 estrelas`}
              >
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star
                    key={i}
                    size={17}
                    fill="#ffdf00"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote>
                <p>“{review.text}”</p>
              </blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">
                  {review.initials}
                </span>
                <div>
                  <strong>{review.author}</strong>
                  <span>Avaliação no Google</span>
                </div>
              </figcaption>
              {review.excerpt && (
                <span className="review-excerpt">Trecho da avaliação</span>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
