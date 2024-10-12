import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['app/tests/e2e/**'],
    exclude: ['app/tests/unit/**'],
    testTimeout: 30000,
  },
})
