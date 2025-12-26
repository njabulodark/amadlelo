import React from 'react';

const AcademicsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26262c]">Academics</h1>
        </div>
      </section>

      {/* "Curriculum Overview" Intro Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h6 className="text-lg font-medium text-[#26262c] mb-2">Our Curriculum Overview</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-[#26262c] mb-6">A Commitment to Excellence</h2>
          <div className="w-16 h-1 bg-[#4747d7] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#76767f]">
                <span className="float-left text-7xl font-bold text-[#26262c] mr-3 leading-none">A</span>
                madlelo Aluhlaza Secondary​ aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.
              </p>
            </div>
            <div>
              <p className="text-[#76767f]">
                Whether it is our books or hands-on training, we make sure each student gets personal attention to cope up and flourish in every subject for better scores and a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home Language */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="images/homepage/science.jpg"
                  alt="Home Language Department"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Home Language</h3>
                <p className="text-[#76767f]">
                  Developing proficiency in students' native language for effective communication and cultural identity.
                </p>
              </div>
            </div>

            {/* First Additional Language */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/school-template-curriculum-img-5.jpg"
                  alt="First Additional Language"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">First Additional Language</h3>
                <p className="text-[#76767f]">
                  Learning additional languages to promote multilingualism and cultural understanding.
                </p>
              </div>
            </div>

            {/* Mathematics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/20240528_082309-scaled.jpg"
                  alt="Mathematics"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Mathematics</h3>
                <p className="text-[#76767f]">
                  Understanding the game of numbers and logic to solve real world problems.
                </p>
              </div>
            </div>

            {/* Mathematical Literacy */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/07/20240722_110832-scaled.jpg"
                  alt="Mathematical Literacy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Mathematical Literacy</h3>
                <p className="text-[#76767f]">
                  Practical application of mathematics in everyday life situations.
                </p>
              </div>
            </div>

            {/* Natural Sciences */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/school-template-curriculum-img-3.jpg"
                  alt="Natural Sciences"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Natural Sciences</h3>
                <p className="text-[#76767f]">
                  Exploring the physical and natural world through observation and experimentation.
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/07/20240722_110739-scaled.jpg"
                  alt="Technology"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Technology</h3>
                <p className="text-[#76767f]">
                  Applying scientific knowledge to solve practical problems and create solutions.
                </p>
              </div>
            </div>

            {/* Social Sciences */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/shutterstock_1289254792.jpg"
                  alt="Social Sciences"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Social Sciences</h3>
                <p className="text-[#76767f]">
                  Understanding human society, history, geography, and civic responsibilities.
                </p>
              </div>
            </div>

            {/* Economic Management Sciences */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/activities/main.jpg"
                  alt="Economic Management Sciences"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Economic Management Sciences</h3>
                <p className="text-[#76767f]">
                  Learning about business, economics, and accounting principles for practical application.
                </p>
              </div>
            </div>

            {/* Life Orientation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/ElectricalEngineering_1000x750.jpg"
                  alt="Life Orientation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Life Orientation</h3>
                <p className="text-[#76767f]">
                  Developing life skills, personal growth, and social responsibility.
                </p>
              </div>
            </div>

            {/* Creative Arts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/ElectricalEngineering_1000x750.jpg"
                  alt="Creative Arts"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Creative Arts</h3>
                <p className="text-[#76767f]">
                  Exploring artistic expression through visual and performing arts.
                </p>
              </div>
            </div>

            {/* Accounting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/07/20240722_110832-scaled.jpg"
                  alt="Accounting"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Accounting</h3>
                <p className="text-[#76767f]">
                  Empowering Financial Mastery. Unlock the power of numbers and finance.
                </p>
              </div>
            </div>

            {/* History */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/school-template-curriculum-img-3.jpg"
                  alt="History"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">History</h3>
                <p className="text-[#76767f]">
                  Understanding past events to shape future perspectives and national identity.
                </p>
              </div>
            </div>

            {/* Geography */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/07/20240722_110739-scaled.jpg"
                  alt="Geography"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Geography</h3>
                <p className="text-[#76767f]">
                  Exploring the relationship between people and their environment.
                </p>
              </div>
            </div>

            {/* Agricultural Sciences */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/05/shutterstock_1289254792.jpg"
                  alt="Agricultural Sciences"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Agricultural Sciences</h3>
                <p className="text-[#76767f]">
                  Understanding agricultural practices and sustainable farming methods.
                </p>
              </div>
            </div>

            {/* Economics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/activities/main.jpg"
                  alt="Economics"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Economics</h3>
                <p className="text-[#76767f]">
                  Learning about economic systems, markets, and resource allocation.
                </p>
              </div>
            </div>

            {/* Business Studies */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src="https://sacredheartoakford.co.za/wp-content/uploads/2024/07/20240722_110739-scaled.jpg"
                  alt="Business Studies"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#26262c] mb-3">Business Studies</h3>
                <p className="text-[#76767f]">
                  Unleashing Entrepreneurial Potential.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "College Opportunities" Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h6 className="text-lg font-medium text-[#26262c] text-center">College Opportunities</h6>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;