const { Builder, By } = require("selenium-webdriver");

let driver;

const ourFunction = async () => {
  driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://monkeytype.com/");

  let cookiesNotification = await driver.findElement(By.id("cookiePopup"));
  await cookiesNotification
    .findElement(By.className("main"))
    .findElement(By.className("buttons"))
    .findElement(By.className("rejectAll"))
    .click();

  let wordList = await driver.findElement(
    By.xpath("/html/body/div[9]/div[2]/main/div/div[3]/div[8]/div[3]")
  );
  console.log("🚀 ~ ourFunction ~ wordList:", await wordList.getText());

  //////////////////////////////////////////////////Have to make this work
  //   for (const property in await wordList) {
  //     console.log("🚀 ~ ourFunction ~ property", await wordList[property]);
  //   }

  //   let CompleteText;

  // for (let word of wordList) {
  //   let wordText = await word.getText();
  //   CompleteText += wordText + " ";
  // }
  // Actions.sendKeys(CompleteText).perform();
};

ourFunction();
