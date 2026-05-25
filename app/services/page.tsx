import {
  MdFlashOn,
  MdPlumbing,
  MdSecurity,
  MdWaves,
  MdRoofing,
  MdMeetingRoom,
  MdLocalFireDepartment,
  MdFormatPaint,
  MdPark,
  MdAssignment,
} from "react-icons/md";

export default function Services() {
  const services = [
    {
      title: "Electrical Services",
      description:
        "Urgent fault finding, safe isolation, power restoration, and post‑incident recommendations.",
      icon: <MdFlashOn size={28} />,
    },
    {
      title: "Emergency Plumbing",
      description:
        "Burst pipes, leaks, blockages, isolation, and coordinated dry‑out where needed.",
      icon: <MdPlumbing size={28} />,
    },
    {
      title: "Security Services",
      description:
        "Rapid response for alarms, access control, CCTV faults, and site re‑securing.",
      icon: <MdSecurity size={28} />,
    },
    {
      title: "Drainage Services",
      description:
        "Emergency unblocking, flood response, and safe reinstatement of critical areas.",
      icon: <MdWaves size={28} />,
    },
    {
      title: "Roofing Services",
      description:
        "Storm damage make‑safe, leak tracing, and temporary weatherproofing.",
      icon: <MdRoofing size={28} />,
    },
    {
      title: "Glazing, Doors & Access",
      description:
        "Re‑glazing, boarding, roller shutters and auto door callouts, safe access restoration.",
      icon: <MdMeetingRoom size={28} />,
    },
    {
      title: "Fire & Life Safety",
      description:
        "Callouts for fire alarms, emergency lighting, extinguishers, and suppression issues.",
      icon: <MdLocalFireDepartment size={28} />,
    },
    {
      title: "Painting & Decorating",
      description:
        "Fast make‑good and finish matching after leaks, impact, or flood.",
      icon: <MdFormatPaint size={28} />,
    },
    {
      title: "Landscaping Services",
      description:
        "External make‑safe and reinstatement post‑storm or incident.",
      icon: <MdPark size={28} />,
    },
    {
      title: "Insurance & Storm Repair",
      description:
        "Documentation, make‑safe, and costed remedials aligned with insurer expectations.",
      icon: <MdAssignment size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Multi-Trade Expertise
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl">
            Core Emergency Capabilities
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            When a fault disrupts operations, every minute matters. Dublin
            Handymen provides nationwide rapid-response teams to handle urgent
            failures across all major trades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-emerald-100 text-emerald-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Missing Service Alert */}
        <div className="bg-emerald-100/50 border border-emerald-200 rounded-3xl p-8 md:p-10 text-center mb-16">
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Don't see your specific requirement?
          </h3>
          <p className="text-emerald-800 max-w-2xl mx-auto">
            These are typical emergencies we handle, but our capability extends
            further across specialist systems including lifts and essential
            plant breakdown. If a service isn't listed, we'll scope and deliver
            it to your brief through our specialist network.
          </p>
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
