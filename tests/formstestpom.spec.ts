import {expect,Locator} from '@playwright/test' ;
import{test} from '../fixtures/baseFixture';

test('practiceformpom, @practiceformpom', async({ formpage })=>{

    await formpage.navigateToURL();
    await formpage.clickOnRequiredForm();
    await formpage.filluserData();
    await formpage.clickOnRadioButton();
    await formpage.fillMobileNum();
    await formpage.fillDOB();
    await formpage.selectSubjectOptions();
    await formpage.clickOnCheckBox();
    await formpage.picUpload();
    await formpage.fillAddress();
    await formpage.clickOnsubmitButton();

   // await page.goto("https://demoqa.com/automation-practice-form");
    // await page.getByRole('link', {name: 'Practice Form', exact:true}).click();
    // await expect(page.getByRole('heading', {name:'Practice Form', exact:true})).toBeVisible();
    // await page.locator('#firstName').fill('mounica');
    // await page.locator('#lastName').fill('vinjamuri');
    // await page.locator('#userEmail').fill('mounica@gmail.com');
    
    // const gender_radio_btn = await page.locator('#gender-radio-2');
    // await expect(gender_radio_btn).toBeEnabled();

    // if(!(await gender_radio_btn.isChecked()))
    // {
    //     await gender_radio_btn.check();
    // }

    // await page.locator('#userNumber').fill('9455252948');
   //// ---------------datepicker
    //// await page.locator('#dateOfBirthInput').fill('03 Jun 1998');
    //// await page.keyboard.press('Enter');
    ////----------------in calender formate
//     const dob ={ year: '1998',
//         month: '4',
//         date: '25'

//     };
//     await page.locator('#dateOfBirthInput').click();
//     await page.locator('.react-datepicker__year-select').selectOption(dob.year);
//     await page.locator('.react-datepicker__month-select').selectOption(dob.month);
//    // await page.locator(`//div[contains(@class, 'react-datepicker__day') and not(contains(@class, 'outside-month')) and text()='${dob.date}']`).click();
//     await page.locator(`.react-datepicker__day--0${dob.date}`).first().click();
    
    // await page.locator('#subjectsInput').fill('English');
    // await page.getByRole('option',{name:'English', exact:true}).click();
    // await page.locator('.subjects-auto-complete__input-container').click();
    // await page.locator('#subjectsInput').fill('chemistry');
    // await page.getByRole('option',{name:'Chemistry', exact:true}).click();
    // await page.locator('.subjects-auto-complete__input-container').click();

    // const checkbox = page.locator('#hobbies-checkbox-3');

    // await expect(checkbox).toBeEnabled();
    // if(!(await checkbox.isChecked()))
    // {
    //     await checkbox.check();
    // }
    // await expect(checkbox).toBeChecked();
    //-------------------fileupload

// await page.locator('#uploadPicture').setInputFiles('testdata\\picture.JPG');
// //await page.locator('//input[type= "file"]').setInputFiles('testdata/picture.JPG');

// await page.getByPlaceholder('Current Address').fill('Hyderabad');

// await page.locator('#react-select-3-input').fill('NCR');
// await  page.getByRole('option',{name:'NCR'}).click();

// //await page.locator('#react-select-4-placeholder').fill('Delhi');
// await page.locator('#city > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
// await page.getByRole('option',{name:'Delhi'}).click();

//await page.getByRole('button', {name: 'Submit'}).click();

});