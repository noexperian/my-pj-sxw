import {
  FaFacebook,
  FaInstagram,
  FaMap,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://web.facebook.com/profile.php?id=100090359761897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://maps.app.goo.gl/T6PAxuVMRanKVXD86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaMap />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm md:text-base">
          SOMXAY COFFEE © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
