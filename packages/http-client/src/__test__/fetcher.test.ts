import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { z, ZodError } from 'zod';
import 'isomorphic-fetch';

import { createFetcher, ResponseError } from '../fetcher';

const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('Should fetch', async () => {
  server.use(
    rest.get('https://example.com/hello', (req, res, ctx) => {
      return res(ctx.json({ hello: 'world' }), ctx.status(200));
    })
  );

  const fetchWithZod = createFetcher('https://example.com');

  const response = await fetchWithZod('/hello', {
    method: 'GET',
    schema: z.object({
      hello: z.string(),
    }),
  });

  expect(response).toEqual({
    hello: 'world',
  });
});

it('Should POST a request', async () => {
  server.use(
    rest.post('https://example.com/hello', async (req, res, ctx) => {
      const { firstName, lastName } = await req.json();

      return res(ctx.json({ firstName, lastName }), ctx.status(201));
    })
  );

  const fetchWithZod = createFetcher('https://example.com');

  const response = await fetchWithZod('/hello', {
    method: 'POST',
    schema: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    body: {
      firstName: 'John',
      lastName: 'Doe',
    },
  });

  expect(response).toEqual({
    firstName: 'John',
    lastName: 'Doe',
  });
});

it('Should throw an error with mis-matched schemas', async () => {
  server.use(
    rest.get('https://example.com', (req, res, ctx) => {
      return res(ctx.json({ hello: 'world' }), ctx.status(200));
    })
  );

  const fetchWithZod = createFetcher('https://example.com');

  await expect(
    fetchWithZod('/', {
      method: 'GET',
      schema: z.object({
        hello: z.number(),
      }),
    })
  ).rejects.toMatchObject(
    ZodError.create([
      {
        code: 'invalid_type',
        expected: 'number',
        received: 'string',
        path: ['hello'],
        message: 'Expected number, received string',
      },
    ])
  );
});

it('Should throw an error if response is not ok', async () => {
  server.use(
    rest.get('https://example.com', (req, res, ctx) => {
      return res(
        ctx.json({
          error: 'Invalid permissions',
        }),
        ctx.status(403)
      );
    })
  );

  const fetchWithZod = createFetcher('https://example.com');

  await expect(
    fetchWithZod('/', {
      method: 'GET',
      schema: z.object({
        hello: z.number(),
      }),
    })
  ).rejects.toThrow(ResponseError);
});
