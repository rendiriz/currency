import { Hono } from 'hono/quick';
import { serveStatic } from 'hono/cloudflare-workers';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import SearchResult from '@/components/SearchResult';

const app = new Hono();

app.get('/static/*', serveStatic({ root: './' }));
app.get('/favicon.svg', serveStatic({ path: './favicon.svg' }));

app.get('/', (c) => {
  return c.html(
    <Layout>
      <div class="mx-auto w-full max-w-4xl px-4 py-8">
        <h1 class="mb-8 font-serif text-5xl font-extrabold">Currency</h1>

        <Search />
        <SearchResult />
      </div>
    </Layout>,
  );
});

app.post(
  '/currency',
  zValidator(
    'form',
    z.object({
      from: z.string(),
      to: z.string(),
    }),
  ),
  async (c) => {
    const { from, to } = c.req.valid('form');

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
    const res = await fetch(url);
    const data: { date: string; [x: string]: any } = await res.json();

    const date = new Date(data.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const props = {
      from,
      to,
      date,
      rate: data[from][to],
    };

    return c.html(<SearchResult data={props} />);
  },
);

app.post(
  '/calculate',
  zValidator(
    'form',
    z.object({
      input: z.string(),
      rate: z.string(),
    }),
  ),
  async (c) => {
    const { input, rate } = c.req.valid('form');

    const x = Number(input);
    const y = Number(rate);
    const data = Number(x * y).toLocaleString('id');

    return c.html(data);
  },
);

export default app;
