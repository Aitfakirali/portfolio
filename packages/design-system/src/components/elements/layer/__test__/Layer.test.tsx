import { render } from '@testing-library/react';

import { Layer } from '../Layer';

describe('Layer', () => {
  it('should render', () => {
    render(
      <Layer
        onClose={undefined}
        onCloseCallback={undefined}
        overlayClasses={undefined}
        closeButton={undefined}
      >
        Layer
      </Layer>,
    );
  });
});
