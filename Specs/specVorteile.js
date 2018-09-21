describe('3) Catalog planning tests', function () {
    let navigationMenu = require('../PageObjects/navigationMenu'),
        vorteileCenterPanel = require('../PageObjects/vorteileCenterPanel'),
        vorteileRightPanel = require('../PageObjects/vorteileRightPanel'),
        topPanel = require('../PageObjects/topPanel'),
        dialogPanel = require('../PageObjects/dialogPanel'),
        utils = require('../Helpers/utils'),
        dataJSON = require('../Fixtures/data');

    it('1) Select menu  STAMMDATEN - Vorteile', function () {
        navigationMenu.checkVorteileMenuOpen().then(function (result) {
            result ? navigationMenu.clickVorteile() : navigationMenu.clickStammadatenVorteile()
        })
            .then(() => utils.waitLocator(vorteileCenterPanel.getListOfVorteileFields(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.vorteileUrl));
    });

    it('2) Select the third line in the list', function () {
        expect(vorteileCenterPanel.isFieldDisplayed(dataJSON.nameVorteile)).toBeTruthy()
            .then(() => expect(vorteileCenterPanel.getAllFields().count()).toEqual(4))
            .then(() => vorteileCenterPanel.clickOnCentralPanelListField(2))
            .then(() => utils.waitField(vorteileRightPanel.getVorteileNameField(), dataJSON.nameVorteile, dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(vorteileRightPanel.getVorteileNameFieldText()).toBe(dataJSON.nameVorteile));
    });

    it('3) Click on the add button "+", add a new element (enter data in the Name field in the dialog box)', function () {
        expect(topPanel.isAddBtnEnabled()).toBeTruthy()
            .then(() => topPanel.clickAddBtn())
            .then(() => utils.waitLocator(dialogPanel.getNameField(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => dialogPanel.setName(dataJSON.newNameVorteile))
            .then(() => dialogPanel.clickSaveBtn())
            .then(() => utils.waitLocator(vorteileCenterPanel.getField(dataJSON.newNameVorteile), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(vorteileCenterPanel.isFieldDisplayed(dataJSON.newNameVorteile)).toBeTruthy());
    });

    it('4) Change field value', function () {
        expect(vorteileCenterPanel.getAllFields().count()).toEqual(5)
            .then(() => vorteileCenterPanel.clickOnField(dataJSON.newNameVorteile))
            .then(() => vorteileRightPanel.setNewName(dataJSON.editedNameVorteile))
            .then(() => vorteileRightPanel.clickSaveBtn())
            .then(() => utils.waitLocator(vorteileCenterPanel.getField(dataJSON.editedNameVorteile), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(vorteileCenterPanel.getFieldText(dataJSON.editedNameVorteile)).toBe(dataJSON.editedNameVorteile));
    });

    it('5) Delete new entry', function () {
        expect(vorteileCenterPanel.isFieldDisplayed(dataJSON.editedNameVorteile)).toBeTruthy()
            .then(() => vorteileCenterPanel.clickOnField(dataJSON.editedNameVorteile))
            .then(() => expect(topPanel.isDelBtnEnable()).toBe(true))
            .then(() => topPanel.clickDelBtn())
            .then(() => utils.waitLocator(dialogPanel.getYesDelBtn(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => dialogPanel.clickYesDelBtn())
            .then(() => expect(vorteileCenterPanel.getAllFields().count()).toEqual(4));
    });
});