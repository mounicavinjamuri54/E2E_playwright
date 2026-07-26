import { test as base, expect } from "@playwright/test";
import { AlertPage } from '../pages/AlertsPage';
import { FramesPage } from '../pages/FramesPage';
import { FormsPage } from '../pages/FormsPage';


////Instead of creating a class just to define structure, TypeScript allows:
type MyFixtures = {  //declaring objects and storing in type fixtures
    alertpage: AlertPage // // Property name: alertPage, Type: AlertPage
    framespage: FramesPage
    formpage: FormsPage;
}; //Curly braces represent an object. 


export const test = base.extend<MyFixtures>({
    //Take Playwright's original test (called base) and create a new customized test by adding my own fixtures.
    alertpage: async ({ page }, use) => {     //Everything before await use() is setup.Everything after await use() runs after the test finishes.
        await use(new AlertPage(page));
    },

    framespage: async ({ page }, use) => { //{ page } -->means "Playwright, please give me the page." 
        await use(new FramesPage(page)); //use:--Return this object to the test.
    },

    formpage: async ({ page }, use) => {
        await use(new FormsPage(page));
    },

    ////////async ({ page }, use) ===>Hey Fixture...What object should I give the test?
    ///await use(new Alert  Page(page));====>Give this AlertPage object to the test.

});
export { expect } from "@playwright/test";



//in Test File

// test('Simple Alertfixture , @alertspomfixture', async ({ alertpage }) => {
//     //const alertspage = new AlertPage(page);//pom ---->NO NEED TO CALL EVERY TIME

//     await alertpage.navigateToAlerts(); //alertpage--->ownfixture created in basefIXTURE
//     await alertpage.simpleAlertClick();//alertpage--->ownfixture

// "Extend Playwright's test with the fixtures defined in MyFixtures."

// That's why MyFixtures is inside < >—it's supplying type information, not creating an object.
// type is a TypeScript keyword.

// It is used to define the structure (shape) of an object.

// Think of it as a blueprint.

// The fixture is the factory that creates Page Objects.

// The Page Objects do not know about the fixture.

//                  Playwright
//                       │
//                       ▼
//               baseFixture.ts
//                       │
//       ┌───────────────┼───────────────┐
//       ▼               ▼               ▼
//  LoginPage      AlertPage       FormsPage
//       │               │               │
//       └───────────────┼───────────────┘
//                       ▼
//                   Test Files


// alertpage: async({page},use)=>{     //Everything before await use() is setup.Everything after await use() runs after the test finishes.
//         await use(new AlertPage(page));
//     },

// alertPage ///fixture name
//       ↓
// async function
//       ↓
// Receives page
//       ↓
// Creates AlertPage
//       ↓
// Gives it to the test



// All these require async.

// So Playwright designed Fixtures to always support asynchronous setup.
// Login

// ↓

// Read Config

// ↓

// Read Token

// ↓

// Open Database

// ↓

// API Call


//======================await use(new AlertPage(page));

// Create Object

// ↓

// Give Object to Playwright

// ↓

// Playwright Gives Object to Test

// ↓

// Test Uses Object

// ↓

// Cleanup (optional)