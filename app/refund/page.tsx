export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-6">
      <div className="mx-auto max-w-4xl bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-bold mb-2 text-emerald-900">
          Refund & Cancellation
        </h1>
        <p className="text-sm text-slate-400 mb-8 font-medium">
          Last updated: 15-Aug-2025
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">Quotes and bookings:</strong>{" "}
            Quotes are valid for [X] days and subject to site/access conditions.
            A booking is confirmed upon written acceptance (e.g., PO) or signed
            service agreement.
          </p>

          <p>
            <strong className="text-slate-900">Cancellations by client:</strong>{" "}
            48 hours before scheduled start: no charge or [X]% admin fee (if
            applicable). 24-48 hours: charge [Y]% of estimated fee. {"<"}24
            hours or after dispatch: minimum call-out + time on site + materials
            at agreed rates. Special order materials/equipment: non-refundable
            once procured.
          </p>

          <p>
            <strong className="text-slate-900">Rescheduling:</strong> One
            reschedule without charge when given 24+ hours' notice; otherwise,
            standard cancellation fees apply.
          </p>

          <p>
            <strong className="text-slate-900">Access and safety:</strong> If
            access is unavailable, permits are missing, or the site is unsafe on
            arrival, we may apply a call-out fee and charge for time/materials
            incurred.
          </p>

          <p>
            <strong className="text-slate-900">
              Variations and unforeseen conditions:
            </strong>{" "}
            Out-of-scope works or unforeseen issues (e.g., hidden defects,
            regulatory changes) will be quoted and approved before proceeding.
          </p>

          <p>
            <strong className="text-slate-900">Payment and refunds:</strong>{" "}
            Pre-payments or deposits are credited against the final invoice.
            Approved refunds are processed to the original payment method within
            5-10 business days, net of applicable fees and non-refundable costs.
            Service quality standards apply.
          </p>
        </div>
      </div>
    </div>
  );
}
