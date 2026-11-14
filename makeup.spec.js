// 1. Підключаємо необхідні інструменти (test та expect) із бібліотеки Playwright
const { test, expect } = require('@playwright/test');

// 2. Описуємо тестовий сценарій із зрозумілою назвою
test('Перевірка головної сторінки інтернет-магазину MAKEUP', async ({ page }) => {
  
  // 3. Відкриваємо вебсайт за вказаною адресою
  await page.goto('https://makeup.com.ua/ua/');

  // 4. Перевірка №1: переконуємося, що відкрилася саме українська версія сайту
  await expect(page).toHaveURL(/makeup\.com\.ua\/ua/);

  // 5. Перевірка №2: перевіряємо, що заголовок вкладки браузера (title) містить слово "MAKEUP"
  await expect(page).toHaveTitle(/MAKEUP/i);

  // 6. Перевірка №3: знаходимо в меню посилання "Парфумерія" та перевіряємо, що воно видиме на екрані
  const categoryLink = page.getByRole('link', { name: 'Парфумерія' }).first();
  await expect(categoryLink).toBeVisible();
});
