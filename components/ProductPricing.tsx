export default function ProductPricing() {
    return (
      <div class="mt-4">
        <label class="inline-flex items-center">
          <input class="form-checkbox h-5 w-5 text-calchamber-blue" type="checkbox" />
          <span class="ml-2 text-gray-700">Auto-Ship</span>
        </label>
        <div class="mt-4">
          <div class="text-gray-700">
            Your Price: <span class="font-bold">$56.99</span>
          </div>
          <div class="flex items-center mt-2">
            <div class="flex items-center border border-gray-400 rounded-md">
              <button class="px-3 py-1 hover:bg-gray-200">-</button>
              <input class="w-12 text-center focus:outline-none" type="number" value="1" />
              <button class="px-3 py-1 hover:bg-gray-200">+</button>
            </div>
            <button class="bg-orange-500 text-white font-bold px-6 py-2 rounded-md ml-4 hover:bg-orange-600">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
  