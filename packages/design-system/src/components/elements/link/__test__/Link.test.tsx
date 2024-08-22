import { render } from '@testing-library/react';

import { Link } from '../Link';

describe('Layer', () => {
  it('should render', () => {
    render(<Link href='https://google.com'>this a link</Link>);
    expect(document.querySelector('a')).toBeInTheDocument();
  });
});
