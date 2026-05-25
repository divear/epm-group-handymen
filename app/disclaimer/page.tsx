export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-4xl bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-bold mb-2 text-emerald-900">Disclaimer</h1>
        <p className="text-sm text-slate-400 mb-8 font-medium">
          Last updated: 15-Aug-2025
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">
              General information only:
            </strong>{" "}
            The content on this website is provided for general information and
            marketing purposes and does not constitute professional,
            engineering, legal, compliance, or other advice.
          </p>

          <p>
            <strong className="text-slate-900">No warranty:</strong> While we
            strive for accuracy, we make no representations or warranties,
            express or implied, about completeness, reliability, or suitability.
            Use at your own risk.
          </p>

          <p>
            <strong className="text-slate-900">No client relationship:</strong>{" "}
            Contacting us or submitting a form does not create a service
            relationship until agreed in writing.
          </p>

          <p>
            <strong className="text-slate-900">External links:</strong> We are
            not responsible for the content or practices of third-party websites
            linked from our site.
          </p>

          <p>
            <strong className="text-slate-900">Limitation of liability:</strong>{" "}
            To the fullest extent permitted by Irish law, we disclaim liability
            for any loss or damage arising from reliance on website content or
            use of the site.
          </p>
        </div>
      </div>
    </div>
  );
}
