/**
 * Create a folder
 */

class EditNotScreen {
	// getter method we can just return the element, the test itself will resolve the rest
	get skipTextBtn() {
		return $(`//*[@resource-id='']`);
	}

	async goToAlertDialogs() {
		// Go to activity page direclty
		await $(`//*[resource-id='']`).click();
	}

	async saveNote() {
		await driver.click();
		await driver.click();
	}
}

module.exports = new EditNotScreen();
