import {test, expect} from '@playwright/test' ;

test.describe('Demoqa_topics_day3' , ()=>{

test.beforeEach(async({page})=>{

await page.goto('/elements');
})
///////////ALERTS
//simple, confirm, prompt
test('Alerts , @alerts', async({page})=>{

    // page.on('close', () => {
    //     console.log('PAGE CLOSED');
    // });

    // page.context().on('close', () => {
    //     console.log('CONTEXT CLOSED');
    // });

await page.getByText('Alerts, Frame & Windows', {exact: true}).click();
await page.getByRole('link', {name:'Alerts' , exact:true}).click();
// await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
//////approach1===============================================currently not working
const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    page.locator('#alertButton').click()
]);
console.log(dialog.message());
await dialog.accept();

//////////approach 2

page.once('dialog', async dialog=>{

    await expect(page.getByText('Click Button to see alert ')).toBeVisible();
    await page.locator('#alertButton').click();
    console.log(`Dialog type:', ${dialog.type()}`);
    console.log(`Dialog message:, ${dialog.message()}`);
    dialog.accept();
});


test('confirmAlert, @confirmalert', async({page})=>{

    await page.getByText('Alerts, Frame & Windows', {exact: true}).click();
await page.getByRole('link', {name:'Alerts' , exact:true}).click();
// await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();

})
});
});
