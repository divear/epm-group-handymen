import { MdMail, MdPlace } from 'react-icons/md';         
import { AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="px-10 py-2 bg-emerald-700 text-white flex items-center justify-between">
          <a href="mailto:contact@easypropertymaintenance.ie" className="flex items-center gap-2 hover:text-emerald-200">
            <MdMail size={18} />
            contact@easypropertymaintenance.ie
          </a> 
          <div className="flex items-center gap-6 ml-auto">
            <a href="https://www.google.com/maps/place/Bank+House+Business+Centre/@53.3336115,-6.2942839,17z/data=!3m1!4b1!4m6!3m5!1s0x48670c3fdcb36a15:0xa0b72d9969673e16!8m2!3d53.3336115!4d-6.2917036!16s%2Fg%2F11rkj2pddx?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" className="flex items-center gap-2 hover:text-emerald-200">
              <MdPlace size={18} />
              Bank House, 331 S Circular Rd, Saint James, Dublin 8, D08 FH3E, Ireland
            </a>
            <a href="https://www.instagram.com/easypropertymaintenance/" className="flex items-center gap-2 hover:text-emerald-200 ml-4">
              <AiFillInstagram size={18} />
              Follow us on Instagram
            </a>
          </div>
      </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Image src="/epm-logo.webp" alt="EPM Handyman Services logo" width={180} height={180} className="mb-2" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">EPM Handyman Services</p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Reliable repairs, renovations & maintenance</h1>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-600">Call us today</p>
            <a href="tel:+35312554422" className="text-lg font-semibold text-emerald-700">
              01 255 4422
            </a>
          </div>
        </div>
      </header>

      <Image src="/home-repair-hero.webp" alt="Home repair services" width={1200} height={600} className="w-full object-cover z-0 " />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center bg-emerald-100 p-10 rounded-3xl">
          <div className="space-y-6 ">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Fast, friendly home repairs for every room.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              From plumbing fixes and electrical support to kitchen renovations and general maintenance, we help homeowners keep properties safe, comfortable and full of value.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-base font-semibold text-white shadow-sm shadow-emerald-700/20 transition hover:bg-emerald-800">
                Book a service
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
                View services
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-700 p-8 text-base shadow-xl shadow-slate-900/10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-900">Your trusted tradespeople</p>
              <h3 className="text-3xl font-semibold">Quality workmanship. Clear pricing. Same-day response.</h3>
              <p className="leading-7 text-base-800/90">
                Fully insured and experienced, we deliver repairs and small renovations with a personal touch. No call-out surprises, no long waits.
              </p>
              <ul className="space-y-3 text-sm text-base-100/90">
                <li>• Free estimate & transparent quote</li>
                <li>• 10+ years of local experience</li>
                <li>• Work guaranteed for your peace of mind</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Services we offer</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything from small repairs to full renovations.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
              <h4 className="mb-3 text-xl font-semibold">General Repairs</h4>
              <p className="text-slate-600">Fix drywall, doors, windows, paintwork, cabinetry and more to keep your home in top condition.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
              <h4 className="mb-3 text-xl font-semibold">Plumbing & Drainage</h4>
              <p className="text-slate-600">Install taps, repair leaks, unblock drains and maintain bathrooms, kitchens and laundry areas.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
              <h4 className="mb-3 text-xl font-semibold">Electrical & Lighting</h4>
              <p className="text-slate-600">Replace switches, fit lighting, service sockets and handle safe electrical upgrades.</p>
            </article>
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6 rounded-3xl bg-slate-900 p-10 text-white shadow-xl shadow-slate-900/20">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Why choose us</p>
            <h3 className="text-3xl font-semibold">Dependable workmanship for busy homeowners.</h3>
            <ul className="space-y-4 text-slate-100/90">
              <li>• Responsive support with fast appointments.</li>
              <li>• Experienced trades, friendly communication.</li>
              <li>• Clear quotes, no hidden fees, every job finished right.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-10 shadow-sm shadow-slate-200/80">
            <h3 className="text-2xl font-semibold">Client testimonial</h3>
            <p className="mt-5 text-slate-600 leading-8">
              “The team arrived on time, diagnosed the issue quickly and completed the repairs with care. Their service made our home feel safe and fresh again.”
            </p>
            <p className="mt-6 font-semibold text-slate-900">— Local homeowner</p>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl bg-white p-10 shadow-sm shadow-slate-200/80">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Get in touch</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Ready to schedule your repair or quote?</h3>
              <p className="mt-4 max-w-xl text-slate-600">
                Call or email us for a fast response. We’re happy to discuss your project and arrange a convenient visit.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a href="tel:+35312554422" className="text-lg font-semibold text-emerald-700">
                  01 255 4422
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href="mailto:contact@easypropertymaintenance.ie" className="text-lg font-semibold text-slate-900">contact@easypropertymaintenance.ie</a>
              </div>
              <div>
                <p className="text-sm text-slate-500">Service area</p>
                <p className="text-lg font-semibold text-slate-900">Local homes and businesses</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
