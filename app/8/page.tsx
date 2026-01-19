// Style 8: Elegant Gold - Black/charcoal with gold accents, sophisticated, luxury feel

export default function LandingPage8() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="text-xl tracking-[0.2em] font-light text-amber-200">EKOLIVERO</span>
          <div className="flex items-center gap-10">
            <a href="#servizi" className="text-xs tracking-[0.15em] text-neutral-400 hover:text-amber-200 transition-colors">SERVIZI</a>
            <a href="#pricing" className="text-xs tracking-[0.15em] text-neutral-400 hover:text-amber-200 transition-colors">PRICING</a>
            <a href="#about" className="text-xs tracking-[0.15em] text-neutral-400 hover:text-amber-200 transition-colors">ABOUT</a>
            <button className="border border-amber-500/50 text-amber-200 px-6 py-2.5 text-xs tracking-[0.15em] hover:bg-amber-500/10 transition-all">
              CONTATTACI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-44 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-amber-500/80 mb-8">TECH CONSULTING • AI • SOFTWARE DEVELOPMENT</p>
            <h1 className="text-5xl md:text-7xl font-extralight leading-[1.1] mb-8 tracking-tight">
              <span className="text-white">Il tuo partner</span>
              <br />
              <span className="text-amber-200">tecnologico d'élite</span>
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
              Consulenza strategica, AI e sviluppo software. Un servizio premium in subscription, senza compromessi.
            </p>
            <div className="flex items-center justify-center gap-6">
              <button className="bg-amber-500 text-neutral-950 px-10 py-4 text-sm tracking-[0.1em] font-medium hover:bg-amber-400 transition-colors">
                SCOPRI DI PIÙ
              </button>
              <button className="border border-neutral-700 text-neutral-300 px-10 py-4 text-sm tracking-[0.1em] hover:border-amber-500/50 hover:text-amber-200 transition-all">
                PRENOTA CALL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with trust */}
      <section className="relative z-10 py-16 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-center gap-16">
            <div className="text-center">
              <p className="text-3xl font-light text-amber-200 mb-1">6+</p>
              <p className="text-xs tracking-[0.2em] text-neutral-500">ANNI</p>
            </div>
            <div className="w-[1px] h-12 bg-neutral-800"></div>
            <div className="text-center">
              <p className="text-3xl font-light text-amber-200 mb-1">4</p>
              <p className="text-xs tracking-[0.2em] text-neutral-500">ENTERPRISE</p>
            </div>
            <div className="w-[1px] h-12 bg-neutral-800"></div>
            <div className="text-center">
              <p className="text-3xl font-light text-amber-200 mb-1">∞</p>
              <p className="text-xs tracking-[0.2em] text-neutral-500">RICHIESTE</p>
            </div>
            <div className="w-[1px] h-12 bg-neutral-800"></div>
            <div className="text-center">
              <p className="text-3xl font-light text-amber-200 mb-1">0</p>
              <p className="text-xs tracking-[0.2em] text-neutral-500">VINCOLI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] text-amber-500/80 mb-4">I NOSTRI SERVIZI</p>
            <h2 className="text-4xl font-extralight tracking-tight">Eccellenza in ogni dettaglio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-[1px] bg-neutral-800">
            {[
              {
                title: "AI & Automazione",
                desc: "Strategie AI su misura per ottimizzare processi e ridurre costi. Solo soluzioni che funzionano.",
                items: ["Consulenza strategica", "Chatbot enterprise", "Process automation"]
              },
              {
                title: "Sviluppo Software",
                desc: "Prodotti digitali di qualità superiore. Dall'ideazione alla produzione, con standard enterprise.",
                items: ["MVP & Prototipi", "Web Application", "System Integration"]
              },
              {
                title: "Consulenza Strategica",
                desc: "Un partner di fiducia per le decisioni tecnologiche che contano. Visione, non solo esecuzione.",
                items: ["Tech Strategy", "Team Coaching", "Architecture Review"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-neutral-950 p-12 hover:bg-neutral-900/50 transition-colors">
                <span className="text-xs tracking-[0.2em] text-amber-500/60 mb-6 block">0{i + 1}</span>
                <h3 className="text-xl font-light mb-4 text-amber-50">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="w-4 h-[1px] bg-amber-500/50"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-24 px-8 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] text-amber-500/80 mb-4">INVESTIMENTO</p>
            <h2 className="text-4xl font-extralight tracking-tight mb-4">Piani su misura</h2>
            <p className="text-neutral-500 font-light">Nessun vincolo. Cancella quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-neutral-800 p-10 hover:border-amber-500/30 transition-colors">
              <p className="text-xs tracking-[0.2em] text-neutral-500 mb-2">STARTER</p>
              <h3 className="text-xl font-light text-amber-50 mb-6">Consulenza</h3>
              <div className="mb-8">
                <span className="text-4xl font-light text-amber-200">€2.500</span>
                <span className="text-neutral-500 text-sm">/mese</span>
              </div>
              <div className="w-full h-[1px] bg-neutral-800 mb-8"></div>
              <ul className="space-y-4 mb-10">
                {["Call illimitate", "Supporto prioritario", "Consulenza strategica", "Code review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-neutral-700 py-4 text-xs tracking-[0.15em] text-neutral-300 hover:border-amber-500/50 hover:text-amber-200 transition-all">
                INIZIA ORA
              </button>
            </div>

            {/* Pro */}
            <div className="border border-amber-500/30 bg-amber-500/5 p-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-neutral-950 px-4 py-1 text-xs tracking-[0.1em] font-medium">
                CONSIGLIATO
              </div>
              <p className="text-xs tracking-[0.2em] text-amber-500/80 mb-2">PROFESSIONAL</p>
              <h3 className="text-xl font-light text-amber-50 mb-6">Full Service</h3>
              <div className="mb-8">
                <span className="text-4xl font-light text-amber-200">€6.000</span>
                <span className="text-neutral-400 text-sm">/mese</span>
              </div>
              <div className="w-full h-[1px] bg-amber-500/20 mb-8"></div>
              <ul className="space-y-4 mb-10">
                {["Tutto di Starter", "Sviluppo software", "MVP & prototipi", "AI implementation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-amber-500 text-neutral-950 py-4 text-xs tracking-[0.15em] font-medium hover:bg-amber-400 transition-colors">
                INIZIA ORA
              </button>
            </div>

            {/* Enterprise */}
            <div className="border border-neutral-800 p-10 hover:border-amber-500/30 transition-colors">
              <p className="text-xs tracking-[0.2em] text-neutral-500 mb-2">ENTERPRISE</p>
              <h3 className="text-xl font-light text-amber-50 mb-6">Bespoke</h3>
              <div className="mb-8">
                <span className="text-4xl font-light text-amber-200">Custom</span>
              </div>
              <div className="w-full h-[1px] bg-neutral-800 mb-8"></div>
              <ul className="space-y-4 mb-10">
                {["Tutto di Professional", "Progetti enterprise", "SLA dedicato", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-neutral-700 py-4 text-xs tracking-[0.15em] text-neutral-300 hover:border-amber-500/50 hover:text-amber-200 transition-all">
                CONTATTACI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-neutral-900 flex items-center justify-center border border-neutral-800">
              <span className="text-[10rem] font-extralight text-amber-500/20">E</span>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-amber-500/80 mb-6">IL FONDATORE</p>
              <h2 className="text-4xl font-extralight mb-8">Erik</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Senior Software Engineer con oltre sei anni di esperienza in contesti enterprise di primo livello. Una carriera costruita in aziende come Jobtome, Fincons, HYPE e A.S. Watson.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Non mi limito a eseguire. Comprendo le sfide del business, identifico la soluzione ottimale e la realizzo con standard di eccellenza.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                <span className="text-amber-200">La mia visione:</span> rendere accessibile alle PMI la stessa qualità tecnologica riservata alle grandi corporation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-neutral-800 p-16 bg-neutral-900/30">
            <p className="text-xs tracking-[0.3em] text-amber-500/80 mb-6">IL PROSSIMO PASSO</p>
            <h2 className="text-4xl font-extralight mb-6">Iniziamo una conversazione</h2>
            <p className="text-neutral-500 mb-12 max-w-xl mx-auto">
              Prenota una consulenza conoscitiva. Discuteremo delle tue esigenze e valuteremo insieme le opportunità.
            </p>
            <button className="bg-amber-500 text-neutral-950 px-12 py-5 text-sm tracking-[0.1em] font-medium hover:bg-amber-400 transition-colors">
              PRENOTA UNA CALL
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm tracking-[0.2em] font-light text-amber-200/80">EKOLIVERO</span>
          <div className="flex items-center gap-8 text-xs tracking-[0.1em] text-neutral-500">
            <a href="#" className="hover:text-amber-200 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-amber-200 transition-colors">TERMINI</a>
            <a href="#" className="hover:text-amber-200 transition-colors">CONTATTI</a>
          </div>
          <p className="text-xs tracking-[0.1em] text-neutral-600">© 2025 EKOLIVERO</p>
        </div>
      </footer>
    </div>
  );
}
