import { test, expect } from '@playwright/test';

test('Elementlerin türünü ve özelliklerini test et ve log kaydı oluştur', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Sayfadaki tüm elementleri seç
  const elements = await page.$$('div, button, a, input, label, span, p, h1, h2, h3, h4, h5, h6');
  const logEntries: string[] = [];

  for (const [index, element] of elements.entries()) {
    const tagName = await element.evaluate(el => el.tagName.toLowerCase());
    let logMessage = `Element ${index + 1} - Tag: ${tagName}`;

    // Buton ise tıklanabilir olduğunu belirt
    if (tagName === 'button') {
      const isClickable = await element.isVisible();
      logMessage += `, Tür: Buton, Tıklanabilir: ${isClickable ? 'Evet' : 'Hayır'}`;
    }

    // Anchor (link) ise href özelliğini kontrol et
    if (tagName === 'a') {
      const href = await element.getAttribute('href');
      logMessage += `, Tür: Link, Hedef: ${href || 'Tanımlı değil'}`;
    }

    // Input ise türünü kontrol et
    if (tagName === 'input') {
      const inputType = await element.getAttribute('type');
      logMessage += `, Tür: Input, Tip: ${inputType || 'Tanımlı değil'}`;
    }

    // Label ise hangi öğeye bağlı olduğunu belirt
    if (tagName === 'label') {
      const forAttribute = await element.getAttribute('for');
      logMessage += `, Tür: Label, Bağlı Olduğu Eleman ID: ${forAttribute || 'Tanımlı değil'}`;
    }

    // Diğer elementler için temel görünürlük durumu
    const isVisible = await element.isVisible();
    logMessage += `, Görünürlük: ${isVisible ? 'Görünür' : 'Görünmez'}`;

    logEntries.push(logMessage);
    console.log(logMessage);

    expect(isVisible).toBe(true);  // Her bir elementin görünür olması bekleniyor
  }
});
