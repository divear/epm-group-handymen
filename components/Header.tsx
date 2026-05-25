import Image from "next/image";
import { MdMail, MdPlace } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function Header() {
  return (
    <header className="border-b border-emerald-800 bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-200 backdrop-blur-xl">
      <div className="flex items-center justify-between px-10 py-2 text-white bg-emerald-700">
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
      <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
        <a href="/">
          <Image
            src="/handymen-light-logo.png"
            alt="Handyman Services logo"
            width={180}
            height={180}
            className="mb-2 "
          />
        </a>
        <div className="links flex items-center gap-8 ml-10 text-2xl font-medium">
          <a href="/">Home</a>
          <a href="/about-us">About us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-600">Call us today</p>
          <a
            href="tel:+35312554422"
            className="text-lg font-semibold text-emerald-700"
          >
            01 255 4422
          </a>
        </div>
      </div>
    </header>
  );
}
