describe("template spec", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.viewport(1920, 1080);
  });
  it("Blog", () => {
    cy.get("a[name-link=Blog]").click();
    cy.url().should('include', '/Blog');
  });
  it("Contacts", () => {
    cy.get("a[name-link=Contacts]").click();
    cy.url().should('include', '/Contacts');
  });
  it("Home", () => {
    cy.get("a[name-link=Home]").click();
    cy.url().should('include', '/');
  });
  it("About", () => {
    cy.get("div[id=morePages]").click();
    cy.get(`a[name-link=About]`).click();
    cy.url().should('include', '/About');
  });
  it("Solutions", () => {
    cy.get("a[name-link=Solutions]").click();
    cy.url().should('include', '/Solutions');
  });
  it("Mobile", () => {
    cy.viewport(280, 653);
    cy.get(`div[id=burger]`).click();
    cy.get("a[name-link=Blog]").click();
    cy.url().should('include', '/Blog');
  });
});
