import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Music, Dumbbell, BookOpen, Award, Users, GraduationCap } from 'lucide-react';
import ResponsiveImage from '../components/ResponsiveImage';

// Add custom CSS for animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes growWidth {
    from {
      width: 0;
    }
    to {
      width: 6rem;
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-grow-width {
    animation: growWidth 1s ease-out forwards;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }
`;

// Inject the styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// --- Components ---

// Custom Hook for counting up animation
const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation (easeOutExpo)
      const easeOut = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

      setCount(Math.floor(easeOut(progress) * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly on the target
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref} className="font-bold">{count}{suffix}</span>;
};

// FadeInWhenVisible component for animated content
const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      {children}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <FadeInWhenVisible>
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background image - replace src with your image path */}
          <div className="absolute inset-0 overflow-hidden">
            <ResponsiveImage
              src="/images/homepage/sacred.jpg"
              alt="Amadlelo Aluhlaza Secondary School"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                Amadlelo Aluhlaza Secondary School
              </h1>
              <div className="w-24 h-1 bg-blue-500 mb-8 animate-grow-width"></div>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
                <span className="font-bold text-white">Unlock your child's potential</span> with world-class education at Amadlelo Aluhlaza Secondary School
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  to="/academics"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Academics
                </Link>
                <Link
                  to="/admissions"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block backdrop-blur-sm border border-white/20"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Introduction Section */}
      <FadeInWhenVisible>
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Begins With Us</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creating an environment where students thrive academically, socially, and personally
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    Our school aims to give expression to knowledge and values worth learning in South Africa, ensuring children acquire skills meaningful to their own lives while promoting knowledge in local contexts and remaining sensitive to global imperatives.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    Our programs are designed to meet the needs of each individual child. We provide an environment that encourages children to become confident and capable learners in the Ethandakukhanya area of Mkhondo, Piet Retief.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence in Education</h3>
                  <p className="text-gray-600">
                    Amadlelo Aluhlaza Secondary School is a public school that receives annual government funding as a no-fee school, serving the community with quality education.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifelong Learning</h3>
                  <p className="text-gray-600">
                    We focus on building a strong foundation for lifelong learning through our comprehensive curriculum and dedicated staff.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Statistics Strip */}
      <FadeInWhenVisible>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h6 className="text-center text-xl font-semibold mb-16 uppercase tracking-wider opacity-90">Amadlelo Aluhlaza Secondary School at a Glance</h6>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transform transition duration-300 hover:scale-105 hover:bg-white/20">
                <div className="flex justify-center mb-4">
                  <Users className="w-10 h-10 text-blue-200" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={1409} suffix="+" />
                </div>
                <p className="text-blue-100 font-medium">Students</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transform transition duration-300 hover:scale-105 hover:bg-white/20">
                <div className="flex justify-center mb-4">
                  <Award className="w-10 h-10 text-blue-200" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={27} suffix="+" duration={1500} />
                </div>
                <p className="text-blue-100 font-medium">Qualified Staff</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transform transition duration-300 hover:scale-105 hover:bg-white/20">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-10 h-10 text-blue-200" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={12} suffix="+" duration={1500} />
                </div>
                <p className="text-blue-100 font-medium">Clubs & Activities</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transform transition duration-300 hover:scale-105 hover:bg-white/20">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-200" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp end={8} suffix="+" duration={1000} />
                </div>
                <p className="text-blue-100 font-medium">SGB Members</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Principal's Address */}
      <FadeInWhenVisible>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Principal's Message</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            </div>

            {/* Flex container: Stacked on mobile (flex-col), Side-by-side on desktop (md:flex-row) */}
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* LEFT COLUMN: Image & Name */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white transform transition duration-500 hover:scale-105">
                  <ResponsiveImage
                    src="/images/homepage/principal.jpg"
                    alt="Mrs SP Hlongwa, Principal"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-6">
                  <p className="font-semibold text-gray-900 text-xl">Mrs SP Hlongwa</p>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>

              {/* RIGHT COLUMN: Speech/Text */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex-1 transform transition duration-500 hover:scale-[1.01]">
                <p className="text-gray-700 italic text-xl mb-6 border-l-4 border-blue-500 pl-6 py-2">
                  "Education is not the learning of fact, but the training of the mind to think" - Albert Einstein
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Education is a lifelong process and it begins at school. The purpose of education is to open up a closed mind. Every child here at Amadlelo Aluhlaza Secondary School is a unique individual. Our staff is committed to providing the students with quality education which shapes the children of today into leaders of tomorrow.
                </p>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  The school is striving hard to make the best possible effort to inculcate strong values combining with academics and extra-curricula activities. Converting every individual into a self-reliant and independent citizen.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I feel proud to express that our school is performing extremely well in all aspects to ensure academic and human excellence. Our school serves the settlement within the Ethandakukhanya area of Mkhondo, Piet Retief, and we continue our journey towards excellence……………
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Curriculum Overview */}
      <FadeInWhenVisible>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curriculum Overview</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Amadlelo Aluhlaza Secondary School offers a broad and balanced curriculum to meet the needs of each individual child. Our programs are designed to encourage children to become confident and capable learners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <ResponsiveImage
                    src="/images/homepage/computerlap.jpg"
                    alt="Computer Application Technology"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Application Technology</h3>
                  <p className="text-gray-600 mb-4">Developing digital literacy and technical skills for the modern world.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <img
                    src="/images/homepage/science.jpg"
                    alt="Physical Science"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Science</h3>
                  <p className="text-gray-600 mb-4">Exploring the natural world through hands-on experiments and discovery.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <img
                    src="/images/homepage/maths.jpg"
                    alt="Mathematics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mathematics</h3>
                  <p className="text-gray-600 mb-4">Building logical thinking and problem-solving capabilities.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <img
                    src="/images/homepage/accounting.jpg"
                    alt="Accounting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting</h3>
                  <p className="text-gray-600 mb-4">Managing financial records and understanding economic principles.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <img
                    src="/images/homepage/humanities.jpg"
                    alt="Humanities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Humanities</h3>
                  <p className="text-gray-600 mb-4">Understanding history, geography, and social studies.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                  <img
                    src="/images/homepage/drama.jpg"
                    alt="Drama and Music"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Drama and Music</h3>
                  <p className="text-gray-600 mb-4">Developing performance skills and creative expression.</p>
                  <Link to="/curriculum" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Co-curricular Activities */}
      <FadeInWhenVisible>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Co-curricular Activities</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of activities to develop well-rounded individuals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                <img
                  src="/images/homepage/soccer.jpg"
                  alt="Athletics"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-105">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <Dumbbell className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Athletics</h3>
                    <p className="text-gray-600">Our students are passionate about sports and participate in various athletic competitions throughout the year.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-105">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <Music className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performing Arts & Music</h3>
                    <p className="text-gray-600">With professionals on board, we offer comprehensive music and performing arts programs.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 transform transition duration-300 hover:scale-105">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Swimming (coming soon)</h3>
                    <p className="text-gray-600">We soon gonna have a swimming sport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Partners Section */}
      <FadeInWhenVisible>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="h-20 w-48 flex items-center justify-center bg-gray-50 p-4 rounded-lg border border-gray-200 transform transition duration-300 hover:scale-110">
                  <img
                    src={`/images/homepage/sponsor${num}.jpg`}
                    alt={`Sponsor ${num}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  );
};

export default HomePage;
