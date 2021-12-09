import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./BasePage";

class AdminPage extends BasePage{
    private jobBtn: Locator = By.id("menu_admin_Job");
    private worhShiftsBtn: Locator = By.id("menu_admin_workShift");
    

    constructor(driver: WebDriver){
        super(driver);
    }

    async openWorkShiftsPage(){
        await this.driver.findElement(this.jobBtn).click();
        await this.driver.findElement(this.worhShiftsBtn).click();
    }
}

export default AdminPage;