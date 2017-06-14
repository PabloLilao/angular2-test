import { KravAngularPage } from './app.po';

describe('krav-angular App', () => {
  let page: KravAngularPage;

  beforeEach(() => {
    page = new KravAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
