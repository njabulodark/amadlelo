import React, { useState } from 'react';
import MetaTags from '../components/MetaTags';
import ResponsiveImage from '../components/ResponsiveImage';
import { BookOpen, Users, Wifi, Award, School, Star, User, ChevronLeft, ChevronRight, Tent, Camera } from 'lucide-react';

// Reusable Image Component with Fallback
interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProfileImage = ({ src, alt, className }: ProfileImageProps) => {
    const [error] = useState(false);

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-blue-50 text-blue-300 ${className}`}>
                <User size={48} />
            </div>
        );
    }

    return (
        <ResponsiveImage
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
        />
    );
};

const AboutPage: React.FC = () => {
    // Boot Camp Carousel State
    const [bootCampIndex, setBootCampIndex] = useState(0);
    const bootCampImages = Array.from({ length: 13 }, (_, i) => `/images/students/camp/pic${i + 1}.jpg`);

    const nextSlide = () => {
        setBootCampIndex((prev) => (prev + 1) % bootCampImages.length);
    };

    const prevSlide = () => {
        setBootCampIndex((prev) => (prev === 0 ? bootCampImages.length - 1 : prev - 1));
    };



    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title="About Us - Nqobile Primary School"
                description="Learn about Nqobile Primary School - our dedicated teachers, vibrant students, and commitment to educational excellence in the Ethandakukhanya community."
                keywords={['Nqobile Primary', 'About Us', 'Ethandakukhanya', 'Primary School', 'Teachers', 'Students']}
                url="/about"
            />

            {/* ==================== SCHOOL SECTION ==================== */}
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 opacity-90"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Nqobile Primary School
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto mb-8">
                        The "Gateway to Opportunity" for Ethandakukhanya.
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">

                        {/* Vision */}
                        <div className="text-center">
                            <div className="inline-block p-3 bg-blue-50 text-blue-600 rounded-full mb-6">
                                <Star size={32} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Vision</h2>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic">
                                "To be the gateway to opportunity for every child in Ethandakukhanya, cultivating a future where inclusive excellence empowers learners to rise above challenges and thrive in a dynamic world."
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-slate-100 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-slate-300">
                                <School size={20} />
                            </div>
                        </div>

                        {/* Mission */}
                        <div>
                            <div className="text-center mb-10">
                                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Strategic Objectives</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Mission</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Inclusivity First</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                As a designated Full Service School, we champion inclusive education, ensuring every learner is supported regardless of their physical or learning barriers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                                            <BookOpen size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Quality & Access</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                To provide high-quality, No-Fee education that removes financial obstacles, granting every family access to the "well of knowledge."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                                            <Wifi size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Foundation</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                To leverage our technology resources to build strong foundations in literacy, numeracy, and digital skills for the modern era.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-rose-100 text-rose-600 rounded-lg">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Holistic Growth</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                To serve as a safe community hub that nurtures the character, confidence, and physical well-being of our 1,500+ learners.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ==================== TEACHERS SECTION ==================== */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-blue-100 text-xs font-bold uppercase tracking-widest shadow-lg">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            Excellence in Education
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight tracking-tight text-white">
                        School <span className="italic font-light text-blue-300">Leadership</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-blue-100/90 text-lg leading-relaxed font-light">
                        Guided by vision, integrity, and a deep commitment to educational excellence.
                    </p>
                </div>
            </section>

            {/* Principal Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform -rotate-2 transition-transform group-hover:-rotate-1"></div>
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-white">
                                <ProfileImage src="images/teachers/principal.jpg" alt="Principal Mr. N.I. Khanye" className="w-full h-full object-cover object-top" />
                            </div>
                        </div>
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                                School Leadership
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mr. N.I. Khanye</h3>
                            <div className="prose prose-lg text-slate-600 mb-6 leading-relaxed">
                                <p>
                                    Our dedicated Principal leads Nqobile Primary School with vision, integrity, and a deep commitment to educational excellence.
                                    Under his guidance, our school continues to thrive as a nurturing environment for academic and personal growth.
                                </p>
                                <p>
                                    With years of experience in education, Mr. Khanye champions innovation, inclusivity, and the holistic development of every learner.
                                    His leadership inspires both staff and learners to reach their full potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ==================== STUDENTS SECTION ==================== */}
            <section
                className="py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/students/hero.jpg')`,
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto px-6 sm:px-8 max-w-6xl relative z-10">
                    <div className="text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Learners</h2>
                        <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl italic leading-relaxed font-light opacity-90">
                                "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.
                                Winners are not those who never fail, but those who never quit."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Life */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-5">Student Life</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
                            At Nqobile Primary School, we believe in fostering an environment where learners can take ownership of their learning,
                            develop curiosity, and feel empowered to reach their full potential. Our learners, from Grade R to Grade 7, are encouraged to explore their passions,
                            build strong foundations in literacy and numeracy, and grow as individuals.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="group relative overflow-hidden rounded-xl shadow-lg h-48 md:h-64 cursor-pointer">
                                <img
                                    src={`/images/students/student${num}.jpg`}
                                    alt={`Student ${num}`}
                                    className="object-cover w-full h-full block transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Boot Camp Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
                    <div className="flex items-center mb-12">
                        <div className="h-0.5 bg-gray-300 flex-grow"></div>
                        <div className="mx-6 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-bold uppercase tracking-wider text-sm">
                            Adventure & Growth
                        </div>
                        <div className="h-0.5 bg-gray-300 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="bg-blue-600 text-white p-2 rounded-lg"><Tent size={24} /></span>
                                Boot Camp
                            </h3>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                Our strong academic and extracurricular programs are complemented by educational boot camps that challenge learners
                                to push their boundaries. These intensive learning experiences help learners develop resilience, teamwork, and leadership skills.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Through these programs, learners gain valuable life skills and create lasting memories that shape their character and future success.
                            </p>
                        </div>

                        {/* Boot Camp Carousel */}
                        <div className="order-1 lg:order-2 relative bg-gray-100 rounded-xl overflow-hidden shadow-xl h-80 group">
                            <img
                                src={bootCampImages[bootCampIndex]}
                                alt="Boot Camp"
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />

                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition-colors shadow-lg"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition-colors shadow-lg"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {bootCampImages.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === bootCampIndex ? 'bg-white' : 'bg-white/50'}`}
                                    ></div>
                                ))}
                            </div>

                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-2">
                                <Camera size={12} /> {bootCampIndex + 1} / {bootCampImages.length}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions CTA */}
            <section className="bg-blue-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Admissions</h2>
                    <p className="max-w-2xl mx-auto mb-6 opacity-90">
                        Admissions typically run from 1 August to 30 September. Join our community and experience quality education in a supportive environment.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
