/**
 * Page Object навигационного меню
 */
let navigationMenu = function () {
    let utils = require('../Helpers/utils'),
        dataJSON = require('../Fixtures/data'),
        publikationspflege = element(by.css('[ui-sref="productionsEditor"]')),
        marketing = element.all(by.css('div.text-justify.ng-binding.ng-scope')).get(0),
        stammdaten = element.all(by.css('div.text-justify.ng-binding.ng-scope')).get(4),
        saisons = element(by.css('[ui-sref="seasons"]')),
        vorteile = element(by.css('[ui-sref="maintenanceOptions"]')),
        publMenuOpen = element(by.css('div.panel-collapse.collapse.in [ui-sref="productionsEditor"]')),
        menuName = element.all(by.css('div.panel-collapse.collapse.in .list-group.panel-default.ng-scope a')).get(0),
        saisonsMenuOpen = element(by.css('div.panel-collapse.collapse.in [ui-sref="seasons"]')),
        vorteileMenuOpen = element(by.css('div.panel-collapse.collapse.in [ui-sref="maintenanceOptions"]'));

    /**
     * Метод возвращающий локатор выпадающего списка в меню навигации
     * @returns {*} Локатор выпадающего списка
     */
    this.getMenu = function () {
        return menuName;
    };

    /**
     * Метод открывающий меню "Stammadaten" и нажимает на пункт "Saisons"
     */
    this.clickStammdatenSaisons = function () {
        stammdaten.click();
        utils.waitLocator(stammdaten, dataJSON.timeoutTime, dataJSON.timeoutMessage);
        saisons.click()
    };

    /**
     * Метод нажимающий на пункт "Saisons"
     */
    this.clickSaisons = function () {
        saisons.click();
    };

    /**
     * Метод открывающий меню "Stammadaten" и нажимает на пункт "Vorteile"
     */
    this.clickStammadatenVorteile = function () {
        stammdaten.click();
        utils.waitLocator(vorteile, dataJSON.timeoutTime, dataJSON.timeoutMessage);
        vorteile.click();
    };

    /**
     * Метод нажимающий на пункт "Vorteile"
     */
    this.clickVorteile = function () {
        vorteile.click();
    };

    /**
     * Метод нажимающий на пункт "Publikationspflege"
     */
    this.clickPublikationspflege = function () {
        publikationspflege.click();
    };

    /**
     * Метод открывающий меню "Marketing" и нажимает на пункт "Publikationspflege"
     */
    this.clickMarketingAndPubl = function () {
        marketing.click();
        utils.waitLocator(publikationspflege, dataJSON.timeoutTime, dataJSON.timeoutMessage);
        publikationspflege.click();
    };

    /**
     * Метод возвращающий результат проверки оторажается ли пункт "Publikationspflege"
     * @returns {Promise.<boolean>|webdriver.promise.Promise.<boolean>|wdpromise.Promise<boolean>} - Промис
     */
    this.checkPublMenuOpen = function () {
        return publMenuOpen.isPresent();
    };

    /**
     * Метод возвращающий результат проверки оторажается ли поле пункт "Saisons"
     * @returns {Promise.<boolean>|webdriver.promise.Promise.<boolean>|wdpromise.Promise<boolean>} - Промис
     */
    this.checkSaisonsMenuOpen = function () {
        return saisonsMenuOpen.isPresent();
    };

    /**
     * Метод возвращающий результат проверки оторажается ли пункт "Vorteile"
     * @returns {Promise.<boolean>|webdriver.promise.Promise.<boolean>|wdpromise.Promise<boolean>} - Промис
     */
    this.checkVorteileMenuOpen = function () {
        return vorteileMenuOpen.isPresent();
    }
};
module.exports = new navigationMenu();