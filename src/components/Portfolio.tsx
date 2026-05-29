import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

const projects = [
  {
    title: 'Business Website',
    category: 'Corporate',
    image: "./Lead.png",
  },
  {
    title: 'E-commerce Store',
    category: 'Fashion',
    image: "./e-commerce.png",
  },
  {
    title: 'Admin Dashboard',
    category: 'SaaS Platform',
    image: "./admin.png",
  },
];

function ProjectMockup({ image }: { image: string }) {
  return (
    <div className="portfolio-thumb h-56 overflow-hidden border-b border-slate-200 p-4">
      <div className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
        
        <img
          src={image}
          alt="project"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="fast-section pb-16 sm:pb-20 lg:pb-24">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <p className="section-kicker">Recent Work</p>
          <h2 className="section-title mt-3">Polished digital experiences that feel built to win</h2>
          <p className="section-copy">
            A quick look at the premium interfaces we craft for modern businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className={`reveal-on-scroll reveal-delay-${index + 1}`}>
              <article className="fast-card group overflow-hidden hover:-translate-y-1">
                <ProjectMockup image={project.image} />
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-navy">{project.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{project.category}</p>
                  <a
                    href="#contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-600 transition-colors duration-200 hover:text-primary-700"
                  >
                    View Case Study
                    <ArrowRight className="transition-transform duration-200 group-hover/link:translate-x-1" size={15} />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default memo(Portfolio);
