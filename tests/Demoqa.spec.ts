import {test,expect,Locator} from '@playwright/test' ;


test.describe("demoqa_topics", ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/elements');
    });

    //---------------------------------

test("Text Box" , async({page})=>{

await page.goto("https://demoqa.com/text-box");
await page.getByRole('link', { name:'Text Box'}).click();
await page.getByPlaceholder("Full Name").fill("mounica");
await page.getByPlaceholder("name@example.com").fill("mounica@gmail.com");
await page.getByPlaceholder("Current Address").fill("Gachibowli");
await page.locator('#permanentAddress').fill('Gachibowli');
await page.getByRole("button" , {name : "Submit"}).click();
console.log((await page.locator('#output p').count()));
const texts = await page.locator('#output p').allTextContents();
console.log(texts);
await expect(page.locator('#output p')).toContainText([
    'Name:mounica',
//     'Email:mounica@gmail.com',
// 'Current Address :Hyderabad',
// 'Permananet Address :Bangalore',
 ]);

});
//-----------------------------------------------------------------

test('checkbox @checkbox', async({page})=>{

    await page.goto('https://demoqa.com/elements?utm_source=chatgpt.com');

    await page.getByRole('link' , { name : 'Check Box'}).click();
    await page.locator('.rc-tree-switcher').click();
   // await page.getByRole('checkbox' , { name:'Select Home' }).click();
    await page.getByRole('checkbox', { name: 'Select Desktop' }).click();
    await page.getByRole('checkbox',{ name : 'Select Documents'}).click();
    await page.getByRole('checkbox', {name: 'Select Downloads' }).click();
    await page.locator('#result').waitFor( {state: 'visible'});
   const res = await page.locator('#result').textContent();
   console.log(res);
    await expect(page.locator('#result')).toContainText('desktop');

    });

    //===========================================================================

test('RadioButton @radiobutton' , async({page})=>{

await page.goto('https://demoqa.com/elements?utm_source=chatgpt.com');

await page.getByRole('link',{ name:'Radio Button'}).click();

const radio_btn = page.locator('#yesRadio');

await expect(radio_btn).toBeEnabled();

if(!(await radio_btn.isChecked()))
{
await radio_btn.waitFor({ state : 'visible'});
await page.locator('#yesRadio').check();
}

//await expect(page.locator('.text-success')).toHaveText('Yes');
  await expect(page.locator('.text-success')).toHaveText('Yes');

});
//========================================================================
test('webtables @webtables', async({page})=>{

    //==========Added====================
await page.getByRole('link',{name:'Web Tables'}).click();
await page.getByRole('button',{name:'Add'}).click();
await page.locator('#firstName').fill('mounica');
await page.locator('#lastName').fill('vinjamuri');
await page.locator('#userEmail').fill('mounica@gmail.com');
await page.locator('#age').fill('26');
await page.locator('#salary').fill('200000');
await page.locator('#department').fill('department');
await expect(page.getByRole('button',{name:'Submit'})).toBeVisible();
await page.getByRole('button',{name:'Submit'}).click();

//==========search=
await page.locator('#searchBox').fill('mounica');
//await expect(page.getByRole('cell', { name: 'mounica', exact: true })).toBeVisible();
//===========Edit=
await page.locator('#edit-record-4 > svg').click();
await page.locator('#firstName').click();
await page.locator('#firstName').fill('MOUNICA');
await page.getByRole('button', { name:'Submit' , exact:true}).click();
await expect(page.getByRole('cell', { name:'MOUNICA', exact: true})).toBeVisible();
//===========Delete=
await page.locator('#searchBox').fill('MOUNICA');
await page.locator('#delete-record-4 > svg').click();
await expect(page.getByRole('cell',{name:'MOUNICA'})).toHaveCount(0);

});

test('Buttons , @buttons', async({page})=>{

await page.getByRole('link',{name:'Buttons'}).click();
///=====dblclick
await page.getByRole('button',{name:'Double Click Me'}).dblclick();
await expect(page.locator('#doubleClickMessage')).toBeVisible();
////======right click

await page.getByRole('button',{name:'Right Click Me'}).click({button: 'right'});
await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

//===========normal click


// const dynamicClick ='Click Me';

// await page.getByRole('button', {name: dynamicClick}).click();


//const buttonName = 'Click Me';

//await page.getByRole('button', { name: buttonName }).click();
//await page.getByText('Click Me').click();
await page.getByRole('button', {name:'Click Me', exact:true}).click();
await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic');

})

test('Links , @links', async({page, context})=> {

await page.getByRole('link', {name:'Links', exact:true}).click();
await page.getByRole('link', {name:'Home', exact: true}).click();
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
page.locator('#simpleLink').click()]);

await newPage.waitForLoadState();
await expect(newPage).toHaveURL('https://demoqa.com/');


})
});

test.describe(()=>{

test('practiceform, @practiceform', async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByRole('link', {name: 'Practice Form', exact:true}).click();
    await expect(page.getByRole('heading', {name:'Practice Form', exact:true})).toBeVisible();
    await page.locator('#firstName').fill('mounica');
    await page.locator('#lastName').fill('vinjamuri');
    await page.locator('#userEmail').fill('mounica@gmail.com');
    
    const gender_radio_btn = await page.locator('#gender-radio-2');
    await expect(gender_radio_btn).toBeEnabled();

    if(!(await gender_radio_btn.isChecked()))
    {
        await gender_radio_btn.check();
    }

    await page.locator('#userNumber').fill('9455252948');
    //---------------datepicker
    // await page.locator('#dateOfBirthInput').fill('03 Jun 1998');
    // await page.keyboard.press('Enter');
    //----------------in calender formate
    const dob ={ year: '1998',
        month: '4',
        date: '25'

    };
    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__year-select').selectOption(dob.year);
    await page.locator('.react-datepicker__month-select').selectOption(dob.month);
   // await page.locator(`//div[contains(@class, 'react-datepicker__day') and not(contains(@class, 'outside-month')) and text()='${dob.date}']`).click();
    await page.locator(`.react-datepicker__day--0${dob.date}`).first().click();
    
    await page.locator('#subjectsInput').fill('English');
    await page.getByRole('option',{name:'English', exact:true}).click();
    await page.locator('.subjects-auto-complete__input-container').click();
    await page.locator('#subjectsInput').fill('chemistry');
    await page.getByRole('option',{name:'Chemistry', exact:true}).click();
    await page.locator('.subjects-auto-complete__input-container').click();

    const checkbox = page.locator('#hobbies-checkbox-3');

    await expect(checkbox).toBeEnabled();
    if(!(await checkbox.isChecked()))
    {
        await checkbox.check();
    }
    await expect(checkbox).toBeChecked();

//-------------------fileupload

await page.locator('#uploadPicture').setInputFiles('testdata\\picture.JPG');
//await page.locator('//input[type= "file"]').setInputFiles('testdata/picture.JPG');

await page.getByPlaceholder('Current Address').fill('Hyderabad');

await page.locator('#react-select-3-input').fill('NCR');
await  page.getByRole('option',{name:'NCR'}).click();

//await page.locator('#react-select-4-placeholder').fill('Delhi');
await page.locator('#city > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
await page.getByRole('option',{name:'Delhi'}).click();

await page.getByRole('button', {name: 'Submit'}).click();

});
//-------------------Modal Dialog

//Modal Dialog is most similar to a popup window inside the web page (DOM)


test('Modaldialog, @modaldialog', async({page})=>{

await page.goto("https://demoqa.com/elements?utm_source=chatgpt.com");
await page.getByText('Alerts, Frame & Windows').click();
//await page.getByRole('link', {name: 'Alerts, Frame & Windows', exact :true}).click();
await page.getByRole('link', { name: 'Modal Dialogs', exact:true }).click();
const small_modal =page.getByRole('button',{name: "Small modal"})
await expect(small_modal).toHaveText('Small modal');
await small_modal.click();

//await expect(page.locator('.modal-title h4')).toHaveText('Small Modal');
await expect(page.getByText('Small Modal', {exact: true})).toHaveText('Small Modal');
await expect(page.locator('.modal-body')).toContainText('less content');
await expect(page.locator('.btn-close')).toBeVisible();
//await page.getByRole('button',{name:"Close", exact: true}).click(); //not worked as 2 similar buttons are there
console.log(await page.getByRole('button',{name:"Close", exact: true}).allTextContents());//collect all relavent elements
//allTextContents -->returns string[]
await page.locator('#closeSmallModal').click();
///large modal

await page.getByRole('button', {name:'Large modal', exact: true}).click();
await expect(page.getByText('Large Modal', {exact: true})).toBeVisible();
await expect(page.locator('.modal-body')).toContainText('1500s');
await expect(page.getByLabel('Close')).toBeVisible();
await page.locator('#closeLargeModal').click();



});

});





