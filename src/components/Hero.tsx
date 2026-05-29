import { ArrowRight, BadgeCheck, Code2, LineChart, Rocket, Star, TrendingUp } from 'lucide-react';

const avatars = [
  { initials: 'RS', color: 'from-blue-500 to-cyan-400' },
  { initials: 'PV', color: 'from-amber-400 to-orange-500' },
  { initials: 'AK', color: 'from-emerald-400 to-teal-500' },
  { initials: 'MN', color: 'from-pink-400 to-rose-500' },
  { initials: 'TJ', color: 'from-violet-500 to-blue-500' },
];

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-8 pt-14 sm:pt-20 lg:pb-12 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,rgba(239,246,255,0.7)_0%,rgba(255,255,255,0)_65%)]" />
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="fade-up">
          <div className="badge">
            <Rocket size={14} />
            WE BUILD SUCCESS ONLINE
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-7xl">
            We Build Stunning Websites That{' '}
            <span className="gradient-text">Grow Your Business</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            WebCraft helps businesses build modern, responsive, and high-performing
            websites that attract customers and grow online presence.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="primary-button">
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="secondary-button">
              View Our Work
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <span
                  key={avatar.initials}
                  className={`grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${avatar.color} text-[11px] font-black text-white shadow-lg shadow-slate-900/10`}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-1 text-amber-400" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-1 text-sm font-extrabold leading-5 text-navy">
                Trusted by 500+ Businesses
              </p>
            </div>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['98%', 'Client satisfaction'],
              ['4.9/5', 'Average rating'],
              ['2.4x', 'Faster growth'],
            ].map(([metric, label]) => (
              <div key={metric} className="premium-surface rounded-lg px-4 py-3">
                <p className="text-xl font-black text-navy">{metric}</p>
                <p className="mt-1 text-xs font-bold leading-4 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage relative mx-auto min-h-[470px] w-full max-w-2xl sm:min-h-[560px] lg:max-w-none">
          <div className="hero-grid absolute inset-x-0 top-10 h-[78%] rounded-[36px] border border-blue-100/70 bg-blue-50/40 shadow-inner" />

          <div className="laptop-shell absolute left-2 top-16 w-[84%] overflow-hidden sm:left-6 sm:top-20">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden gap-4 text-[10px] font-bold text-slate-400 sm:flex">
                  <span>Home</span>
                  <span>About</span>
                  <span>Services</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>

            <div className="grid min-h-[270px] grid-cols-[1fr_0.88fr] gap-5 bg-white p-5 sm:p-7">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-black uppercase text-primary-600">WebCraft Studio</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
                  Launch faster. Convert better.
                </h2>
                <button className="mt-6 w-fit rounded-lg bg-gradient-to-r from-primary-600 to-cyan-500 px-5 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-blue-600/25">
                  Get Started
                </button>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-600 p-4 shadow-inner">
                <div className="absolute right-4 top-4 h-16 w-16 rounded-lg bg-white/80 shadow-card" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white p-3 shadow-card">
                  <div className="h-2 w-16 rounded-full bg-blue-200" />
                  <div className="mt-3 h-2 w-28 rounded-full bg-blue-300" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <span className="h-8 rounded-lg bg-blue-50" />
                    <span className="h-8 rounded-lg bg-blue-100" />
                    <span className="h-8 rounded-lg bg-blue-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card float-card absolute right-0 top-7 flex items-center gap-3 px-4 py-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20">
              <BadgeCheck size={22} />
            </span>
            <div>
              <p className="text-sm font-black text-navy">UI/UX</p>
              <p className="text-xs font-semibold text-slate-500">Conversion-ready</p>
            </div>
          </div>

          <div className="card float-card-slow absolute bottom-20 left-0 w-[60%] px-5 py-4 sm:w-[50%]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-2 font-mono text-[10px] font-bold leading-4 sm:text-xs">
              <p className="text-slate-400">&lt;WebCraftHero&gt;</p>
              <p className="pl-3 text-primary-600">&lt;h1&gt;Grow Your Business&lt;/h1&gt;</p>
              <p className="pl-3 text-emerald-600">&lt;Button&gt;Start&lt;/Button&gt;</p>
              <p className="text-slate-400">&lt;/WebCraftHero&gt;</p>
            </div>
          </div>

          <div className="phone-shell absolute bottom-9 right-2 w-[32%] min-w-[128px] overflow-hidden bg-white sm:right-8">
            <div className="px-4 py-5">
              <p className="text-xs font-black text-navy">Analytics</p>
              <div className="mt-5 flex h-28 items-end gap-2">
                {[36, 52, 45, 74, 66, 92].map((height) => (
                  <span
                    key={height}
                    className="flex-1 rounded-full bg-gradient-to-t from-blue-600 to-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-black text-emerald-500">
                <LineChart size={16} />
                + 8.5%
              </div>
            </div>
          </div>

          <div className="card float-card absolute left-[54%] top-[44%] hidden items-center gap-3 px-4 py-3 sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-primary-600">
              <Code2 size={21} />
            </span>
            <span className="text-sm font-black text-navy">Code Preview</span>
          </div>

          <div className="card absolute bottom-36 right-[28%] hidden items-center gap-3 px-4 py-3 sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 text-emerald-500">
              <TrendingUp size={21} />
            </span>
            <div>
              <p className="text-sm font-black text-navy">Growth Chart</p>
              <p className="text-xs font-bold text-emerald-500">+42% leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
