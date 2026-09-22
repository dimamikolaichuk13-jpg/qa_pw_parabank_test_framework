import { test as base, Page } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';

export const test = base.extend<{
  signUpPage: SignUpPage;
}>({
  signUpPage: async (
    { page }: { page: Page },
    use: (r: SignUpPage) => Promise<void>,
  ) => {
    const signUpPage = new SignUpPage(page);

    await use(signUpPage);
  },
});
