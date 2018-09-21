/**
 * Page Object центральной панели меню "Vorteile"
 */
let vorteileCenterMenu = function () {
    let allFields = element.all(by.css('ul.nav.nav-list.selected-list li.ng-scope'));

    /**
     * Фукция возвращает локатор поля
     * @param {string} fieldName - Название поля
     * @returns {*} - Локатор поля
     */
    function vorteileCenterField (fieldName) {
        return element(by.cssContainingText('span.ng-binding.ng-scope', fieldName));
    }

    /**
     * Метод возвращающий результат отображается ли пункт центральной панели
     * @param {string} fieldName - Название пункта
     * @returns {promise.Promise<boolean> | webdriver.promise.Promise.<boolean>} - Промис
     */
    this.isFieldDisplayed = function (fieldName) {
        return vorteileCenterField(fieldName).isDisplayed();
    };

    /**
     * Метод возвращающий локатор пункта
     * @param {string} fieldName - Название пункта
     * @returns {*} - Локатор пункта
     */
    this.getField = function (fieldName) {
        return vorteileCenterField(fieldName);
    };

    /**
     * Метод возврщающий список полей
     * @returns {*} - Список полей
     */
    this.getListOfVorteileFields = function () {
        return element(by.css('.nav.nav-list.selected-list'));
    };

    /**
     * Метод нажимающий на пункт центральной панели
     * @param {string} fieldName - Название пункта
     */
    this.clickOnField = function (fieldName) {
        vorteileCenterField(fieldName).click();
    };

    /**
     * Метод нажимающий на 3ий пункт центральной панели
     */
    this.clickOnCentralPanelListField = function (number) {
        element.all(by.css('ul.nav.nav-list.selected-list li.ng-scope')).get(number).click();
    };

    /**
     * Метод получающий текст пункта центральной панели
     * @param {string} fieldName - Название пункта
     * @returns {webdriver.promise.Promise.<string>|promise.Promise<string>}- Результат выполнения промиса
     */
    this.getFieldText = function (fieldName) {
        return vorteileCenterField(fieldName).getText();
    };

    /**
     * Метод возвращающий локатор списка всех пунктов центральной панели
     */
    this.getAllFields = function () {
        return allFields;
    };
};
module.exports = new vorteileCenterMenu();