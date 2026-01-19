"use client";

// Style 11: Editorial Drama - Japanese zen meets bold editorial magazine
// Oversized typography, dramatic contrast, warm terracotta accent, refined motion

import { useEffect, useRef, useState } from "react";

export default function LandingPage11() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1A1714] selection:bg-[#C75D3A] selection:text-[#F5F2EB] overflow-x-hidden">
      {/* Load Playfair Display */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        .font-display {
          font-family: 'Playfair Display', Georgia, serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes expandLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-expand {
          animation: expandLine 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
      `}</style>

      {/* Subtle grain texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrollY > 100 ? 'bg-[#F5F2EB]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div
            className={`flex items-center justify-between ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <span className="text-sm tracking-[0.25em] uppercase font-medium">Ekolivero</span>
            <div className="hidden md:flex items-center gap-16">
              <a href="#servizi" className="text-xs tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#C75D3A] transition-colors duration-300">Servizi</a>
              <a href="#pricing" className="text-xs tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#C75D3A] transition-colors duration-300">Pricing</a>
              <a href="#about" className="text-xs tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#C75D3A] transition-colors duration-300">Chi Sono</a>
            </div>
            <button className="text-xs tracking-[0.2em] uppercase relative group">
              <span className="relative z-10">Contatto</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#1A1714] group-hover:bg-[#C75D3A] transition-colors duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Dramatic oversized type */}
      <section className="min-h-screen flex flex-col justify-end pt-32 pb-20 px-6 md:px-12 lg:px-20 relative">
        {/* Floating decorative element */}
        <div
          className="absolute top-32 right-20 w-32 h-32 hidden lg:block animate-float"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-full h-full border border-[#C75D3A]/20 rotate-45"></div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full">
          {/* Oversized background text */}
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full"
            style={{ transform: `translateY(calc(-50% + ${scrollY * 0.2}px))` }}
          >
            <span
              className={`font-display text-[20vw] md:text-[25vw] font-medium text-[#E8E3D9] leading-none block ${
                isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'
              }`}
            >
              Tech
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              {/* Status badge */}
              <div className={`mb-12 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#7A9A5D] rounded-full"></span>
                  <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B6560]">Disponibile per nuovi progetti</span>
                </div>
                <div className={`h-px w-24 bg-[#C75D3A] mt-6 ${isLoaded ? 'animate-expand delay-400' : 'opacity-0 scale-x-0'}`}></div>
              </div>

              {/* Main headline - MASSIVE */}
              <h1 className={`${isLoaded ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                <span className="font-display text-[clamp(3rem,12vw,10rem)] font-medium leading-[0.9] tracking-[-0.03em] block">
                  Tecnologia
                </span>
                <span className="font-display italic text-[clamp(3rem,12vw,10rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#C75D3A] block">
                  in abbonamento
                </span>
              </h1>

              {/* Subtitle with dramatic spacing */}
              <p className={`text-lg md:text-xl text-[#6B6560] font-light leading-relaxed max-w-xl mt-16 ${
                isLoaded ? 'animate-fade-up delay-400' : 'opacity-0'
              }`}>
                AI, sviluppo software e consulenza strategica.
                <span className="text-[#1A1714] font-normal"> Abbonati quando serve, disdici quando vuoi.</span>
              </p>
            </div>

            {/* Right column - CTAs */}
            <div className={`lg:col-span-3 lg:col-start-10 flex flex-col gap-6 ${
              isLoaded ? 'animate-slide-in delay-500' : 'opacity-0'
            }`}>
              <button className="group flex items-center justify-between w-full py-6 border-t-2 border-b border-[#1A1714] hover:border-[#C75D3A] transition-colors duration-300">
                <span className="text-sm tracking-[0.15em] uppercase font-medium">Scopri i piani</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group flex items-center justify-between w-full py-6 border-b border-[#D4CFC6] hover:border-[#C75D3A] transition-colors duration-300">
                <span className="text-sm tracking-[0.15em] uppercase text-[#6B6560] group-hover:text-[#1A1714] transition-colors duration-300">Prenota una call</span>
                <svg className="w-6 h-6 text-[#6B6560] group-hover:text-[#1A1714] group-hover:translate-x-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`hidden lg:flex items-center gap-6 mt-20 ${
            isLoaded ? 'animate-fade-in delay-700' : 'opacity-0'
          }`}>
            <div className="h-16 w-px bg-[#C75D3A]"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">Scorri</span>
          </div>
        </div>
      </section>

      {/* Trust - Bold horizontal strip */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#1A1714] text-[#F5F2EB]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#9B9590]">Esperienza maturata in</span>
            <div className="flex flex-wrap items-center gap-x-16 gap-y-4">
              {["Jobtome", "Fincons", "HYPE", "A.S. Watson"].map((company, i) => (
                <span
                  key={company}
                  className="text-sm tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#C75D3A] transition-colors duration-300 cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Dramatic staggered layout */}
      <section id="servizi" className="py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header with massive number */}
          <div className="grid lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-1">
              <span className="font-display text-[8rem] md:text-[12rem] font-medium text-[#E8E3D9] leading-none block">01</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C75D3A] block mb-4">Servizi</span>
              <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Cosa posso<br />fare per te
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="text-[#6B6560] text-lg leading-relaxed">
                Competenze enterprise al servizio della tua crescita. Soluzioni misurate, non sovradimensionate.
              </p>
            </div>
          </div>

          {/* Service cards with dramatic stagger */}
          <div className="grid lg:grid-cols-12 gap-y-24 lg:gap-y-0">
            {/* Service A */}
            <div className="lg:col-span-4 lg:col-start-1 group">
              <div className="border-t-2 border-[#1A1714] pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">A</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">01</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-medium mb-6 tracking-[-0.01em]">AI & Automazione</h3>
                <p className="text-[#6B6560] leading-relaxed mb-10">
                  L'intelligenza artificiale non è magia — è uno strumento. Ti aiuto a capire dove usarla per risultati concreti.
                </p>
                <ul className="space-y-3 text-sm">
                  {["Consulenza strategica AI", "Chatbot e assistenti", "Automazione processi"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-[#6B6560]">
                      <span className="w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service B - Offset down */}
            <div className="lg:col-span-4 lg:col-start-5 lg:mt-32 group">
              <div className="border-t-2 border-[#1A1714] pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">B</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">02</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-medium mb-6 tracking-[-0.01em]">Sviluppo Software</h3>
                <p className="text-[#6B6560] leading-relaxed mb-10">
                  Costruisco prodotti digitali — dalla prima idea al prodotto in produzione. Soluzioni, non solo codice.
                </p>
                <ul className="space-y-3 text-sm">
                  {["MVP e prototipi", "Web application custom", "Integrazioni e API"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-[#6B6560]">
                      <span className="w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service C - More offset */}
            <div className="lg:col-span-4 lg:col-start-9 lg:mt-64 group">
              <div className="border-t-2 border-[#1A1714] pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">C</span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">03</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-medium mb-6 tracking-[-0.01em]">Digital Partner</h3>
                <p className="text-[#6B6560] leading-relaxed mb-10">
                  Non hai bisogno di un fornitore. Hai bisogno di qualcuno che capisca il tuo business.
                </p>
                <ul className="space-y-3 text-sm">
                  {["Visione strategica", "Formazione team", "Supporto decisionale"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-[#6B6560]">
                      <span className="w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Bold editorial treatment */}
      <section id="pricing" className="py-40 px-6 md:px-12 lg:px-20 bg-[#EFEBE3]">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-1">
              <span className="font-display text-[8rem] md:text-[12rem] font-medium text-[#DED9CE] leading-none block">02</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C75D3A] block mb-4">Pricing</span>
              <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Piani semplici,<br />valore reale
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="text-[#6B6560] text-lg leading-relaxed">
                Nessun vincolo, nessuna penale. Abbonati quando serve, disdici quando vuoi.
              </p>
            </div>
          </div>

          {/* Pricing cards - horizontal layout with featured middle */}
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Starter */}
            <div className="bg-[#F5F2EB] p-10 md:p-14 border-r border-[#DED9CE] lg:border-r-0">
              <div className="mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#9B9590] block mb-6">Starter</span>
                <h3 className="font-display text-3xl font-medium mb-3">Consulenza</h3>
                <p className="text-sm text-[#9B9590]">Il tuo consulente tech sempre disponibile.</p>
              </div>
              <div className="mb-12">
                <span className="font-display text-6xl md:text-7xl font-medium">2.500€</span>
                <span className="text-base text-[#9B9590] ml-2">/mese</span>
              </div>
              <ul className="space-y-4 mb-14">
                {["Call illimitate", "Supporto via Slack/email", "Consulenza strategica AI", "Review codice e architettura"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[#6B6560]">
                    <span className="w-1.5 h-1.5 bg-[#7A9A5D] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 border-2 border-[#1A1714] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#1A1714] hover:text-[#F5F2EB] transition-all duration-300">
                Inizia ora
              </button>
            </div>

            {/* Pro - Featured */}
            <div className="bg-[#1A1714] text-[#F5F2EB] p-10 md:p-14 relative lg:-my-8 lg:z-10">
              <div className="absolute top-0 left-10 right-10 h-1 bg-[#C75D3A]"></div>
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#9B9590]">Pro</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase bg-[#C75D3A] text-[#F5F2EB] px-3 py-1.5">Consigliato</span>
                </div>
                <h3 className="font-display text-3xl font-medium mb-3">Consulenza + Dev</h3>
                <p className="text-sm text-[#9B9590]">Un partner che costruisce con te.</p>
              </div>
              <div className="mb-12">
                <span className="font-display text-6xl md:text-7xl font-medium">6.000€</span>
                <span className="text-base text-[#9B9590] ml-2">/mese</span>
              </div>
              <ul className="space-y-4 mb-14">
                {["Tutto di Starter, più:", "Sviluppo software", "MVP e prototipi", "Implementazione AI"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[#9B9590]">
                    <span className="w-1.5 h-1.5 bg-[#C75D3A] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 bg-[#C75D3A] text-[#F5F2EB] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#B54D2E] transition-all duration-300">
                Inizia ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-[#F5F2EB] p-10 md:p-14 border-l border-[#DED9CE] lg:border-l-0">
              <div className="mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#9B9590] block mb-6">Enterprise</span>
                <h3 className="font-display text-3xl font-medium mb-3">Custom</h3>
                <p className="text-sm text-[#9B9590]">Per progetti complessi e team strutturati.</p>
              </div>
              <div className="mb-12">
                <span className="font-display text-6xl md:text-7xl font-medium">Custom</span>
              </div>
              <ul className="space-y-4 mb-14">
                {["Tutto di Pro, più:", "Progetti su larga scala", "SLA dedicato", "Integrazione team interni"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[#6B6560]">
                    <span className="w-1.5 h-1.5 bg-[#7A9A5D] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 border-2 border-[#1A1714] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#1A1714] hover:text-[#F5F2EB] transition-all duration-300">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About - Dramatic split layout */}
      <section id="about" className="py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Giant E */}
            <div className="lg:col-span-5 relative">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C75D3A] block mb-6">03 — Chi Sono</span>
              <div className="aspect-[4/5] bg-[#1A1714] flex items-center justify-center overflow-hidden relative">
                <span className="font-display text-[35vw] lg:text-[25rem] font-medium text-[#2A2520] leading-none select-none">E</span>
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#C75D3A]"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <h2 className="font-display text-6xl md:text-8xl font-medium leading-[0.9] tracking-[-0.02em] mb-12">
                Ciao,<br />
                <span className="font-display italic text-[#C75D3A]">sono Erik.</span>
              </h2>

              <div className="space-y-8 text-lg text-[#6B6560] leading-relaxed mb-16">
                <p>
                  Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho costruito prodotti digitali che hanno scalato, lavorando su progetti complessi dall'idea alla produzione.
                </p>
                <p>
                  <span className="text-[#1A1714] font-medium">Quello che mi distingue:</span> non sono solo un esecutore. Capisco il problema di business, identifico la soluzione giusta e la costruisco.
                </p>
                <p>
                  <span className="text-[#1A1714] font-medium">La mia missione:</span> portare lo stesso livello di qualità e innovazione tecnologica delle enterprise alle piccole e medie imprese.
                </p>
              </div>

              {/* Stats - Bold presentation */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-[#1A1714]">
                {[
                  { value: "6+", label: "Anni" },
                  { value: "50+", label: "Progetti" },
                  { value: "4", label: "Enterprise" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-5xl md:text-6xl font-medium block mb-2">{stat.value}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full impact */}
      <section className="py-40 px-6 md:px-12 lg:px-20 bg-[#1A1714] text-[#F5F2EB] relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display text-[30vw] font-medium text-[#252119] leading-none whitespace-nowrap">Inizia</span>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-[-0.02em]">
                Pronto a iniziare<br />
                <span className="font-display italic text-[#C75D3A]">qualcosa di nuovo?</span>
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-[#9B9590] text-lg leading-relaxed mb-10">
                Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
              </p>
              <button className="group flex items-center gap-6 bg-[#C75D3A] text-[#F5F2EB] px-8 py-5 hover:bg-[#B54D2E] transition-all duration-300">
                <span className="text-sm tracking-[0.15em] uppercase font-medium">Prenota una call</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-[#E8E3D9]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <span className="text-sm tracking-[0.25em] uppercase font-medium">Ekolivero</span>
            </div>
            <div className="lg:col-span-6 flex flex-wrap gap-x-12 gap-y-3 text-xs tracking-[0.2em] uppercase text-[#9B9590]">
              <a href="#" className="hover:text-[#C75D3A] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#C75D3A] transition-colors duration-300">Termini</a>
              <a href="#" className="hover:text-[#C75D3A] transition-colors duration-300">Contatti</a>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <span className="text-xs tracking-[0.2em] uppercase text-[#9B9590]">© 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
