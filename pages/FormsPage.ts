import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage"

export class FormsPage extends BasePage {


    readonly firstName;
    readonly lastName;
    readonly email;
    readonly mobile;
    readonly submitButton;
    constructor(page: Page) {
        super(page);
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.mobile = page.locator('#userNumber');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async navigateToURL() {
        await this.page.goto("https://demoqa.com/automation-practice-form");
    }
    async clickOnRequiredForm() {
        await this.page.getByRole('link', { name: 'Practice Form', exact: true }).click();
        await expect(this.page.getByRole('heading', { name: 'Practice Form', exact: true })).toBeVisible();
    }
    async filluserData() {
        await this.page.locator('#firstName').fill('mounica');
        await this.page.locator('#lastName').fill('vinjamuri');
        await this.page.locator('#userEmail').fill('mounica@gmail.com');
    }

    async clickOnRadioButton() {
        const gender_radio_btn = await this.page.locator('#gender-radio-2');
        await expect(gender_radio_btn).toBeEnabled();

        if (!(await gender_radio_btn.isChecked())) {
            await gender_radio_btn.check();
        }
    }
    async fillMobileNum() {
        await this.page.locator('#userNumber').fill('9455252948');
    }
    async fillDOB() {
        //// ---------------datepicker
        //// await page.locator('#dateOfBirthInput').fill('03 Jun 1998');
        //// await page.keyboard.press('Enter');
        ////----------------in calender formate
        const dob = {
            year: '1998',
            month: '4',
            date: '25'

        };
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.locator('.react-datepicker__year-select').selectOption(dob.year);
        await this.page.locator('.react-datepicker__month-select').selectOption(dob.month);
        // await page.locator(`//div[contains(@class, 'react-datepicker__day') and not(contains(@class, 'outside-month')) and text()='${dob.date}']`).click();
        await this.page.locator(`.react-datepicker__day--0${dob.date}`).first().click();
    }
    async selectSubjectOptions() {
        await this.page.locator('#subjectsInput').fill('English');
        await this.page.getByRole('option', { name: 'English', exact: true }).click();
        await this.page.locator('.subjects-auto-complete__input-container').click();
        await this.page.locator('#subjectsInput').fill('chemistry');
        await this.page.getByRole('option', { name: 'Chemistry', exact: true }).click();
        await this.page.locator('.subjects-auto-complete__input-container').click();

    }

    async clickOnCheckBox() {
        const checkbox = this.page.locator('#hobbies-checkbox-3');

        await expect(checkbox).toBeEnabled();
        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
        await expect(checkbox).toBeChecked();
    }
    async picUpload() {
        await this.page.locator('#uploadPicture').setInputFiles('testdata\\picture.JPG');
        //await page.locator('//input[type= "file"]').setInputFiles('testdata/picture.JPG');

    }
    async fillAddress() {
        await this.page.getByPlaceholder('Current Address').fill('Hyderabad');

        await this.page.locator('#react-select-3-input').fill('NCR');
        await this.page.getByRole('option', { name: 'NCR' }).click();

        //await page.locator('#react-select-4-placeholder').fill('Delhi');
        await this.page.locator('#city > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
        await this.page.getByRole('option', { name: 'Delhi' }).click();
    }

    async clickOnsubmitButton(){
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }

}