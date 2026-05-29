import { Code2, MessageCircle, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Discover Requirements',
    description: 'We understand your goals and project objectives.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Plan',
    description: 'We design and plan the best solution tailored to your needs.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop Website',
    description: 'Our experts build a modern, responsive website with care.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your website and provide ongoing support.',
  },
];

function Process() {
  return (
    <section className="section-pad bg-white/70">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <span className="badge">OUR PROCESS</span>
          <h2 className="section-title mt-4">How We Work</h2>
          <p className="section-copy">
            Our simple process ensures successful project delivery.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-blue-100 via-primary-600 to-blue-100 lg:block" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
                  <article className="relative rounded-lg p-4 text-center transition duration-300 hover:-translate-y-2">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-blue-200 bg-blue-50 shadow-xl shadow-blue-600/10">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-primary-600 shadow-sm">
                        <Icon size={30} />
                      </span>
                    </div>
                    <span className="mx-auto mt-5 grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-sm font-black text-primary-600">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold text-navy">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
