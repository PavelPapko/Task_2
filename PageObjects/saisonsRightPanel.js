/**
 * Page Object правой панели меню "Saisons"
 */
let saisonsRightMenu = function () {
    let utils = require('../Helpers/utils'),
        saisonsNameField = element(by.model('item.identity')),
        saisontypField = element(by.model('item.name')),
        startdatumField = element(by.css('disable-date-picker[date-item="item.startDate"] input')),
        enddatumField = element(by.css('disable-date-picker[date-item="item.endDate"] input'));

    /**
     * Метод возвращающий локатор поля "Name"
     * @returns {*} - Локатор поля "Name"
     */
    this.getSaisonsNameField = function () {
        return saisonsNameField;
    };

    /**
     * Метод получающий текст из поля "Name"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getSaisonsNameFieldText = function () {
        return utils.getInputText(saisonsNameField);
    };

    /**
     * Метод получающий текст из поля "Saisonstyp"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getSaisonsTypFieldText = function () {
        return utils.getInputText(saisontypField);
    };

    /**
     * Метод получающий текст из поля "Starddatum"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getStartdatumFieldText = function () {
        return utils.getInputText(startdatumField);
    };

    /**
     * Метод получающий текст из поля "Enddatum"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getEnddatumFieldText = function () {
        return utils.getInputText(enddatumField);
    };
};
module.exports = new saisonsRightMenu();