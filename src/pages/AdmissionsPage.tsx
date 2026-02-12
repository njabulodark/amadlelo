import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import {
  Download,
  FileText,
  Calendar,
  User,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Star,
  ClipboardList,
  Search,
  BadgeCheck,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Utility                                                            */
/* ------------------------------------------------------------------ */
function cx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/* ------------------------------------------------------------------ */
/*  FadeIn – Intersection Observer scroll animation                    */
/* ------------------------------------------------------------------ */
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const processSteps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Application',
    description:
      'Complete the application form and gather the required documents. Ensure all information is accurate before submission.',
    documents: [
      'Completed Application Form',
      'Birth Certificate',
      'Recent Passport Photos',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    icon: Search,
    title: 'Document Review',
    description:
      'Our admissions team will carefully review your submission and verify all documents. You will be contacted regarding the next steps.',
    documents: [],
    color: 'from-indigo-500 to-violet-600',
  },
  {
    number: '03',
    icon: BadgeCheck,
    title: 'Assessment & Enrollment',
    description:
      'Successful applicants will be invited for an assessment. Once approved, you will receive an enrollment pack with everything you need.',
    documents: [],
    color: 'from-violet-500 to-purple-600',
  },
];

const requiredDocs = [
  {
    icon: FileText,
    title: 'Application Form',
    description: 'Completed and signed by parent/guardian.',
  },
  {
    icon: User,
    title: 'Birth Certificate',
    description: 'Certified copy required.',
  },
  {
    icon: FileText,
    title: 'Previous Reports',
    description: 'Latest academic transcripts.',
  },
  {
    icon: User,
    title: 'Transfer Letter',
    description: 'For students from other schools.',
  },
];

/* ================================================================== */
/*  ADMISSIONS PAGE                                                    */
/* ================================================================== */
const AdmissionsPage: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-100">
      <MetaTags
        title="Admissions - Nqobile Primary School"
        description="Apply to Nqobile Primary School — learn about our admissions process, required documents, and key dates for enrollment."
        keywords={[
          'Nqobile Primary',
          'Admissions',
          'Enrollment',
          'Apply',
          'Primary School',
          'Piet Retief',
        ]}
        url="/admissions"
      />

      {/* ========================================================== */}
      {/*  1. HERO — Full-bleed immersive banner                      */}
      {/* ========================================================== */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950" />

        {/* Decorative orbs */}
        <div
          className="absolute top-[15%] right-[8%] w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-56 h-56 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              Enrollment Open
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Nqobile.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              We are dedicated to nurturing academic excellence, integrity, and service.
              Begin your child's journey with us today.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="group inline-flex items-center bg-white text-slate-900 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Application
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/files/SHS-APPLICATION-FORM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Form
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================== */}
      {/*  2. APPLICATION WINDOW — Key dates banner                   */}
      {/* ========================================================== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0">
          <FadeIn>
            <div className="relative -mt-10 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px]" />

              <div className="flex items-center mb-4 md:mb-0 relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mr-5">
                  <Calendar className="w-7 h-7 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Application Window</h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Applications are open for the upcoming academic year.
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right relative z-10">
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                  1 Aug – 31 Sep
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Year Preceding Enrolment
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================== */}
      {/*  3. ADMISSIONS PROCESS — Editorial timeline                 */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative orb */}
        <div
          className="absolute top-10 right-[10%] w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDuration: '8s' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Admissions{' '}
                <span className="relative inline-block">
                  Process
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 150} className="group">
                <div className="relative h-full rounded-2xl bg-white p-8 shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-blue-500/[0.03] group-hover:via-indigo-500/[0.03] group-hover:to-violet-500/[0.03] transition-all duration-700" />

                  <div className="relative z-10">
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={cx(
                          'inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br text-white shadow-md group-hover:scale-110 transition-transform duration-300',
                          step.color
                        )}
                      >
                        <step.icon size={22} />
                      </div>
                      <span className="text-5xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors duration-500 select-none">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {step.documents.length > 0 && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                        {step.documents.map((doc, j) => (
                          <li
                            key={j}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/*  4. REQUIRED DOCUMENTS — Dark section                      */}
      {/* ========================================================== */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">
                What You'll Need
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Required{' '}
                <span className="italic font-light text-blue-300">
                  Documents
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {requiredDocs.map((doc, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500 h-full">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300">
                    <doc.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Transfer students note */}
          <FadeIn delay={500}>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      For Transfer Students
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      In addition to the general requirements, please provide a letter
                      of transfer, academic transcripts, and the most recent
                      disciplinary record from your previous institution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================== */}
      {/*  5. CTA — Minimal and impactful                            */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-[20%] right-[5%] w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-indigo-50 rounded-full blur-3xl -z-10" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Ready to Apply?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Begin Your{' '}
              <span className="relative inline-block">
                Journey
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Applications run from 1 August to 30 September. Join our community
              and experience quality education in a supportive, inclusive environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/apply"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Application
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/files/SHS-APPLICATION-FORM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-10 rounded-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Form
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;