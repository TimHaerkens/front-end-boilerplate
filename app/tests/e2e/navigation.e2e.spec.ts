import { setup, url } from '@nuxt/test-utils/e2e'
import { expect } from '@playwright/test'
import { chromium } from 'playwright'
import { describe, it } from 'vitest'

describe('e2E test for navigating from index to character page', async () => {
  await setup({
    browser: true,
    host: 'http://localhost:3000',
  })

  it('should navigate from the index page to a character page', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(url('/'))

    await expect(page.locator('.home-title')).toContainText('Welcome')

    await page.click('text=Rick & Morty')

    await expect(page).toHaveURL(/\/universes\/rickmorty$/)

    await expect(page.locator('h1')).toContainText('Rick & Morty')

    await page.click('text=Rick Sanchez')

    await expect(page).toHaveURL(/\/universes\/rickmorty\/1$/)

    await expect(page.locator('h1')).toContainText('Rick Sanchez')
    await expect(page.locator('img')).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg')

    await browser.close()
  })
})
