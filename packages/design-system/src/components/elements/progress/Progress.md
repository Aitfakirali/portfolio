{/_ Progress.mdx _/}

import {
Canvas,
Meta,
Controls,
Description,
Source,
ArgTypes,
Stories,
Primary,
} from '@storybook/blocks';

import \* as ProgressStories from './Progress.stories';
import ThemeFile from '!!raw-loader!./theme.ts';

<Meta of={ProgressStories} />

# Progress

Primary UI component for user interaction

```js
import { Progress } from '@storybook/design-system';
```

<Primary />

## API

Button has the following properties:

<Controls />

<Stories includePrimary={false} />

<hr />

<details>
<summary>Theme source</summary>

<Source dark language='jsx' code={ThemeFile} />
</details>
