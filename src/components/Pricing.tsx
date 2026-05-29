import { Check } from 'lucide-react';
import { memo } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    note: 'Perfect for small businesses',
    popular: false,
    features: ['Up to 5 Pages', 'Mobile Responsive', 'Basic SEO', 'Contact Form', '1 Revision'],
  },
  {
    name: 'Professional',
    price: '$209',
    note: 'Best for growing businesses',
    popular: true,
    features: ['Up to 10 Pages', 'Advanced SEO', 'Speed Optimized', 'Basic E-commerce', '3 Months Support'],
  },
  {
    name: 'Enterprise',
    price: '$315',
    note: 'Best for large businesses',
    popular: false,
    features: [
      'Unlimited Pages',
      'Advanced SEO & Analytics',
      'Custom Features',
      'Priority Support',
      '6 Months Support',
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="fast-section pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <span className="badge">PRICING PLANS</span>
          <h2 className="section-title mt-4">
            Simple Pricing Plans
          </h2>
          <p className="section-copy">Choose a plan that fits your needs.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
              <article
                className={`fast-card relative p-8 hover:-translate-y-1 ${plan.popular ? 'border-primary-600 ring-1 ring-primary-600 lg:-translate-y-3 lg:hover:-translate-y-4' : ''
                  }`}
              >
                {plan.popular && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-black uppercase text-white shadow-lg shadow-blue-600/20">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-extrabold ${plan.popular ? 'text-primary-600' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{plan.note}</p>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-navy">{plan.price}</span>
                  <span className="pb-1 text-sm font-bold text-slate-500">/ One-time</span>
                </div>

                <ul className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <Check className="mt-0.5 shrink-0 text-primary-600" size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 flex w-full items-center justify-center rounded-lg border px-5 py-3 text-sm font-black transition-[transform,border-color,box-shadow,background-color] duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${plan.popular
                      ? 'border-primary-600 bg-gradient-to-r from-primary-600 to-cyan-500 text-white shadow-md shadow-blue-600/20 hover:-translate-y-0.5'
                      : 'border-slate-200 bg-white text-primary-600 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card'
                    }`}
                >
                  Choose Plan
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Pricing);
