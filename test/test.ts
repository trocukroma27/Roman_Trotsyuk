import { expect } from 'chai';
import 'mocha';
import { Builder, WebDriver } from 'selenium-webdriver';

import LoginPage from "../pageobjects/LoginPage";
import HomePage from "../pageobjects/HomePage";
import AdminPage from "../pageobjects/AdminPage";
import WorkShitPage from "../pageobjects/WorkShiftPage"

describe('Add, check and delete work shift', () => {
    let driver: WebDriver;
    let loginPage: LoginPage;
    let homePage: HomePage;
    let adminPage: AdminPage;
    let workShitPage: WorkShitPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = await new LoginPage(driver);
        homePage = await new HomePage(driver);
        adminPage = await new AdminPage(driver);
        workShitPage = await new WorkShitPage(driver);
    });

    it('should login', async () => {
        var url: string = "https://opensource-demo.orangehrmlive.com/";
        await loginPage.openURL(url);
        await loginPage.login("Admin", "admin123");
        expect(await loginPage.getURL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
    }).timeout(10000);

    it('shoud open admin page', async () => {
        await homePage.openAdminPage();
        expect(await homePage.getURL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers");
    }).timeout(10000);

    it('should open work shifts page', async () => {
        await adminPage.openWorkShiftsPage();
        expect(await adminPage.getURL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/admin/workShift");
    }).timeout(10000);

    it('should add work shift', async () => {
        await workShitPage.addWorkShift("RT Shift", "06:00", "18:00", 1);
        expect(await workShitPage.findAndCheckWorkShift("RT Shift", "06:00", "18:00", "12.00")).to.equal(true);
    }).timeout(10000);;

    it('should find and delete work shift', async () => {
        await workShitPage.findAndDeleteWorkShift("RT Shift");
        expect(await workShitPage.findAndCheckWorkShift("RT Shift", "06:00", "18:00", "12.00")).to.equal(false);
    }).timeout(10000);;

    after(async () => {
        await driver.quit();
    });
});