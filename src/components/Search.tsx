const currencies = [
  { symbol: 'usd', name: 'United States Dollar' },
  { symbol: 'idr', name: 'Indonesian Rupiah' },
  { symbol: 'sgd', name: 'Singapore Dollar' },
  { symbol: 'thb', name: 'Thai Baht' },
  { symbol: 'myr', name: 'Malaysian Ringgit' },
];

function Search() {
  return (
    <form hx-post="/currency" hx-target="#search-result">
      <div class="mb-8 grid gap-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              for="from"
              class="mb-2 block text-sm font-medium text-gray-900"
            >
              From
            </label>
            <select
              id="from"
              name="from"
              class="from block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option selected>Select Currency</option>
              {currencies.map((item, index) => (
                <option key={index} value={item.symbol}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              for="to"
              class="mb-2 block text-sm font-medium text-gray-900"
            >
              To
            </label>
            <select
              id="to"
              name="to"
              class="to block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option selected>Select Currency</option>
              {currencies.map((item, index) => (
                <option key={index} value={item.symbol}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          class="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
