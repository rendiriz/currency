import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';
import { serveStatic } from '@hono/node-server/serve-static';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import axios from 'axios';
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import SearchResult from '@/components/SearchResult';

const app = new Hono();

app.use('/assets/*', serveStatic({ root: './' }));

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

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
    const res = await axios.get(url);

    const date = new Date(res.data.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const data = {
      from,
      to,
      date,
      rate: res.data[to],
    };

    return c.html(<SearchResult data={data} />);
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

export default handle(app);
