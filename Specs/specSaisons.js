describe('2) Catalog planning tests', function () {
    let navigationMenu = require('../PageObjects/navigationMenu'),
        saisonsCenterPanel = require('../PageObjects/saisonsCenterPanel'),
        saisonsRightPanel = require('../PageObjects/saisonsRightPanel'),
        utils = require('../Helpers/utils'),
        dataJSON = require('../Fixtures/data');

    it('1) Select menu STAMMDATEN - Saisons', function () {
        navigationMenu.checkSaisonsMenuOpen().then(function (result) {
            result ? navigationMenu.clickSaisons() : navigationMenu.clickStammdatenSaisons()
        })
            .then(() => utils.waitLocator(saisonsCenterPanel.getListOfSaisonsFields(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.saisonsVerwaltungUrl));
    });

    it('2) Select the season with the number 34', function () {
        saisonsCenterPanel.clickField34(dataJSON.saisonsFieldName)
            .then(() => utils.waitField(saisonsRightPanel.getSaisonsNameField(), dataJSON.nameSaisons, dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(saisonsRightPanel.getSaisonsNameFieldText()).toBe(dataJSON.nameSaisons))
            .then(() => expect(saisonsRightPanel.getSaisonsTypFieldText()).toBe(dataJSON.saisontypSaisons))
            .then(() => expect(saisonsRightPanel.getStartdatumFieldText()).toBe(dataJSON.startdatumSaisons))
            .then(() => expect(saisonsRightPanel.getEnddatumFieldText()).toBe(dataJSON.enddatumSaisons));
    });
});