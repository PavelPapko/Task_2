/**
 * Page Object правой панели меню "Vorteile"
 */
let vorteileRightMenu = function () {
    let utils = require('../Helpers/utils'),
        vorteileNameField = element(by.model('item.name')),
        saveBtn = element(by.css('[title="Änderungen speichern"]'));

    /**
     * Метод возвращающий локатор поля "Name"
     * @returns {*} - Локатор поля "Name"
     */
    this.getVorteileNameField = function () {
        return vorteileNameField;
    };

    /**
     * Метод молучающий тест из поля "Name"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getVorteileNameFieldText = function () {
        return utils.getInputText(vorteileNameField);
    };

    /**
     * Метод вводит текст в поле "Name"
     * @param {string} name - Имя
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.setNewName = function (name) {
        vorteileNameField.click().clear().sendKeys(name);
        return utils.getInputText(vorteileNameField);
    };

    /**
     * Нажимает кнопку "Save"
     */
    this.clickSaveBtn = function () {
        saveBtn.click();
    };
};
module.exports = new vorteileRightMenu();