import { Proyecto3AngularCrudPage } from './app.po';

describe('proyecto3-angular-crud App', () => {
  let page: Proyecto3AngularCrudPage;

  beforeEach(() => {
    page = new Proyecto3AngularCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
