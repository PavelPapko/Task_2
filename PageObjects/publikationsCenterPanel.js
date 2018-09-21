/**
 * Page Object центральной панели меню "Publikations"
 */
let publikationsCenterPanel = function () {
    let utils = require('../Helpers/utils'),
        dataJSON = require('../Fixtures/data'),
        pubType,
        publication,
        firstFolderOpen,
        secondFolderOpen;

    /**
     * Фукция возвращает локатор папки "Season Folder"
     * @param {string} seasonName - Название папки
     * @returns {*} - Локатор папки "Season Folder"
     */
    function seasonFolder (seasonName) {
        return element(by.cssContainingText('span.aciTreeText', seasonName));
    }

    /**
     * Метод открывающий папку "Season folder"
     * @param {string} seasonName - Название папки
     */
    this.clickSeasonFolder = function (seasonName) {
        utils.waitLocator(seasonFolder(seasonName), dataJSON.timeoutTime, dataJSON.timeoutMessage);
        browser.actions().doubleClick(seasonFolder(seasonName)).perform();
    };

    /**
     * Метод открывающий папку "Publication type folder"
     * @param {string} pubTypeName - Название папки
     */
    this.clickPubType = function (pubTypeName) {
        pubType = element(by.cssContainingText('span.aciTreeText', pubTypeName));
        utils.waitLocator(pubType, dataJSON.timeoutTime, dataJSON.timeoutMessage);
        browser.actions().doubleClick(pubType).perform();
    };

    /**
     * Метод нажиающий на публикацию
     * @param {string} publicationName - Название публикации
     */
    this.clickPublication = function (publicationName) {
        publication = element(by.cssContainingText('span.aciTreeText', publicationName));
        utils.waitLocator(publication, dataJSON.timeoutTime, dataJSON.timeoutMessage);
        publication.click();
    };

    /**
     * Метод возвращающий локатор папки "Season folder"
     * @param {string} seasonName - Назваие папки
     * @returns {*} - Локатор папки "Season folder"
     */
    this.getSeasonFolder = function (seasonName) {
        return seasonFolder(seasonName);
    };

    /**
     * Метод возвращающий результат проверки отктыта ли папка "Season folder"
     * @param {string} seasonName - Название папки
     * @returns {Promise.<boolean>|webdriver.promise.Promise.<boolean>|wdpromise.Promise<boolean>} - Промис
     */
    this.checkSeasonFolderOpen = function (seasonName) {
        firstFolderOpen = element(by.cssContainingText('div[aria-expanded="true"] span.aciTreeText', seasonName));
        return firstFolderOpen.isPresent();
    };

    /**
     * Метод возвращающий результат проверки отктыта ли папка "Publication type folder"
     * @param {string} pubTypeName - Название папки
     * @returns {Promise.<boolean>|webdriver.promise.Promise.<boolean>|wdpromise.Promise<boolean>} - Промис
     */
    this.checkPubTypeFolderOpen = function (pubTypeName) {
        secondFolderOpen = element(by.cssContainingText('div[aria-expanded="true"] span.aciTreeText', pubTypeName));
        return secondFolderOpen.isPresent();
    };
};
module.exports = new publikationsCenterPanel();