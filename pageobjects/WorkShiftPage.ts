import {By, WebDriver, Locator, WebElement} from "selenium-webdriver";
import BasePage from "./BasePage";

class WorkShitPage extends BasePage{
    private addBtn: Locator = By.id("btnAdd");
    private nameInput: Locator = By.id("workShift_name");
    private fromSelect: Locator = By.id("workShift_workHours_from");
    private toSelect: Locator = By.id("workShift_workHours_to");
    private employees: Locator = By.id("workShift_availableEmp");
    private addEmpBtn: Locator = By.id("btnAssignEmployee");
    private saveBtn: Locator = By.id("btnSave");


    constructor(driver: WebDriver){
        super(driver);
    }

    async addWorkShift(name: string, from: string, to: string, emp: number){
        await this.driver.findElement(this.addBtn).click();

        await this.driver.findElement(this.nameInput).sendKeys(name);

        await this.driver.findElement(this.fromSelect).click();
        await this.driver.findElement(this.fromSelect).findElement(By.xpath(`option[@value='${from}']`)).click();

        await this.driver.findElement(this.toSelect).click();
        await this.driver.findElement(this.toSelect).findElement(By.xpath(`option[@value='${to}']`)).click();

        await this.driver.findElement(this.employees).findElement(By.xpath(`option[${emp}]`)).click();

        await this.driver.findElement(this.addEmpBtn).click();

        await this.driver.findElement(this.saveBtn).click();
    }

    async findAndCheckWorkShift(name: string,  from: string, to: string, hoursPerDay: string){
        const row = await this.getWorkShiftRow(name);
        if(!row) return false

        if((await row.findElement(By.xpath(`td[3]`)).getText()) !== from) return false;
        if((await row.findElement(By.xpath(`td[4]`)).getText()) !== to) return false;
        if((await row.findElement(By.xpath(`td[5]`)).getText()) !== hoursPerDay) return false;
        
        return true;
    }

    async getWorkShiftRow(name: string){
        try{
            return await this.driver.findElement(By.xpath(`//td[@class='left']/a[text()='${name}']`)).findElement(By.xpath("./../.."));
        } catch(err){
            return null;
        }
    }

    async findAndDeleteWorkShift(name: string){
        const row = await this.getWorkShiftRow(name);
        if(!row) return false;
        await row.findElement(By.xpath("td[1]/input")).click();

        await this.driver.findElement(By.id("btnDelete")).click();
        await this.driver.findElement(By.id("dialogDeleteBtn")).click();
        await this.driver.sleep(2000); //залишив щоб браузер не закривався відразу і можна було побачити результат
    }
}

export default WorkShitPage;
