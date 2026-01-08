const { Builder, By } = require("selenium-webdriver");

let driver;

const ourFunction = async () => {
  driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://monkeytype.com/");

  let cookiesNotification = await driver.findElement(By.id("popups"));
  await cookiesNotification
    .findElement(By.className("main"))
    .findElement(By.className("buttons"))
    .findElement(By.className("rejectAll"))
    .click();

  let inputField = await driver.findElement(By.id("wordsInput"));

  let startTime = performance.now();

  while (performance.now() - startTime <= 30000) {
    let word = Promise.resolve(
      await driver
        .findElement(By.id("words"))
        .findElement(By.className("active"))
        .getText()
    );
    word.then((value) => {
      let go = Promise.resolve(inputField.sendKeys(value + " "));
    });
  }
};

ourFunction();
