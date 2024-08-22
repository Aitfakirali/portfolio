---
sidebar_position: 3
---

import CodeBlock from "@theme/CodeBlock";

# Styling

## Override components

Let's override the button component.

### Create a new component

```tsx title="./src/components/elements/button/MyButton.tsx"
import React from 'react';

import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ButtonTheme as baseTheme,
} from '@portfolio/design-system/button';

// Create a new theme definition
// Make sure to not mutate the old theme object.
const theme = {
  ...baseTheme,
  variants: {
    ...baseTheme.variants,
    primary: 'bg-gold-400 text-white hover:bg-gold-500 focus:bg-gold-600', // < Override primary
    foo: 'bg-transparent bg-foo', // < Add new variant
  },
};

// This you new components props.
interface ButtonProps extends Omit<BaseButtonProps, 'variant'> {
  /**
   * The variant to use.
   */
  variant?: keyof typeof theme.variants;
}

// Use the exposed ButtonPropsOverrides interface
// and module augmentation to tell the compiler to use this our new interface
declare module '@portfolio/design-system/button' {
  interface ButtonPropsOverrides extends Omit<BaseButtonProps, 'variant'> {
    /**
     * The variant to use.
     */
    variant?: keyof typeof theme.variants;
  }
}

export const Button = (props: ButtonProps) => {
  return <BaseButton {...props} theme={theme} />;
};
```

### Update alias

```json title="./tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "@portfolio/design-system/button": [
        "./src/components/elements/button/MyButton.tsx"
      ]
    }
  }
}
```

### Usage

```tsx title="./src/pages/MyPage.tsx"
import { Button } from '@portfolio/design-system/button';

export const MyPage = () => {
  return (
    <>
      <Button variant='primary'>
        Hello i'm a primary button with Gold colors
      </Button>
      <Button variant='foo'>Hello i'm a foo button</Button>
    </>
  );
};
```
