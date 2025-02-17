export default function Footer() {
  return (
    <footer class="bg-calchamber-blue text-white mt-12 py-8">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 class="font-bold mb-4">Popular</h3>
          <ul>
            <li><a class="hover:text-gray-200" href="#">Posters</a></li>
            <li><a class="hover:text-gray-200" href="#">Seminars</a></li>
            <li><a class="hover:text-gray-200" href="#">Live Webinars</a></li>
            <li><a class="hover:text-gray-200" href="#">Online Courses</a></li>
            <li><a class="hover:text-gray-200" href="#">Employee Handbook Creator</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">Contact Us</h3>
          <ul>
            <li><a class="hover:text-gray-200" href="#">About Us</a></li>
            <li><a class="hover:text-gray-200" href="#">Customer Support</a></li>
            <li><a class="hover:text-gray-200" href="#">Career Opportunities</a></li>
          </ul>
        </div>
        <div class="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center">
          <p class="text-sm">© 2024 CalChamber Store | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
