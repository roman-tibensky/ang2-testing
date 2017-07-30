import { Back2angPage } from './app.po';

describe('back2ang App', () => {
  let page: Back2angPage;

  beforeEach(() => {
    page = new Back2angPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
