import { testStep, expect } from '../../common/helpers/pwHelpers';

export class AccountsOverviewPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.accountsOverview = page.getByRole('heading', {
      name: 'Accounts Overview',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertAccountsOverviewIsVisible() {
    await this.step(
      'Checking the visibility of "Overview Accounts',
      async () => {
        await expect(this.accountsOverview).toBeVisible();
      },
    );
  }
}
