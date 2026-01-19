// Style 6: Corporate Blue - Navy, professional, trustworthy, enterprise-ready

export default function LandingPage6() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-900">Ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Chi Sono</a>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contattaci
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-lg text-sm text-blue-200 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Disponibile per nuovi progetti
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Consulenza Tecnologica in Subscription
              </h1>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                AI, sviluppo software e digital strategy per PMI ed Enterprise. Un partner tecnologico affidabile, senza i vincoli di un'assunzione.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-colors">
                  Scopri i Piani
                </button>
                <button className="border border-blue-400 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-800 transition-colors">
                  Prenota una Demo
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-blue-800/50 rounded-3xl"></div>
                <div className="absolute top-8 left-8 w-80 h-80 bg-blue-700/50 rounded-3xl flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/20">E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Esperienza consolidata in:</p>
            <div className="flex items-center gap-10 text-slate-400 font-semibold">
              <span>Jobtome</span>
              <span>Fincons Group</span>
              <span>HYPE</span>
              <span>A.S. Watson</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "6+", label: "Anni di esperienza" },
              { num: "0", label: "Vincoli contrattuali" },
              { num: "∞", label: "Richieste incluse" },
              { num: "24h", label: "Tempo di risposta" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.num}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">I Nostri Servizi</p>
            <h2 className="text-3xl font-bold mb-4">Soluzioni Complete per il Tuo Business</h2>
            <p className="text-slate-600 max-w-2xl">Competenze enterprise-grade per accelerare la crescita della tua azienda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Automazione</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Strategie e implementazioni AI concrete per ottimizzare i processi e ridurre i costi operativi.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Consulenza strategica AI
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Chatbot enterprise
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Process automation
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sviluppo Software</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Prodotti digitali custom, dall'ideazione al deployment. Qualità enterprise per ogni progetto.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  MVP & Prototipi
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Web Application
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  System Integration
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Consulenza Strategica</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Un partner tecnologico di fiducia per le decisioni strategiche della tua azienda.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tech Strategy
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team Training
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Architecture Review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">Piani e Prezzi</p>
            <h2 className="text-3xl font-bold mb-4">Scegli il Piano Giusto per Te</h2>
            <p className="text-slate-600">Nessun vincolo contrattuale. Disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-1">Starter</h3>
              <p className="text-sm text-slate-500 mb-6">Consulenza tecnologica</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">€2.500</span>
                <span className="text-slate-500">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Call illimitate", "Supporto Slack/Email", "Consulenza strategica", "Code review", "Formazione team"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors">
                Inizia Ora
              </button>
            </div>

            {/* Pro */}
            <div className="bg-blue-600 rounded-xl p-8 text-white relative shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                Più Popolare
              </div>
              <h3 className="text-lg font-bold mb-1">Professional</h3>
              <p className="text-blue-200 text-sm mb-6">Consulenza + Sviluppo</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">€6.000</span>
                <span className="text-blue-200">/mese</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Starter", "Sviluppo software", "MVP & Prototipi", "Implementazione AI", "Priorità dedicata"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Inizia Ora
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-1">Enterprise</h3>
              <p className="text-sm text-slate-500 mb-6">Soluzioni personalizzate</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Professional", "Progetti enterprise", "SLA garantito", "Team dedicato", "Integrazione diretta"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-900 rounded-2xl p-12 text-white">
              <div className="text-9xl font-bold text-blue-800">E</div>
            </div>
            <div>
              <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">Chi Sono</p>
              <h2 className="text-3xl font-bold mb-6">Erik - Senior Software Engineer</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Con oltre 6 anni di esperienza in aziende enterprise come Jobtome, Fincons Group, HYPE e A.S. Watson, ho maturato competenze solide nella progettazione e implementazione di soluzioni tecnologiche scalabili.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                La mia missione è portare lo stesso livello di qualità e innovazione delle grandi aziende anche alle PMI, attraverso un modello di subscription flessibile e senza vincoli.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Prenota una Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a Trasformare il Tuo Business?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Prenota una call conoscitiva gratuita. Analizzeremo insieme le tue esigenze e troveremo la soluzione migliore.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-base font-bold hover:bg-blue-50 transition-colors">
            Prenota una Consulenza Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xl font-bold">Ekolivero</span>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
              <a href="#" className="hover:text-white transition-colors">Contatti</a>
            </div>
            <p className="text-sm text-slate-500">© 2025 Ekolivero. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
