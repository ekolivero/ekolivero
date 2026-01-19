// Style 11: Editorial Zen - Japanese-inspired minimalism meets editorial magazine design
// Asymmetric layouts, generous whitespace, warm paper-like tones, refined typography

export default function LandingPage11() {
    return (
      <div className="min-h-screen bg-[#F7F5F0] text-[#1A1918] selection:bg-[#C8B8A8] selection:text-[#1A1918]">
        {/* Subtle grain texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
  
        {/* Navigation - Asymmetric, editorial style */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F7F5F0]/90 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6">
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-[0.2em] uppercase font-light">Ekolivero</span>
              <div className="hidden md:flex items-center gap-12">
                <a href="#servizi" className="text-xs tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#1A1918] transition-colors">Servizi</a>
                <a href="#pricing" className="text-xs tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#1A1918] transition-colors">Pricing</a>
                <a href="#about" className="text-xs tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#1A1918] transition-colors">Chi Sono</a>
              </div>
              <button className="text-xs tracking-[0.15em] uppercase border-b border-[#1A1918] pb-0.5 hover:border-[#C8B8A8] transition-colors">
                Contatto
              </button>
            </div>
          </div>
        </nav>
  
        {/* Hero - Editorial asymmetric layout */}
        <section className="min-h-screen flex items-center pt-24 pb-16 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              {/* Left column - Main headline */}
              <div className="md:col-span-7 md:col-start-1">
                <div className="mb-8">
                  <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#9B9590] mb-6">Partner Tecnologico</span>
                  <div className="h-px w-16 bg-[#C8B8A8] mb-12"></div>
                </div>
                <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] mb-8">
                  <span className="block">Tecnologia</span>
                  <span className="block text-[#9B9590]">in abbonamento</span>
                </h1>
                <p className="text-lg md:text-xl text-[#6B6560] font-light leading-relaxed max-w-md">
                  AI, sviluppo software e consulenza strategica. Abbonati quando serve, disdici quando vuoi.
                </p>
              </div>
  
              {/* Right column - CTA and status */}
              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-12">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#8B9A6D] rounded-full animate-pulse"></span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#6B6560]">Disponibile</span>
                </div>
  
                <div className="flex flex-col gap-4">
                  <button className="group flex items-center justify-between w-full py-5 border-t border-b border-[#D4CFC6] hover:border-[#1A1918] transition-colors">
                    <span className="text-sm tracking-[0.1em] uppercase">Scopri i piani</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="group flex items-center justify-between w-full py-5 border-b border-[#D4CFC6] hover:border-[#1A1918] transition-colors">
                    <span className="text-sm tracking-[0.1em] uppercase text-[#6B6560]">Prenota una call</span>
                    <svg className="w-5 h-5 text-[#6B6560] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
  
            {/* Scroll indicator */}
            <div className="hidden md:flex items-center gap-4 mt-24">
              <div className="h-12 w-px bg-[#D4CFC6]"></div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B9590] rotate-90 origin-left translate-y-6">Scroll</span>
            </div>
          </div>
        </section>
  
        {/* Trust - Minimal horizontal layout */}
        <section className="py-16 px-8 md:px-16 border-t border-[#E8E4DD]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">Esperienza in</span>
              </div>
              <div className="md:col-span-9 flex flex-wrap items-center gap-x-12 gap-y-4 text-sm tracking-[0.1em] text-[#9B9590]">
                <span className="hover:text-[#1A1918] transition-colors cursor-default">Jobtome</span>
                <span className="hover:text-[#1A1918] transition-colors cursor-default">Fincons</span>
                <span className="hover:text-[#1A1918] transition-colors cursor-default">HYPE</span>
                <span className="hover:text-[#1A1918] transition-colors cursor-default">A.S. Watson</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services - Editorial grid with asymmetric spacing */}
        <section id="servizi" className="py-32 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 mb-20">
              <div className="md:col-span-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-4">01 — Servizi</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  Cosa posso fare<br />per te
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-8 flex items-end">
                <p className="text-[#6B6560] leading-relaxed">
                  Competenze enterprise al servizio della tua crescita. Soluzioni misurate, non sovradimensionate.
                </p>
              </div>
            </div>
  
            <div className="grid md:grid-cols-12 gap-8">
              {/* Service 1 */}
              <div className="md:col-span-4 group">
                <div className="border-t border-[#D4CFC6] pt-8 group-hover:border-[#1A1918] transition-colors">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-6">A</span>
                  <h3 className="text-2xl font-light mb-4">AI & Automazione</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                    L'intelligenza artificiale non è magia — è uno strumento. Ti aiuto a capire dove usarla per risultati concreti.
                  </p>
                  <ul className="space-y-2 text-sm text-[#9B9590]">
                    <li>Consulenza strategica AI</li>
                    <li>Chatbot e assistenti</li>
                    <li>Automazione processi</li>
                  </ul>
                </div>
              </div>
  
              {/* Service 2 - Offset */}
              <div className="md:col-span-4 md:mt-16 group">
                <div className="border-t border-[#D4CFC6] pt-8 group-hover:border-[#1A1918] transition-colors">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-6">B</span>
                  <h3 className="text-2xl font-light mb-4">Sviluppo Software</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                    Costruisco prodotti digitali — dalla prima idea al prodotto in produzione. Soluzioni, non solo codice.
                  </p>
                  <ul className="space-y-2 text-sm text-[#9B9590]">
                    <li>MVP e prototipi</li>
                    <li>Web application custom</li>
                    <li>Integrazioni e API</li>
                  </ul>
                </div>
              </div>
  
              {/* Service 3 - More offset */}
              <div className="md:col-span-4 md:mt-32 group">
                <div className="border-t border-[#D4CFC6] pt-8 group-hover:border-[#1A1918] transition-colors">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-6">C</span>
                  <h3 className="text-2xl font-light mb-4">Digital Partner</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                    Non hai bisogno di un fornitore. Hai bisogno di qualcuno che capisca il tuo business.
                  </p>
                  <ul className="space-y-2 text-sm text-[#9B9590]">
                    <li>Visione strategica</li>
                    <li>Formazione team</li>
                    <li>Supporto decisionale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pricing - Clean, editorial tables */}
        <section id="pricing" className="py-32 px-8 md:px-16 bg-[#EFEBE4]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 mb-20">
              <div className="md:col-span-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-4">02 — Pricing</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  Piani semplici,<br />valore reale
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-8 flex items-end">
                <p className="text-[#6B6560] leading-relaxed">
                  Nessun vincolo, nessuna penale. Abbonati quando serve, disdici quando vuoi.
                </p>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 gap-px bg-[#D4CFC6]">
              {/* Starter */}
              <div className="bg-[#EFEBE4] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">Starter</span>
                </div>
                <h3 className="text-xl font-light mb-2">Consulenza</h3>
                <p className="text-sm text-[#9B9590] mb-8">Il tuo consulente tech sempre disponibile.</p>
                <div className="mb-10">
                  <span className="text-4xl font-light">2.500€</span>
                  <span className="text-sm text-[#9B9590] ml-1">/mese</span>
                </div>
                <ul className="space-y-3 text-sm text-[#6B6560] mb-10">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Call illimitate
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Supporto via Slack/email
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Consulenza strategica AI
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Review codice e architettura
                  </li>
                </ul>
                <button className="w-full py-4 border border-[#1A1918] text-sm tracking-[0.1em] uppercase hover:bg-[#1A1918] hover:text-[#F7F5F0] transition-colors">
                  Inizia ora
                </button>
              </div>
  
              {/* Pro - Featured */}
              <div className="bg-[#1A1918] text-[#F7F5F0] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">Pro</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase bg-[#C8B8A8] text-[#1A1918] px-2 py-1">Popolare</span>
                </div>
                <h3 className="text-xl font-light mb-2">Consulenza + Dev</h3>
                <p className="text-sm text-[#9B9590] mb-8">Un partner che costruisce con te.</p>
                <div className="mb-10">
                  <span className="text-4xl font-light">6.000€</span>
                  <span className="text-sm text-[#9B9590] ml-1">/mese</span>
                </div>
                <ul className="space-y-3 text-sm text-[#9B9590] mb-10">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#C8B8A8] rounded-full mt-2 shrink-0"></span>
                    Tutto di Starter, più:
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#C8B8A8] rounded-full mt-2 shrink-0"></span>
                    Sviluppo software
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#C8B8A8] rounded-full mt-2 shrink-0"></span>
                    MVP e prototipi
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#C8B8A8] rounded-full mt-2 shrink-0"></span>
                    Implementazione AI
                  </li>
                </ul>
                <button className="w-full py-4 bg-[#F7F5F0] text-[#1A1918] text-sm tracking-[0.1em] uppercase hover:bg-[#C8B8A8] transition-colors">
                  Inizia ora
                </button>
              </div>
  
              {/* Enterprise */}
              <div className="bg-[#EFEBE4] p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590]">Enterprise</span>
                </div>
                <h3 className="text-xl font-light mb-2">Custom</h3>
                <p className="text-sm text-[#9B9590] mb-8">Per progetti complessi e team strutturati.</p>
                <div className="mb-10">
                  <span className="text-4xl font-light">Custom</span>
                </div>
                <ul className="space-y-3 text-sm text-[#6B6560] mb-10">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Tutto di Pro, più:
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Progetti su larga scala
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    SLA dedicato
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-[#8B9A6D] rounded-full mt-2 shrink-0"></span>
                    Integrazione team interni
                  </li>
                </ul>
                <button className="w-full py-4 border border-[#1A1918] text-sm tracking-[0.1em] uppercase hover:bg-[#1A1918] hover:text-[#F7F5F0] transition-colors">
                  Contattaci
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* About - Editorial portrait layout */}
        <section id="about" className="py-32 px-8 md:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5 md:col-start-1">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#9B9590] block mb-4">03 — Chi Sono</span>
                <div className="aspect-[3/4] bg-[#E8E4DD] flex items-end justify-center overflow-hidden">
                  <span className="text-[20rem] font-light text-[#D4CFC6] leading-none translate-y-16">E</span>
                </div>
              </div>
  
              <div className="md:col-span-5 md:col-start-7 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                  Ciao,<br />sono Erik.
                </h2>
                <div className="space-y-6 text-[#6B6560] leading-relaxed">
                  <p>
                    Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho costruito prodotti digitali che hanno scalato, lavorando su progetti complessi dall'idea alla produzione.
                  </p>
                  <p>
                    <span className="text-[#1A1918]">Quello che mi distingue:</span> non sono solo un esecutore. Capisco il problema di business, identifico la soluzione giusta e la costruisco.
                  </p>
                  <p>
                    <span className="text-[#1A1918]">La mia missione:</span> portare lo stesso livello di qualità e innovazione tecnologica delle enterprise alle piccole e medie imprese.
                  </p>
                </div>
  
                <div className="mt-12 pt-8 border-t border-[#D4CFC6]">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <span className="text-3xl font-light block">6+</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B9590]">Anni</span>
                    </div>
                    <div>
                      <span className="text-3xl font-light block">50+</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B9590]">Progetti</span>
                    </div>
                    <div>
                      <span className="text-3xl font-light block">4</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B9590]">Enterprise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA - Full width, editorial */}
        <section className="py-32 px-8 md:px-16 bg-[#1A1918] text-[#F7F5F0]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  Pronto a iniziare<br />qualcosa di nuovo?
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-[#9B9590] leading-relaxed mb-8">
                  Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
                </p>
                <button className="group flex items-center gap-4">
                  <span className="text-sm tracking-[0.1em] uppercase border-b border-[#F7F5F0] pb-1">Prenota una call</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer - Minimal, editorial */}
        <footer className="py-12 px-8 md:px-16 border-t border-[#E8E4DD]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3">
                <span className="text-lg tracking-[0.2em] uppercase font-light">Ekolivero</span>
              </div>
              <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#9B9590]">
                <a href="#" className="hover:text-[#1A1918] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#1A1918] transition-colors">Termini</a>
                <a href="#" className="hover:text-[#1A1918] transition-colors">Contatti</a>
              </div>
              <div className="md:col-span-3 text-right">
                <span className="text-xs tracking-[0.15em] uppercase text-[#9B9590]">© 2025</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  