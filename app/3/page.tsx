// Style 3: Dark Neon - Deep dark, violet/purple glow effects, cyberpunk vibes

export default function LandingPage3() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Glow effects */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-violet-500/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-violet-400">ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-white/50 hover:text-violet-400 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-white/50 hover:text-violet-400 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-white/50 hover:text-violet-400 transition-colors">Chi Sono</a>
            <button className="relative group px-5 py-2">
              <div className="absolute inset-0 bg-violet-600 rounded-lg blur group-hover:blur-md transition-all"></div>
              <div className="relative bg-violet-600 px-5 py-2 rounded-lg text-sm font-medium">Inizia ora</div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-violet-500/30 rounded-full text-sm text-violet-400 mb-8">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
            <span className="text-white">Il tuo partner</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400">tecnologico.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI, sviluppo software e consulenza strategica. Subscription senza vincoli.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="relative group px-8 py-4">
              <div className="absolute inset-0 bg-violet-600 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-violet-600 px-8 py-4 rounded-lg font-medium">Scopri i piani</div>
            </button>
            <button className="border border-violet-500/30 px-8 py-4 rounded-lg font-medium hover:border-violet-500/60 hover:bg-violet-500/5 transition-all">
              Prenota una call
            </button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative z-10 py-12 border-y border-violet-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-white/30 mb-6">Esperienza enterprise</p>
          <div className="flex items-center justify-center gap-12 text-white/20 text-lg font-semibold">
            <span className="hover:text-violet-400 transition-colors cursor-default">Jobtome</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Fincons</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">HYPE</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">A.S. Watson</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-violet-400 uppercase tracking-widest mb-4">[ Servizi ]</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Cosa posso fare per te</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI & Automazione",
                desc: "L'AI non è magia - è uno strumento. Ti aiuto a usarla dove serve.",
                items: ["Consulenza strategica", "Chatbot e assistenti", "Automazione processi"],
                color: "violet"
              },
              {
                title: "Sviluppo Software",
                desc: "Dalla prima idea al prodotto. Soluzioni, non solo codice.",
                items: ["MVP e prototipi", "Web app custom", "Integrazioni API"],
                color: "fuchsia"
              },
              {
                title: "Digital Partner",
                desc: "Qualcuno che capisca il business e aiuti nelle scelte tech.",
                items: ["Visione strategica", "Formazione team", "Supporto decisionale"],
                color: "purple"
              }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-${service.color}-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative bg-white/[0.02] border border-violet-500/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all">
                  <div className={`w-3 h-3 bg-${service.color}-500 rounded-full mb-6`}></div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/40 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/50">
                        <span className={`w-1 h-1 bg-${service.color}-500`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm text-fuchsia-400 uppercase tracking-widest mb-4">[ Pricing ]</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Piani trasparenti</h2>
            <p className="text-white/40">Nessun vincolo. Disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white/[0.02] border border-violet-500/10 rounded-2xl p-8">
              <p className="text-sm text-violet-400 font-mono mb-2">// STARTER</p>
              <h3 className="text-2xl font-bold mb-2">Consulenza</h3>
              <p className="text-white/40 mb-6 text-sm">Il tuo consulente tech sempre disponibile.</p>
              <div className="mb-6">
                <span className="text-5xl font-black">2.5k</span>
                <span className="text-white/30 text-lg">€/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Call illimitate", "Supporto Slack/email", "Consulenza strategica", "Review codice"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <span className="w-4 h-[1px] bg-violet-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-violet-500/30 py-4 rounded-lg font-medium hover:bg-violet-500/10 hover:border-violet-500/50 transition-all">
                Inizia ora
              </button>
            </div>

            {/* Pro */}
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-violet-950/50 border border-violet-500/30 rounded-2xl p-8">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-violet-600 px-3 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
                <p className="text-sm text-fuchsia-400 font-mono mb-2">// PRO</p>
                <h3 className="text-2xl font-bold mb-2">Consulenza + Dev</h3>
                <p className="text-white/40 mb-6 text-sm">Un partner che costruisce con te.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">6k</span>
                  <span className="text-white/30 text-lg">€/mo</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {["Tutto di Starter", "Sviluppo software", "MVP e prototipi", "Implementazione AI"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/50">
                      <span className="w-4 h-[1px] bg-fuchsia-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="relative group w-full py-4">
                  <div className="absolute inset-0 bg-violet-600 rounded-lg blur-sm group-hover:blur transition-all"></div>
                  <div className="relative bg-violet-600 py-4 rounded-lg font-medium">Inizia ora</div>
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white/[0.02] border border-violet-500/10 rounded-2xl p-8">
              <p className="text-sm text-purple-400 font-mono mb-2">// ENTERPRISE</p>
              <h3 className="text-2xl font-bold mb-2">Custom</h3>
              <p className="text-white/40 mb-6 text-sm">Per progetti complessi.</p>
              <div className="mb-6">
                <span className="text-5xl font-black">???</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {["Tutto di Pro", "Progetti larga scala", "SLA dedicato", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <span className="w-4 h-[1px] bg-purple-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-violet-500/30 py-4 rounded-lg font-medium hover:bg-violet-500/10 hover:border-violet-500/50 transition-all">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/[0.02] border border-violet-500/20 rounded-2xl aspect-square flex items-center justify-center">
                <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400">E</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-violet-400 font-mono mb-4">// CHI SONO</p>
              <h2 className="text-4xl font-black mb-6">Ciao, sono Erik.</h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Sviluppatore full-stack con 6+ anni in aziende enterprise. Ho costruito prodotti che hanno scalato.
              </p>
              <p className="text-white/50 leading-relaxed mb-6">
                <span className="text-white">Non sono un esecutore.</span> Capisco il business, trovo la soluzione, la costruisco.
              </p>
              <p className="text-white/50 leading-relaxed">
                <span className="text-violet-400">Mission:</span> qualità enterprise per le PMI, senza vincoli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/[0.02] border border-violet-500/20 rounded-3xl p-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Pronto a iniziare?</h2>
              <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
                Prenota una call gratuita. Parliamo del tuo progetto.
              </p>
              <button className="relative group px-8 py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg blur-sm group-hover:blur transition-all"></div>
                <div className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 rounded-lg font-bold">
                  Prenota una call
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-violet-500/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-bold text-violet-400">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Termini</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Contatti</a>
          </div>
          <p className="text-sm text-white/20">© 2025</p>
        </div>
      </footer>
    </div>
  );
}
