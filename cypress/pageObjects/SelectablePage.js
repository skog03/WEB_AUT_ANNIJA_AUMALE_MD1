import { BasePage } from "./BasePage";

export class SelectablePage extends BasePage{
    static get gridBtn(){
        return cy.get("[id='demo-tab-grid']");
    }

    static get row1OfGrid(){
        return cy.get("#row1");
    }

    static get row2OfGrid(){
        return cy.get("#row2");
    }

    static get row3OfGrid(){
        return cy.get("#row3");
    }
}