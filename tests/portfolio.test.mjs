import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { navigation, portfolio } from "../src/app/data/portfolio.data.ts";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const template = read("src/app/app.component.html");

test("every navigation entry targets a real and unique section", () => {
  assert.equal(
    new Set(navigation.map((item) => item.id)).size,
    navigation.length,
  );
  for (const { id } of navigation)
    assert.ok(template.includes(`id="${id}"`), id);
});

test("profile links use HTTPS and LeetCode is a profile URL", () => {
  for (const value of Object.values(portfolio.social))
    assert.equal(new URL(value).protocol, "https:");
  assert.match(
    portfolio.social.leetcode,
    /^https:\/\/leetcode\.com\/u\/[^/]+\/$/,
  );
  assert.equal(portfolio.email, "janardhanb8639@gmail.com");
});

test("resume actions share one real PDF asset", () => {
  const pdf = readFileSync(join(root, "public", portfolio.resume.fileUrl));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(template.includes('[attr.download]="profile.resume.downloadName"'));
  assert.ok(template.includes("View PDF"));
});

test("required portfolio content is present without invented coding statistics", () => {
  assert.equal(portfolio.experience.length, 2);
  assert.equal(portfolio.projects.length, 3);
  assert.ok(portfolio.skills.some((skill) => skill.items.includes("Angular")));
  assert.ok(
    portfolio.skills.some((skill) => skill.items.includes("Tailwind CSS")),
  );
  assert.equal("solvedCount" in portfolio.coding, false);
});

test("source is Angular and has no React runtime", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.ok(pkg.dependencies["@angular/core"]);
  assert.ok(!pkg.dependencies.react);
  assert.match(read("src/main.ts"), /bootstrapApplication/);
  assert.match(
    read("src/app/shared/profile-photo.component.ts"),
    /URL\.revokeObjectURL/,
  );
});

test("production assets contain Angular entrypoint, Tailwind utilities and the same PDF", () => {
  assert.ok(
    existsSync(join(root, "dist/index.html")),
    "Run npm run build before npm test",
  );
  assert.match(read("dist/index.html"), /<app-root>/);
  const files = readdirSync(join(root, "dist"));
  const stylesheet = files.find((file) => /^styles-.*\.css$/.test(file));
  assert.ok(stylesheet);
  const css = read(`dist/${stylesheet}`);
  assert.match(css, /grid-template-columns:1fr auto/);
  assert.match(css, /prefers-reduced-motion/);
  assert.deepEqual(
    readFileSync(join(root, "public", portfolio.resume.fileUrl)),
    readFileSync(join(root, "dist", portfolio.resume.fileUrl)),
  );
});
