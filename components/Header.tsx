export default function Header() {
  return (
    <header>
      <div class="bg-calchamber-blue text-white py-2">
        <div class="container mx-auto px-4 flex items-center justify-between">
          <a class="text-2xl font-serif text-white" href="#">
            <span class="font-bold">Cal</span>
            <span class="text-calchamber-blue-light">Chamber</span>
            &nbsp;Store
          </a>
          <div class="flex-grow mx-8">
            <div class="relative max-w-md mx-auto">
              <input
                class="w-full bg-white text-gray-800 px-4 py-2 rounded-md focus:outline-none text-sm"
                placeholder="Search store"
                type="text"
              />
              <button class="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-md hover:bg-orange-600">
                <i class="fas fa-search text-calchamber-blue"></i>
              </button>
            </div>
          </div>
          <div class="flex items-center">
            <a class="text-sm hover:text-gray-200 flex flex-col items-center" href="#">
              <i class="far fa-user"></i>
              Account
            </a>
            <a class="text-sm hover:text-gray-200 ml-4 flex flex-col items-center" href="#">
              <i class="fas fa-shopping-cart"></i>
              Cart
            </a>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 py-2">
        <div class="container mx-auto px-4">
          <button class="text-calchamber-blue hover:text-blue-700 font-semibold">MENU</button>
        </div>
      </div>
    </header>
  );
}
