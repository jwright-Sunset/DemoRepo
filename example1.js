const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require("assert");

async function runTest() {
    // Set up your WebDriver instance
    const driver = new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the Google search page
        await driver.get('https://www.google.com');

        // Find the search input element and enter a search query
        const searchInput = await driver.findElement(By.name('q'));
        await searchInput.sendKeys('Hello World!', Key.RETURN);

        // Print the search results page title
        const pageTitle = await driver.getTitle();
        console.log('Page title:', pageTitle);

        let todoText = await driver.findElement(By.className("LC20lb MBeuO DKV0Md")).getText().then(function (value) {
            return value
        })

        assert.strictEqual(todoText, "\"Hello, World!\" program");

    } finally {
        // Clean up and quit the WebDriver
        await driver.quit();
    }
}

runTest();  // Execute the test function
