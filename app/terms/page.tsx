import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Legal terms and conditions for using the Dublin Handyman Services website.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-4xl bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-bold mb-2 text-emerald-900">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-400 mb-8 font-medium">
          Last updated: 15-Aug-2025
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">Acceptance of Terms:</strong> By
            accessing our website, you agree to these Terms and our Privacy and
            Cookie Policies.
          </p>

          <p>
            <strong className="text-slate-900">
              Quotes, orders, and services:
            </strong>{" "}
            Website enquiries are invitations to treat and not binding offers.
            Work proceeds subject to written confirmation, scope, pricing, and
            our Service Terms or framework agreements where applicable.
          </p>

          <p>
            <strong className="text-slate-900">Acceptable use:</strong> You
            agree not to misuse the site, interfere with security, attempt
            unauthorised access, or engage in scraping or automated data
            collection without permission.
          </p>

          <p>
            <strong className="text-slate-900">Intellectual property:</strong>{" "}
            All site content, trademarks, and logos are owned by us or our
            licensors. You receive a limited, revocable, non-exclusive licence
            to access the site for legitimate business purposes.
          </p>

          <p>
            <strong className="text-slate-900">Third-party links:</strong> We
            are not responsible for external websites or resources.
          </p>

          <p>
            <strong className="text-slate-900">How we use cookies:</strong>{" "}
            Strictly necessary (no consent): core site functions, security, load
            balancing. Preferences (consent): remember choices (e.g., language).
            Analytics (consent): understand site usage to improve services.
            Marketing (consent): measure and improve campaigns.
          </p>

          <p>
            <strong className="text-slate-900">Liability:</strong> To the
            fullest extent permitted by Irish law, we disclaim liability for any
            loss or damage arising from reliance on website content or use of
            the site.
          </p>

          <p>
            <strong className="text-slate-900">Governing law:</strong> These
            Terms are governed by the laws of Ireland, and disputes are subject
            to the exclusive jurisdiction of the Irish courts.
          </p>
        </div>
      </div>
    </div>
  );
}
