/**
 * Page Object правой панели меню "Publikations"
 */
let publikationsRightPanel = function () {
    let utils = require('../Helpers/utils'),
        nummerField = element(by.model('publication.name')),
        typField = element(by.css('[data-ng-model="publication.type"]')),
        etField = element(by.css('disable-date-picker[date-item="publication.headET"] input')),
        preiseField = element(by.css('[data-ng-model="publication.priceType"]')),
        landField = element(by.css('[data-ng-model="publication.country"]')),
        kommentarField = element(by.css('[data-ng-model="publication.description"]')),
        cancelBtn = element(by.css('[title="Änderungen zurückstellen"]')),
        cancelMessage = element(by.css('span.cp-text-color.ng-binding'));

    /**
     * Метод возвращающий локатор поля "Nummer"
     * @returns {*} - Локатор поля "Nummer"
     */
    this.getNummerField = function () {
        return nummerField;
    };

    /**
     * Метод получающий текст из поля "Nummer"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getNummerFieldText = function () {
        return utils.getInputText(nummerField);
    };

    /**
     * Метод получающий текст из поля "Typ"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>} - Результат выполнения промиса
     */
    this.getTypFieldText = function () {
        return utils.getDropdownText(typField);
    };

    /**
     * Метод получающий текста из поля "ET"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.getEtFieldText = function () {
        return utils.getInputText(etField);
    };

    /**
     * Метод получающий текст из Dropdown "Preise"
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>} - Результат выполнения промиса
     */
    this.getPreiseFieldText = function () {
        return utils.getDropdownText(preiseField);
    };

    /**
     * Метод вводит текст в поле "Nummer"
     * @param {string} nummer - Номер
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.inputNummer = function (nummer) {
        nummerField.click().clear().sendKeys(nummer);
        return utils.getInputText(nummerField);
    };

    /**
     * Метод меняющий Dropdown поля "Typ"
     * @param {string} typ - Строка из Dropdown
     * @returns {ActionSequence|promise.Promise.<void>|webdriver.promise.Promise.<void>} - Результат выполнения промиса
     */
    this.selectTyp = function (typ) {
        return utils.clickDropdown(typField, typ);
    };

    /**
     * Метод вводит текст в поле "ET"
     * @param {string} et - Дата
     * @returns {webdriver.promise.Promise.<string>|promise.Promise.<string>|string} - Результат выполнения промиса
     */
    this.inputEt = function (et) {
        etField.click().clear().sendKeys(et);
        return utils.getInputText(etField);
    };

    /**
     * Метод меняющий Dropdown поля "Preise"
     * @param {string} preise - Строка из Dropdown
     * @returns {ActionSequence|promise.Promise.<void>|webdriver.promise.Promise.<void>} - Результат выполнения промиса
     */
    this.selectPreise = function (preise) {
        return utils.clickDropdown(preiseField, preise);
    };

    /**
     * Метод меняющий Dropdown поля "Land"
     * @param {string} land - Строка из Dropdown
     * @returns {ActionSequence|promise.Promise.<void>|webdriver.promise.Promise.<void>} - Результат выполнения промиса
     */
    this.selectLand = function (land) {
        return utils.clickDropdown(landField, land);
    };

    /**
     * Метод вводит текст в поле "Kommentar"
     * @param {string} kommentar - Текст комментария
     */
    this.inputKommentar = function (kommentar) {
        kommentarField.click().clear().sendKeys(kommentar);
    };

    /**
     * Метод возвращающий результат проверки оторажается ли поле кнопка "Cancel"
     * @returns {promise.Promise<boolean> | webdriver.promise.Promise.<boolean>} - Промис
     */
    this.isCancelBtnDisplayed = function () {
        return cancelBtn.isDisplayed();
    };

    /**
     * Метод нажимающий на кнопку "Cancel"
     */
    this.clickCancelBtn = function () {
        cancelBtn.click();
    };

    /**
     * Метод получающий текст сообщения
     * @returns {webdriver.promise.Promise.<string>|promise.Promise<string>} - Результат выполнения промиса
     */
    this.getCancelMessage = function () {
        return cancelMessage.getText();
    };
};
module.exports = new publikationsRightPanel();