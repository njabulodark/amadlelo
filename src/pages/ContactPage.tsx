import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Utilities                                                          */
/* ------------------------------------------------------------------ */
function cx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cx(
        'transition-all duration-1000 ease-out transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        className
      )}
    >
      {children}
    </div>
  );
};

/* ================================================================== */
/*  CONTACT PAGE                                                       */
/* ================================================================== */
const ContactPage: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-100">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950" />
        <div className="absolute top-[15%] right-[8%] w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] left-[5%] w-56 h-56 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">Reach Out</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Us.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Visit us at the school or get in touch with our main office — we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT INFO + MAP ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT — Contact details */}
            <FadeIn>
              <div className="space-y-6">
                {/* Section header */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">Information</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                    How to{' '}
                    <span className="relative inline-block">
                      Find Us
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
                    </span>
                  </h2>
                </div>

                {/* Contact cards */}
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: 'Stand No. 1072, 4th Avenue, Thandukukhanya, Piet Retief',
                    gradient: 'from-blue-500 to-indigo-600',
                    shadow: 'shadow-blue-500/25',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '017 826 1620 / 079 207 8269',
                    gradient: 'from-emerald-500 to-teal-600',
                    shadow: 'shadow-emerald-500/25',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'Coming Soon',
                    gradient: 'from-indigo-500 to-violet-600',
                    shadow: 'shadow-indigo-500/25',
                  },
                  {
                    icon: Clock,
                    label: 'Office Hours',
                    value: 'Mon – Fri  •  7:30 AM – 2:30 PM',
                    gradient: 'from-rose-500 to-pink-600',
                    shadow: 'shadow-rose-500/25',
                  },
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100/80 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500">
                      <div className={cx(
                        'flex-shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br text-white shadow-md group-hover:scale-110 transition-transform duration-300',
                        item.gradient,
                        item.shadow,
                      )}>
                        <item.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                        <p className="text-gray-900 font-medium leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}

                {/* Admissions note */}
                <FadeIn delay={400}>
                  <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                    <ArrowRight size={16} className="text-blue-600 flex-shrink-0" />
                    <p>
                      <span className="font-medium text-gray-700">Admissions period:</span>{' '}
                      1 August – 30 September
                    </p>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>

            {/* RIGHT — Map */}
            <FadeIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] md:min-h-[480px] ring-1 ring-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.9267126630275!2d30.782!3d-26.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef71b003b7a062f%3A0x3f1f38839e2173c1!2sAmadlelo%20Aluhlaza%20Secondary%20School!5e0!3m2!1sen!2sza!4v1764951514257!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;