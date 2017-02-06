import { MyContactPage } from './app.po';

describe('my-contact App', function() {
  let page: MyContactPage;

  beforeEach(() => {
    page = new MyContactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
