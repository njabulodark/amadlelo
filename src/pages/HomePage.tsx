import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Music, Dumbbell, BookOpen, Award, ArrowRight, MapPin } from 'lucide-react';
import ResponsiveImage from '../components/ResponsiveImage';
import { asset } from '../utils/assetPath';

// --- Utility for Conditional Classes (if lib/utils doesn't exist) ---
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Animation Components ---

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={classNames(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
};

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      setCount(Math.floor(easeOut(progress) * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setCount(end);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- Main Page Component ---

const HomePage: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-100">

      {/* 1. HERO SECTION: Immersive, Dark, Minimal */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-24 sm:pb-32">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
          <ResponsiveImage
            src={asset('/images/homepage/sacred.jpg')}
            alt="Nqobile Primary School Campus"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Admissions Open for 2026
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Gateway to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Opportunity.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                Operating at the nexus of inclusive policy and community service. We are a Full Service School dedicated to removing financial barriers for the Ethandakukhanya community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Our Curriculum
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. STATS STRIP: Minimalist & Clean */}
      <section className="border-b border-gray-100 bg-white relative z-30 -mt-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Learners", value: 1541, suffix: "" },
              { label: "Ded. Teachers", value: 42, suffix: "" },
              { label: "Quintile", value: 1, suffix: "" },
              { label: "Classrooms", value: 30, suffix: "+" }, // Estimated from detail "standard township footprint"
            ].map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="flex flex-col items-center md:items-start">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wider">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE NQOBILE STANDARD: Asymmetric Editorial Layout */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute top-10 right-[10%] w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-5 left-[5%] w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="mb-10 md:mb-14 relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                The Nqobile{' '}
                <span className="relative inline-block">
                  Standard
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80"></span>
                </span>
              </h2>
            </div>
          </FadeIn>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* Card 1: Vision - Hero Card (Left, spans 7 cols) */}
            <FadeIn className="lg:col-span-7 lg:row-span-2 group">
              <div className="relative h-full min-h-[280px] lg:min-h-[360px] rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-700"></div>

                {/* Decorative icon (background) */}
                <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                  <Target size={180} strokeWidth={1} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/25 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Target size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                      To serve as a socio-economic anchor for the Ethandakukhanya community, bridging the gap between ordinary and special needs education. We strive to be a hub where every child can access the "water" of knowledge.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link to="/about" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm group/link">
                      <span className="relative">
                        About us
                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Mission - Dark Card (Right top, spans 5 cols) */}
            <FadeIn delay={150} className="lg:col-span-5">
              <div className="relative h-full min-h-[170px] rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 group">
                {/* Subtle gradient shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="relative z-10">
                  <Award className="h-9 w-9 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    As a designated Full Service School, we ensure learners acquire skills meaningful to their lives while promoting knowledge in local contexts.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Inclusive Education - Light Card with accent (Right bottom, spans 5 cols) */}
            <FadeIn delay={300} className="lg:col-span-5">
              <div className="relative h-full min-h-[170px] rounded-2xl p-6 bg-white border border-gray-100/80 overflow-hidden group transition-all duration-500 hover:shadow-lg hover:shadow-indigo-900/5 hover:border-indigo-100">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full"></div>

                <div className="relative z-10 pt-3">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusive Education</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We address barriers to learning, welcoming learners with diverse needs into a supportive, mainstream environment.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL'S MESSAGE: Magazine Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            <FadeIn className="lg:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <ResponsiveImage
                  src={asset('/images/homepage/principal.jpg')}
                  alt="Mr Ni Khanye"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-2xl font-bold">Mr N.I. Khanye</p>
                  <p className="text-white/80">Principal</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            </FadeIn>

            <FadeIn className="lg:w-1/2" delay={200}>
              <div className="relative">
                <svg className="absolute -top-10 -left-8 h-16 w-16 text-gray-100 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed relative z-10">
                  "We view Nqobile Primary as a central township well... where every family can come to gather the 'water' of knowledge without the burden of a price tag."
                </blockquote>
              </div>

              <div className="mt-8 space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We are proud to be a Quintile 1, No-Fee school serving the greater Mkhondo East Circuit. Our "Full Service" designation mandates us to be a hub for inclusive education, ensuring no child is left behind due to financial constraint or learning barrier.
                </p>
                <p>
                  With over 1,500 learners, we are a "mega-school" that stands as a pillar of stability for the Ethandakukhanya community.
                </p>
                <div className="h-px w-full bg-gray-100"></div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <MapPin size={16} className="text-blue-600" />
                  Stand No. 1072, 4th Avenue, Ethandakukhanya, Piet Retief
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM: Modern Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Excellence</h2>
                <p className="text-gray-600 font-light text-lg">
                  Delivering CAPS aligned education with IsiZulu and English mediums to prepare learners for high school and beyond.
                </p>
              </div>
              <Link to="/curriculum" className="hidden md:inline-flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors mt-6 md:mt-0">
                View All Subjects <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Foundation Phase", desc: "Grades R-3: Building literacy and numeracy in IsiZulu.", img: asset("/images/homepage/computerlap.jpg") },
              { title: "Intersen Phase", desc: "Grades 4-7: Transitioning to English medium instruction.", img: asset("/images/homepage/science.jpg") },
              { title: "Mathematics", desc: "Dedicated HOD-led stream for building logic.", img: asset("/images/homepage/maths.jpg") },
              { title: "Natural Sciences", desc: "Exploring the natural world and technology.", img: asset("/images/homepage/science.jpg") },
              { title: "Social Sciences", desc: "History and Geography appropriate for the context.", img: asset("/images/homepage/humanities.jpg") },
              { title: "Life Skills", desc: "Creative Arts and personal development.", img: asset("/images/homepage/drama.jpg") }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 50} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <ResponsiveImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  {item.title}
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                </h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/curriculum" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View All Subjects <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CO-CURRICULAR: List Style with Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Beyond the Classroom</h2>
              <p className="text-lg text-gray-600 mb-8">
                We keep over 1,500 children engaged daily with a range of activities that foster discipline, teamwork, and social stability.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Dumbbell, title: "Athletics", desc: "Competitive training for district level meets." },
                  { icon: Music, title: "Performing Arts & Music", desc: "Choral music and drama to express local culture." },
                  { icon: Target, title: "School Nutrition", desc: "Daily hot meals provided through the NSNP program." }
                ].map((act, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <act.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{act.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <ResponsiveImage
                src={asset('/images/homepage/soccer.jpg')}
                alt="Students playing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-xl mb-1">Community Hub</p>
                <p className="text-white/80 text-sm">A safe, structured environment for Ethandakukhanya's youth.</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 7. PARTNERS: Grayscale to Color HOVER */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Working with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            <div className="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors">Mpumalanga Dept. of Education</div>
            <div className="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors">Gert Sibande District</div>
            <div className="text-xl font-bold text-gray-500 hover:text-blue-600 transition-colors">Mkhondo Local Municipality</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
