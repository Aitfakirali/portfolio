{/_ Rating.mdx _/}

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

import \* as RatingStories from './Rating.stories';
import ThemeFile from '!!raw-loader!./theme.ts';

<Meta of={RatingStories} />

# Rating

Primary UI component for user interaction

```js
import { Rating } from '@storybook/design-system';
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
