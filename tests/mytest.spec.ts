import {test, expect} from "@playwright/test"

// test("title", ()=>{





// });

test("verify page title", async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
let title :string=await page.title();
console.log("Title:" ,title);    
await expect(page).toHaveTitle("Demo Web Shop");

});