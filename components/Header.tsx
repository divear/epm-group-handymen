import Image from "next/image";
import { MdMail, MdPlace, MdClose, MdOutlineMenu } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800 bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-200 backdrop-blur-xl">
      <div className="hidden lg:flex items-center justify-between md:px-10 md:py-2 text-white bg-emerald-700">
        <a
          href="mailto:contact@easypropertymaintenance.ie"
          className="link-icon"
        >
          <MdMail size={18} />
          contact@easypropertymaintenance.ie
        </a>
        <div className="flex items-center gap-6 ml-auto">
          <a
            href="https://www.google.com/maps/place/Bank+House+Business+Centre/@53.3336115,-6.2942839,17z/data=!3m1!4b1!4m6!3m5!1s0x48670c3fdcb36a15:0xa0b72d9969673e16!8m2!3d53.3336115!4d-6.2917036!16s%2Fg%2F11rkj2pddx?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            className="link-icon"
          >
            <MdPlace size={18} />
            Bank House, 331 S Circular Rd, Dublin 8
          </a>
          <a
            href="https://www.instagram.com/easypropertymaintenance/"
            className="link-icon ml-4"
          >
            <AiFillInstagram size={18} />
            Follow us on Instagram
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-1 mx-auto max-w-7xl">
        <a href="/">
          <Image
            src="/handymen-light-logo.png"
            alt="Handyman Services logo"
            width={180}
            height={180}
            className="mb-2 h-19 w-auto" // Using Tailwind to resize dynamically
            style={{ width: "auto" }}
          />
        </a>
        <div className="hidden  links md:flex items-center gap-8 ml-10 text-2xl font-medium">
          <a href="/">Home</a>
          <a href="/about-us">About us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="hidden md:block md:text-right">
          <p className="text-sm font-medium text-slate-600">Call us today</p>
          <a
            href="tel:+35312554422"
            className="text-lg font-semibold text-emerald-700"
          >
            01 255 4422
          </a>
        </div>
        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="peer hidden"
        />

        <label
          htmlFor="mobile-menu-toggle"
          className="md:hidden text-4xl text-emerald-100 cursor-pointer select-none z-50 relative"
        >
          {/* Menu Icon shows when unchecked, Close Icon shows when checked */}
          <span className="peer-checked:hidden block">
            <MdOutlineMenu />
          </span>
          <span className="peer-checked:block hidden">
            <MdClose />
          </span>
        </label>

        {/* Mobile Dropdown Menu Drawer */}
        <div className="absolute top-full right-0 left-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200 transition-all duration-300 transform origin-top scale-y-0 opacity-0 pointer-events-none peer-checked:scale-y-100 peer-checked:opacity-100 peer-checked:pointer-events-auto md:hidden z-40">
          <nav className="flex flex-col p-6 font-medium text-xl text-slate-800 divide-y divide-slate-100">
            <a
              href="/"
              className="py-3 hover:text-emerald-700 transition-colors"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="py-3 hover:text-emerald-700 transition-colors"
            >
              About us
            </a>
            <a
              href="/services"
              className="py-3 hover:text-emerald-700 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="py-3 hover:text-emerald-700 transition-colors"
            >
              Contact us
            </a>
            <div className="py-4 mt-2">
              <p className="text-xs text-slate-500 font-normal">
                Call us today
              </p>
              <a
                href="tel:+35312554422"
                className="text-lg font-bold text-emerald-700"
              >
                01 255 4422
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
