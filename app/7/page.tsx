// Style 7: Vibrant Energy - Orange/yellow gradients, bold shapes, high energy

export default function LandingPage7() {
  return (
    <div className="min-h-screen bg-stone-950 text-white overflow-hidden">
      {/* Gradient accents */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/20 via-red-500/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">ekolivero</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-stone-400 hover:text-orange-400 transition-colors">Servizi</a>
            <a href="#pricing" className="text-sm text-stone-400 hover:text-orange-400 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-stone-400 hover:text-orange-400 transition-colors">About</a>
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 rounded-full text-sm font-bold hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25">
              Let's Go
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm text-orange-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Disponibile per nuovi progetti
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
            <span className="text-white">TECH</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">PARTNER</span>
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            AI, sviluppo software, consulenza. In abbonamento. Senza vincoli, senza sorprese.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-orange-500 to-amber-500 px-10 py-5 rounded-full text-lg font-bold hover:from-orange-600 hover:to-amber-600 transition-all shadow-xl shadow-orange-500/30">
              Scopri i Piani
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-10 py-5 rounded-full text-lg font-medium border border-stone-700 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all">
              Prenota Call
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Trust */}
      <section className="relative z-10 py-8 border-y border-orange-500/10 overflow-hidden">
        <div className="flex items-center gap-12 text-stone-500 font-bold text-xl whitespace-nowrap animate-marquee">
          <span>JOBTOME</span>
          <span className="text-orange-500">•</span>
          <span>FINCONS</span>
          <span className="text-orange-500">•</span>
          <span>HYPE</span>
          <span className="text-orange-500">•</span>
          <span>A.S. WATSON</span>
          <span className="text-orange-500">•</span>
          <span>JOBTOME</span>
          <span className="text-orange-500">•</span>
          <span>FINCONS</span>
          <span className="text-orange-500">•</span>
          <span>HYPE</span>
          <span className="text-orange-500">•</span>
          <span>A.S. WATSON</span>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-2 block">Servizi</span>
              <h2 className="text-5xl font-black">Cosa posso fare</h2>
            </div>
            <p className="text-stone-500 max-w-md">Competenze enterprise per far crescere il tuo business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "AI & Automazione",
                desc: "L'AI non è magia. È uno strumento. Ti aiuto a usarla dove serve davvero.",
                items: ["Consulenza strategica", "Chatbot & assistenti", "Process automation"]
              },
              {
                num: "02",
                title: "Sviluppo Software",
                desc: "Dall'idea al prodotto. MVP, web app, integrazioni. Qualità enterprise.",
                items: ["MVP & prototipi", "Web application", "API & integrazioni"]
              },
              {
                num: "03",
                title: "Digital Partner",
                desc: "Non un fornitore. Un partner che capisce il business e aiuta a crescere.",
                items: ["Tech strategy", "Team training", "Decision support"]
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-stone-900/50 border border-stone-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all">
                <span className="text-7xl font-black text-stone-800 group-hover:text-orange-500/20 transition-colors">{service.num}</span>
                <h3 className="text-2xl font-bold mt-4 mb-3">{service.title}</h3>
                <p className="text-stone-500 mb-6">{service.desc}</p>
                <ul className="space-y-2 text-sm">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-stone-400">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
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
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-2 block">Pricing</span>
            <h2 className="text-5xl font-black mb-4">Piani Chiari</h2>
            <p className="text-stone-500">Zero vincoli. Disdici quando vuoi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-stone-900/50 border border-stone-800 rounded-3xl p-8">
              <span className="text-orange-400 font-bold text-sm">STARTER</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Consulenza</h3>
              <p className="text-stone-500 text-sm mb-6">Il tuo advisor tech sempre disponibile.</p>
              <div className="mb-8">
                <span className="text-5xl font-black">2.5k</span>
                <span className="text-stone-500">€/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-400">
                {["Call illimitate", "Slack/email support", "Consulenza strategica", "Code review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-bold border border-stone-700 hover:border-orange-500 hover:bg-orange-500/5 transition-all">
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="relative bg-gradient-to-b from-orange-500/20 to-stone-900/50 border border-orange-500/30 rounded-3xl p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1.5 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <span className="text-amber-400 font-bold text-sm">PRO</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Full Package</h3>
              <p className="text-stone-400 text-sm mb-6">Consulenza + sviluppo. Il meglio.</p>
              <div className="mb-8">
                <span className="text-5xl font-black">6k</span>
                <span className="text-stone-400">€/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-300">
                {["Tutto di Starter", "Sviluppo software", "MVP & prototipi", "AI implementation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-stone-900/50 border border-stone-800 rounded-3xl p-8">
              <span className="text-orange-400 font-bold text-sm">ENTERPRISE</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Custom</h3>
              <p className="text-stone-500 text-sm mb-6">Per progetti complessi.</p>
              <div className="mb-8">
                <span className="text-5xl font-black">???</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-400">
                {["Tutto di Pro", "Large scale projects", "Dedicated SLA", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-bold border border-stone-700 hover:border-orange-500 hover:bg-orange-500/5 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-stone-900 border border-stone-800 rounded-3xl aspect-square flex items-center justify-center">
                <span className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-400">E</span>
              </div>
            </div>
            <div>
              <span className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4 block">About</span>
              <h2 className="text-5xl font-black mb-6">Erik</h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-6">
                Full-stack developer. 6+ anni in enterprise. Ho costruito prodotti che scalano.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                Non eseguo e basta. <span className="text-white font-semibold">Capisco il problema, trovo la soluzione, la costruisco.</span>
              </p>
              <p className="text-stone-500 leading-relaxed">
                <span className="text-orange-400 font-semibold">Mission:</span> portare qualità enterprise alle PMI. Senza vincoli assurdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent_60%)]"></div>
            <div className="relative">
              <h2 className="text-5xl font-black mb-6">Ready?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Prenota una call gratuita. Vediamo se possiamo fare grandi cose insieme.
              </p>
              <button className="bg-stone-950 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-900 transition-colors shadow-xl">
                Prenota una Call →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">ekolivero</span>
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-stone-600">© 2025</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
