import {
  ArrowRight,
  Code2,
  Monitor,
  PenTool,
  Search,
  Settings,
  ShoppingCart,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies that perform beautifully.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly designs that create great experiences.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Online stores that drive sales and provide seamless shopping.',
  },
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Powerful web apps tailored to your unique business needs.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve rankings and get found by the right audience.',
  },
  {
    icon: Settings,
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and running smoothly.',
  },
];

function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <p className="section-kicker">Our Services</p>
          <h2 className="section-title mt-3">Premium web solutions for ambitious brands</h2>
          <p className="section-copy">
            We provide end-to-end web solutions for your business growth online.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
                <article className="card group flex min-h-[250px] flex-col p-7">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-primary-600 shadow-inner transition duration-300 group-hover:scale-110">
                    <Icon size={30} strokeWidth={2.4} />
                  </span>
                  <h3 className="text-xl font-extrabold leading-snug text-navy">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-600 transition hover:gap-3 hover:text-primary-700"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </a>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
