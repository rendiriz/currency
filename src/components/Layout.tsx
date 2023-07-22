import { html } from 'hono/html';

const Layout = ({ children }: { children: any }) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Currency — Rendi Riz</title>
      <link rel="icon" href="/static/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Marcellus&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link href="/static/styles.css" rel="stylesheet" />
      <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    </head>
    <body>
      <main>${children}</main>
      <footer class="mt-8 border-t">
        <div class="mx-auto w-full max-w-4xl p-4">
          <div
            class="flex flex-col justify-between gap-2 text-center md:flex-row"
          >
            <span>
              Made with
              <a
                class="text-gray-800 hover:text-blue-500 hover:underline"
                href="https://hono.dev"
                target="_blank"
              >
                Hono
              </a>
              +
              <a
                class="text-gray-800 hover:text-blue-500 hover:underline"
                href="https://htmx.org"
                target="_blank"
              >
                htmx
              </a>
            </span>
            <a
              class="text-gray-800 hover:text-blue-500 hover:underline"
              href="https://github.com/rendiriz/currency"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </body>
  </html>
`;

export default Layout;
