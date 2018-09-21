/**
 * Page Object верхней панели меню "Vorteile"
 */
let topPanel = function () {
    let addBtn = element(by.css('[title="Hinzufügen"]')),
        delBtn = element(by.css('[title="Entfernen"]')),
        nameField = element(by.css('div.modal-body.col-def input')),
        saveBtn = element(by.css('[ng-click="ok()"]')),
        yesDelBtn = element(by.css('[ng-click="yes()"]'));

    /**
     * Метод проверяющий отображение кнопки "+"
     * @returns {promise.Promise<boolean> | webdriver.promise.Promise.<boolean>} - Результат выполнения промиса
     */
    this.isAddBtnEnabled = function () {
        return addBtn.isEnabled();
    };

    /**
     * Метод нажимающий на кнопку "+"
     */
    this.clickAddBtn = function () {
        addBtn.click();
    };

    /**
     * Метод возвращающий резутьтат проверки активна ли кнопка "-"
     * @returns {webdriver.promise.Promise.<boolean>|promise.Promise<boolean>} - Промис
     */
    this.isDelBtnEnable = function () {
        return delBtn.isEnabled();
    };

    /**
     * Метод нажимающий на кнопку "-"
     */
    this.clickDelBtn = function () {
        delBtn.click();
    };
};
module.exports = new topPanel();