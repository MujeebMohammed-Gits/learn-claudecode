import { defineConfig } from 'vitest/config'

export default defineConfig({
  mode: 'cjs',
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
})