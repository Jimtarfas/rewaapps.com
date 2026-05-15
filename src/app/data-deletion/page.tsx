import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "Request deletion of your personal data from Rewa Apps. Learn how to submit a data deletion request and what to expect.",
};

export default function DataDeletionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Data Deletion Request
          </h1>
          <p className="mt-2 text-slate-300">
            Your data, your control. Learn how to request deletion of your
            personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Your Right to Data Deletion
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                At Rewa Apps, we respect your right to control your personal
                data. In accordance with applicable data protection laws
                (including GDPR, CCPA, and other regional regulations), you have
                the right to request the deletion of your personal information
                from our systems.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                If you have used any of our services or applications, including
                those that integrate with Meta platforms (WhatsApp Business API,
                Facebook), you can request that we delete your personal data by
                following the instructions below.
              </p>
            </div>

            {/* How to Request */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                How to Submit a Data Deletion Request
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                You can request deletion of your data using any of the following
                methods:
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Via Email
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Send an email to our privacy team with the subject line
                    &quot;Data Deletion Request&quot;:
                  </p>
                  <a
                    href="mailto:privacy@rewaapps.com?subject=Data%20Deletion%20Request"
                    className="inline-block mt-3 text-primary hover:text-primary-dark font-semibold text-sm"
                  >
                    privacy@rewaapps.com
                  </a>
                </div>

                {/* Written Request */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Via Mail
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Send a written request to our office:
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Rewa Apps — Privacy Team
                    <br />
                    123 Business Avenue, Suite 100
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                What to Include in Your Request
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                To process your data deletion request efficiently, please include
                the following information:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Your full name and email address associated with your account",
                  "The name of your company or organization (if applicable)",
                  "A description of the specific data you wish to have deleted",
                  "Any account identifiers (e.g., user ID, phone number used with our services)",
                  "If your request relates to data processed through a Meta platform integration, please specify the platform (WhatsApp, Facebook, etc.)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                What to Expect After Your Request
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Acknowledgment",
                    description:
                      "We will acknowledge receipt of your request within 2 business days via the contact method you provided.",
                    timeframe: "Within 2 business days",
                  },
                  {
                    step: "2",
                    title: "Verification",
                    description:
                      "We may need to verify your identity to ensure the security of your data. We may contact you for additional information.",
                    timeframe: "1-5 business days",
                  },
                  {
                    step: "3",
                    title: "Processing",
                    description:
                      "Once verified, we will process your deletion request and remove your personal data from our active systems.",
                    timeframe: "Up to 30 days",
                  },
                  {
                    step: "4",
                    title: "Confirmation",
                    description:
                      "You will receive a confirmation once your data has been deleted. Some data may be retained as required by law.",
                    timeframe: "Upon completion",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 bg-card rounded-xl p-5 border border-border"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-secondary">
                          {item.title}
                        </h3>
                        <span className="text-xs bg-blue-100 text-primary px-2 py-0.5 rounded-full">
                          {item.timeframe}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Important Information
              </h2>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex gap-3">
                  <svg
                    className="w-6 h-6 text-amber-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Please Note
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-amber-700">
                      <li>
                        We may retain certain information as required by law or
                        for legitimate business purposes (e.g., fraud prevention,
                        legal compliance, tax records).
                      </li>
                      <li>
                        Data that has been shared with third-party platforms
                        (e.g., Meta) will be subject to the data deletion
                        policies of those platforms.
                      </li>
                      <li>
                        Deleting your data may result in the termination of your
                        account and loss of access to our services.
                      </li>
                      <li>
                        Anonymized or aggregated data that cannot be used to
                        identify you may be retained for analytical purposes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* For Meta Users */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                For Users of Meta Platform Integrations
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                If you have interacted with our services through Meta platforms
                (WhatsApp, Facebook, Instagram), you can also manage your data
                directly through your Meta account settings. Additionally, you
                can contact us to request deletion of any data we have collected
                through these integrations.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                When you request data deletion related to Meta platform
                integrations, we will:
              </p>
              <ul className="mt-3 list-disc pl-6 text-muted space-y-1">
                <li>
                  Delete all personal data collected through the integration from
                  our systems
                </li>
                <li>
                  Provide you with a confirmation code and status URL to track
                  the progress of your deletion request
                </li>
                <li>
                  Notify Meta of the deletion as required by their platform
                  policies
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Questions?
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                If you have any questions about data deletion or your privacy
                rights, please don&apos;t hesitate to contact our privacy team at{" "}
                <a
                  href="mailto:privacy@rewaapps.com"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  privacy@rewaapps.com
                </a>{" "}
                or visit our{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Privacy Policy
                </a>{" "}
                for more information about how we handle your data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
