'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiDocumentText, HiMicrophone, HiTarget, HiBolt, HiShieldCheck, HiSignal } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 1,
      title: "Zero-Entry Multimodal Onboarding",
      subtitle: "Document Upload Intelligence",
      description: "Simply upload a photo of your ID. Our AI extracts age, gender, location, income, and category instantly, no forms, no hassle.",
      icon: "📋",
      rotation: -2,
      color: "bg-[#E8DCC4]"
    },
    {
      id: 2,
      title: "Vernacular Voice Interface",
      subtitle: "Bhasha-First Communication",
      description: "Speak in any of 22+ Indian languages. Our voice-bot understands intent, not just keywords, bridging the literacy gap.",
      icon: "🗣️",
      rotation: 1.5,
      color: "bg-[#D4C5A9]"
    },
    {
      id: 3,
      title: "Intelligent Scheme Matching",
      subtitle: "Semantic Reasoning Engine",
      description: "Discover schemes you didn't know existed. Our AI understands latent eligibility across thousands of Central and State programs.",
      icon: "🎯",
      rotation: -1,
      color: "bg-[#F5EFE6]"
    },
    {
      id: 4,
      title: "The 'Action' Agent",
      subtitle: "Pre-filled Applications",
      description: "From information to action in seconds. Get pre-filled PDFs and document checklists, ready to submit.",
      icon: "⚡",
      rotation: 2,
      color: "bg-[#E0D5C7]"
    },
    {
      id: 5,
      title: "'Kavach' Trust Guard",
      subtitle: "Scam Protection Layer",
      description: "Verify government scheme alerts instantly. Protect yourself from phishing scams with real-time database cross-referencing.",
      icon: "🛡️",
      rotation: -1.5,
      color: "bg-[#D9CDB8]"
    },
    {
      id: 6,
      title: "Offline Eligibility Check",
      subtitle: "On-Device Intelligence",
      description: "Check eligibility without internet. Our lite version works offline in remote areas—connectivity shouldn't be a barrier.",
      icon: "📡",
      rotation: 1,
      color: "bg-[#EDE4D3]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl" 
             style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl" 
             style={{ transform: `translateY(${-scrollY * 0.2}px)` }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-8 flex items-center justify-between border-b-2 border-[#8B7355]/20 bg-[#F5EFE6]/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#8B7355] rounded-sm flex items-center justify-center text-2xl rotate-3 shadow-lg">
            <span className="rotate-[-3deg]">📜</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#5D4E37] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Jan-Sahayak
            </h1>
            <p className="text-xs text-[#8B7355] tracking-wider uppercase" style={{ fontFamily: 'Courier New, monospace' }}>
              Government Schemes • Simplified
            </p>
          </div>
        </div>
        <Link href='/policy-analyzer'>
        <button className="px-6 py-2.5 bg-[#8B7355] text-[#F5EFE6] font-semibold tracking-wide uppercase text-sm hover:bg-[#6D5A42] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ fontFamily: 'Georgia, serif' }}>
          Get Started →
        </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-6 px-6 py-2 bg-[#8B7355]/10 border-l-4 border-[#8B7355] backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8B7355] font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                Official Notice • भारत सरकार
              </p>
            </div>

            <h2 className="text-7xl md:text-8xl font-bold text-[#5D4E37] mb-6 leading-none tracking-tight" 
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Breaking the<br />
              <span className="relative inline-block">
                <span className="relative z-10">Barrier</span>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#D4A574]/30 -rotate-1" />
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto leading-relaxed mb-8" 
               style={{ fontFamily: 'Georgia, serif' }}>
              Multimodal AI that eliminates the literacy and technical barrier of accessing social welfare. 
              Discover, understand, and apply for government schemes by simply talking to your phone.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="px-6 py-3 bg-white border-2 border-[#8B7355] shadow-lg">
                <p className="text-sm font-bold text-[#5D4E37]" style={{ fontFamily: 'Courier New, monospace' }}>
                  22+ LANGUAGES SUPPORTED
                </p>
              </div>
              <div className="px-6 py-3 bg-white border-2 border-[#8B7355] shadow-lg">
                <p className="text-sm font-bold text-[#5D4E37]" style={{ fontFamily: 'Courier New, monospace' }}>
                  THOUSANDS OF SCHEMES
                </p>
              </div>
              <div className="px-6 py-3 bg-white border-2 border-[#8B7355] shadow-lg">
                <p className="text-sm font-bold text-[#5D4E37]" style={{ fontFamily: 'Courier New, monospace' }}>
                  OFFLINE CAPABLE
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement Box */}
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-12 shadow-2xl border-t-8 border-[#8B7355] relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="absolute -top-4 left-8 bg-[#8B7355] text-white px-4 py-1 text-xs uppercase tracking-widest font-bold"
                 style={{ fontFamily: 'Courier New, monospace' }}>
              Resolution No. 2025/AI/001
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[#5D4E37] leading-relaxed text-lg mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="text-5xl float-left mr-4 mt-1 leading-none text-[#8B7355]">"</span>
                Every citizen deserves access to the schemes designed for their welfare. 
                Jan-Sahayak leverages cutting-edge AI to bridge the gap between government programs 
                and the people they're meant to serve, regardless of literacy, language, or location.
              </p>
              <p className="text-right text-[#8B7355] font-semibold text-sm uppercase tracking-wider mt-8" 
                 style={{ fontFamily: 'Courier New, monospace' }}>
                — Empowering Bharat Through Technology
              </p>
            </div>

            {/* Paper clip decoration */}
            <div className="absolute -top-3 right-12 w-16 h-8 border-2 border-[#8B7355]/40 rounded-full rotate-45" />
          </motion.div>
        </div>
      </section>

      {/* Features Section - Parliamentary Bills Style */}
      <section className="relative py-24 px-8 bg-gradient-to-b from-[#F5EFE6] to-[#E8DCC4]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="inline-block mb-4 px-8 py-3 bg-[#8B7355] text-white">
              <p className="text-sm uppercase tracking-[0.4em] font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                Features & Capabilities
              </p>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold text-[#5D4E37] mb-4" 
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Six Pillars of Access
            </h3>
            <p className="text-xl text-[#8B7355]" style={{ fontFamily: 'Georgia, serif' }}>
              Powered by Advanced AI • Built for Every Citizen
            </p>
          </motion.div>

          {/* Feature Bills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.27, 0.9]
                }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Paper Bill */}
                <div 
                  className={`${feature.color} p-8 shadow-xl border-l-4 border-[#8B7355] transform transition-all duration-500 relative overflow-hidden`}
                  style={{
                    transform: activeFeature === feature.id 
                      ? `rotate(0deg) translateY(-8px)` 
                      : `rotate(${feature.rotation}deg)`,
                    transformOrigin: 'center bottom'
                  }}
                >
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none"
                       style={{
                         backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 115, 85, 0.1) 2px, rgba(139, 115, 85, 0.1) 3px)`
                       }} />
                  
                  {/* Bill number */}
                  <div className="absolute top-4 right-4 bg-[#8B7355] text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                       style={{ fontFamily: 'Courier New, monospace' }}>
                    {feature.id}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    
                    <div className="mb-2 pb-2 border-b-2 border-[#8B7355]/30">
                      <p className="text-xs uppercase tracking-widest text-[#8B7355] font-bold mb-1" 
                         style={{ fontFamily: 'Courier New, monospace' }}>
                        {feature.subtitle}
                      </p>
                      <h4 className="text-2xl font-bold text-[#5D4E37] leading-tight" 
                          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        {feature.title}
                      </h4>
                    </div>

                    <p className="text-[#5D4E37]/80 leading-relaxed mt-4" 
                       style={{ fontFamily: 'Georgia, serif' }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Paper fold effect */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#8B7355]/10" />
                </div>

                {/* Shadow */}
                <div className="absolute inset-0 bg-[#8B7355]/10 blur-sm -z-10 transform translate-y-2" 
                     style={{
                       transform: activeFeature === feature.id 
                         ? 'translateY(4px) scale(0.95)' 
                         : `translateY(2px) rotate(${feature.rotation}deg)`
                     }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-8 bg-[#8B7355] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)`
             }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30">
              <p className="text-sm uppercase tracking-[0.3em] font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                Join the Movement
              </p>
            </div>

            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" 
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Your Rights.<br />Your Schemes.<br />Your Language.
            </h3>

            <p className="text-xl mb-10 opacity-90 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Break free from forms and bureaucracy. Access what's rightfully yours—starting today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[#8B7355] transition-all duration-300 shadow-xl uppercase tracking-wide"
                      style={{ fontFamily: 'Georgia, serif' }}>
                Get Started
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/30 flex items-center justify-center gap-8 flex-wrap text-sm opacity-75">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span style={{ fontFamily: 'Courier New, monospace' }}>Powered by Gemini AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span style={{ fontFamily: 'Courier New, monospace' }}>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span style={{ fontFamily: 'Courier New, monospace' }}>Open Source</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5D4E37] text-[#E8DCC4] py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Jan-Sahayak
              </h4>
              <p className="text-sm opacity-80 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                Democratizing access to government welfare through AI-powered technology.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>
                Platform
              </h5>
              <ul className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">How it Works</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Languages</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Schemes Database</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>
                Resources
              </h5>
              <ul className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">API Access</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Support</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Community</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'Courier New, monospace' }}>
                Legal
              </h5>
              <ul className="space-y-2 text-sm opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Data Security</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E8DCC4]/30 text-center text-sm opacity-60">
            <p style={{ fontFamily: 'Courier New, monospace' }}>
              © 2025 Jan-Sahayak. All rights reserved. | Made with ❤️ for Bharat
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}