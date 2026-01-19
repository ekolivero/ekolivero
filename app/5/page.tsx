// Style 5: Soft Pastel - Lavender, mint, peach, friendly rounded aesthetic

export default function LandingPage5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-violet-600">ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-slate-500 hover:text-violet-600 transition-colors">Chi Sono</a>
            <button className="bg-violet-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25">
              Inizia ora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm text-slate-600 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Il tuo partner tecnologico,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">in abbonamento.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, sviluppo software e consulenza strategica. Abbonati quando serve, disdici quando vuoi.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-violet-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25">
              Scopri i piani
            </button>
            <button className="bg-white text-slate-700 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-colors shadow-sm">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-sm">
            <p className="text-center text-sm text-slate-400 mb-6">Esperienza maturata in aziende enterprise</p>
            <div className="flex items-center justify-center gap-10 text-slate-300 text-base font-semibold">
              <span className="hover:text-violet-400 transition-colors">Jobtome</span>
              <span className="hover:text-violet-400 transition-colors">Fincons</span>
              <span className="hover:text-violet-400 transition-colors">HYPE</span>
              <span className="hover:text-violet-400 transition-colors">A.S. Watson</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-600 rounded-full text-sm font-medium mb-4">Servizi</span>
            <h2 className="text-4xl font-bold mb-4">Cosa posso fare per te</h2>
            <p className="text-slate-600">Competenze enterprise al servizio della tua crescita.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Automazione</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                L'AI non è magia - è uno strumento. Ti aiuto a capire dove usarla per risultati concreti.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                  Consulenza strategica AI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                  Chatbot e assistenti
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                  Automazione processi
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/25">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sviluppo Software</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Costruisco prodotti digitali - dalla prima idea al prodotto in produzione.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                  MVP e prototipi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                  Web application custom
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                  Integrazioni e API
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Partner</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Non un fornitore - qualcuno che capisca il tuo business e ti aiuti.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Visione strategica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Formazione team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Supporto decisionale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">Pricing</span>
            <h2 className="text-4xl font-bold mb-4">Piani semplici</h2>
            <p className="text-slate-600">Nessun vincolo, nessuna penale. Disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <span className="inline-block px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-xs font-medium mb-4">Starter</span>
              <h3 className="text-2xl font-bold mb-2">Consulenza</h3>
              <p className="text-slate-500 text-sm mb-6">Il tuo consulente tech sempre disponibile.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">2.500€</span>
                <span className="text-slate-400">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Call illimitate", "Supporto Slack/email", "Consulenza strategica", "Review codice"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-100 text-slate-700 py-4 rounded-2xl font-medium hover:bg-slate-200 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl p-8 text-white shadow-xl shadow-violet-500/25 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-xs font-bold">
                Consigliato
              </div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium mb-4">Pro</span>
              <h3 className="text-2xl font-bold mb-2">Consulenza + Dev</h3>
              <p className="text-white/70 text-sm mb-6">Un partner che costruisce con te.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">6.000€</span>
                <span className="text-white/60">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Starter", "Sviluppo software", "MVP e prototipi", "Implementazione AI"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-violet-600 py-4 rounded-2xl font-bold hover:bg-white/90 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-medium mb-4">Enterprise</span>
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-slate-500 text-sm mb-6">Per progetti complessi e team strutturati.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Pro", "Progetti larga scala", "SLA dedicato", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-100 text-slate-700 py-4 rounded-2xl font-medium hover:bg-slate-200 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">Chi Sono</span>
                <h2 className="text-4xl font-bold mb-6">Ciao, sono Erik!</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho costruito prodotti digitali che hanno scalato.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Non sono solo un esecutore. Capisco il problema di business, identifico la soluzione giusta e la costruisco.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">La mia missione:</span> portare qualità enterprise alle PMI, senza i vincoli di un'assunzione.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-violet-200 via-fuchsia-200 to-rose-200 rounded-full flex items-center justify-center">
                  <span className="text-7xl font-bold text-white drop-shadow-lg">E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 rounded-3xl p-12 text-center text-white shadow-xl shadow-violet-500/25">
            <h2 className="text-4xl font-bold mb-6">Pronto a iniziare?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
            </p>
            <button className="bg-white text-violet-600 px-8 py-4 rounded-full text-base font-bold hover:bg-white/90 transition-colors shadow-lg">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-bold text-violet-600">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Termini</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-slate-300">© 2025 Ekolivero</p>
        </div>
      </footer>
    </div>
  );
}
