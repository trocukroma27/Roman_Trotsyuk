import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./BasePage";

class HomePage extends BasePage{
    private openAdminBtn: Locator = By.id("menu_admin_viewAdminModule");

    constructor(driver: WebDriver){
        super(driver);
    }

    async openAdminPage(){
        await this.driver.findElement(this.openAdminBtn).click();
    }
}

export default HomePage;