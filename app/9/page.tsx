// Style 9: Cyberpunk - Cyan/magenta, grid lines, glitch aesthetic, futuristic

export default function LandingPage9() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent"></div>
      </div>

      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="fixed bottom-20 left-20 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-mono font-bold text-cyan-400">&lt;/&gt;</span>
            <span className="text-xl font-mono text-white">ekolivero</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">[servizi]</a>
            <a href="#pricing" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">[pricing]</a>
            <a href="#about" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">[about]</a>
            <button className="relative group">
              <div className="absolute inset-0 bg-cyan-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-cyan-500 px-5 py-2 font-mono text-sm text-slate-950 font-bold">
                CONNECT
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 font-mono text-sm text-cyan-400 mb-8">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
              STATUS: AVAILABLE
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">TECH</span>
              <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200">PARTNER</span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 blur-sm opacity-50">PARTNER</span>
              </span>
            </h1>
            <p className="text-lg text-slate-400 font-mono max-w-xl mx-auto mb-12">
              {`// AI • SOFTWARE • CONSULTING`}
              <br />
              {`// SUBSCRIPTION-BASED • NO STRINGS`}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-10 py-4 font-mono font-bold text-slate-950">
                  VIEW_PLANS
                </div>
              </button>
              <button className="border border-slate-700 px-10 py-4 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                INIT_CALL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data bar */}
      <section className="relative z-10 py-6 border-y border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-slate-500">EXP:</span>
              <span className="text-cyan-400">6+ YRS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fuchsia-400">&gt;</span>
              <span className="text-slate-500">ENTERPRISE:</span>
              <span className="text-fuchsia-400">4</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-slate-500">LOCK_IN:</span>
              <span className="text-cyan-400">NULL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fuchsia-400">&gt;</span>
              <span className="text-slate-500">REQUESTS:</span>
              <span className="text-fuchsia-400">UNLIMITED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-cyan-400 mb-2">{`// SERVICES`}</p>
            <h2 className="text-4xl font-black">CAPABILITIES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "AI_MODULE",
                subtitle: "& AUTOMATION",
                desc: "AI isn't magic—it's a tool. I help you use it where it matters.",
                items: ["Strategic consulting", "Chatbots & assistants", "Process automation"],
                color: "cyan"
              },
              {
                id: "02",
                title: "DEV_MODULE",
                subtitle: "SOFTWARE",
                desc: "From idea to production. Not just code—solutions.",
                items: ["MVP & prototypes", "Web applications", "API & integrations"],
                color: "fuchsia"
              },
              {
                id: "03",
                title: "PARTNER_MODULE",
                subtitle: "STRATEGIC",
                desc: "Not a vendor. A partner who understands business.",
                items: ["Tech strategy", "Team training", "Decision support"],
                color: "cyan"
              }
            ].map((service, i) => (
              <div key={i} className={`border border-${service.color}-500/20 bg-${service.color}-500/5 p-8 hover:border-${service.color}-500/50 transition-all`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-${service.color}-400 text-sm`}>[{service.id}]</span>
                  <div className={`w-2 h-2 bg-${service.color}-400 animate-pulse`}></div>
                </div>
                <h3 className="font-mono text-xl font-bold mb-1">{service.title}</h3>
                <p className={`font-mono text-${service.color}-400 text-sm mb-4`}>{service.subtitle}</p>
                <p className="text-slate-400 text-sm mb-6">{service.desc}</p>
                <ul className="space-y-2 font-mono text-sm">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-500">
                      <span className={`text-${service.color}-400`}>&gt;</span>
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
            <p className="font-mono text-fuchsia-400 mb-2">{`// PRICING`}</p>
            <h2 className="text-4xl font-black mb-4">SELECT_PLAN</h2>
            <p className="text-slate-500 font-mono">NO_LOCK_IN // CANCEL_ANYTIME</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="border border-cyan-500/20 bg-cyan-500/5 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-cyan-400 text-xs">[STARTER]</span>
                <div className="w-2 h-2 bg-cyan-400"></div>
              </div>
              <h3 className="font-mono text-2xl font-bold mb-1">CONSULT</h3>
              <p className="text-slate-500 text-sm mb-6">Your tech advisor on call.</p>
              <div className="mb-8 font-mono">
                <span className="text-4xl font-bold text-cyan-400">2.5K</span>
                <span className="text-slate-500">€/mo</span>
              </div>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                {["Unlimited calls", "Slack/email support", "Strategic consulting", "Code review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400">
                    <span className="text-cyan-400">[✓]</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-cyan-500/50 py-4 font-mono font-bold text-cyan-400 hover:bg-cyan-500/10 transition-all">
                INIT
              </button>
            </div>

            {/* Pro */}
            <div className="relative border border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-500/10 to-cyan-500/10 p-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-1 font-mono text-xs font-bold text-slate-950">
                RECOMMENDED
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-fuchsia-400 text-xs">[PRO]</span>
                <div className="w-2 h-2 bg-fuchsia-400 animate-pulse"></div>
              </div>
              <h3 className="font-mono text-2xl font-bold mb-1">FULL_ACCESS</h3>
              <p className="text-slate-400 text-sm mb-6">Consulting + Development.</p>
              <div className="mb-8 font-mono">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">6K</span>
                <span className="text-slate-400">€/mo</span>
              </div>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                {["All Starter features", "Software development", "MVP & prototypes", "AI implementation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <span className="text-fuchsia-400">[✓]</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="relative group w-full py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-4 font-mono font-bold text-slate-950">
                  INIT
                </div>
              </button>
            </div>

            {/* Enterprise */}
            <div className="border border-cyan-500/20 bg-cyan-500/5 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-cyan-400 text-xs">[ENTERPRISE]</span>
                <div className="w-2 h-2 bg-cyan-400"></div>
              </div>
              <h3 className="font-mono text-2xl font-bold mb-1">CUSTOM</h3>
              <p className="text-slate-500 text-sm mb-6">For complex projects.</p>
              <div className="mb-8 font-mono">
                <span className="text-4xl font-bold text-cyan-400">???</span>
              </div>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                {["All Pro features", "Large scale projects", "Dedicated SLA", "Team integration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400">
                    <span className="text-cyan-400">[✓]</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-cyan-500/50 py-4 font-mono font-bold text-cyan-400 hover:bg-cyan-500/10 transition-all">
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl"></div>
              <div className="relative border border-cyan-500/20 bg-slate-900/50 aspect-square flex items-center justify-center">
                <div className="relative">
                  <span className="text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-fuchsia-400">E</span>
                  <span className="absolute inset-0 text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-cyan-400 blur-sm opacity-50">E</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-mono text-fuchsia-400 mb-4">{`// ABOUT`}</p>
              <h2 className="text-4xl font-black mb-6">ERIK</h2>
              <p className="text-slate-400 leading-relaxed mb-6 font-mono text-sm">
                {`> Full-stack developer`}<br/>
                {`> 6+ years enterprise exp`}<br/>
                {`> Built products that scaled`}
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                I don't just execute. <span className="text-white">I understand the problem, find the solution, build it.</span>
              </p>
              <p className="text-slate-500 leading-relaxed">
                <span className="text-cyan-400">MISSION:</span> Enterprise quality for SMBs. No lock-in bullshit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10 p-16 text-center">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-fuchsia-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-fuchsia-400"></div>

            <p className="font-mono text-cyan-400 mb-4">{`// READY?`}</p>
            <h2 className="text-4xl font-black mb-6">INITIALIZE_CONNECTION</h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">
              Free discovery call. Let's see if we can build something great together.
            </p>
            <button className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-12 py-5 font-mono font-bold text-slate-950">
                BOOK_CALL
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">&lt;/&gt;</span>
            <span>ekolivero</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">[privacy]</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">[terms]</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">[contact]</a>
          </div>
          <p className="text-slate-600">© 2025</p>
        </div>
      </footer>
    </div>
  );
}
