import { FaFacebook, FaInstagram, FaMap, FaWpexplorer } from "react-icons/fa";

function Page() {
  return (
    <footer className="row-start-3 flex flex-col items-center justify-center gap-4 bg-green-900 p-5 text-white">
      {/* Social Icons */}
      <div className="flex gap-6">
        <a
          href="https://web.facebook.com/profile.php?id=100090359761897"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://maps.app.goo.gl/T6PAxuVMRanKVXD86"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 text-2xl"
        >
          <FaMap />
        </a>
      </div>

      {/* Footer Text */}
      <p>SOMXAY COFFEE © 2025. All rights reserved.</p>
    </footer>
  );
}
export default Page;
