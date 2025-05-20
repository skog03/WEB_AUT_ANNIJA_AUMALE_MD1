import { BasePage } from "../pageObjects/BasePage";
import { HomePage } from "../pageObjects/HomePage";
import { SelectablePage } from "../pageObjects/SelectablePage";

describe("Choosing in grid", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("smth smth", () => {
    //b. Click “Grid”
    SelectablePage.gridBtn.click();
    //c. Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.row1OfGrid.contains("Two").click();
    SelectablePage.row2OfGrid.contains("Four").click();
    SelectablePage.row2OfGrid.contains("Six").click();
    SelectablePage.row3OfGrid.contains("Eight").click();
    //d. Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.row1OfGrid.contains("Two").should('have.class', 'active');
    SelectablePage.row2OfGrid.contains("Four").should('have.class', 'active');
    SelectablePage.row2OfGrid.contains("Six").should('have.class', 'active');
    SelectablePage.row3OfGrid.contains("Eight").should('have.class', 'active');
    //e. Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.row1OfGrid.contains("One").should('not.have.class', 'active');
    SelectablePage.row1OfGrid.contains("Three").should('not.have.class', 'active');
    SelectablePage.row2OfGrid.contains("Five").should('not.have.class', 'active');
    SelectablePage.row3OfGrid.contains("Seven").should('not.have.class', 'active');
    SelectablePage.row3OfGrid.contains("Nine").should('not.have.class', 'active');
  });
  

});
