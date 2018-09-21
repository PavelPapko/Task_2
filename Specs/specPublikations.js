describe('1) Catalog planning tests', function () {
    let navigationMenu = require('../PageObjects/navigationMenu'),
        publikationsCenterPanel = require('../PageObjects/publikationsCenterPanel'),
        publikationsRightPanel = require('../PageObjects/publikationsRightPanel'),
        utils = require('../Helpers/utils'),
        dataJSON = require('../Fixtures/data');



    it('1) Select menu Publikationspflege', function () {
        browser.get(dataJSON.catalogPlanningrUrl)
            .then(() => utils.waitLocator(navigationMenu.getMenu(), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => navigationMenu.checkPublMenuOpen().then(function (result) {
                result ? navigationMenu.clickPublikationspflege() : navigationMenu.clickMarketingAndPubl();
            }))
            .then(() => utils.waitLocator(publikationsCenterPanel.getSeasonFolder(dataJSON.seasonFolderName), dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(browser.getCurrentUrl()).toBe(dataJSON.catalogPlanningrUrl));
    });

    it('2) Select item in the tree', function () {
        publikationsCenterPanel.checkSeasonFolderOpen(dataJSON.seasonFolderName)
            .then(function (result) {
                result ? publikationsCenterPanel.checkPubTypeFolderOpen(dataJSON.pubTypeName)
                        .then(function (res) {
                            res ? publikationsCenterPanel.clickPublication(dataJSON.publicationName) : publikationsCenterPanel.clickPubType(dataJSON.pubTypeName) &
                                publikationsCenterPanel.clickPublication(dataJSON.publicationName);
                        })
                    : publikationsCenterPanel.clickSeasonFolder(dataJSON.seasonFolderName) &
                    publikationsCenterPanel.checkPubTypeFolderOpen(dataJSON.pubTypeName)
                        .then(function (res) {
                            res ? publikationsCenterPanel.clickPublication(dataJSON.publicationName) : publikationsCenterPanel.clickPubType(dataJSON.pubTypeName) &
                                publikationsCenterPanel.clickPublication(dataJSON.publicationName);
                        });
            })
            .then(() => utils.waitField(publikationsRightPanel.getNummerField(), dataJSON.nummerValue, dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(publikationsRightPanel.getNummerFieldText()).toBe(dataJSON.nummerValue))
            .then(() => expect(publikationsRightPanel.getTypFieldText()).toBe(dataJSON.typValue))
            .then(() => expect(publikationsRightPanel.getEtFieldText()).toBe(dataJSON.etValue))
            .then(() => expect(publikationsRightPanel.getPreiseFieldText()).toBe(dataJSON.preiseValue));
    });

    it('3) Input new data', function () {
            publikationsRightPanel.inputNummer(dataJSON.newNummerValue)
            .then(() => publikationsRightPanel.selectTyp(dataJSON.newTypValue))
            .then(() => publikationsRightPanel.inputEt(dataJSON.newEtValue))
            .then(() => publikationsRightPanel.selectPreise(dataJSON.newPreiseValue))
            .then(() => publikationsRightPanel.selectLand(dataJSON.newLand))
            .then(() => publikationsRightPanel.inputKommentar(dataJSON.newKommentar))
            .then(() => expect(publikationsRightPanel.getPreiseFieldText()).toBe(dataJSON.newPreiseValue))
            .then(() => expect(publikationsRightPanel.getTypFieldText()).toBe(dataJSON.newTypValue));
    });

    it('4) Cancel changes', function () {
        expect(publikationsRightPanel.isCancelBtnDisplayed()).toBeTruthy()
            .then(() => publikationsRightPanel.clickCancelBtn())
            .then(() => utils.waitField(publikationsRightPanel.getNummerField(), dataJSON.nummerValue, dataJSON.timeoutTime, dataJSON.timeoutMessage))
            .then(() => expect(publikationsRightPanel.getNummerFieldText()).toBe(dataJSON.nummerValue))
            .then(() => expect(publikationsRightPanel.getTypFieldText()).toBe(dataJSON.typValue))
            .then(() => expect(publikationsRightPanel.getEtFieldText()).toBe(dataJSON.etValue))
            .then(() => expect(publikationsRightPanel.getPreiseFieldText()).toBe(dataJSON.preiseValue))
            .then(() => expect(publikationsRightPanel.getCancelMessage()).toBe(dataJSON.cancelMessage));
    });
});