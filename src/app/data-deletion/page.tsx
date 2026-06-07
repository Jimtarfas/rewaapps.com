import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "Request deletion of your personal data from Rewa App. Step-by-step instructions for deleting your data, including data received from Meta platforms (Facebook, Instagram, WhatsApp).",
};

export default function DataDeletionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Data Deletion Instructions
          </h1>
          <p className="mt-2 text-slate-300">
            How to request deletion of your personal data from Rewa App.
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
                Your Right to Delete Your Data
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Rewa App respects your right to control your personal data. You
                may request deletion of all personal information we hold about
                you at any time. This includes data you provided directly, data
                collected automatically, and any data received from third-party
                platforms including Meta (Facebook, Instagram, WhatsApp).
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                This right applies to all users who can access our application,
                regardless of your location or jurisdiction.
              </p>
            </div>

            {/* How to Request — Email */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                How to Request Data Deletion
              </h2>

              <div className="mt-6 space-y-6">
                {/* Method 1 */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">
                        Email Us (Recommended)
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        Send an email to{" "}
                        <a
                          href="mailto:privacy@rewaapps.com?subject=Data%20Deletion%20Request"
                          className="text-primary hover:text-primary-dark font-semibold"
                        >
                          privacy@rewaapps.com
                        </a>{" "}
                        with the subject line <strong>&quot;Data Deletion
                        Request&quot;</strong> and include the following
                        information:
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          Your full name
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          The email address associated with your account
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          Your company name (if applicable)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          Any account identifiers (user ID, phone number)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">&#8226;</span>
                          Whether your request relates to data from a Meta
                          platform (Facebook, Instagram, or WhatsApp)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Method 2 */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">
                        Call Us
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        Call{" "}
                        <a
                          href="tel:+17742787300"
                          className="text-primary hover:text-primary-dark font-semibold"
                        >
                          +1 (774) 278-7300
                        </a>{" "}
                        during business hours (Mon–Fri, 9 AM – 6 PM MT) and
                        request data deletion. We will guide you through the
                        process.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Method 3 */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">
                        Send a Written Request
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        Mail a written request to:
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        Rewa App — Privacy Team<br />
                        412 W 7th St<br />
                        Clovis, NM 88101<br />
                        United States of America
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                What Happens After You Submit a Request
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Acknowledgment",
                    description:
                      "We will acknowledge receipt of your deletion request within 2 business days and provide you with a unique confirmation code to track your request.",
                    timeframe: "Within 2 business days",
                  },
                  {
                    step: "2",
                    title: "Identity Verification",
                    description:
                      "To protect your security, we may ask you to verify your identity before processing the deletion. This may involve confirming your email address or answering security questions.",
                    timeframe: "1–5 business days",
                  },
                  {
                    step: "3",
                    title: "Data Deletion",
                    description:
                      "Once verified, we will delete all personal data associated with your account from our active systems, including any data received from Meta platforms or other third-party integrations.",
                    timeframe: "Up to 30 days",
                  },
                  {
                    step: "4",
                    title: "Confirmation",
                    description:
                      "You will receive a written confirmation that your data has been deleted, along with your confirmation code for your records. You can use this code to verify the status of your request at any time by contacting us.",
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

            {/* Meta Platform Users */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                For Users Who Connected via Facebook, Instagram, or WhatsApp
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                If you connected to our application using Facebook Login or
                accessed our services through a Meta platform (Facebook,
                Instagram, WhatsApp), you have additional options:
              </p>
              <div className="mt-4 bg-card rounded-xl p-6 border border-border space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary">
                    Option A: Remove Our App from Your Meta Account
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Go to your Facebook Settings &gt; Apps and Websites &gt;
                    find &quot;Rewa App&quot; &gt; click &quot;Remove.&quot;
                    This will revoke our access to your Meta data. We will then
                    automatically delete all Meta Platform Data associated with
                    your account within 30 days.
                  </p>
                </div>
                <hr className="border-border" />
                <div>
                  <h3 className="font-semibold text-secondary">
                    Option B: Contact Us Directly
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Email{" "}
                    <a
                      href="mailto:privacy@rewaapps.com?subject=Meta%20Data%20Deletion%20Request"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      privacy@rewaapps.com
                    </a>{" "}
                    and specify that your request relates to data received from a
                    Meta platform. We will delete all associated data and provide
                    you with a confirmation code and a status URL where you can
                    verify the deletion.
                  </p>
                </div>
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
                        Certain data may be retained if required by law (e.g.,
                        tax records, fraud prevention, legal compliance). If any
                        data is retained, we will inform you of the specific data
                        and the legal justification for its retention.
                      </li>
                      <li>
                        Deleting your data will result in the permanent
                        termination of your account and loss of access to our
                        services. This action cannot be undone.
                      </li>
                      <li>
                        Anonymized or aggregated data that cannot identify you
                        may be retained for analytical purposes.
                      </li>
                      <li>
                        Data shared with third-party platforms (e.g., Meta,
                        Twilio) is also subject to those platforms&apos; own data
                        deletion policies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                Questions About Data Deletion?
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                If you have questions about the deletion process, the status of
                a pending request, or your privacy rights in general, contact
                our privacy team:
              </p>
              <div className="mt-4 bg-card rounded-xl p-6 border border-border">
                <div className="space-y-1 text-sm text-muted">
                  <p>
                    <strong className="text-secondary">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@rewaapps.com"
                      className="text-primary hover:text-primary-dark"
                    >
                      privacy@rewaapps.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-secondary">Phone:</strong>{" "}
                    <a
                      href="tel:+17742787300"
                      className="text-primary hover:text-primary-dark"
                    >
                      +1 (774) 278-7300
                    </a>
                  </p>
                  <p>
                    <strong className="text-secondary">Privacy Policy:</strong>{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:text-primary-dark"
                    >
                      rewaapps.com/privacy-policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
