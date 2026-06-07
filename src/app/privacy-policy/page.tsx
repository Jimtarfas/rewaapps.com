import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Rewa App Privacy Policy — Learn how we collect, use, store, and protect your personal data. Includes information about data deletion rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-300">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <p className="text-muted leading-relaxed">
                Rewa App (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website at rewaapps.com, use our services, or interact with our
                applications that integrate with third-party platforms including
                Meta (WhatsApp Business API), Twilio, and other messaging
                services.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Please read this Privacy Policy carefully. By accessing or using
                our services, you agree to the collection and use of information
                in accordance with this policy. If you do not agree with our
                policies and practices, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                1. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.1 Information You Provide Directly
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                We collect information that you voluntarily provide to us when
                you:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Register for an account or sign up for our services</li>
                <li>Complete the embedded signup process for WhatsApp Business API</li>
                <li>Fill out a contact form or request a consultation</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Communicate with us via email, phone, or other channels</li>
                <li>Use our applications or platforms</li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                This information may include your name, email address, phone
                number, company name, job title, business address, billing
                information, and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.2 Information Collected Automatically
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                When you access our website or services, we may automatically
                collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Device Information:</strong> Browser type, operating
                  system, device type, and unique device identifiers
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, access times, pages
                  viewed, referring URL, and actions taken on our site
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use
                  cookies, web beacons, and similar technologies to collect
                  information about your browsing activity
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our services,
                  features used, and performance metrics
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.3 Information from Third-Party Platforms
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                When you use our services that integrate with third-party
                platforms such as Meta (WhatsApp Business API) and Twilio, we may
                receive information from those platforms in accordance with their
                privacy policies and the permissions you have granted. This may
                include:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  Business account information (business name, phone number,
                  profile details)
                </li>
                <li>
                  WhatsApp Business Account (WABA) identifiers and configuration
                </li>
                <li>
                  Message metadata (timestamps, delivery status, read receipts)
                </li>
                <li>
                  Customer interaction data as permitted by platform policies
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                2. How We Use Your Information
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Service Delivery:</strong> To provide, operate, and
                  maintain our services, including processing API requests,
                  managing WhatsApp Business accounts, delivering messages, and
                  enabling integrations
                </li>
                <li>
                  <strong>Onboarding:</strong> To facilitate the embedded signup
                  process, verify business identity, and provision WhatsApp
                  senders via Twilio
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries,
                  provide customer support, and send service-related
                  notifications
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze usage patterns,
                  diagnose technical issues, and improve our services and user
                  experience
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and respond to
                  fraud, abuse, security incidents, and other harmful activities
                </li>
                <li>
                  <strong>Compliance:</strong> To comply with legal obligations,
                  resolve disputes, and enforce our agreements
                </li>
                <li>
                  <strong>Marketing:</strong> To send promotional materials and
                  updates about our services (with your consent where required)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                3. How We Share Your Information
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist us in operating our services (including
                  Twilio for messaging infrastructure, hosting providers, analytics,
                  and payment processing), bound by confidentiality obligations
                </li>
                <li>
                  <strong>Platform Partners:</strong> With platform partners
                  such as Meta as necessary to deliver WhatsApp Business API
                  services and comply with their platform policies
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  regulation, legal process, or governmental request
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets, with notice provided to
                  you
                </li>
                <li>
                  <strong>With Your Consent:</strong> In any other circumstances
                  where you provide explicit consent
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                4. Data Security
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We implement industry-standard security measures to protect your
                information, including:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                While we strive to protect your information, no method of
                transmission over the Internet or method of electronic storage is
                100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                5. Data Retention
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy legal, accounting, or reporting
                requirements. When data is no longer needed, we securely delete
                or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                6. Your Rights and Choices
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Depending on your jurisdiction, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data. You can submit a data deletion request by emailing us at{" "}
                  <a
                    href="mailto:privacy@rewaapps.com"
                    className="text-primary hover:text-primary-dark"
                  >
                    privacy@rewaapps.com
                  </a>{" "}
                  or by visiting our{" "}
                  <a
                    href="/data-deletion"
                    className="text-primary hover:text-primary-dark"
                  >
                    Data Deletion page
                  </a>
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing
                  of your information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data in
                  a machine-readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  information for certain purposes
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Where processing is based on
                  consent, withdraw your consent at any time
                </li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@rewaapps.com"
                  className="text-primary hover:text-primary-dark"
                >
                  privacy@rewaapps.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We use cookies and similar tracking technologies to collect and
                track information about your activity on our website. You can
                instruct your browser to refuse all cookies or to indicate when a
                cookie is being sent. However, some features of our website may
                not function properly without cookies.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to
                  function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors interact with our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  and settings
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                8. International Data Transfers
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Your information may be transferred to and processed in countries
                other than your country of residence. These countries may have
                data protection laws different from yours. We ensure appropriate
                safeguards are in place for such transfers in compliance with
                applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Our services are not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children. If
                we become aware that we have collected personal information from a
                child, we will take steps to delete that information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                10. Third-Party Links
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these third parties. We encourage you to review the privacy
                policies of any third-party site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. We encourage
                you to review this Privacy Policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                12. Contact Us
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="mt-4 bg-card rounded-xl p-6 border border-border">
                <p className="font-semibold text-secondary">
                  Rewa App — Privacy Team
                </p>
                <div className="mt-2 space-y-1 text-sm text-muted">
                  <p>412 W 7th St</p>
                  <p>Clovis, NM 88101, USA</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@rewaapps.com"
                      className="text-primary hover:text-primary-dark"
                    >
                      privacy@rewaapps.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+17742787300"
                      className="text-primary hover:text-primary-dark"
                    >
                      +1 (774) 278-7300
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
