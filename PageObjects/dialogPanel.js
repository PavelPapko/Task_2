/**
 * Page Object верхней панели меню "Vorteile"
 */
let dialogPanel = function () {
    let nameField = element(by.css('div.modal-body.col-def input')),
        saveBtn = element(by.css('[ng-click="ok()"]')),
        yesDelBtn = element(by.css('[ng-click="yes()"]'));

    /**
     * Метод возвращающий локатор поля "Name"
     * @returns {*} - Локатор поля "Name"
     */
    this.getNameField = function () {
        return nameField;
    };

    /**
     * Метод вводит текст в поле "Name"
     * @param {string} name - Имя
     */
    this.setName = function (name) {
        nameField.sendKeys(name);
    };

    /**
     * Метод нажимающий на кнопку "Save"
     */
    this.clickSaveBtn = function () {
        saveBtn.click();
    };

    /**
     * Метод возвращающий локатор кнопки "Ja"
     * @returns {*} - Локатор кнопки "Ja"
     */
    this.getYesDelBtn = function () {
        return yesDelBtn;
    };

    /**
     * Метод нажимающий на кнопку "Ja"
     */
    this.clickYesDelBtn = function () {
        yesDelBtn.click();
    };
};
module.exports = new dialogPanel();