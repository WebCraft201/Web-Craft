import { BarChart3, MonitorSmartphone, Puzzle, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We deliver projects on time without compromising quality.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    description: 'Websites that look perfect on all devices and screen sizes.',
  },
  {
    icon: BarChart3,
    title: 'SEO-Ready Websites',
    description: 'Built with best SEO practices to rank higher.',
  },
  {
    icon: Puzzle,
    title: 'Custom Solutions',
    description: 'Tailored solutions to meet your unique business goals.',
  },
];

function WhyChoose() {
  return (
    <section id="about" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <p className="section-kicker">Why Choose Us</p>
          <h2 className="section-title mt-3">
            Why growing businesses choose <span className="gradient-text">WebCraft</span>
          </h2>
          <p className="section-copy">
            Strategy, design, development, and launch support in one expert team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
                <article className="card group flex items-center gap-5 p-7">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-blue-50 text-primary-600 shadow-inner transition duration-300 group-hover:scale-110">
                    <Icon size={30} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
