import { MdMail, MdPlace, MdPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function Contact() {
  return (
    <div className=" bg-slate-50 text-slate-900 py-10 px-6">
      <div className="mx-auto max-w-5xl bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-emerald-900">
            Have questions or need assistance?
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Reach out to us for a fast, 24/7 response.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-100 p-3 rounded-full text-emerald-700">
                  <MdPhone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+35312554422"
                    className="text-xl font-bold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    01 255 4422
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-100 p-3 rounded-full text-emerald-700">
                  <MdMail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Support Email
                  </p>
                  <a
                    href="mailto:contact@easypropertymaintenance.ie"
                    className="text-base font-medium text-slate-900 hover:text-emerald-700 block transition"
                  >
                    contact@easypropertymaintenance.ie
                  </a>
                  <a
                    href="mailto:operations@easypropertymaintenance.ie"
                    className="text-base font-medium text-slate-900 hover:text-emerald-700 block transition mt-1"
                  >
                    operations@easypropertymaintenance.ie
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-100 p-3 rounded-full text-emerald-700">
                  <MdPlace size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-base font-medium text-slate-900 leading-relaxed">
                    Bank House, 331 S Circular Rd,
                    <br />
                    Saint James, Dublin 8, D08 FH3E, Ireland
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 bg-emerald-800 p-8 md:p-10 rounded-2xl text-white shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-emerald-100 leading-relaxed mb-8">
                Stay updated with our latest news, recent projects, and facility
                maintenance tips across Dublin.
              </p>
              <a
                href="https://www.instagram.com/easypropertymaintenance/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition"
              >
                <AiFillInstagram size={24} className="text-emerald-700" />
                Instagram
              </a>
            </div>

            <div className="pt-8 border-t border-emerald-700">
              <h3 className="text-lg font-bold mb-2">Always Available</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                We are proud to be part of the EPM Group, providing
                comprehensive reactive and planned maintenance to meet all your
                facility needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
