import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-4xl bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-bold mb-2 text-emerald-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-8 font-medium">
          Last updated: 15-Aug-2025
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">Who we are:</strong> We are Easy
            Property Maintenance (“we”, “us”, “our”), a property maintenance
            provider operating in Ireland. We act as a data controller when we
            determine the purposes and means of processing personal data and as
            a data processor when acting on behalf of clients under contract.
          </p>

          <p>
            <strong className="text-slate-900">What data we collect:</strong>{" "}
            Identity and contact data: name, company, role, email, phone,
            address. Job applicant data: CV, qualifications, references (when
            you apply for vacancies).
          </p>

          <p>
            <strong className="text-slate-900">
              Why we use your data (lawful bases):
            </strong>{" "}
            Contract: to provide quotes, deliver services, manage accounts and
            payments. Legitimate interests: service improvement, site security,
            fraud prevention, business records. Consent: optional marketing and
            non-essential cookies. Legal obligations: tax, accounting, health
            and safety, incident reporting.
          </p>

          <p>
            <strong className="text-slate-900">Sharing your data:</strong> We
            share data with service providers under contract (hosting,
            email/CRM, analytics, payment, courier/parts suppliers, vetted
            subcontractors) on a need-to-know basis with data processing
            agreements and appropriate safeguards. We do not sell personal data.
          </p>

          <p>
            <strong className="text-slate-900">International transfers:</strong>{" "}
            Where vendors are outside the EEA, we rely on adequacy decisions or
            EU Standard Contractual Clauses with supplementary measures as
            needed.
          </p>

          <p>
            <strong className="text-slate-900">Retention:</strong> We keep
            enquiry data up to 24 months, client/service records up to 6 years,
            financial records up to 6 years, and job applications up to 12
            months (unless retained longer with consent). We apply longer
            retention where legally required or to establish or defend legal
            claims.
          </p>

          <p>
            <strong className="text-slate-900">Your rights:</strong> You have
            rights of access, rectification, erasure, restriction, portability,
            and objection, plus the right to withdraw consent at any time. To
            exercise rights, contact us at contact@easypropertymaintenance.ie.
            You may complain to the Data Protection Commission
            (www.dataprotection.ie).
          </p>

          <p>
            <strong className="text-slate-900">Cookies:</strong> We use
            essential cookies and, with consent, analytics/marketing cookies.
            Non-essential cookies are only set after opt-in via our Cookie
            Banner. You can change preferences at any time via “Cookie
            Settings.”
          </p>

          <p>
            <strong className="text-slate-900">Security:</strong> We implement
            technical and organisational measures, including access controls,
            encryption in transit where applicable, least-privilege access, and
            vendor due diligence.
          </p>

          <p>
            <strong className="text-slate-900">Third-party websites:</strong>{" "}
            Our site may link to third-party sites with their own policies. We
            are not responsible for their practices.
          </p>
        </div>
      </div>
    </div>
  );
}
