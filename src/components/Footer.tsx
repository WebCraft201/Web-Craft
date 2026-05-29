import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const quickLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Pricing', 'Contact'];
const services = [
  'Website Development',
  'UI/UX Design',
  'E-commerce',
  'Web Application',
  'SEO Optimization',
  'Maintenance',
];
const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="WebCraft home">
      <img src="/W logo.png" alt="w logo" className='h-10 w-15 object-cover' />
        <img src="/logo text.png" alt="logo text" className='h-10 w-40 object-cover relative top-1.5 right-7' />
    </a>
  );
}

function Footer() {
  return (
    <footer id="footer-contact" className="border-t border-slate-200 bg-white/85 backdrop-blur">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.35fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm font-semibold leading-7 text-slate-600">
              We build modern, responsive websites that help businesses grow online.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#home"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:-translate-y-1 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-navy">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' us', '').replace(' ', '-')}`} className="text-sm font-semibold text-slate-600 transition hover:text-primary-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-navy">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm font-semibold text-slate-600 transition hover:text-primary-600">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-navy">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm font-semibold leading-6 text-slate-600">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-primary-600" size={18} />
                <span>New Delhi, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 shrink-0 text-primary-600" size={18} />
                <a href="tel:+15551234567" className="transition hover:text-primary-600">
                  +91 (9310120456)
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 shrink-0 text-primary-600" size={18} />
                <a href="mailto:webcraft200@gmail.com" className="transition hover:text-primary-600">
                  webcraft200@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 WebCraft. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition hover:text-primary-600">
              Privacy Policy
            </a>
            <a href="#home" className="transition hover:text-primary-600">
              Terms Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
