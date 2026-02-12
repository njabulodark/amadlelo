import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import EducationalInstitutionSchema from '../components/EducationalInstitutionSchema';

interface MainLayoutProps { }

const MainLayout: React.FC<MainLayoutProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Activities', path: '/activities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-1">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src="/images/logo.jpg"
                alt="Amadlelo Aluhlaza Secondary School"
                className="h-10 sm:h-12 w-auto mr-2"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#4747d7]">Nqobile Primary School</h1>
                <span className="hidden sm:block text-[#26262c] text-xs sm:text-sm font-light">Gateway to Opportunity</span>
              </div>
            </div>

            <nav className="hidden md:block">
              <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="font-medium text-[#76767f] hover:text-[#4747d7] transition-colors duration-300 font-sans text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={toggleMenu}
              className="md:hidden text-[#26262c] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-2 pb-3">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block py-2 px-4 rounded-md text-[#76767f] hover:bg-[#f6f7fd] hover:text-[#4747d7] transition-colors duration-300 font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <MetaTags />
        <EducationalInstitutionSchema />
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 relative overflow-hidden">
        {/* Decorative Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Brand Section (Spans 2 columns on large screens) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo.jpg"
                  alt="Nqobile Primary School"
                  className="h-12 w-auto rounded-lg shadow-sm"
                />
                <div>
                  <p className="font-bold text-white text-lg leading-tight">Nqobile Primary</p>
                  <p className="text-xs text-gray-400 font-medium tracking-wide">Gateway to Opportunity</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
                A Quintile 1, No-Fee school serving the Ethandakukhanya community with quality, inclusive education. Empowering learners for a brighter future.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-5">Navigate</p>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-5">Contact Us</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400 leading-relaxed">
                    Stand No. 1072, 4th Avenue,<br />Thandukukhanya, Piet Retief
                  </span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone size={18} className="text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">017 826 1620</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone size={18} className="text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">017 826 2483</span>
                </li>
              </ul>
            </div>

            {/* Hours & Socials */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-5">Office Hours</p>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300 leading-relaxed">
                    <p className="text-gray-400">Mon – Fri</p>
                    <p className="text-white font-medium mt-1">7:30 AM – 2:30 PM</p>
                  </div>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-4">Connect</p>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', icon: Facebook, path: '#' },
                  { label: 'Instagram', icon: Instagram, path: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.path}
                    className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p className="flex items-center gap-2">
              &copy; {new Date().getFullYear()} Nqobile Primary School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
