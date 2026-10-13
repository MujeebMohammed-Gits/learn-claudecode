import Image from "next/image";

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Feature 1: Interactive Tutorials - TUTORIAL Focus */}
          <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.94 14.34l1.83-1.83a5.5 5.5 0 0 1 7.78 0l1.83 1.83a4.5 4.5 0 0 1-6.36 6.36l-1.41-1.41a2.12 2.12 0 0 1 0-3l1.72-1.72a5.5 5.5 0 0 1 7.78 0l1.83 1.83c.78.41 1.53.41 2.28 0l1.98-1.98a4.5 4.5 0 0 1-6.36-6.36l-1.41 1.41a2.12 2.12 0 0 1 0 3l1.72 1.72z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Tutorials</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hands-on learning with interactive exercises and real-time feedback. Step-by-step
              ClaudeCode tutorials with live code execution, error debugging, and immediate
              feedback on your progress.
            </p>
          </div>

          {/* Feature 2: Project Building - TUTORIAL Focus */}
          <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Building</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Build real-world projects from scratch with guided instructions. Complete tutorial
              series covering Next.js app router, Tailwind CSS styling, Supabase database
              integration, and Vercel deployment - all with full source code.
            </p>
          </div>

          {/* Feature 3: Vercel Deployment - TUTORIAL Focus */}
          <div className="rounded-2xl bg-card p-8 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8.1-2 10.7-7.6L21.7 12 8 3.7 2 12l4.9 8.2zm13.7-3.2L22 7l-5 4.87L12 17.77 7.74 13 2 7l5-4.87L12.7 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Vercel Deployment</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              One-click deployment to Vercel free tier. Custom subdomains, HTTPS automatic,
              and global CDN. Tutorial: Publish your ClaudeCode project live in under 2 minutes
              with no configuration required.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/deployment" className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 text-center transition-colors">
            Go to Deployment →
          </a>
        </div>
      </div>
    </section>
  );
}