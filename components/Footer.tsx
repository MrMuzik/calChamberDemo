export default function Footer() {
  return (
    <footer>
      {/* Column Section */}
      <div class="bg-calchamber-blue-medium text-white py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 class="font-bold mb-4 text-white">Popular</h3>
            <ul>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Posters</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Seminars</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Live Webinars</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Online Courses</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Employee Handbook Creator</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4 text-white">Contact Us</h3>
            <ul>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">About Us</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Customer Support</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Career Opportunities</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Free Newsletters</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Return/Cancellation Policy</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Training Login</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4 text-white">My Account</h3>
            <ul>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Open Orders</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Orders</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Recently Viewed</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4 text-white">Stay Connected</h3>
            <ul>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Facebook</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Twitter</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">LinkedIn</a></li>
              <li><a class="hover:text-gray-200 text-link-blue-light" href="#">Free Mobile Apps</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div class="bg-calchamber-blue text-white text-center py-4 w-full">
        <p class="text-sm">
          © 2024 CalChamber Store | 
          <a class="text-link-blue-light hover:text-gray-200 ml-1" href="#">Terms and Conditions</a>,
          <a class="text-link-blue-light hover:text-gray-200 ml-1" href="#">Terms of Use</a>,
          <a class="text-link-blue-light hover:text-gray-200 ml-1" href="#">About Our Ads</a>,
          <a class="text-link-blue-light hover:text-gray-200 ml-1" href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
