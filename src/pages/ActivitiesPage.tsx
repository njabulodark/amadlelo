import React from 'react';
import { Music, Users, ArrowRight, Star } from 'lucide-react';

const ActivitiesPage: React.FC = () => {

  const galleryImages = [
    { src: "images/activities/pic1.jpg", title: "Instrumental" },
    { src: "images/activities/pic2.jpg", title: "Vocal Training" },
    { src: "images/activities/pic5.jpg", title: "Ensemble" },
    { src: "images/activities/pic6.jpg", title: "Theory" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[250px] flex items-center justify-center bg-blue-950 text-white overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700 backdrop-blur-sm text-blue-200 text-xs font-bold uppercase tracking-widest">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              Excellence in Arts
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-sm">
            Co-curricular <span className="italic font-light text-blue-200">Activities</span>
          </h1>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl leading-relaxed font-light mb-10">
            We believe education extends beyond the classroom. Through music, performance, and creative arts, we nurture the spirit and confidence of every student.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] pt-20 pb-16">

        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">

          {/* Item 1: Running */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
            {/* Image Side */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <img
                  src="/images/activities/pic1.jpg"
                  alt="Students Athletics"
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Department</p>
                    <p className="text-blue-900 font-serif font-bold">Athletics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block"> Endurance & Speed</span>
              <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">Running</h2>
              <div className="w-12 h-1 bg-blue-200 mb-6"></div>
              <p className="text-slate-600 leading-8 mb-6 text-lg">
                Nqobile Primary School fosters a culture of physical fitness through our dedicated <strong className="text-blue-900">Running and Athletics</strong> program.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our athletic program focuses on developing stamina, discipline, and a healthy competitive spirit. From short-distance sprints to middle-distance running, our learners are trained to push their limits and represent the school with pride at circuit and district athletic meets.
              </p>
            </div>
          </div>

          {/* Item 2: Choir */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Community</span>
              <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">School Choir</h2>
              <div className="w-12 h-1 bg-blue-200 mb-6"></div>
              <p className="text-slate-600 leading-8 mb-6 text-lg">
                Our voice is our strength. With a low student-to-teacher ratio, every voice is heard and refined.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Teachers work closely with students to identify their vocal strengths, offering personalized support that helps them reach their full potential. The choir is more than singing; it is about discipline, harmony, and collective achievement.
              </p>
              <button className="flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all text-sm uppercase tracking-wide">
                Audition Details <ArrowRight size={16} />
              </button>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-7 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-blue-50 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <img
                  src="images/activities/choir.jpg"
                  alt="School Choir"
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Activity</p>
                    <p className="text-blue-900 font-serif font-bold">Vocal Ensemble</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Soccer */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                <img
                  src="/images/homepage/soccer.jpg"
                  alt="Soccer Team"
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Physical Excellence</span>
              <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">Soccer</h2>
              <div className="w-12 h-1 bg-blue-200 mb-6"></div>
              <p className="text-slate-600 leading-8 mb-6 text-lg">
                Building teamwork and discipline on the field.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Soccer is a cornerstone of our extra-mural program. We emphasize physical development, strategic thinking, and the spirit of sportsmanship. Our teams participate in local circuit leagues, fostering community pride and healthy competition among our learners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h6 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3">Visual Tour</h6>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-4">
              Music on Thursday
            </h3>
            <p className="text-slate-500">
              A glimpse into the weekly sessions with Mr. Mthalane and Mr. Ndebele.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <div key={index} className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">Gallery</span>
                  <span className="text-white font-serif font-bold text-lg">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements and Extra-mural Activities Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3">Excellence Beyond Classroom</h6>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-950 mb-4">
              Achievements & Extra-mural Activities
            </h3>
            <p className="text-slate-500">
              The school encourages participation in activities to improve concentration and time management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Choral Music Achievement */}
            <div className="bg-[#f6f7fd] rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Music size={24} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-blue-950">Choral Music</h4>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The school has achieved a <span className="text-blue-600 font-bold">“sterling performance”</span> in the ABC Motsepe Schools Eisteddfod (formerly SASCE).
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-start gap-3">
                  <Star size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Position 2</strong> in the AU Anthem category</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Position 2</strong> in the mixed choirs’ presentation of <em>Ingoduso</em> by RT Caluza</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span><strong>Position 3</strong> in the National Anthem category</span>
                </li>
              </ul>
            </div>

            {/* Entrepreneurship Achievement */}
            <div className="bg-[#f6f7fd] rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-blue-950">Entrepreneurship</h4>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Fostering business acumen and innovation in our learners.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <Star size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span>In 2016, the school was the <strong>2nd runner-up</strong> in the Mpumalanga province for the provincial School Entrepreneurship Education Competition.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Offered Activities */}
          <div className="bg-blue-950 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
              <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-500/50 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-serif font-bold mb-8">Offered Activities</h4>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {['Soccer', 'Athletics', 'Netball', 'Speech'].map((activity, index) => (
                  <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium tracking-wide hover:bg-white hover:text-blue-950 transition-colors duration-300">
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;