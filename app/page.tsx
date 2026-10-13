import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="border-b border-border/20">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Learn ClaudeCode</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/about" className="text-sm font-medium hover:underline">About</a>
            <a href="/features" className="text-sm font-medium hover:underline">Features</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Build Interactive Websites from Scratch
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              A step-by-step journey from Next.js beginner to Claude Code master. Learn by building, not just reading.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* Card 1: Learn Claude Code - TUTORIAL Focus */}
              <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.21L2 9.24l6.9-1.02L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Master ClaudeCode Fundamentals</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Step-by-step tutorials covering slash commands, agents, plugins, and MCP servers. Hands-on learning with real-world projects you'll actually use.
                </p>
                <a href="/tutorials" className="mt-3 inline-block rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 text-sm font-medium transition-colors">
                  Start Your FREE Tutorial →
                </a>
              </div>

              {/* Card 2: Build Projects - TUTORIAL Focus */}
              <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Real Projects</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  From scratch to production: Next.js, Tailwind CSS, Supabase, and Vercel deployment. Complete project tutorials with source code.
                </p>
                <a href="/projects" className="mt-3 inline-block rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 py-2 px-4 text-sm font-medium transition-colors">
                  View Project Tutorials →
                </a>
              </div>

              {/* Card 3: Deploy Live - TUTORIAL Focus */}
              <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8.1-2 10.7-7.6L21.7 12 8 3.7 2 12l4.9 8.2zm13.7-3.2L22 7l-5 4.87L12 17.77 7.74 13 2 7l5-4.87L12.7 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deploy Your Learning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  One-click deployment to Vercel with custom domains, HTTPS automatic, and global CDN. Publish your ClaudeCode projects live.
                </p>
                <a href="/deployment" className="mt-3 inline-block rounded-md bg-accent text-accent-foreground hover:bg-accent/90 py-2 px-4 text-sm font-medium transition-colors">
                  Start Deploying →
                </a>
              </div>
            </div>

            <div className="mt-12">
              <a href="/about" className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 text-center transition-colors">
                Start Your ClaudeCode Journey →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}