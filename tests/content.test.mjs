import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const source = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8');
test('section links have matching targets', () => {
  for (const [, target] of source.matchAll(/href="#([a-z]+)"/g)) {
    assert.ok(source.includes(`id="${target}"`), `Missing section: ${target}`);
  }
});
test('resume is a valid PDF and illustrative work is disclosed', () => {
  const resume = new URL('../public/CV_Ekin_Tanuwijaya_2026.pdf', import.meta.url);
  assert.ok(existsSync(resume));
  assert.equal(readFileSync(resume).subarray(0, 4).toString(), '%PDF');
  assert.ok(source.includes('not screenshots of Samsung products'));
  assert.ok(source.includes('Numbers shown are sample data'));
});
