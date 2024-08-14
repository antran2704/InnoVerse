import Link from "next/link";
import { LOGO_IMAGE } from "~/common/image";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container__custom md:py-12 py-8 mx-auto flex items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <img
              src={LOGO_IMAGE}
              alt="InnoVerse Logo"
              title="InnoVerse Logo"
              className="min-w-[160px] w-[160px] h-[80px] md:mx-0 mx-auto object-contain object-center"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left mx-auto text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Home
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/#product"}
                  className="text-gray-600 hover:text-primary-100">
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href={"/#why"}
                  className="text-gray-600 hover:text-primary-100">
                  Why choose Innoverse
                </Link>
              </li>
              <li>
                <Link
                  href={"/#statistics"}
                  className="text-gray-600 hover:text-primary-100">
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  href={"/#feedback"}
                  className="text-gray-600 hover:text-primary-100">
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href={"/#customer"}
                  className="text-gray-600 hover:text-primary-100">
                  Partner & Customer
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              About us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href={"/about-us#about-us"}
                  className="text-gray-600 hover:text-primary-100">
                  Introduce
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us#vision"}
                  className="text-gray-600 hover:text-primary-100">
                  Vison
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us#brand-message"}
                  className="text-gray-600 hover:text-primary-100">
                  Brand message
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us#team"}
                  className="text-gray-600 hover:text-primary-100">
                  Team
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <span>Email: </span>
                <a
                  href="mailto:sales@innoverse.vn"
                  className="text-gray-600 hover:text-primary-100">
                  sales@innoverse.vn
                </a>
              </li>
              <li>
                <span>Phone: </span>
                <a
                  href="tel:0943743753"
                  className="text-gray-600 hover:text-primary-100">
                  0943743753
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100">
        <div className="container__custom mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Innoverse
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
