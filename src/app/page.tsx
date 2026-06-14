"use client";

import React from 'react';
import Image from 'next/image';

const PROJECTS = [
  {
    title: "Nova",
    description: "A turn-based Discord RPG bot. Focused on grinding, a 100-floor dungeon, class system, and scalable economy.",
    image: "/images/nova.jpg",
    tags: ["Node.js", "Discord.js", "MongoDB"],
    source: "https://github.com/SharifPoetra/nova",
    link: "https://sharifpoetra.github.io/nova"
  },
  {
    title: "Laffey (Archived)",
    description: "Anime-themed features, economy games, and automated moderation tools built specifically for community engagement.",
    image: "/images/laffey.png",
    tags: ["Node.js", "Discord.js", "Canvas API"],
    source: "https://github.com/SharifPoetra",
    link: null
  },
  {
    title: "Thunder (Archived)",
    description: "A multipurpose Discord bot to make your server more lively. Features modular commands and advanced music playbacks.",
    image: "/images/thunder.png",
    tags: ["Java", "JDA"],
    source: "https://github.com/SharifPoetra/thunder-java",
    link: null
  }
];

const TECH_STACK = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Java", "HTML/CSS"] },
  { category: "Frameworks/Libraries", items: ["Next.js", "React", "Tailwind CSS", "Discord.js", "JDA"] },
  { category: "Databases & Tools", items: ["MongoDB", "PostgresSQL", "Git", "Node.js", "NPM", "Docker"] }
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-zinc-50 font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto pt-28 pb-16 px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-5 max-w-xl flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 font-mono tracking-wider">
                ⚡ AVAILABLE FOR FREELANCE
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                SYSTEM_OPERATIONAL
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              mohd.syarif
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              Hobby developer. Mainly developing tools in <span className="text-blue-400 font-medium font-mono">JavaScript</span> and <span className="text-amber-500 font-medium font-mono">Java</span>. I like making things that live on the internet.
            </p>
            
            <div className="flex justify-center md:justify-start gap-5 pt-2 font-mono text-sm">
              <a href="https://github.com/SharifPoetra" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors relative group py-1">
                [ github ]
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
              </a>
              <a href="https://instagram.com/sharifpoetra" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors relative group py-1">
                [ instagram ]
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
              </a>
              <a href="https://discord.gg/ZEFrfj5" className="text-zinc-400 hover:text-white transition-colors relative group py-1">
                [ discord ]
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
              </a>
            </div>
          </div>

          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur-xl opacity-20" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-zinc-900 border border-zinc-800 overflow-hidden">
              <Image 
                src="/images/nova.jpg"
                alt="mohd.syarif"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6 flex items-center gap-3 font-mono">
            / TECH_STACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TECH_STACK.map((stack, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm">
                <h3 className="text-xs font-mono text-zinc-400 mb-2.5 uppercase tracking-wider">// {stack.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="px-2 py-0.5 text-xs rounded bg-zinc-900/60 border border-zinc-800 text-zinc-300 font-sans">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8 flex items-center gap-3 font-mono">
            / FEATURED_PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl border border-blue-500/20 bg-zinc-900/40 backdrop-blur-md p-5 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/[0.02] to-transparent rounded-2xl" />

                <div className="space-y-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <span className="text-xs font-mono font-normal text-blue-500/40">
                        0{index + 1}
                      </span>
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-1">
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors gap-1"
                      >
                        VIEW_PAGE →
                      </a>
                    )}
                    
                    <a 
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors gap-1"
                    >
                      VIEW_SOURCE →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center text-xs font-mono text-zinc-600">
          &copy; {new Date().getFullYear()} SHARIFPOETRA. MADE WITH NEXT.JS
        </footer>
      </div>
    </main>
  );
}
