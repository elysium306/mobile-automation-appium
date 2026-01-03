/**
 *
 */

describe('Appium WebDriverIO Suite', () => {
	it('Appium Tests', async () => {
		// first setup shortcut to go to one of the packages directly
		await driver.startActivity(
			'io.appium.android.apis',
			'.app.AlertDialogSamples'
		);

		await driver.pause(5000);

		// asser that the error message exists
		const activityBannerMsg = await $(`//*[@text='App/Alert Dialogs']`);
		await expect(activityBannerMsg).toHaveText(`App/Alert Dialogs`);

		// pause for 5 seconds
		await driver.pause(5000);
	});

	it.only('Working with Dialog boxes', async () => {
		// first setup shortcut to go to one of the packages directly
		await driver.startActivity(
			'io.appium.android.apis',
			'.app.AlertDialogSamples'
		);

		// pass
		await $(
			`//*[@resource-id='io.appium.android.apis:id/two_buttons']`
		).click();
		await driver.pause(5000);

		// accept the alert
		await driver.acceptAlert();

		// accept the alert
		const alertMsg = await $(`//*[@resource-id='android:id/alertTitle']`);
		await expect(alertMsg).not.toExist();
	});
});
