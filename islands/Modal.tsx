import { useEffect } from "preact/hooks";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  // Close the modal when pressing the "Escape" key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Close Modal"
        >
          <span class="text-2xl font-bold">×</span>
        </button>

        {/* Modal Content */}
        <h2 class="text-lg font-bold text-calchamber-blue mb-4">Find Your Required Posters</h2>
        <p><a href="/product/single" class="text-link-blue"><strong>For employers with 1-4 employees:</strong></a><br />San Francisco Labor Law Notice Poster</p>
        <p class="mt-2"><a href="/product/double" class="text-link-blue"><strong>For employers with 5-19 employees:</strong></a><br />San Francisco Labor Law Notice Poster<br />San Francisco Fair Chance Notice</p>
        <p class="mt-2"><a href="/product/triple" class="text-link-blue"><strong>For employers with 20+ employees:</strong></a><br />San Francisco Labor Law Notice Poster<br />San Francisco Fair Chance Notice<br />San Francisco Workplace Ordinances Poster</p>
        <p class="mt-2"><a href="/" class="text-link-blue"><strong>For employers with 100+ employees:</strong></a><br />San Francisco Labor Law Notice Poster<br />San Francisco Fair Chance Notice<br />San Francisco Workplace Ordinances Poster<br />San Francisco Public Health Emergency & Military Leave Notices Poster</p>
        <p class="mt-2"><strong>For chain stores (formula retailers) with 40+ locations and 20+ employees:</strong><br />San Francisco Formula Retail Employee Rights Ordinance Poster</p>
        <p class="mt-4">Need help choosing? Our compliance experts are here to assist! <a href="#" class="text-link-blue">Chat Now</a> or Call <strong>(800) 331-8877</strong>.</p>
      </div>
    </div>
  );
}
