import { MdHomeRepairService, MdHandshake, MdSecurity } from "react-icons/md";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dublin Handyman Services, our mission, values, and commitment to providing reliable home maintenance solutions in Dublin.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            24/7 Emergency Response
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl">
            Urgent Property Support
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fast, expert response for urgent faults across all trades. We
            stabilise risk, restore operations, and keep your business and
            property moving.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center mb-20">
          {/* Left Column: The Narrative */}
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              When a sudden fault disrupts operations, every minute matters. At{" "}
              <strong className="text-slate-900">Dublin Handymen</strong>, our
              rapid-response teams handle urgent failures across electrical,
              plumbing, roofing, glazing, security, and drainage—day or night.
            </p>
            <p>
              We prioritise safety, fast attendance, and immediate make‑safe or
              full repair, with transparent updates throughout. If a requirement
              isn't immediately listed, we scope and deliver it to your brief
              through our specialist network.
            </p>
            <div className="bg-emerald-100/50 p-6 rounded-2xl border border-emerald-100 mt-8 text-emerald-900">
              <h3 className="font-bold text-xl mb-2">
                Backed by the EPM Group
              </h3>
              <p className="text-base text-emerald-800">
                As a proud division of the <strong>EPM Group</strong>, we
                deliver fast, reliable facility services for commercial and
                residential spaces. Enjoy the agility of a dedicated Dublin
                response team with the rigorous safety standards and compliance
                reporting of a major facility network.
              </p>
            </div>
          </div>

          {/* Right Column: Core Values (Aligned to EPM Reactive Maintenance) */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-5 items-start">
              <div className="bg-emerald-100 text-emerald-700 p-4 rounded-full shrink-0">
                <MdHomeRepairService size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  Multi-Trade Expertise
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nationwide coverage capabilities managed locally. We deploy
                  the right trade to your site immediately, handling everything
                  from safe electrical isolation to emergency plumbing and storm
                  repair.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-5 items-start">
              <div className="bg-emerald-100 text-emerald-700 p-4 rounded-full shrink-0">
                <MdSecurity size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  Rapid On-Site Stabilisation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Priority logging and dispatch, 24/7/365. Our primary goal is
                  to isolate hazards and restore function or make the site safe
                  instantly to prevent further property damage.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-5 items-start">
              <div className="bg-emerald-100 text-emerald-700 p-4 rounded-full shrink-0">
                <MdHandshake size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">
                  Transparent Communication
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No fixed contracts required. We provide clear ETAs, costed
                  remedial options, and complete close-out packs featuring
                  photos, root cause notes, and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bottom */}
        <div className="bg-emerald-800 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Need to Schedule Your First Service?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg">
            Hassle-free property care with experts ready to assist you quickly
            and professionally. Call our 24/7 support center now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+35312554422"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-emerald-900 transition hover:bg-slate-100"
            >
              Call 01 255 4422
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 border border-emerald-600 px-8 py-3 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
