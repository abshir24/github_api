import { ScorePage } from './app.po';

describe('score App', () => {
  let page: ScorePage;

  beforeEach(() => {
    page = new ScorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
