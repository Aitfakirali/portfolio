import { vclsx } from '../';

describe('Utils > vclsx', () => {
  it('Should ouput p-1 text-center', async () => {
    const result = vclsx('p-1', 'text-center');
    expect(result).toEqual('p-1 text-center');
  });
});
