import test, { expect } from "@playwright/test";

test.describe("Contact E-mail", () => {
  test("The user should be able to send a contact e-mail", async ({ page }) => {
    await page.goto("https://leonardo-primieri-portfolio.vercel.app/en");
    await page.getByRole("textbox", { name: "Name", exact: true }).click();
    await page
      .getByRole("textbox", { name: "Name", exact: true })
      .fill("Test U");
    await page.getByRole("textbox", { name: "Last Name" }).fill("QA");
    await page
      .getByRole("textbox", { name: "Email Address Message" })
      .fill("qa@testing.com");
    await page.getByRole("textbox", { name: "Your message" }).click();
    await page
      .getByRole("textbox", { name: "Your message" })
      .fill("this is a message");
    await page.getByRole("button", { name: "Send" }).click();

    await expect(page.getByText("Message sent successfully.")).toBeVisible();
  });
});
