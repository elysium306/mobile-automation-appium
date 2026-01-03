/**
 *
 */

describe('Android Elemenents Tests', () => {
	it('Find Element by accessibility Id', async () => {
		// find element by accessibility Id
		const appOption = await $('~App');
		// click on element
		await appOption.click();
		// assert element

		const actionBar = await $('~Action Bar');
		await expect(actionBar).toBeExisting();
	});

	it('Find element by class name', async () => {
		// find element by class name
		const className = await $('android.widget.TextView');
		console.log(await className.getText());
	});

	xit('Find element using xpath', async () => {
		// adding xit will skip this test
		// 1. find element by accessibility Id
		// const appOption = await $('~App');
		// await appOption.click();

		// 2. find element using xpath
		// xpath synctax: (//tagName[@atributeName=valueString])
		const alertDialogs = await $(
			`//android.widget.TextView[@content-desc='Alert Dialogs']`
		);
		await alertDialogs.click();

		// 3. find the alert dialogs element using xpath
		const dialogList = await $(
			`//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']`
		);
		await dialogList.click();

		// 4. select teh <list Dialog> from the list
		await $(`//android.widget.TextView[@text='Command two']`).click();

		// 5. assert the option by text displayed
		const textDisplayed = await $(`//*[@resource-id='android:id/message']`);
		await console.log(textDisplayed.getText());
		await expect(textDisplayed).toHaveText('You selected: 1 , Command two');
	});

	it('Find element by UiAutomator', async () => {
		// find by text contains
		await $(`android=new UiSelector().textContains("Alert")`).click();
	});
});
