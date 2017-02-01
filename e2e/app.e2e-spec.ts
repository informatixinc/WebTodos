import { WebTodosPage } from './app.po';

describe('web-todos App', function() {
  let page: WebTodosPage;

  beforeEach(() => {
    page = new WebTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
