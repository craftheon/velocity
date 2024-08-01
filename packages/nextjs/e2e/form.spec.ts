import { test, expect } from "@playwright/test";

test("should navigate to the form page", async ({ page }) => {
  await page.goto("/form");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Form Page",
  );
});