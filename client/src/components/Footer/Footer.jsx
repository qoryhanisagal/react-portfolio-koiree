export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-4 border-t border-gray-300">
      <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} — All rights reserved by{' '}
          <span className="text-pink-500 font-semibold">Descoteaux Designs</span>
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/qoryhanisagal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl hover:text-primary"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl hover:text-primary"></i>
          </a>
          <a
            href="https://tiktok.com/@sequoyahdozier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok text-xl hover:text-primary"></i>
          </a>
          <a
            href="https://facebook.com/qoryhanisagal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-xl hover:text-primary"></i>
          </a>
          <a
            href="https://instagram.com/sequoyahdozier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl hover:text-primary"></i>
          </a>
          <a
            href="https://linkedin.com/in/sequoyahdozier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl hover:text-primary"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}