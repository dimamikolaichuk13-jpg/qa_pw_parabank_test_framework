import { test as base, Page } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';

export const test = base.extend<{
  signUpPage: SignUpPage;
  signInPage: SignInPage;
}>({
  signUpPage: async (
    { page }: { page: Page },
    use: (r: SignUpPage) => Promise<void>,
  ) => {
    const signUpPage = new SignUpPage(page);
    await use(signUpPage);
  },

  signInPage: async (
    { page }: { page: Page },
    use: (r: SignInPage) => Promise<void>,
  ) => {
    const signInPage = new SignInPage(page);
    await use(signInPage);
  },
});
