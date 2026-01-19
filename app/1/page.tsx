// Style 1: Minimal Clean - White, black, lots of whitespace, geometric accents

export default function LandingPage1() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Chi Sono</a>
            <button className="bg-neutral-900 text-white px-5 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
              Inizia ora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Il tuo partner tecnologico,
            <br />
            <span className="text-neutral-400">in abbonamento.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, sviluppo software e consulenza strategica. Abbonati quando serve, disdici quando vuoi. Zero vincoli.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-neutral-900 text-white px-8 py-4 text-base font-medium hover:bg-neutral-800 transition-colors">
              Scopri i piani
            </button>
            <button className="border border-neutral-300 px-8 py-4 text-base font-medium hover:border-neutral-400 transition-colors">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Logos/Trust */}
      <section className="py-16 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-neutral-400 mb-8">Esperienza maturata in</p>
          <div className="flex items-center justify-center gap-12 text-neutral-300 text-lg font-medium">
            <span>Jobtome</span>
            <span>Fincons</span>
            <span>HYPE</span>
            <span>A.S. Watson</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-neutral-400 uppercase tracking-wider mb-4">Servizi</p>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Cosa posso fare per te</h2>
            <p className="text-neutral-600 text-lg">Competenze enterprise al servizio della tua crescita.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Automazione</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                L'intelligenza artificiale non è magia - è uno strumento. Ti aiuto a capire dove usarla per risultati concreti.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Consulenza strategica AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Chatbot e assistenti
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Automazione processi
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sviluppo Software</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Costruisco prodotti digitali - dalla prima idea al prodotto in produzione. Soluzioni, non solo codice.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  MVP e prototipi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Web application custom
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Integrazioni e API
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulenza & Digital Partner</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Non hai bisogno di un fornitore. Hai bisogno di qualcuno che capisca il tuo business.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Visione strategica
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Formazione team
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">—</span>
                  Supporto decisionale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-neutral-400 uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Piani semplici, valore reale</h2>
            <p className="text-neutral-600 text-lg">Nessun vincolo, nessuna penale. Abbonati quando serve, disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 border border-neutral-200">
              <p className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Starter</p>
              <h3 className="text-2xl font-semibold mb-2">Consulenza</h3>
              <p className="text-neutral-600 mb-6">Il tuo consulente tech sempre disponibile.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold">2.500€</span>
                <span className="text-neutral-400">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Call illimitate
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supporto via Slack/email
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consulenza strategica AI
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Review codice e architettura
                </li>
              </ul>
              <button className="w-full border border-neutral-900 py-3 font-medium hover:bg-neutral-900 hover:text-white transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Pro */}
            <div className="bg-neutral-900 text-white p-8 relative">
              <div className="absolute top-0 right-0 bg-white text-neutral-900 px-3 py-1 text-xs font-medium">
                Popolare
              </div>
              <p className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Pro</p>
              <h3 className="text-2xl font-semibold mb-2">Consulenza + Dev</h3>
              <p className="text-neutral-400 mb-6">Un partner che costruisce con te.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold">6.000€</span>
                <span className="text-neutral-400">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tutto di Starter, più:
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sviluppo software
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MVP e prototipi
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Implementazione AI
                </li>
              </ul>
              <button className="w-full bg-white text-neutral-900 py-3 font-medium hover:bg-neutral-100 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 border border-neutral-200">
              <p className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Enterprise</p>
              <h3 className="text-2xl font-semibold mb-2">Custom</h3>
              <p className="text-neutral-600 mb-6">Per progetti complessi e team strutturati.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tutto di Pro, più:
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progetti su larga scala
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SLA dedicato
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integrazione team interni
                </li>
              </ul>
              <button className="w-full border border-neutral-900 py-3 font-medium hover:bg-neutral-900 hover:text-white transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-neutral-400 uppercase tracking-wider mb-4">Chi Sono</p>
              <h2 className="text-4xl font-semibold tracking-tight mb-6">Ciao, sono Erik.</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho costruito prodotti digitali che hanno scalato, lavorando su progetti complessi dall'idea alla produzione.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                <strong className="text-neutral-900">Quello che mi distingue:</strong> non sono solo un esecutore. Capisco il problema di business, identifico la soluzione giusta e la costruisco.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-neutral-900">La mia missione:</strong> portare lo stesso livello di qualità e innovazione tecnologica delle enterprise alle piccole e medie imprese.
              </p>
            </div>
            <div className="bg-neutral-100 aspect-square flex items-center justify-center">
              <span className="text-6xl">E</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Pronto a iniziare?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo lavorare insieme.
          </p>
          <button className="bg-white text-neutral-900 px-8 py-4 text-base font-medium hover:bg-neutral-100 transition-colors">
            Prenota una call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-semibold tracking-tight">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-neutral-400">© 2025 Ekolivero</p>
        </div>
      </footer>
    </div>
  );
}
