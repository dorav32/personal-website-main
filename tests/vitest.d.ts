/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

import type { A11yConfig } from '@sa11y/assert';

declare module 'vitest' {
  interface Assertion<T = unknown> {
    toBeAccessible(config?: A11yConfig): Promise<T>;
  }
  interface AsymmetricMatchersContaining {
    toBeAccessible(config?: A11yConfig): Promise<void>;
  }
}
