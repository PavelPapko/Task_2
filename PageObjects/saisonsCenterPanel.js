/**
 * Page Object центральной панели меню "Saisons"
 */
let saisonsCenterPanel = function () {

    /**
     * Метод нажимающий на поле "34"
     * @param {string} fieldName - Название поля
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>} - Результат выполнения промиса
     */
    this.clickField34 = function (fieldName) {
        return element(by.cssContainingText('div.col-md-3.ng-binding', fieldName)).click();
    };

    /**
     * Метод возвращающий локатор списка
     * @returns {*} - Список
     */
    this.getListOfSaisonsFields = function () {
        return element(by.css('.nav.nav-list.selected-list'));
    };
};
module.exports = new saisonsCenterPanel();