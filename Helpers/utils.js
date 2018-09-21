/**
 * Помощник соджержащий вспомогательные методы
 */
let utils = function () {
    let EC = protractor.ExpectedConditions;

    /**
     * Ожидание локатора
     * @param {elementFinder} field - Поле
     * @param {number} timeoutTime - Время таймаута
     * @param {string} timeoutMessage - Сообщение о таймауте
     */
    this.waitLocator = function (field, timeoutTime, timeoutMessage) {
        browser.wait(EC.visibilityOf(field), timeoutTime, timeoutMessage);
    };

    /**
     * Ожидание поля
     * @param {elementFinder} field - Поле
     * @param {string} text - Данные
     * @param {number} timeoutTime - Время таймаута
     * @param {string} timeoutMessage - Сообщение о таймауте
     */
    this.waitField = function (field, text, timeoutTime, timeoutMessage) {
        browser.wait(EC.textToBePresentInElementValue((field), text), timeoutTime, timeoutMessage);
    };

    /**
     * Функция получающая текст из поля по атрибуту
     * @param {element} element - Элемент
     * @returns {webdriver.promise.Promise.<string>|promise.Promise<string>|string} - Результат выполнения промиса
     */
    this.getInputText = function (element) {
        return element.getAttribute('value');
    };

    /**
     * Функция получающая текст из Dropdown
     * @param {element} element - Элемент
     * @returns {webdriver.promise.Promise.<string>|promise.Promise<string>} - Результат выполнения промиса
     */
    this.getDropdownText = function (element) {
        let dropdownText = element.$('option:checked');
        return dropdownText.getText();
    };

    /**
     * Функция нажимающая на элемент Dropdown
     * @param {element} elem - Элемент
     * @param {string} elementName - Название елемента
     * @returns {ActionSequence | promise.Promise<void> | webdriver.promise.Promise.<void>} - Результат выполнения промиса
     */
    this.clickDropdown = function (elem, elementName) {
        let dropdown = elem.element(by.cssContainingText('option', elementName));
        return dropdown.click();
    };
};
module.exports = new utils();