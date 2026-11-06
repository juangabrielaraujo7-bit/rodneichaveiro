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
      <div className="section-heading">
        <div>
          <h2 id="reviews-title">
            Quem já precisou,
            <br />
            <span>conta como foi.</span>
          </h2>
          <p>Experiências de clientes compartilhadas no Google.</p>
        </div>
        <a
          href={company.maps}
          className="button button-outline"
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="maps_click"
          data-source="reviews"
        >
          Ver avaliações no Google <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <figure className="review-card" key={review.author}>
            <figcaption>
              <span className="review-avatar" aria-hidden="true">
                {review.initials}
              </span>
              <div>
                <strong>{review.author}</strong>
                <span>Avaliação no Google</span>
              </div>
            </figcaption>
            <div
              className="review-stars"
              role="img"
              aria-label={`${review.rating} de 5 estrelas`}
            >
              {Array.from({ length: review.rating }, (_, i) => (
                <Star
                  key={i}
                  size={17}
                  fill="currentColor"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote>
              <p>“{review.text}”</p>
            </blockquote>
            {review.excerpt && (
              <span className="review-excerpt">Trecho da avaliação</span>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
