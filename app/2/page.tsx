// Style 2: Aurora Gradient - Beautiful gradients, glassmorphism, blur effects

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between">
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">ekolivero</span>
            <div className="flex items-center gap-8">
              <a href="#servizi" className="text-sm text-white/60 hover:text-white transition-colors">Servizi</a>
              <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">Chi Sono</a>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                Inizia ora
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/60 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">Il tuo partner</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">tecnologico.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, sviluppo software e consulenza strategica. Abbonati quando serve, disdici quando vuoi.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl text-base font-medium hover:opacity-90 transition-opacity">
              Scopri i piani
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-colors">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Floating Cards - Trust */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <p className="text-center text-sm text-white/40 mb-8">Esperienza maturata in aziende enterprise</p>
            <div className="flex items-center justify-center gap-12 text-white/30 text-lg font-medium">
              <span className="hover:text-white/60 transition-colors">Jobtome</span>
              <span className="hover:text-white/60 transition-colors">Fincons</span>
              <span className="hover:text-white/60 transition-colors">HYPE</span>
              <span className="hover:text-white/60 transition-colors">A.S. Watson</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">Servizi</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cosa posso fare per te</h2>
            <p className="text-white/60 text-lg">Competenze enterprise al servizio della tua crescita.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Automazione</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Ti aiuto a capire dove l'AI può fare la differenza, evitando investimenti inutili.
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Consulenza strategica AI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Chatbot e assistenti
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Automazione processi
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sviluppo Software</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Dalla prima idea al prodotto in produzione. Soluzioni, non solo codice.
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  MVP e prototipi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Web application custom
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Integrazioni e API
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Partner</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Qualcuno che capisca il tuo business e ti aiuti nelle decisioni tech.
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Visione strategica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Formazione team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Supporto decisionale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-blue-400 uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Piani trasparenti</h2>
            <p className="text-white/60 text-lg">Nessun vincolo. Abbonati quando serve, disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <p className="text-sm text-white/40 uppercase tracking-wider mb-2">Starter</p>
              <h3 className="text-2xl font-bold mb-2">Consulenza</h3>
              <p className="text-white/50 mb-6">Il tuo consulente tech sempre disponibile.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">2.500€</span>
                <span className="text-white/40">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Call illimitate
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Supporto Slack/email
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Consulenza strategica
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Review codice
                </li>
              </ul>
              <button className="w-full border border-white/20 py-4 rounded-xl font-medium hover:bg-white/5 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-xs font-medium">
                Consigliato
              </div>
              <p className="text-sm text-white/40 uppercase tracking-wider mb-2">Pro</p>
              <h3 className="text-2xl font-bold mb-2">Consulenza + Dev</h3>
              <p className="text-white/50 mb-6">Un partner che costruisce con te.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">6.000€</span>
                <span className="text-white/40">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tutto di Starter
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sviluppo software
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  MVP e prototipi
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Implementazione AI
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                Inizia ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <p className="text-sm text-white/40 uppercase tracking-wider mb-2">Enterprise</p>
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-white/50 mb-6">Per progetti complessi e team strutturati.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tutto di Pro
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Progetti larga scala
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA dedicato
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team integration
                </li>
              </ul>
              <button className="w-full border border-white/20 py-4 rounded-xl font-medium hover:bg-white/5 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">Chi Sono</p>
                <h2 className="text-4xl font-bold mb-6">Ciao, sono Erik.</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho costruito prodotti digitali che hanno scalato.
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  Non sono solo un esecutore. Capisco il problema di business, identifico la soluzione giusta e la costruisco.
                </p>
                <p className="text-white/60 leading-relaxed">
                  <span className="text-white font-medium">La mia missione:</span> portare qualità enterprise alle PMI, senza i vincoli di un'assunzione.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl aspect-square flex items-center justify-center">
                  <span className="text-8xl font-bold bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent">E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-12 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0tNC00aC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto a iniziare?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
              </p>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/90 transition-colors">
                Prenota una call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Termini</a>
            <a href="#" className="hover:text-white transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-white/30">© 2025 Ekolivero</p>
        </div>
      </footer>
    </div>
  );
}
