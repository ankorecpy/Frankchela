import { FrankchelaPage } from './app.po';

describe('frankchela App', function() {
  let page: FrankchelaPage;

  beforeEach(() => {
    page = new FrankchelaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
