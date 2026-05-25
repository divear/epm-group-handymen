import { MdMail, MdPlace } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-300 to-slate-100 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-red/95 backdrop-blur-xl">
        <div className="px-10 py-2 bg-emerald-700 text-white flex items-center justify-between">
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Image
            src="/handymen-light-logo.png"
            alt="Handyman Services logo"
            width={180}
            height={180}
            className="mb-2 "
          />
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

      {/* Hero Video Section */}
      <div className="-mt-1 relative h-[85vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/handymen_epm.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center bg-emerald-100 p-10 rounded-3xl -mt-122 relative z-10 shadow-2xl">
          <div className="space-y-9">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fast, friendly home repairs for every room.
            </h2>
            <p className="text-lg text-slate-600">
              From plumbing fixes and electrical support to kitchen renovations,
              we help homeowners keep properties safe.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="/contact" className="btn-primary">
                Book a service
              </a>
              <a href="/services" className="btn-secondary">
                View services
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Your trusted tradespeople
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Free estimate & transparent quote</li>
              <li>• 10+ years of local experience</li>
              <li>• Work guaranteed for your peace of mind</li>
            </ul>
          </div>
        </section>

        <section id="services">
          <div className="pt-20 mb-10 text-center">
            <p className="section-label">Services we offer</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything from small repairs to full renovations.
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="card-service">
              <h4 className="mb-3 text-xl font-semibold">General Repairs</h4>
              <p className="text-slate-600">
                Fix drywall, doors, windows, paintwork, cabinetry and more.
              </p>
            </article>
            <article className="card-service">
              <h4 className="mb-3 text-xl font-semibold">
                Plumbing & Drainage
              </h4>
              <p className="text-slate-600">
                Install taps, repair leaks, unblock drains and maintain
                bathrooms.
              </p>
            </article>
            <article className="card-service">
              <h4 className="mb-3 text-xl font-semibold">
                Electrical & Lighting
              </h4>
              <p className="text-slate-600">
                Replace switches, fit lighting, service sockets and electrical
                upgrades.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-emerald-800 text-white rounded-3xl p-12 shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              We Provide Experienced & Quality Services
            </h2>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700">
                <h3 className="font-bold text-xl mb-2 text-white">
                  Certified Technicians
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  Experts trained and certified to handle any task
                  professionally.
                </p>
              </div>

              <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700">
                <h3 className="font-bold text-xl mb-2 text-white">
                  24/7 Services
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  Reliable maintenance, support anytime, day or night, every
                  day.
                </p>
              </div>

              <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-700">
                <h3 className="font-bold text-xl mb-2 text-white">
                  Dependable Warranty
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  Long-lasting coverage ensuring confidence in every service.
                </p>
              </div>
            </div>

            <a
              href="mailto:contact@easypropertymaintenance.ie"
              className="inline-block btn-white"
            >
              Request a Service Quote
            </a>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="section-label text-emerald-700 font-semibold uppercase tracking-widest text-sm">
                Our Process
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, stress-free property care.
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {/* Step 1 */}
              <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center z-10">
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h4 className="text-xl font-bold mb-3">Request a Quote</h4>
                <p className="text-slate-600">
                  Send us a message or call with your repair details. We provide
                  transparent, upfront pricing with no hidden fees.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center z-10">
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h4 className="text-xl font-bold mb-3">Expert Repair</h4>
                <p className="text-slate-600">
                  Our fully insured, multi-trade professionals arrive on time
                  and complete the work safely and efficiently.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center z-10">
                <div className="w-12 h-12 mx-auto bg-emerald-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h4 className="text-xl font-bold mb-3">Peace of Mind</h4>
                <p className="text-slate-600">
                  We clean up our workspace and guarantee our repairs, leaving
                  your property in perfect condition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section
        id="first-contact"
        className="rounded-t-xl bg-emerald-200 p-10 shadow-sm border border-slate-200"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold tracking-tight">
              Need to Schedule Your First Service?
            </h3>
            <p className="mt-4 text-slate-600">
              Hassle-free property care with experts ready to assist you quickly
              and professionally.
            </p>
          </div>

          <div className="flex justify-end lg:justify-end">
            <a
              href="/contact"
              className=" inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-800"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="card-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Column 1: Get in Touch */}
          <div>
            <p className="section-label-emerald">Get in touch</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">
              Ready to schedule your repair or quote?
            </h3>
            <p className="mt-4 text-slate-600">
              Call or email us for a fast, 24/7 response.
            </p>
          </div>

          {/* Column 2: Contact Details */}
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
                <br />
                Saint James, Dublin 8, D08 FH3E, Ireland
              </p>
            </div>
          </div>

          {/* Column 3: About & Boilerplate */}
          <div className="text-sm text-slate-600 space-y-4">
            <p>
              We are proud to be part of the EPM Group, a network of businesses
              committed to delivering exceptional customer service.
            </p>
            <p>
              We provide a comprehensive property solution, offering both
              reactive and planned maintenance to meet all your facility needs.
            </p>
            <div className="flex gap-4 mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400">
              <a href="/privacy" className="hover:text-emerald-700">
                Privacy
              </a>
              <a href="/terms" className="hover:text-emerald-700">
                Terms of use
              </a>
              <a href="/disclaimer" className="hover:text-emerald-700">
                Disclaimer
              </a>
              <a href="/refund" className="hover:text-emerald-700">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
