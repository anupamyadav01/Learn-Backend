// const axios = require("axios");
// const fs = require("fs");

// const baseURL = "https://www.amazon.in/s?k=mobile+under+20000";

// const writeFileFunc = (filePath, data) => {
//   fs.writeFile(filePath, data, (error) => {
//     if (error) {
//       console.log("Error while writing file", error);
//       return;
//     }
//     console.log("Data sucessfully written");
//   });
// };
// const fetchData = async () => {
//   try {
//     const { data } = await axios.get(baseURL);
//     writeFileFunc("amazonData.txt", data);
//     console.log(data);
//   } catch (error) {
//     console.log("Error while fetching data", error);
//   }
// };

// fetchData();

import puppeteer from "puppeteer";
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto("https://developer.chrome.com/");

// Set screen size.
await page.setViewport({ width: 1080, height: 1024 });

// Type into search box.
// await page.locator(".devsite-search-field").fill("automate beyond recorder");

// Wait and click on first result.
// await page.locator(".devsite-result-item-link").click();

// Locate the full title with a unique string.
// const textSelector = await page
//   .locator("text/Customize and automate")
//   .waitHandle();
// const fullTitle = await textSelector?.evaluate((el) => el.textContent);

// // Print the full title.
// console.log('The title of this blog post is "%s".', fullTitle);

// await browser.close();
