import Image from "next/image";

export default function SupabaseIntegration() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Supabase Integration
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Auth, database, storage, and real-time subscriptions. Build full-stack
            applications with auto-generated APIs and edge functions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Authentication */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.94 14.34l1.83-1.83a5.5 5.5 0 0 1 7.78 0l1.83 1.83a4.5 4.5 0 0 1-6.36 6.36l-1.41-1.41a2.12 2.12 0 0 1 0-3l1.72-1.72a5.5 5.5 0 0 1 7.78 0l1.83 1.83c.78.41 1.53.41 2.28 0l1.98-1.98a4.5 4.5 0 0 1-6.36-6.36l-1.41 1.41a2.12 2.12 0 0 1 0 3l1.72 1.72z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authentication</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Set up email/password authentication with Supabase. Learn row-level security,
              JWT management, and protected routes for your full-stack applications.
            </p>
          </div>

          {/* Database & Storage */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Database & Storage</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Design your database schema with Supabase Postgres. Set up storage buckets,
              file uploads, and public/private file management for user-generated content.
            </p>
          </div>

          {/* Real-Time & Edge Functions */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8.1-2 10.7-7.6L21.7 12 8 3.7 2 12l4.9 8.2zm13.7-3.2L22 7l-5 4.87L12 17.77 7.74 13 2 7l5-4.87L12.7 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time & Edge Functions</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to real-time database changes and deploy edge functions. Learn
              how to build scalable APIs that react to data changes instantly.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/tutorials" className="w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 text-center transition-colors">
            Back to Tutorials Overview →
          </a>
        </div>
      </div>
    </section>
  );
}