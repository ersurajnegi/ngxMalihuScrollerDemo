import { MalihuCustomScrollerDemoPage } from './app.po';

describe('malihu-custom-scroller-demo App', () => {
  let page: MalihuCustomScrollerDemoPage;

  beforeEach(() => {
    page = new MalihuCustomScrollerDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
