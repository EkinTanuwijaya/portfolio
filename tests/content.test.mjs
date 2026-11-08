import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const source = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8');
test('section links have matching targets', () => {
  for (const [, target] of source.matchAll(/(?:href=|href: )['"]\/?#([a-z]+)['"]/g)) {
    assert.ok(source.includes(`id="${target}"`), `Missing section: ${target}`);
  }
});
test('resume is a valid PDF', () => {
  const resume = new URL('../public/CV_Ekin_Tanuwijaya_2026.pdf', import.meta.url);
  assert.ok(existsSync(resume));
  assert.equal(readFileSync(resume).subarray(0, 4).toString(), '%PDF');
});

test('internal page and asset links have static destinations', () => {
  for (const file of ['main', 'Projects', 'FinancialTracker', 'Contact']) {
    const content = readFileSync(new URL(`../src/${file}.tsx`, import.meta.url), 'utf8');
    for (const [, href] of content.matchAll(/(?:href=|href: )['"](\/[^'"#]*)['"]/g)) {
      const destination = href.endsWith('/') ? `${href}index.html` : `/public${href}`;
      assert.ok(existsSync(new URL(`..${destination}`, import.meta.url)), `Missing destination: ${href}`);
    }
  }
});
