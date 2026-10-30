import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    plugins: [react()],
    // Use SWC transformer instead of oxc to avoid JSX parsing issues
    // with self-closing tags like <EnterpriseAgileCoach />
    transformer: {
      swc: {}
    }
  }
})