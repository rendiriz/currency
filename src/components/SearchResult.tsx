import { html } from 'hono/html';

type SearchResult = {
  from: string;
  to: string;
  date: string;
  rate: number;
};

function SearchResult({ data }: { data?: SearchResult }) {
  if (!data) return html`<div id="search-result"></div>`;

  return (
    <div id="search-result">
      <div class="flex flex-col gap-1">
        <div class="text-xs text-gray-500">{data.date}</div>
        <div>
          1 <span class="uppercase">{data.from}</span> ={' '}
          {Number(data.rate).toLocaleString('id')}{' '}
          <span class="uppercase">{data.to}</span>
        </div>

        <div class="mt-3 flex flex-col gap-2">
          <input
            type="text"
            name="input"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder={`... ${data.from.toUpperCase()}`}
            hx-post="/calculate"
            hx-include="[name='rate']"
            hx-target="#calculate"
            hx-trigger="keyup changed delay:500ms"
          />
          <input name="rate" type="hidden" value={data.rate} />
          <div>
            <span id="calculate">0</span>{' '}
            <span class="uppercase">{data.to}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
