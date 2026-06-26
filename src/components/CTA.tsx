import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Sparkles, XCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialFormValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
};

const projectTypes = [
  'Website Development',
  'UI/UX Design',
  'E-commerce Website',
  'Web Application',
  'SEO Service',
  'Other',
];

const budgetRanges = ['$99 - 110', '$200 - $219', '$299+'];

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'official@web-craft.in',
    href: 'mailto:official@web-craft.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 (9310120456)',
    href: 'tel:+919310120456',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Delhi, India',
    href: "https://www.google.com/maps/place/New+Delhi/",
  },
];

function CTA() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);



  const updateField = (field: keyof FormValues, value: string) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (successMessage) {
      setSuccessMessage('');
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    const templateParams = {
      from_name: formValues.fullName,
      from_email: formValues.email,
      phone: formValues.phone || 'Not provided',
      project_type: formValues.projectType,
      budget: formValues.budget,
      message: formValues.message,
    };

    try {
      const res = await fetch("/api/contact.js", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues)
      })
      const data = await res.json()
      console.log(data)
      if (data.success) {
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormValues(initialFormValues);
      } else {
        setErrorMessage(data.message || "Failed to send email.");
      }

    } catch (err: any) {
      setErrorMessage(err)
    }
    finally {
      setIsSending(false);
    }

  }
  return (
    <section id="contact" className="pb-16 sm:pb-20">
      <div className="container-page">
        <div className="cta-panel relative overflow-hidden rounded-lg border border-blue-100/80 px-5 py-10 shadow-soft sm:px-8 lg:px-12 lg:py-14 dark:border-blue-400/20 dark:shadow-2xl dark:shadow-blue-950/20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-600/20" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-400/20" />
          <div className="absolute right-[34%] top-0 h-32 w-32 rounded-full bg-primary-100/50 blur-2xl dark:bg-primary-600/15" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-16">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-4 py-2 text-xs font-black uppercase text-primary-600 shadow-lg shadow-blue-600/5 backdrop-blur dark:border-blue-400/20 dark:bg-white/10 dark:text-cyan-200 dark:shadow-blue-950/10">
                <Sparkles size={14} />
                Contact Us
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-5xl dark:text-white">
                Let&apos;s Build Something Amazing Together
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                Have a project in mind? Fill out the form and our team will get back to
                you within 24 hours.
              </p>

              <div className="mt-8 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-lg border border-blue-100/80 bg-white/80 p-4 shadow-lg shadow-blue-600/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-blue-950/10 dark:hover:border-cyan-300/40 dark:hover:bg-white/[0.1]"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary-600 to-cyan-400 text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-105">
                        <Icon size={21} />
                      </span>
                      <span>
                        <span className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm font-extrabold text-navy dark:text-white">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-blue-100/80 bg-white/80 px-4 py-3 text-sm font-extrabold text-slate-700 shadow-sm shadow-blue-600/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                <CheckCircle2 className="text-cyan-500 dark:text-cyan-300" size={18} />
                Trusted by 500+ growing businesses
              </div>
            </div>

            <div className="reveal-on-scroll reveal-delay-2 relative">
              <div className="float-card-slow absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <form
                onSubmit={handleSubmit}
                className="relative rounded-lg border border-blue-100/80 bg-white/90 p-5 shadow-2xl shadow-blue-600/10 backdrop-blur-xl sm:p-7 lg:p-8 dark:border-white/15 dark:bg-white/[0.08] dark:shadow-blue-950/30"
              >
                <div className="mb-7">
                  <p className="text-sm font-black uppercase text-cyan-300">Start Your Project</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-navy dark:text-white">
                    Tell us what you want to build
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Full Name</span>
                    <input
                      type="text"
                      value={formValues.fullName}
                      onChange={(event) => updateField('fullName', event.target.value)}
                      placeholder="Sameer Kumar"
                      required
                      disabled={isSending}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300 disabled:opacity-60"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Email Address</span>
                    <input
                      type="email"
                      value={formValues.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder="official@web-craft.in"
                      required
                      disabled={isSending}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300 disabled:opacity-60"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Phone Number</span>
                    <input
                      type="tel"
                      value={formValues.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder="+1 (555) 000-0000"
                      disabled={isSending}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300 disabled:opacity-60"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Project Type</span>
                    <select
                      value={formValues.projectType}
                      onChange={(event) => updateField('projectType', event.target.value)}
                      required
                      disabled={isSending}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:focus:border-cyan-300 disabled:opacity-60"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Budget</span>
                    <select
                      value={formValues.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      required
                      disabled={isSending}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:focus:border-cyan-300 disabled:opacity-60"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budgetRange) => (
                        <option key={budgetRange} value={budgetRange}>
                          {budgetRange}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
                    <textarea
                      value={formValues.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      placeholder="Tell us about your goals, timeline, and must-have features..."
                      rows={5}
                      required
                      disabled={isSending}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300 disabled:opacity-60"
                    />
                  </label>
                </div>

                {successMessage && (
                  <div className="mt-5 flex items-center gap-3 rounded-lg border border-emerald-400/30 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                    <CheckCircle2 size={18} />
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="mt-5 flex items-center gap-3 rounded-lg border border-rose-400/30 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200">
                    <XCircle size={18} />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;

