import { MdMail, MdPlace } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-6">
        Have questions or need assistance? Reach out to us!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-600 mb-4">
            Call or email us for a fast, 24/7 response.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <a
                href="tel:+35312554422"
                className="text-lg font-semibold text-emerald-700"
              >
                01 255 4422
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-500">Support Email</p>
              <a
                href="mailto:contact@easypropertymaintenance.ie"
                className="text-sm font-semibold text-slate-900 block"
              >
                contact@easypropertymaintenance.ie
              </a>
              <a
                href="mailto:operations@easypropertymaintenance.ie"
                className="text-sm font-semibold text-slate-900 block"
              >
                operations@easypropertymaintenance.ie
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-500">Address</p>
              <p className="text-sm font-medium text-slate-900 leading-snug">
                Bank House, 331 S Circular Rd,
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <p className="text-slate-600 mb-4">
            Stay updated with our latest news and updates.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/easypropertymaintenance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800"
            >
              <AiFillInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
