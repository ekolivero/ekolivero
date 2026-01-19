"use client";

// Style 11: Editorial Drama - Japanese zen meets bold editorial magazine
// Oversized typography, dramatic contrast, warm terracotta accent, refined motion

import { useEffect, useState, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";
import Script from "next/script";
import { siteConfig } from "@/lib/config";

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://ekolivero.com/#business",
      name: "Erik Olivero",
      description:
        "Servizi tecnologici in abbonamento: consulenza AI, sviluppo software, automazione processi per PMI.",
      url: "https://ekolivero.com",
      logo: "https://ekolivero.com/logo.png",
      image: "https://ekolivero.com/og-image.jpg",
      priceRange: "€€€",
      telephone: "", // Add your phone
      email: "info@ekolivero.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Italia",
        addressCountry: "IT",
      },
      founder: {
        "@type": "Person",
        "@id": "https://ekolivero.com/#person",
      },
      sameAs: [
        "https://linkedin.com/in/ekolivero",
        "https://twitter.com/ekolivero",
        "https://github.com/ekolivero",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Piani di Abbonamento",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Starter - Consulenza",
              description:
                "Call illimitate, supporto via Slack/email, consulenza strategica AI, review codice e architettura",
            },
            price: "2500",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "2500",
              priceCurrency: "EUR",
              unitText: "MONTH",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pro - Consulenza + Dev",
              description:
                "Tutto di Starter, più sviluppo software, MVP e prototipi, implementazione AI",
            },
            price: "6000",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "6000",
              priceCurrency: "EUR",
              unitText: "MONTH",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://ekolivero.com/#person",
      name: "Erik Olivero",
      jobTitle: "Full-Stack Developer & AI Consultant",
      description:
        "Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Specializzato in AI, sviluppo software e consulenza strategica.",
      url: "https://ekolivero.com",
      image: "https://ekolivero.com/erik-olivero.jpg",
      worksFor: {
        "@type": "Organization",
        name: "Erik Olivero",
      },
      alumniOf: [
        { "@type": "Organization", name: "Jobtome" },
        { "@type": "Organization", name: "Fincons" },
        { "@type": "Organization", name: "HYPE" },
        { "@type": "Organization", name: "A.S. Watson" },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Software Development",
        "Web Applications",
        "Process Automation",
        "Strategic Consulting",
      ],
      sameAs: [
        "https://linkedin.com/in/ekolivero",
        "https://twitter.com/ekolivero",
        "https://github.com/ekolivero",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://ekolivero.com/#webpage",
      url: "https://ekolivero.com",
      name: "Erik Olivero | Tecnologia in Abbonamento",
      description:
        "AI, sviluppo software e consulenza strategica. Abbonati quando serve, disdici quando vuoi.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://ekolivero.com/#website",
        url: "https://ekolivero.com",
        name: "Erik Olivero",
        publisher: {
          "@type": "Person",
          "@id": "https://ekolivero.com/#person",
        },
        inLanguage: "it-IT",
      },
      about: {
        "@type": "ProfessionalService",
        "@id": "https://ekolivero.com/#business",
      },
      inLanguage: "it-IT",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Cosa include il piano Starter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il piano Starter include call illimitate, supporto via Slack/email, consulenza strategica AI e review di codice e architettura al costo di 2.500€/mese.",
          },
        },
        {
          "@type": "Question",
          name: "Posso disdire quando voglio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì, non ci sono vincoli né penali. Puoi abbonarti quando serve e disdire quando vuoi.",
          },
        },
        {
          "@type": "Question",
          name: "Quali servizi offre Erik Olivero?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Erik Olivero offre consulenza AI e automazione, sviluppo software (MVP, web application, integrazioni API) e servizi di Digital Partner per visione strategica e formazione team.",
          },
        },
      ],
    },
  ],
};

export default function LandingPage11() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Throttled scroll handler using RAF
  const handleScroll = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const throttledScroll = handleScroll();
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  // Initialize Cal.com popup (EU instance)
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "booking",
        embedJsUrl: "https://app.cal.eu/embed/embed.js"
      });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#C75D3A" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div lang="it" className="min-h-screen bg-[#F5F2EB] text-[#1A1714] selection:bg-[#C75D3A] selection:text-[#F5F2EB] overflow-x-hidden">
        {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C75D3A] focus:text-[#F5F2EB] focus:px-4 focus:py-2 focus:text-sm focus:tracking-wide focus:uppercase focus:outline-none focus:ring-2 focus:ring-[#1A1714] focus:ring-offset-2"
      >
        Vai al contenuto principale
      </a>

      {/* Styles with reduced motion support */}
      <style jsx global>{`
        .font-display {
          font-family: var(--font-display), Georgia, serif;
        }

        /* Focus styles */
        .focus-ring {
          outline: none;
        }
        .focus-ring:focus-visible {
          outline: 2px solid #C75D3A;
          outline-offset: 2px;
        }

        /* GPU-accelerated animations using transform and opacity only */
        @keyframes fadeUp {
          from { opacity: 0; transform: translate3d(0, 30px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translate3d(-20px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes expandLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity;
        }

        .animate-slide-in {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        .animate-expand {
          animation: expandLine 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
          will-change: transform;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }

        /* Content visibility for below-fold sections */
        .cv-auto {
          content-visibility: auto;
          contain-intrinsic-size: auto 500px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-fade-in,
          .animate-slide-in,
          .animate-expand,
          .animate-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            will-change: auto !important;
          }

          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Subtle grain texture - decorative (optimized with contain) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          contain: 'strict',
        }}
      />

      {/* Navigation */}
      <nav
        aria-label="Navigazione principale"
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          scrollY > 100 ? 'bg-[#F5F2EB]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div
            className={`flex items-center justify-between ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <a
              href="/"
              className="text-sm tracking-[0.25em] uppercase font-medium focus-ring"
              aria-label="Erik Olivero - Torna alla home"
            >
              Erik Olivero
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-16">
              <a href="#servizi" className="text-xs tracking-[0.2em] uppercase text-[#7A7570] hover:text-[#C75D3A] transition-colors duration-300 focus-ring py-1">Servizi</a>
              <a href="#pricing" className="text-xs tracking-[0.2em] uppercase text-[#7A7570] hover:text-[#C75D3A] transition-colors duration-300 focus-ring py-1">Pricing</a>
              <a href="#about" className="text-xs tracking-[0.2em] uppercase text-[#7A7570] hover:text-[#C75D3A] transition-colors duration-300 focus-ring py-1">Chi Sono</a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 -m-2 focus-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop contact button */}
            <a href="#prenota" className="hidden md:block text-xs tracking-[0.2em] uppercase relative group focus-ring py-1">
              <span className="relative z-10">Contatto</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#1A1714] group-hover:bg-[#C75D3A] transition-colors duration-300" aria-hidden="true"></span>
            </a>
          </div>

        </div>
      </nav>

      {/* Full-page Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#1A1714]" />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-6 flex items-center justify-between">
            <a
              href="/"
              className="text-sm tracking-[0.25em] uppercase font-medium text-[#F5F2EB] focus-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              Erik Olivero
            </a>
            <button
              type="button"
              className="p-2 -m-2 text-[#F5F2EB] focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chiudi menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-6" aria-label="Menu mobile">
            <ul className="space-y-2">
              {[
                { href: "#servizi", label: "Servizi" },
                { href: "#pricing", label: "Pricing" },
                { href: "#about", label: "Chi Sono" },
                { href: "#prenota", label: "Contatto" },
              ].map((item, index) => (
                <li
                  key={item.href}
                  className={`overflow-hidden transition-all duration-500 ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: mobileMenuOpen ? `${150 + index * 75}ms` : '0ms' }}
                >
                  <a
                    href={item.href}
                    className="block font-display text-4xl sm:text-5xl font-medium text-[#F5F2EB] hover:text-[#C75D3A] transition-colors duration-300 py-3 focus-ring"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div
            className={`px-6 py-8 border-t border-[#3A352E] transition-all duration-500 ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '450ms' : '0ms' }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#7A7570]">
              Disponibile per nuovi progetti
            </p>
          </div>
        </div>
      </div>

      {/* Hero - Dramatic oversized type with video */}
      <main id="main-content">
        <section className="min-h-[90vh] md:min-h-screen flex flex-col pt-24 md:pt-32 pb-12 md:pb-20 px-5 md:px-12 lg:px-20 relative overflow-hidden">

          {/* Video Background - Cinematic fullscreen */}
          <div className="absolute inset-0 z-0">
            {/* Video element - replace src with your video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%231A1714' width='100%25' height='100%25'/%3E%3C/svg%3E"
            >
              {/* Mock: Using a free stock video as placeholder */}
              <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-keyboard-3967/1080p.mp4" type="video/mp4" />
            </video>

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-[#F5F2EB]/85" /> {/* Main color overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EB] via-[#F5F2EB]/70 to-transparent" /> {/* Left fade for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB] via-transparent to-[#F5F2EB]/50" /> {/* Vertical fade */}

            {/* Film grain texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Floating decorative element */}
          <div
            aria-hidden="true"
            className="absolute top-32 right-20 w-32 h-32 hidden lg:block animate-float z-10"
            style={{ animationDelay: '1s' }}
          >
            <div className="w-full h-full border border-[#C75D3A]/30 rotate-45"></div>
          </div>

          <div className="max-w-[1600px] mx-auto w-full flex-1 flex flex-col justify-center md:justify-end relative z-10">
            {/* Oversized background text - decorative (GPU-accelerated parallax) */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full"
              style={{ transform: `translate3d(0, calc(-50% + ${scrollY * 0.2}px), 0)` }}
            >
              <span
                className={`font-display text-[20vw] md:text-[25vw] font-medium text-[#1A1714]/[0.04] leading-none block ${
                  isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'
                }`}
              >
                Tech
              </span>
            </div>

            {/* Main content */}
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                {/* Status badge */}
                <div className={`mb-8 md:mb-12 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#7A9A5D] rounded-full animate-pulse" aria-hidden="true"></span>
                    <span className="text-[11px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#7A7570]">Disponibile per nuovi progetti</span>
                  </div>
                  <div className={`h-px w-16 md:w-24 bg-[#C75D3A] mt-4 md:mt-6 ${isLoaded ? 'animate-expand delay-400' : 'opacity-0 scale-x-0'}`} aria-hidden="true"></div>
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
                <p className={`text-base md:text-xl text-[#7A7570] font-light leading-relaxed max-w-xl mt-8 md:mt-16 ${
                  isLoaded ? 'animate-fade-up delay-400' : 'opacity-0'
                }`}>
                  AI, sviluppo software e consulenza strategica. <br />
                  <span className="text-[#1A1714] font-normal"> Abbonati quando serve, disdici quando vuoi.</span>
                </p>
              </div>

              {/* Right column - Video preview card + CTAs */}
              <div className={`lg:col-span-4 lg:col-start-9 flex flex-col gap-6 mt-8 lg:mt-0 ${
                isLoaded ? 'animate-slide-in delay-500' : 'opacity-0'
              }`}>

                {/* Video Preview Card - Editorial style */}
                <div className="group relative cursor-pointer" role="button" tabIndex={0} aria-label="Guarda il video di presentazione">
                  {/* Card container with aspect ratio */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1714]">
                    {/* Corner accents - editorial style */}
                    <div className="absolute top-0 left-0 w-12 h-12 z-20">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C75D3A]" />
                      <div className="absolute top-0 left-0 w-[2px] h-full bg-[#C75D3A]" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 z-20">
                      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#C75D3A]" />
                      <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[#C75D3A]" />
                    </div>

                    {/* Video thumbnail/preview */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src="https://cdn.coverr.co/videos/coverr-working-on-a-laptop-at-home-8712/1080p.mp4" type="video/mp4" />
                    </video>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/20 to-transparent" />

                    {/* Play button - minimal, elegant */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5F2EB]/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C75D3A] transition-all duration-500">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-[#1A1714] group-hover:text-[#F5F2EB] transition-colors duration-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B5B0AA] block mb-1">Video</span>
                          <span className="text-sm text-[#F5F2EB] font-medium">Come lavoro</span>
                        </div>
                        <span className="text-xs text-[#B5B0AA]">2:30</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C75D3A] group-hover:w-full transition-all duration-500" />
                </div>

                {/* CTAs */}
                <a
                  href="#pricing"
                  className="group flex items-center justify-between w-full py-4 md:py-5 border-t-2 border-b border-[#1A1714] hover:border-[#C75D3A] transition-colors duration-300 focus-ring active:bg-[#1A1714]/5"
                >
                  <span className="text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium">Scopri i piani</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <button
                  type="button"
                  data-cal-namespace="booking"
                  data-cal-link="ekolivero"
                  data-cal-origin="https://app.cal.eu"
                  data-cal-config='{"theme":"dark"}'
                  className="group flex items-center justify-between w-full py-4 md:py-5 border-b border-[#D4CFC6] hover:border-[#C75D3A] transition-colors duration-300 focus-ring active:bg-[#1A1714]/5"
                >
                  <span className="text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase text-[#7A7570] group-hover:text-[#1A1714] transition-colors duration-300">Prenota una call</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#7A7570] group-hover:text-[#1A1714] group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              aria-hidden="true"
              className={`hidden lg:flex items-center gap-6 mt-16 ${
                isLoaded ? 'animate-fade-in delay-700' : 'opacity-0'
              }`}
            >
              <div className="h-16 w-px bg-[#C75D3A]"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A8A49E]">Scorri</span>
            </div>
          </div>
        </section>

      {/* Trust - Bold horizontal strip */}
      <section aria-label="Settori di esperienza" className="py-8 md:py-12 px-5 md:px-12 lg:px-20 bg-[#1A1714] text-[#F5F2EB]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B5B0AA]">Settori di esperienza</span>
            <div className="flex flex-wrap items-center gap-x-6 md:gap-x-16 gap-y-3 md:gap-y-4">
              {["Fintech & Banking", "HR Tech", "Retail & E-commerce", "Manufacturing", "Enterprise"].map((sector) => (
                <span
                  key={sector}
                  className="text-xs md:text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 cursor-default"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Dramatic staggered layout */}
      <section id="servizi" aria-labelledby="services-heading" className="py-16 md:py-40 px-5 md:px-12 lg:px-20 cv-auto">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header with massive number */}
          <div className="grid lg:grid-cols-12 gap-4 md:gap-8 mb-12 md:mb-32">
            <div className="lg:col-span-1 hidden md:block">
              <span aria-hidden="true" className="font-display text-[8rem] md:text-[12rem] font-medium text-[#E8E3D9] leading-none block">01</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#C75D3A] block mb-3 md:mb-4">Servizi</span>
              <h2 id="services-heading" className="font-display text-4xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Cosa posso<br />fare per te
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end mt-4 lg:mt-0">
              <p className="text-[#5A5550] text-base md:text-lg leading-relaxed">
                Competenze enterprise al servizio della tua crescita. Soluzioni misurate, non sovradimensionate.
              </p>
            </div>
          </div>

          {/* Service cards with dramatic stagger */}
          <div className="grid lg:grid-cols-12 gap-y-10 md:gap-y-24 lg:gap-y-0">
            {/* Service A */}
            <article className="lg:col-span-4 lg:col-start-1 group">
              <div className="border-t-2 border-[#1A1714] pt-6 md:pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-4 md:mb-8">
                  <span aria-hidden="true" className="font-display text-4xl md:text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">A</span>
                  <span aria-hidden="true" className="text-[10px] tracking-[0.3em] uppercase text-[#A8A49E]">01</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-medium mb-4 md:mb-6 tracking-[-0.01em]">AI & Automazione</h3>
                <p className="text-[#5A5550] text-sm md:text-base leading-relaxed mb-6 md:mb-10">
                  L'intelligenza artificiale non è magia, è uno strumento. Ti aiuto a capire dove usarla per risultati concreti.
                </p>
                <ul className="space-y-3 text-sm" role="list">
                  {["Consulenza strategica AI", "Chatbot e assistenti", "Automazione processi"].map((item) => (
                    <li key={item} className="flex items-center gap-3 md:gap-4 text-[#5A5550]">
                      <span aria-hidden="true" className="w-4 md:w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Service B - Offset down */}
            <article className="lg:col-span-4 lg:col-start-5 lg:mt-32 group">
              <div className="border-t-2 border-[#1A1714] pt-6 md:pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-4 md:mb-8">
                  <span aria-hidden="true" className="font-display text-4xl md:text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">B</span>
                  <span aria-hidden="true" className="text-[10px] tracking-[0.3em] uppercase text-[#A8A49E]">02</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-medium mb-4 md:mb-6 tracking-[-0.01em]">Sviluppo Software</h3>
                <p className="text-[#5A5550] text-sm md:text-base leading-relaxed mb-6 md:mb-10">
                  Costruisco prodotti digitali, dalla prima idea al prodotto in produzione. Soluzioni, non solo codice.
                </p>
                <ul className="space-y-3 text-sm" role="list">
                  {["MVP e prototipi", "Web application custom", "Integrazioni e API"].map((item) => (
                    <li key={item} className="flex items-center gap-3 md:gap-4 text-[#5A5550]">
                      <span aria-hidden="true" className="w-4 md:w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Service C - More offset */}
            <article className="lg:col-span-4 lg:col-start-9 lg:mt-64 group">
              <div className="border-t-2 border-[#1A1714] pt-6 md:pt-10 group-hover:border-[#C75D3A] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-4 md:mb-8">
                  <span aria-hidden="true" className="font-display text-4xl md:text-6xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">C</span>
                  <span aria-hidden="true" className="text-[10px] tracking-[0.3em] uppercase text-[#A8A49E]">03</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-medium mb-4 md:mb-6 tracking-[-0.01em]">Digital Partner</h3>
                <p className="text-[#5A5550] text-sm md:text-base leading-relaxed mb-6 md:mb-10">
                  Non hai bisogno di un fornitore. Hai bisogno di qualcuno che capisca il tuo business.
                </p>
                <ul className="space-y-3 text-sm" role="list">
                  {["Visione strategica", "Formazione team", "Supporto decisionale"].map((item) => (
                    <li key={item} className="flex items-center gap-3 md:gap-4 text-[#5A5550]">
                      <span aria-hidden="true" className="w-4 md:w-6 h-px bg-[#C75D3A]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing - Bold editorial treatment */}
      <section id="pricing" aria-labelledby="pricing-heading" className="py-16 md:py-40 px-5 md:px-12 lg:px-20 bg-[#EFEBE3] cv-auto">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-4 md:gap-8 mb-10 md:mb-32">
            <div className="lg:col-span-1 hidden md:block">
              <span aria-hidden="true" className="font-display text-[8rem] md:text-[12rem] font-medium text-[#DED9CE] leading-none block">02</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#C75D3A] block mb-3 md:mb-4">Pricing</span>
              <h2 id="pricing-heading" className="font-display text-4xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Piani semplici,<br />valore reale
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end mt-4 lg:mt-0">
              <p className="text-[#5A5550] text-base md:text-lg leading-relaxed">
                Nessun vincolo, nessuna penale. Abbonati quando serve, disdici quando vuoi.
              </p>
            </div>
          </div>

          {/* Pricing cards - stack on mobile, horizontal on desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-0" role="list">
            {/* Starter */}
            <article role="listitem" className="bg-[#F5F2EB] p-6 md:p-14 rounded-lg lg:rounded-none border border-[#DED9CE] lg:border-r-0 order-2 lg:order-1">
              <div className="mb-6 md:mb-10">
                <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#A8A49E] block mb-4 md:mb-6">Starter</span>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 md:mb-3">Consulenza</h3>
                <p className="text-sm text-[#A8A49E]">Il tuo consulente tech sempre disponibile.</p>
              </div>
              <div className="mb-8 md:mb-12">
                <span className="font-display text-4xl md:text-7xl font-medium" aria-label="1200 euro al mese">1.200€</span>
                <span className="text-sm md:text-base text-[#A8A49E] ml-1 md:ml-2" aria-hidden="true">/mese</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-14 text-sm" role="list">
                {["Call illimitate", "Supporto via Slack/email", "Consulenza strategica AI", "Review codice e architettura"].map((item) => (
                  <li key={item} className="flex items-center gap-3 md:gap-4 text-[#5A5550]">
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-[#7A9A5D] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-cal-namespace="booking"
                data-cal-link="ekolivero"
                data-cal-origin="https://app.cal.eu"
                data-cal-config='{"theme":"dark"}'
                className="w-full py-4 md:py-5 border-2 border-[#1A1714] text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium hover:bg-[#1A1714] hover:text-[#F5F2EB] active:bg-[#1A1714] active:text-[#F5F2EB] transition-colors duration-300 focus-ring"
              >
                Inizia ora
              </button>
            </article>

            {/* Pro - Featured (first on mobile) */}
            <article role="listitem" className="bg-[#1A1714] text-[#F5F2EB] p-6 md:p-14 rounded-lg lg:rounded-none relative lg:-my-8 lg:z-10 order-1 lg:order-2">
              <div aria-hidden="true" className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-1 bg-[#C75D3A]"></div>
              <div className="mb-6 md:mb-10 pt-2">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B5B0AA]">Pro</span>
                  <span className="text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase bg-[#C75D3A] text-[#F5F2EB] px-2 md:px-3 py-1 md:py-1.5">Consigliato</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 md:mb-3">Consulenza + Dev</h3>
                <p className="text-sm text-[#B5B0AA]">Un partner che costruisce con te.</p>
              </div>
              <div className="mb-8 md:mb-12">
                <span className="font-display text-4xl md:text-7xl font-medium" aria-label="3100 euro al mese">3.100€</span>
                <span className="text-sm md:text-base text-[#B5B0AA] ml-1 md:ml-2" aria-hidden="true">/mese</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-14 text-sm" role="list">
                {["Tutto di Starter, più:", "Sviluppo software", "MVP e prototipi", "Implementazione AI"].map((item) => (
                  <li key={item} className="flex items-center gap-3 md:gap-4 text-[#B5B0AA]">
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-[#C75D3A] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-cal-namespace="booking"
                data-cal-link="ekolivero"
                data-cal-origin="https://app.cal.eu"
                data-cal-config='{"theme":"dark"}'
                className="w-full py-4 md:py-5 bg-[#C75D3A] text-[#F5F2EB] text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium hover:bg-[#B54D2E] active:bg-[#B54D2E] transition-colors duration-300 focus-ring"
              >
                Inizia ora
              </button>
            </article>

            {/* Enterprise */}
            <article role="listitem" className="bg-[#F5F2EB] p-6 md:p-14 rounded-lg lg:rounded-none border border-[#DED9CE] lg:border-l-0 order-3">
              <div className="mb-6 md:mb-10">
                <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#A8A49E] block mb-4 md:mb-6">Enterprise</span>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 md:mb-3">Custom</h3>
                <p className="text-sm text-[#A8A49E]">Per progetti complessi e team strutturati.</p>
              </div>
              <div className="mb-8 md:mb-12">
                <span className="font-display text-4xl md:text-7xl font-medium" aria-label="Prezzo personalizzato">Custom</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-14 text-sm" role="list">
                {["Tutto di Pro, più:", "Progetti su larga scala", "SLA dedicato", "Integrazione team interni"].map((item) => (
                  <li key={item} className="flex items-center gap-3 md:gap-4 text-[#5A5550]">
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-[#7A9A5D] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-cal-namespace="booking"
                data-cal-link="ekolivero"
                data-cal-origin="https://app.cal.eu"
                data-cal-config='{"theme":"dark"}'
                className="w-full py-4 md:py-5 border-2 border-[#1A1714] text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium hover:bg-[#1A1714] hover:text-[#F5F2EB] active:bg-[#1A1714] active:text-[#F5F2EB] transition-colors duration-300 focus-ring"
              >
                Contattaci
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* How It Works - AI Revolution angle */}
      <section id="come-funziona" aria-labelledby="how-heading" className="py-16 md:py-40 px-5 md:px-12 lg:px-20 cv-auto">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-32">
            <div className="lg:col-span-1 hidden md:block">
              <span aria-hidden="true" className="font-display text-[8rem] md:text-[12rem] font-medium text-[#E8E3D9] leading-none block">03</span>
            </div>
            <div className="lg:col-span-6 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#C75D3A] block mb-3 md:mb-4">Come Funziona</span>
              <h2 id="how-heading" className="font-display text-4xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Il lavoro sta<br />
                <span className="font-display italic text-[#C75D3A]">cambiando.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end mt-4 lg:mt-0">
              <p className="text-[#5A5550] text-base md:text-lg leading-relaxed">
                L'AI ha cambiato tutto. Assumere sviluppatori a tempo pieno o pagare freelance a ore non ha più senso. Io uso l'AI per moltiplicare la produttività. E te la insegno.
              </p>
            </div>
          </div>

          {/* Revolution statement */}
          <div className="border-t-2 border-b-2 border-[#1A1714] py-10 md:py-16 mb-16 md:mb-24">
            <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-[-0.02em] text-center max-w-4xl mx-auto">
              "Non hai bisogno di un dipendente. Hai bisogno di <span className="italic text-[#C75D3A]">risultati</span>."
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-6xl md:text-8xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">1</span>
                <div className="h-px flex-1 bg-[#E8E3D9] group-hover:bg-[#C75D3A] transition-colors duration-500"></div>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-4">Parliamo dei tuoi obiettivi</h3>
              <p className="text-[#5A5550] text-sm md:text-base leading-relaxed">
                Una call per capire dove sei e dove vuoi arrivare. Niente preventivi infiniti: in 30 minuti saprai se posso aiutarti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-6xl md:text-8xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">2</span>
                <div className="h-px flex-1 bg-[#E8E3D9] group-hover:bg-[#C75D3A] transition-colors duration-500"></div>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-4">Scegli il piano e partiamo</h3>
              <p className="text-[#5A5550] text-sm md:text-base leading-relaxed">
                Niente burocrazia. Sottoscrivi, mi dai accesso ai tuoi strumenti (Slack, GitHub, Linear) e iniziamo a lavorare in 24 ore.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-6xl md:text-8xl font-medium text-[#E8E3D9] group-hover:text-[#C75D3A] transition-colors duration-500">3</span>
                <div className="h-px flex-1 bg-[#E8E3D9] group-hover:bg-[#C75D3A] transition-colors duration-500"></div>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-4">Ricevi valore, non ore</h3>
              <p className="text-[#5A5550] text-sm md:text-base leading-relaxed">
                Lavoro per obiettivi, non a ore. Uso l'AI per accelerare, tu impari come farlo anche internamente. Win-win.
              </p>
            </div>
          </div>

          {/* Differentiator box */}
          <div className="mt-16 md:mt-24 bg-[#1A1714] text-[#F5F2EB] p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C75D3A] block mb-4">Perché è diverso</span>
                <h3 className="font-display text-2xl md:text-4xl font-medium leading-[1.1] mb-6">
                  Non paghi ore.<br />
                  <span className="italic text-[#B5B0AA]">Investi in risultati.</span>
                </h3>
                <p className="text-[#B5B0AA] leading-relaxed">
                  Il modello freelance tradizionale ti fa pagare il tempo, non il valore.
                  Con l'abbonamento paghi un prezzo fisso per output concreti. Se non sei soddisfatto,
                  <span className="text-[#F5F2EB] font-medium"> rimborso garantito</span>.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { old: "Pagare ore in riunioni", new: "Call mirate, zero sprechi" },
                  { old: "Aspettare preventivi", new: "Prezzo fisso, trasparente" },
                  { old: "Dipendenza da una persona", new: "Ti insegno a usare l'AI" },
                  { old: "Vincoli contrattuali", new: "Disdici quando vuoi" },
                ].map((item) => (
                  <div key={item.old} className="flex items-center gap-4 text-sm">
                    <span className="text-[#5A5550] line-through flex-1">{item.old}</span>
                    <span className="text-[#C75D3A]">→</span>
                    <span className="text-[#F5F2EB] flex-1">{item.new}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Dramatic split layout */}
      <section id="about" aria-labelledby="about-heading" className="py-40 px-6 md:px-12 lg:px-20 cv-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Giant E */}
            <div className="lg:col-span-5 relative">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C75D3A] block mb-6">04 — Chi Sono</span>
              <div className="aspect-[4/5] bg-[#1A1714] flex items-center justify-center overflow-hidden relative" aria-hidden="true">
                <span className="font-display text-[35vw] lg:text-[25rem] font-medium text-[#2A2520] leading-none select-none">E</span>
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#C75D3A]"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <h2 id="about-heading" className="font-display text-6xl md:text-8xl font-medium leading-[0.9] tracking-[-0.02em] mb-12">
                Ciao,<br />
                <span className="font-display italic text-[#C75D3A]">sono Erik.</span>
              </h2>

              <div className="space-y-8 text-lg text-[#5A5550] leading-relaxed mb-16">
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
              <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-[#1A1714]" role="list" aria-label="Statistiche esperienza">
                {[
                  { value: "6+", label: "Anni", ariaLabel: "Più di 6 anni di esperienza" },
                  { value: "50+", label: "Progetti", ariaLabel: "Più di 50 progetti completati" },
                  { value: "4", label: "Enterprise", ariaLabel: "4 aziende enterprise" },
                ].map((stat) => (
                  <div key={stat.label} role="listitem" aria-label={stat.ariaLabel}>
                    <span className="font-display text-5xl md:text-6xl font-medium block mb-2" aria-hidden="true">{stat.value}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#A8A49E]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-40 px-5 md:px-12 lg:px-20 bg-[#EFEBE3] cv-auto">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="grid lg:grid-cols-12 gap-4 md:gap-8 mb-12 md:mb-24">
            <div className="lg:col-span-1 hidden md:block">
              <span aria-hidden="true" className="font-display text-[8rem] md:text-[12rem] font-medium text-[#DED9CE] leading-none block">05</span>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-end">
              <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#C75D3A] block mb-3 md:mb-4">FAQ</span>
              <h2 id="faq-heading" className="font-display text-4xl md:text-7xl font-medium leading-[0.95] tracking-[-0.02em]">
                Domande<br />frequenti
              </h2>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                question: "Perché un abbonamento invece del classico preventivo?",
                answer: "Il mondo è cambiato. L'AI ha rivoluzionato il modo di sviluppare software: oggi produco in giorni quello che prima richiedeva settimane. Pagare a ore non ha più senso. Con l'abbonamento hai un costo fisso e prevedibile. Io ho la libertà di usare gli strumenti più efficaci senza doverti fatturare ogni singola attività."
              },
              {
                question: "Quante ore di lavoro sono incluse?",
                answer: "Non lavoro a ore, lavoro per obiettivi. Il modello a ore incentiva l'inefficienza: più ci metto, più guadagno. Io voglio il contrario. Più sono veloce grazie all'AI, più valore creo per entrambi. Tu ricevi risultati, non timesheet."
              },
              {
                question: "Cosa succede se non sono soddisfatto?",
                answer: "Rimborso completo. Se nella prima settimana il servizio non è all'altezza delle aspettative, ti restituisco tutto. Nessuna domanda, nessuna burocrazia. Il rischio è tutto mio."
              },
              {
                question: "Come funziona la parte di insegnamento AI?",
                answer: "Non ti lascio dipendente da me. Durante la collaborazione ti mostro come uso l'AI per accelerare lo sviluppo e l'analisi. L'obiettivo è che il tuo team diventi autonomo su molte attività che oggi sembrano complesse."
              },
              {
                question: "Posso mettere in pausa l'abbonamento?",
                answer: "Certo. Hai un mese tranquillo? Metti in pausa. Hai un'emergenza e ti serve supporto intensivo? Riprendi. Massima flessibilità, zero vincoli."
              },
              {
                question: "Che differenza c'è tra Consulenza e Consulenza + Dev?",
                answer: "Con Consulenza hai un partner strategico: call illimitate, supporto su Slack, review di architettura e codice, guida sull'AI. Con Consulenza + Dev aggiungi lo sviluppo vero e proprio. Scrivo codice, costruisco feature, creo MVP. Scegli in base a cosa ti serve adesso."
              },
              {
                question: "Lavori solo con startup o anche con aziende strutturate?",
                answer: "Entrambi. Ho 6+ anni di esperienza in enterprise (Fintech, Retail, HR Tech) e so navigare sia la velocità delle startup che la complessità delle aziende strutturate. Il modello ad abbonamento funziona per chi vuole risultati senza burocrazia."
              },
              {
                question: "E se ho bisogno di più supporto del piano che ho scelto?",
                answer: "Parliamone. Possiamo passare a un piano superiore o trovare una soluzione custom. L'importante è che tu abbia il supporto che ti serve, quando ti serve."
              },
            ].map((faq, index) => (
              <div key={index} className="border-t-2 border-[#1A1714] pt-6 md:pt-8">
                <h3 className="font-display text-lg md:text-xl font-medium mb-4 pr-8">{faq.question}</h3>
                <p className="text-[#5A5550] text-sm md:text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA within FAQ */}
          <div className="mt-16 md:mt-24 text-center">
            <p className="text-[#5A5550] text-lg mb-6">Hai altre domande?</p>
            <button
              type="button"
              data-cal-namespace="booking"
              data-cal-link="ekolivero"
              data-cal-origin="https://app.cal.eu"
              data-cal-config='{"theme":"dark"}'
              className="inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase font-medium border-b-2 border-[#1A1714] pb-2 hover:border-[#C75D3A] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
            >
              Prenota una call gratuita
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA + Footer - Combined dark section */}
      <section id="prenota" aria-labelledby="cta-heading" className="bg-[#1A1714] text-[#F5F2EB] relative overflow-hidden">
        {/* CTA Content */}
        <div className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative">
          {/* Background decorative text */}
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <span className="font-display text-[30vw] font-medium text-[#252119] leading-none whitespace-nowrap">Inizia</span>
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 id="cta-heading" className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-[-0.02em]">
                  Pronto a iniziare<br />
                  <span className="font-display italic text-[#C75D3A]">qualcosa di nuovo?</span>
                </h2>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <p className="text-[#B5B0AA] text-lg leading-relaxed mb-10">
                  Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
                </p>
                <button
                  type="button"
                  data-cal-namespace="booking"
                  data-cal-link="ekolivero"
                  data-cal-origin="https://app.cal.eu"
                  data-cal-config='{"theme":"dark"}'
                  className="group inline-flex items-center gap-6 bg-[#C75D3A] text-[#F5F2EB] px-8 py-5 hover:bg-[#B54D2E] transition-colors duration-300 focus-ring"
                >
                  <span className="text-sm tracking-[0.15em] uppercase font-medium">Prenota una call</span>
                  <svg aria-hidden="true" className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#3A352E] py-12 md:py-16 px-6 md:px-12 lg:px-20" role="contentinfo">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
              {/* Brand & Info */}
              <div className="lg:col-span-4">
                <a href="/" className="text-sm tracking-[0.25em] uppercase font-medium focus-ring inline-block mb-6" aria-label="Erik Olivero - Torna alla home">
                  {siteConfig.business.name}
                </a>
                <div className="space-y-2 text-sm text-[#7A7570]">
                  <p>{siteConfig.business.owner}</p>
                  <p>P.IVA: {siteConfig.business.piva}</p>
                  <p>{siteConfig.business.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="lg:col-span-4 lg:col-start-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#7A7570] block mb-4">Seguimi</span>
                <div className="flex items-center gap-6">
                  {siteConfig.socials.linkedin && (
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.github && (
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.twitter && (
                    <a
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.instagram && (
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  )}
                  {siteConfig.socials.youtube && (
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B5B0AA] hover:text-[#C75D3A] transition-colors duration-300 focus-ring"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Copyright */}
              <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
                <span className="text-xs tracking-[0.15em] uppercase text-[#7A7570]">
                  © {new Date().getFullYear()} {siteConfig.business.name}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </section>

      </main>
      </div>
    </>
  );
}
