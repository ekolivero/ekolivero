// Style 10: Earth Organic - Green tones, organic shapes, natural feel, warm

export default function LandingPage10() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Organic background shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-lime-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-emerald-800">ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-stone-600 hover:text-emerald-700 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-stone-600 hover:text-emerald-700 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-stone-600 hover:text-emerald-700 transition-colors">Chi Sono</a>
            <button className="bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors">
              Inizia ora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-sm text-emerald-800 mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-stone-800">
            Tecnologia che cresce
            <br />
            <span className="text-emerald-700">con il tuo business</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, sviluppo software e consulenza strategica. Un partner tecnologico sostenibile, in abbonamento.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20">
              Scopri i piani
            </button>
            <button className="bg-white text-stone-700 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-100 transition-colors border border-stone-200">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-stone-200/50">
            <p className="text-center text-sm text-stone-500 mb-6">Esperienza coltivata in aziende enterprise</p>
            <div className="flex items-center justify-center gap-10 text-stone-400 text-base font-medium">
              <span className="hover:text-emerald-700 transition-colors">Jobtome</span>
              <span className="hover:text-emerald-700 transition-colors">Fincons</span>
              <span className="hover:text-emerald-700 transition-colors">HYPE</span>
              <span className="hover:text-emerald-700 transition-colors">A.S. Watson</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-stone-800">Cosa posso fare per te</h2>
            <p className="text-stone-600">Soluzioni che crescono organicamente con le tue esigenze.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">AI & Automazione</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                L'AI come strumento, non come fine. Ti aiuto a integrarla dove porta valore reale.
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Consulenza strategica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Chatbot e assistenti
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Automazione processi
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Sviluppo Software</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Prodotti digitali che nascono da un'idea e fioriscono in produzione.
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  MVP e prototipi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Web application
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  Integrazioni
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stone-800">Digital Partner</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Un partner che cresce con te, non un fornitore che passa e va.
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                  Visione strategica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                  Formazione team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                  Supporto continuo
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
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-stone-800">Piani sostenibili</h2>
            <p className="text-stone-600">Nessun vincolo. Cresci quando sei pronto, fermati quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-emerald-700 font-medium">Starter</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-stone-800">Consulenza</h3>
              <p className="text-stone-500 text-sm mb-6">Il tuo consulente tech sempre presente.</p>
              <div className="mb-8">
                <span className="text-4xl font-semibold text-stone-800">2.500€</span>
                <span className="text-stone-400">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Call illimitate", "Supporto via Slack/email", "Consulenza strategica", "Review codice"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-stone-100 text-stone-700 py-4 rounded-2xl font-medium hover:bg-stone-200 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white relative shadow-xl shadow-emerald-600/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-xs font-bold">
                Consigliato
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-emerald-100 font-medium">Pro</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Full Partner</h3>
              <p className="text-emerald-100 text-sm mb-6">Consulenza + sviluppo. Cresciamo insieme.</p>
              <div className="mb-8">
                <span className="text-4xl font-semibold">6.000€</span>
                <span className="text-emerald-200">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Starter", "Sviluppo software", "MVP e prototipi", "Implementazione AI"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-50">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-emerald-700 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-colors">
                Inizia ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-sm text-teal-700 font-medium">Enterprise</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-stone-800">Custom</h3>
              <p className="text-stone-500 text-sm mb-6">Per progetti che richiedono cura speciale.</p>
              <div className="mb-8">
                <span className="text-4xl font-semibold text-stone-800">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Pro", "Progetti su larga scala", "SLA dedicato", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-stone-100 text-stone-700 py-4 rounded-2xl font-medium hover:bg-stone-200 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 border border-stone-200/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-200 via-teal-200 to-lime-200 rounded-full flex items-center justify-center">
                  <span className="text-7xl font-semibold text-emerald-800">E</span>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-emerald-700 font-medium">Chi Sono</span>
                </div>
                <h2 className="text-3xl font-semibold mb-6 text-stone-800">Ciao, sono Erik.</h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Sviluppatore full-stack con oltre 6 anni di esperienza in aziende enterprise. Ho piantato semi che sono diventati prodotti usati da milioni di persone.
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Non eseguo solamente. Capisco il terreno, scelgo i semi giusti, e li faccio crescere.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  <span className="font-semibold text-emerald-700">La mia missione:</span> portare la qualità enterprise alle PMI, con un approccio sostenibile e senza vincoli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-emerald-600/20">
            <h2 className="text-3xl font-semibold mb-6">Pronti a far crescere qualcosa insieme?</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
              Prenota una call gratuita. Parliamo del tuo progetto e vediamo se possiamo coltivare qualcosa di grande.
            </p>
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-50 transition-colors shadow-lg">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-stone-200/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-semibold text-emerald-800">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-stone-400">
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Termini</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-stone-300">© 2025 Ekolivero</p>
        </div>
      </footer>
    </div>
  );
}
