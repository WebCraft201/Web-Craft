import { Star } from 'lucide-react';
import { memo } from 'react';

const testimonials = [
  {
    name: 'Ravi Sharma',
    role: 'CEO, TechSolutions',
    initials: 'RS',
    color: 'from-blue-500 to-cyan-400',
    review:
      'WebCraft built an amazing website for our business. Highly professional and delivered on time!',
  },
  {
    name: 'Priya Verma',
    role: 'Marketing Head, BrightMart',
    initials: 'PV',
    color: 'from-pink-400 to-orange-400',
    review:
      'The design is beautiful and the support is excellent. Highly recommend!',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, StartX',
    initials: 'AP',
    color: 'from-emerald-400 to-blue-500',
    review:
      'Great team! They understood our needs perfectly and delivered beyond expectations.',
  },
];

const ratingStars = [0, 1, 2, 3, 4];

function Testimonials() {
  return (
    <section className="fast-section pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <span className="badge">TESTIMONIALS</span>
          <h2 className="section-title mt-4">What Clients Say</h2>
          <p className="section-copy">Our clients love working with WebCraft.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
              <article className="fast-card p-7 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <span
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br ${testimonial.color} text-sm font-black text-white shadow-md shadow-blue-600/15`}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <div className="flex gap-1 text-amber-400" aria-label="5 star rating">
                      {ratingStars.map((star) => (
                        <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                      {testimonial.review}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-extrabold text-navy">{testimonial.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
