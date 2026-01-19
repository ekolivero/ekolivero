// Style 4: Brutalist - Bold typography, high contrast, raw aesthetic, unconventional

export default function LandingPage4() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-black selection:bg-black selection:text-[#f5f5f0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black uppercase tracking-tighter">EKOLIVERO</span>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm font-bold uppercase hover:line-through transition-all">Servizi</a>
            <a href="#pricing" className="text-sm font-bold uppercase hover:line-through transition-all">Prezzi</a>
            <a href="#about" className="text-sm font-bold uppercase hover:line-through transition-all">About</a>
            <button className="bg-black text-[#f5f5f0] px-6 py-3 font-black uppercase text-sm hover:bg-[#f5f5f0] hover:text-black border-2 border-black transition-all">
              Inizia
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <p className="text-sm font-mono uppercase tracking-widest mb-4">[Partner tecnologico in abbonamento]</p>
              <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-8">
                Tech
                <br />
                <span className="text-transparent" style={{WebkitTextStroke: '3px black'}}>Partner</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
              <p className="text-lg mb-8 font-medium">
                AI, sviluppo software, consulenza. Subscription senza vincoli. Disdici quando vuoi.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-[#f5f5f0] py-4 font-black uppercase text-sm border-2 border-black hover:bg-[#f5f5f0] hover:text-black transition-all">
                  Vedi Piani
                </button>
                <button className="flex-1 bg-[#f5f5f0] text-black py-4 font-black uppercase text-sm border-2 border-black hover:bg-black hover:text-[#f5f5f0] transition-all">
                  Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="py-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x-4 divide-black">
            <div className="pr-6 py-4">
              <p className="text-5xl font-black">6+</p>
              <p className="text-sm font-mono uppercase">Anni exp.</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-5xl font-black">4</p>
              <p className="text-sm font-mono uppercase">Enterprise</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-5xl font-black">0</p>
              <p className="text-sm font-mono uppercase">Vincoli</p>
            </div>
            <div className="pl-6 py-4">
              <p className="text-5xl font-black">∞</p>
              <p className="text-sm font-mono uppercase">Richieste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-16 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Servizi</h2>
            <span className="text-sm font-mono">[01]</span>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-4 border-black">
            {/* Service 1 */}
            <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
              <span className="text-8xl font-black text-black/10">01</span>
              <h3 className="text-2xl font-black uppercase mt-4 mb-4">AI & Auto</h3>
              <p className="text-sm mb-6 leading-relaxed">
                L'AI non è magia. È uno strumento. Ti aiuto a capire dove usarla senza buttare soldi.
              </p>
              <ul className="space-y-2 text-sm font-mono">
                <li>→ Consulenza strategica</li>
                <li>→ Chatbot / assistenti</li>
                <li>→ Automazione processi</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
              <span className="text-8xl font-black text-black/10">02</span>
              <h3 className="text-2xl font-black uppercase mt-4 mb-4">Sviluppo</h3>
              <p className="text-sm mb-6 leading-relaxed">
                Costruisco prodotti. Dall'idea alla produzione. Soluzioni, non solo codice.
              </p>
              <ul className="space-y-2 text-sm font-mono">
                <li>→ MVP / prototipi</li>
                <li>→ Web app custom</li>
                <li>→ Integrazioni API</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8">
              <span className="text-8xl font-black text-black/10">03</span>
              <h3 className="text-2xl font-black uppercase mt-4 mb-4">Partner</h3>
              <p className="text-sm mb-6 leading-relaxed">
                Non un fornitore. Un partner che capisce il business e aiuta nelle scelte tech.
              </p>
              <ul className="space-y-2 text-sm font-mono">
                <li>→ Visione strategica</li>
                <li>→ Formazione team</li>
                <li>→ Supporto decisionale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 border-b-4 border-black bg-black text-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Prezzi</h2>
            <span className="text-sm font-mono">[02]</span>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-4 border-[#f5f5f0]">
            {/* Starter */}
            <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-[#f5f5f0]">
              <p className="text-sm font-mono uppercase mb-4">[Starter]</p>
              <h3 className="text-4xl font-black mb-2">2.500€</h3>
              <p className="text-sm text-[#f5f5f0]/60 mb-8">/mese</p>
              <p className="font-bold mb-6">Consulenza</p>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Call illimitate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Slack/email support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Consulenza strategica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Code review
                </li>
              </ul>
              <button className="w-full bg-[#f5f5f0] text-black py-4 font-black uppercase text-sm border-2 border-[#f5f5f0] hover:bg-black hover:text-[#f5f5f0] transition-all">
                Inizia
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-[#f5f5f0] bg-[#f5f5f0] text-black">
              <p className="text-sm font-mono uppercase mb-4">[Pro] ← Best</p>
              <h3 className="text-4xl font-black mb-2">6.000€</h3>
              <p className="text-sm text-black/60 mb-8">/mese</p>
              <p className="font-bold mb-6">Consulenza + Dev</p>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-black"></span>
                  Tutto di Starter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-black"></span>
                  Sviluppo software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-black"></span>
                  MVP / prototipi
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-black"></span>
                  Implementazione AI
                </li>
              </ul>
              <button className="w-full bg-black text-[#f5f5f0] py-4 font-black uppercase text-sm border-2 border-black hover:bg-[#f5f5f0] hover:text-black transition-all">
                Inizia
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8">
              <p className="text-sm font-mono uppercase mb-4">[Enterprise]</p>
              <h3 className="text-4xl font-black mb-2">Custom</h3>
              <p className="text-sm text-[#f5f5f0]/60 mb-8">Parliamone</p>
              <p className="font-bold mb-6">Full Package</p>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Tutto di Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Progetti larga scala
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  SLA dedicato
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f5f5f0]"></span>
                  Team integration
                </li>
              </ul>
              <button className="w-full bg-[#f5f5f0] text-black py-4 font-black uppercase text-sm border-2 border-[#f5f5f0] hover:bg-black hover:text-[#f5f5f0] transition-all">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">About</h2>
            <span className="text-sm font-mono">[03]</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-black aspect-square flex items-center justify-center bg-black text-[#f5f5f0]">
              <span className="text-[20vw] md:text-[15vw] font-black">E</span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-black uppercase mb-6">Erik</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Full-stack developer. 6+ anni in enterprise. Ho costruito prodotti che hanno scalato.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                <span className="font-black">Non eseguo.</span> Capisco il problema, trovo la soluzione, la costruisco. Fine.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-black">Mission:</span> qualità enterprise per PMI. Senza vincoli assurdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black text-[#f5f5f0]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Ready?
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto text-[#f5f5f0]/60">
            Call gratuita. Parliamo del tuo progetto.
          </p>
          <button className="bg-[#f5f5f0] text-black px-12 py-6 font-black uppercase text-lg border-4 border-[#f5f5f0] hover:bg-black hover:text-[#f5f5f0] transition-all">
            Prenota Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#f5f5f0] border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black uppercase tracking-tighter">EKOLIVERO</span>
          <div className="flex items-center gap-6 text-sm font-mono">
            <a href="#" className="hover:line-through">Privacy</a>
            <a href="#" className="hover:line-through">Terms</a>
            <a href="#" className="hover:line-through">Contact</a>
          </div>
          <p className="text-sm font-mono">© 2025</p>
        </div>
      </footer>
    </div>
  );
}
