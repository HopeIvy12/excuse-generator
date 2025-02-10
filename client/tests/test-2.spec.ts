// import { test, expect } from "@playwright/test";

// test("Avoiding People should get from the server", async ({ page }) => {
//   const formattedCategory = encodeURIComponent("Not Doing Homework");
//   await page.goto("http://localhost:5173/");
//   await page.getByRole("button", { name: "Avoiding People" }).click();
//   await page.getByRole("button", { name: "🎲 Generate Excuse" }).click();
//   await page.waitForResponse(
//     `http://localhost:8080/excuses/random/Avoiding%20People`
//   );
//   await expect(page.getByTestId("excuse-box")).toContainText(
//     /^(?!.*Failed to load excuse\. Try again!)/
//   );
// });
