import { test, expect } from "@playwright/test";

test.describe("Language Toggle", () => {
  test("Should be able to change language", async ({ page }) => {
    await page.goto("https://leonardo-primieri-portfolio.vercel.app/");
    await page.getByTestId("us-toggle-language").click();
    await expect(
      page.getByRole("heading", { name: "Olá, eu sou Leonardo 👋" })
    ).toBeVisible();
    await expect(
      page.getByText(
        "Bacharel em Ciência da Computação e Desenvolvedor Frontend Sênior."
      )
    ).toBeVisible();

    await page.getByTestId("br-toggle-language").click();

    await expect(
      page.getByRole("heading", { name: "Hi, I'm Leonardo 👋" })
    ).toBeVisible();
    await expect(
      page.getByText("Computer Science Bachelor and Senior Frontend Developer.")
    ).toBeVisible();
  });
});
