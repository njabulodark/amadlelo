import React, { useState, useEffect, useRef, useCallback } from 'react';
import MetaTags from '../components/MetaTags';
import ResponsiveImage from '../components/ResponsiveImage';
import {
    Users,
    Wifi,
    Award,
    Star,
    User,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    X,
    Target,
    Heart,
    Shield,
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
/*  ProfileImage                                                       */
/* ------------------------------------------------------------------ */
interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProfileImage = ({ src, alt, className }: ProfileImageProps) => {
    const [error] = useState(false);

    if (error) {
        return (
            <div
                className={`flex items-center justify-center bg-blue-50 text-blue-300 ${className}`}
            >
                <User size={48} />
            </div>
        );
    }

    return (
        <ResponsiveImage src={src} alt={alt} className={className} loading="lazy" />
    );
};

/* ------------------------------------------------------------------ */
/*  Lightbox – Fullscreen gallery viewer                               */
/* ------------------------------------------------------------------ */
const Lightbox: React.FC<{
    images: string[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}> = ({ images, index, onClose, onPrev, onNext }) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                aria-label="Close"
            >
                <X size={28} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-50"
                aria-label="Previous"
            >
                <ChevronLeft size={36} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-50"
                aria-label="Next"
            >
                <ChevronRight size={36} />
            </button>

            <img
                src={images[index]}
                alt={`Gallery ${index + 1}`}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
            />

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={cx(
                            'w-2 h-2 rounded-full transition-all duration-300',
                            i === index ? 'bg-white w-6' : 'bg-white/40'
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/*  CountUp – animated number                                         */
/* ------------------------------------------------------------------ */
const CountUp = ({
    end,
    duration = 2000,
    suffix = '',
}: {
    end: number;
    duration?: number;
    suffix?: string;
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start: number | null = null;
        let frame: number;
        const animate = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const ease = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
            setCount(Math.floor(ease(progress) * end));
            if (progress < 1) frame = requestAnimationFrame(animate);
            else setCount(end);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

/* ================================================================== */
/*  ABOUT PAGE                                                         */
/* ================================================================== */
const AboutPage: React.FC = () => {
    /* Student Life gallery */
    const studentImages = Array.from(
        { length: 4 },
        (_, i) => `/images/students/pic${i + 1}.jpg`
    );

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxSet, setLightboxSet] = useState<string[]>([]);

    const openLightbox = useCallback((images: string[], idx: number) => {
        setLightboxSet(images);
        setLightboxIndex(idx);
        setLightboxOpen(true);
    }, []);

    /* Mission pillars data */
    const pillars = [
        {
            icon: Users,
            title: 'Inclusivity First',
            desc: 'As a designated Full Service School, we champion inclusive education — ensuring every learner is supported regardless of physical or learning barriers.',
            color: 'from-blue-500 to-indigo-600',
            shadow: 'shadow-blue-500/25',
        },
        {
            icon: BookOpen,
            title: 'Quality & Access',
            desc: 'We provide high-quality, No-Fee education that removes financial obstacles — granting every family access to the "well of knowledge."',
            color: 'from-emerald-500 to-teal-600',
            shadow: 'shadow-emerald-500/25',
        },
        {
            icon: Wifi,
            title: 'Digital Foundation',
            desc: 'Leveraging technology resources to build strong foundations in literacy, numeracy, and digital skills for the modern era.',
            color: 'from-indigo-500 to-violet-600',
            shadow: 'shadow-indigo-500/25',
        },
        {
            icon: Award,
            title: 'Holistic Growth',
            desc: 'Serving as a safe community hub that nurtures the character, confidence, and physical well-being of our 1,500+ learners.',
            color: 'from-rose-500 to-pink-600',
            shadow: 'shadow-rose-500/25',
        },
    ];

    return (
        <div className="bg-white font-sans text-gray-900 selection:bg-blue-100">
            <MetaTags
                title="About Us - Nqobile Primary School"
                description="Learn about Nqobile Primary School — our dedicated teachers, vibrant students, and commitment to educational excellence in the Ethandakukhanya community."
                keywords={[
                    'Nqobile Primary',
                    'About Us',
                    'Ethandakukhanya',
                    'Primary School',
                    'Teachers',
                    'Students',
                ]}
                url="/about"
            />

            {/* ========================================================== */}
            {/*  1. HERO — Full-bleed immersive banner                      */}
            {/* ========================================================== */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden">
                {/* Background gradient — no image dependency */}
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
                            Gateway to Opportunity
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                                Nqobile.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                            A Quintile 1, No-Fee school serving the Ethandakukhanya community where
                            every child can access the "water" of knowledge without a price tag.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  2. STATS STRIP                                             */}
            {/* ========================================================== */}
            <section className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: 'Learners', value: 1541 },
                            { label: 'Educators', value: 42 },
                            { label: 'Grades', value: 8, suffix: '' },
                            { label: 'Years Serving', value: 20, suffix: '+' },
                        ].map((s, i) => (
                            <FadeIn
                                key={i}
                                delay={i * 100}
                                className="flex flex-col items-center md:items-start"
                            >
                                <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                    <CountUp end={s.value} suffix={s.suffix || ''} />
                                </p>
                                <p className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wider">
                                    {s.label}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  3. OUR VISION — Editorial quote block                      */}
            {/* ========================================================== */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
                {/* Decorative orbs */}
                <div
                    className="absolute top-10 right-[10%] w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"
                    style={{ animationDuration: '8s' }}
                />

                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
                                Our North Star
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-12">
                                The{' '}
                                <span className="relative inline-block">
                                    Vision
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
                                </span>
                            </h2>

                            {/* Decorative quote marks */}
                            <div className="relative max-w-3xl mx-auto">
                                <svg
                                    className="absolute -top-8 -left-4 md:-left-10 h-12 w-12 text-gray-100 transform -scale-x-100"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed italic relative z-10">
                                    "To be the gateway to opportunity for every child in Ethandakukhanya,
                                    cultivating a future where inclusive excellence empowers learners to
                                    rise above challenges and thrive in a dynamic world."
                                </blockquote>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  4. MISSION PILLARS — Asymmetric bento grid                 */}
            {/* ========================================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <FadeIn>
                        <div className="mb-14">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
                                Strategic Objectives
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                                Our{' '}
                                <span className="relative inline-block">
                                    Mission
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
                                </span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {pillars.map((p, i) => (
                            <FadeIn key={i} delay={i * 100} className="group">
                                <div className="relative h-full rounded-2xl bg-white p-7 md:p-8 shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100">
                                    {/* Hover gradient */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-blue-500/[0.03] group-hover:via-indigo-500/[0.03] group-hover:to-violet-500/[0.03] transition-all duration-700" />

                                    <div className="relative z-10">
                                        <div
                                            className={cx(
                                                'inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300',
                                                p.color,
                                                p.shadow
                                            )}
                                        >
                                            <p.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {p.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  5. SCHOOL LEADERSHIP — Magazine layout                     */}
            {/* ========================================================== */}
            <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Image */}
                        <FadeIn className="lg:w-1/2 relative">
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                                <ProfileImage
                                    src="images/teachers/principal.jpg"
                                    alt="Principal Mr. N.I. Khanye"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-2xl font-bold">Mr. N.I. Khanye</p>
                                    <p className="text-white/80">Principal</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10" />
                        </FadeIn>

                        {/* Text */}
                        <FadeIn className="lg:w-1/2" delay={200}>
                            <div className="relative">
                                <svg
                                    className="absolute -top-10 -left-8 h-16 w-16 text-gray-100 transform -scale-x-100"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <blockquote className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed relative z-10">
                                    "We view Nqobile Primary as a central township well — where every
                                    family can come to gather the 'water' of knowledge without the burden
                                    of a price tag."
                                </blockquote>
                            </div>

                            <div className="mt-8 space-y-5 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Our dedicated Principal leads Nqobile Primary School with vision,
                                    integrity, and a deep commitment to educational excellence. Under his
                                    guidance, our school continues to thrive as a nurturing environment for
                                    academic and personal growth.
                                </p>
                                <p>
                                    With years of experience in education, Mr. Khanye champions innovation,
                                    inclusivity, and the holistic development of every learner. His
                                    leadership inspires both staff and learners to reach their full
                                    potential.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  6. VALUES — Dark section with icon cards                    */}
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
                <div
                    className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">
                                What We Stand For
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                                Our Core{' '}
                                <span className="italic font-light text-blue-300">Values</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Target,
                                title: 'Excellence',
                                desc: "Setting the highest standards in teaching and learning — demanding the best from every learner and educator.",
                            },
                            {
                                icon: Heart,
                                title: 'Compassion',
                                desc: "Creating a nurturing environment where every child feels safe, valued, and supported in their journey.",
                            },
                            {
                                icon: Shield,
                                title: 'Integrity',
                                desc: 'Building a culture of honesty, respect, and accountability that extends from the classroom into the community.',
                            },
                        ].map((v, i) => (
                            <FadeIn key={i} delay={i * 150}>
                                <div className="group relative p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500">
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <v.icon
                                        size={28}
                                        className="text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  7. STUDENT LIFE — Masonry-style gallery                    */}
            {/* ========================================================== */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <FadeIn>
                        <div className="mb-14">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
                                Beyond Academics
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                                Student{' '}
                                <span className="relative inline-block">
                                    Life
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full opacity-80" />
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg mt-4 max-w-2xl leading-relaxed">
                                From Grade R to Grade 7, our learners explore their passions, build
                                strong foundations, and grow as individuals in a vibrant community.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Asymmetric gallery grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
                        {studentImages.map((img, i) => {
                            const spans = [
                                'lg:row-span-2',
                                '',
                                '',
                                'lg:row-span-2',
                            ];
                            return (
                                <FadeIn key={i} delay={i * 80} className={cx('group', spans[i])}>
                                    <div
                                        className="relative overflow-hidden rounded-xl shadow-md h-full cursor-pointer"
                                        onClick={() => openLightbox(studentImages, i)}
                                    >
                                        <img
                                            src={img}
                                            alt={`Student life ${i + 1}`}
                                            className="object-cover w-full h-full block transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/*  9. ADMISSIONS CTA — Minimal and impactful                  */}
            {/* ========================================================== */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden">
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
                />
                <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
                    <FadeIn>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3">
                            Join Our Community
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Admissions
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Admissions typically run from 1 August to 30 September. Join our community
                            and experience quality education in a supportive, inclusive environment.
                        </p>
                        <div className="h-px w-24 mx-auto bg-white/20" />
                    </FadeIn>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    images={lightboxSet}
                    index={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    onPrev={() =>
                        setLightboxIndex(
                            (p) => (p === 0 ? lightboxSet.length - 1 : p - 1)
                        )
                    }
                    onNext={() =>
                        setLightboxIndex((p) => (p + 1) % lightboxSet.length)
                    }
                />
            )}
        </div>
    );
};

export default AboutPage;
