import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-12">
          Contact
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have questions or want to connect? Reach out via email or use the feedback form below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Contact Method 1: Email */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v7a1 1 0 0 0 1 1h-7.9l.3 8.7h7.8v7H4v-7A1 1 0 0 0 4 4zM4 12h16v7H4v-7zM4 20h2.1l12-4h-7l.3-8.7H4v-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              info@learndev.example.com
            </p>
          </div>

          {/* Contact Method 2: GitHub */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 7.96 8 12.025 5.29 0 7.53-4.338 7.53-7.715 0-5.29-3.178-7.3-6.878-7.3-2.025-.25-3.054 1.178-3.988 2.286l-5.388 6.285 6.285 5.388 2.286-3.988A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12 0-5.302-3.438-7.96-8-12.025-5.31-3.257-6.033-7.748-6.033-7.922 0-1.1.078-2.2.086-3.325l.485-1.55 1.55.485 2.286 3.988A11.996 11.996 0 0 0 12 0zM7.087 9.133l.842 2.186 1.162-.838.843 2.186A5.988 5.988 0 0 1 4 12c0 .893.08 1.8.08 2.695l-.887 2.18 2.18.887a5.988 5.988 0 0 1-1.157 2.074l-2.186.887a5.988 5.988 0 0 1-2.074-1.157l-.887-2.18A5.988 5.988 0 0 1 7.087 9.133zM12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              github.com/learndev
            </p>
          </div>

          {/* Contact Method 3: Feedback Form - VALIDATION Focus */}
          <div className="rounded-2xl bg-card p-6 hover:bg-card/90 transition-colors dark:hover:bg-card/80">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8v5v-5h-5zm8-11v8h5v-5h-5zm-9 8c 0 4.966 3.586 7 5.833 6.148a5.99 5.99 0 0 1 1.334 1.25c.45 1.037.767 2.228.95 3.518a6.007 6.007 0 0 1 1.25 1.334c1.037.45 2.228.767 3.518.95A5.99 5.99 0 0 1 4 16c0-4.966 3.586-7 5.833-6.148A5.99 5.99 0 0 1 4 8c0-4.153 1.339-6.332 3.438-6.917a3.008 3.008 0 0 1 1.879-.518zM5.833 13.148A5.99 5.99 0 0 1 4 12c0-4.153 1.339-6.332 3.438-6.917a3.008 3.008 0 0 1 1.879-.518z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feedback Form</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We'd love to hear your thoughts on your ClaudeCode learning journey.
              All feedback is read and helps us improve the tutorials.
            </p>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow-sm rounded-md border border-gray-300 dark:bg-gray-600 dark:text-white w-full px-3 py-2 focus:ring-primary focus:border-primary dark:border-gray-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow-sm rounded-md border border-gray-300 dark:bg-gray-600 dark:text-white w-full px-3 py-2 focus:ring-primary focus:border-primary dark:border-gray-500"
                  placeholder="your@email.example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Feedback Topic
                </label>
                <select className="shadow-sm rounded-md border border-gray-300 dark:bg-gray-600 dark:text-white w-full px-3 py-2 focus:ring-primary focus:border-primary dark:border-gray-500">
                  <option value="">Select a topic</option>
                  <option>Tutorial Quality</option>
                  <option>Content Suggestions</option>
                  <option>Bug Report</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Feedback
                </label>
                <textarea
                  className="shadow-sm rounded-md border border-gray-300 dark:bg-gray-600 dark:text-white w-full px-3 py-2 focus:ring-primary focus:border-primary dark:border-gray-500 h-24 resize-min"
                  rows={3}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <button type="submit" className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 text-center transition-colors w-full">
                Submit Feedback →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <a href="/tutorials" className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 text-center transition-colors">
            Back to Tutorial →
          </a>
        </div>
      </div>
    </section>
  );
}