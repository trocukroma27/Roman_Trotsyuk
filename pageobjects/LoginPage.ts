import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./BasePage";

class LoginPage extends BasePage{
    private usernameInput: Locator = By.id("txtUsername");
    private passwordInput: Locator = By.id("txtPassword");
    private loginBtn: Locator = By.id("btnLogin");

    constructor(driver: WebDriver){
        super(driver);
    }

    async login(username: string, password: string){
        await this.driver.findElement(this.usernameInput).sendKeys(username);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.loginBtn).click();
    }
}

export default LoginPage;