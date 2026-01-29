import React from 'react';

const AcademicsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#26262c] tracking-tight">Academics</h1>
          <p className="mt-4 text-[#76767f] text-lg max-w-2xl mx-auto">
            Providing high-quality, inclusive primary education aligned with the National Curriculum and Assessment Policy Statement (CAPS).
          </p>
        </div>
      </section>

      {/* "Curriculum Overview" Intro Section */}
      <section className="py-20 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4747d7] mb-3">Our Framework</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-[#26262c] leading-tight mb-6">A Commitment to Inclusive Excellence</h2>
              <div className="w-16 h-1 bg-[#4747d7] mb-8"></div>
              <p className="text-[#76767f] leading-relaxed">
                As a designated Full Service School, our curriculum is designed to bridge the gap between ordinary and special needs education, ensuring every learner thrives in a supportive environment.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Foundation Phase */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#4747d7] group hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#26262c] mb-4">Foundation Phase</h3>
                <p className="text-sm font-medium text-[#4747d7] mb-4">Grade R – 3</p>
                <p className="text-[#76767f] text-sm mb-6 leading-relaxed">
                  Building the vital foundations of literacy and numeracy with IsiZulu as the primary medium of instruction.
                </p>
                <ul className="space-y-2 text-sm text-[#76767f]">
                  <li>• IsiZulu Home Language</li>
                  <li>• English First Additional Language</li>
                  <li>• Mathematics</li>
                  <li>• Life Skills</li>
                </ul>
              </div>

              {/* Intermediate Phase */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#4747d7] group hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#26262c] mb-4">Intermediate Phase</h3>
                <p className="text-sm font-medium text-[#4747d7] mb-4">Grade 4 – 6</p>
                <p className="text-[#76767f] text-sm mb-6 leading-relaxed">
                  A critical transition phase where learners move to English as the primary medium of instruction while retaining home language mastery.
                </p>
                <ul className="space-y-2 text-sm text-[#76767f]">
                  <li>• Languages (IsiZulu & English)</li>
                  <li>• Mathematics</li>
                  <li>• Natural Sciences & Technology</li>
                  <li>• Social Sciences</li>
                  <li>• Life Skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Phase Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="bg-[#26262c] text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Senior Phase (Grade 7)</h2>
                <p className="text-gray-400 leading-relaxed">
                  The final primary school year focus is on preparing learners for the transition to secondary school, ensuring they possess the academic rigor and social maturity for high school success.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">CAPS</p>
                    <p className="text-xs text-blue-300">Aligned</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">Full</p>
                    <p className="text-xs text-blue-300">Service</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#26262c]">Academic Focus Areas</h2>
            <div className="w-24 h-1 bg-[#4747d7] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Literacy & Languages */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 bg-blue-50 text-[#4747d7] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#26262c] mb-4">Literacy & Languages</h3>
              <p className="text-[#76767f] text-sm leading-relaxed mb-6">
                Dual-language proficiency in IsiZulu and English, fostering cultural identity and global communication skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-50 text-xs font-semibold rounded-full text-gray-500">IsiZulu HL</span>
                <span className="px-3 py-1 bg-gray-50 text-xs font-semibold rounded-full text-gray-500">English FAL</span>
              </div>
            </div>

            {/* Numeracy & Mathematics */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 bg-indigo-50 text-[#4747d7] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#26262c] mb-4">STEM Foundations</h3>
              <p className="text-[#76767f] text-sm leading-relaxed mb-6">
                Structured Mathematics and Natural Science programs led by dedicated HODs to build early critical thinking.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-50 text-xs font-semibold rounded-full text-gray-500">Mathematics</span>
                <span className="px-3 py-1 bg-gray-50 text-xs font-semibold rounded-full text-gray-500">Natural Sci & Tech</span>
              </div>
            </div>

            {/* Inclusive Education */}
            <div className="bg-[#26262c] rounded-3xl p-8 shadow-xl group hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inclusive Education</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As a Full Service School, we actively remove barriers to learning, providing remedial support and differentiated assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Transition" Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#26262c] mb-6">Secondary School Preparation</h2>
          <p className="text-[#76767f] text-lg leading-relaxed mb-10">
            Our Grade 7 exit strategy ensures that every learner is placed in a suitable local high school, such as <span className="text-[#4747d7] font-semibold">Amadlelo Aluhlaza Secondary School</span> or <span className="text-[#4747d7] font-semibold">Nqobangolwazi Secondary</span>, with the necessary academic foundation to succeed.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="px-10 py-4 bg-[#4747d7] text-white rounded-full font-bold hover:shadow-lg transition-shadow">
              Inquire About Enrollment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;