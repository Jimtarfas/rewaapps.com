import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Rewa App Privacy Policy — Learn how we collect, use, store, and protect your personal data, including data received from Meta platforms. Includes data deletion rights.",
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
            Last updated: June 1, 2025
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
                your privacy. This Privacy Policy explains what data we collect,
                how we process it, the purposes for which we process it, and how
                you can request deletion of your data. This policy applies when
                you visit our website at rewaapps.com, use our services, or
                interact with our applications — including applications that
                access data from Meta Platforms, Inc. (&quot;Meta&quot;) products such
                as Facebook, Instagram, and WhatsApp.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                We only process your data in the manner described in this Privacy
                Policy and in compliance with all applicable laws and
                regulations. By accessing or using our services, you acknowledge
                that you have read and understood this Privacy Policy. If you do
                not agree, please do not use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                1. What Data We Collect
              </h2>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.1 Information You Provide Directly
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                We collect information that you voluntarily provide to us,
                including when you:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Create an account or register for our services</li>
                <li>Fill out a contact form or request a consultation</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Communicate with us via email, phone, or other channels</li>
                <li>Use our applications or platforms</li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                This data may include: your name, email address, phone number,
                company name, job title, business address, billing information,
                and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.2 Information Collected Automatically
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                When you access our website or services, we automatically
                collect:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Device Information:</strong> Browser type, operating
                  system, device type, screen resolution, and unique device
                  identifiers
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, access times, pages
                  viewed, referring URL, and actions taken on our site
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use
                  cookies, web beacons, and similar technologies to collect
                  information about your browsing activity (see Section 8)
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  services, features used, and performance metrics
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.3 Data Received from Meta Platforms
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                When you use features of our application that integrate with
                Meta products (including Facebook, Instagram, and WhatsApp), we
                may receive data from Meta in accordance with Meta&apos;s Platform
                Terms and the permissions you grant. This data
                (&quot;Platform Data&quot;) may include:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Your name, email address, and profile information from Facebook Login</li>
                <li>Business account details (business name, phone number, business profile)</li>
                <li>WhatsApp Business Account identifiers and configuration</li>
                <li>Message metadata (timestamps, delivery status, read receipts)</li>
                <li>Page and account interaction data as permitted by Meta policies</li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                We process Meta Platform Data only for the purposes described in
                this Privacy Policy and in compliance with Meta&apos;s Platform
                Terms. We do not sell Meta Platform Data to any third party. We
                do not use Meta Platform Data for purposes unrelated to the
                services we provide to you.
              </p>

              <h3 className="text-lg font-semibold text-secondary mt-4">
                1.4 Information from Other Third-Party Services
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                When you use our services that integrate with other third-party
                providers (such as Twilio, Stripe, or CRM platforms), we may
                receive data from those services in accordance with their
                privacy policies and the permissions you grant. This may include
                account identifiers, transaction data, and service usage data.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                2. How We Process Your Data
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We process the data we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Storing</strong> your data securely on encrypted
                  servers and databases
                </li>
                <li>
                  <strong>Transmitting</strong> your data via encrypted channels
                  (TLS/SSL) to deliver our services
                </li>
                <li>
                  <strong>Analyzing</strong> usage data in aggregate to improve
                  our services and diagnose technical issues
                </li>
                <li>
                  <strong>Integrating</strong> your data with third-party
                  platforms (Meta, Twilio, CRMs) solely as needed to provide the
                  features you use
                </li>
                <li>
                  <strong>Deleting</strong> your data upon request or when it is
                  no longer needed (see Section 6)
                </li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                We do not process your data for any purpose not described in this
                Privacy Policy.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                3. The Purposes for Which We Process Your Data
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We use your data for the following specific purposes:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Service Delivery:</strong> To provide, operate, and
                  maintain our services, including account management,
                  application features, API integrations, and messaging
                  capabilities
                </li>
                <li>
                  <strong>Account Management:</strong> To create and manage your
                  account, authenticate your identity, and process transactions
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries,
                  provide customer support, and send service-related
                  notifications
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze how our services are
                  used, identify bugs, and improve functionality and user
                  experience
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and respond to
                  fraud, abuse, security incidents, and other harmful or
                  unauthorized activities
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws, regulations, legal processes, and governmental requests
                </li>
                <li>
                  <strong>Marketing:</strong> To send promotional materials and
                  updates about our services, only with your prior consent where
                  required by law
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                4. How We Share Your Information
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We do not sell your personal information to any third party.
                We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors
                  who assist in operating our services (hosting, analytics,
                  payment processing, messaging infrastructure), bound by
                  contractual confidentiality obligations
                </li>
                <li>
                  <strong>Platform Partners:</strong> With Meta and other
                  platform partners solely as necessary to deliver the services
                  you use and comply with their platform policies
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  regulation, legal process, or enforceable governmental request
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets, with prior notice to
                  affected users
                </li>
                <li>
                  <strong>With Your Consent:</strong> In any other case where you
                  provide explicit consent
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                5. Data Security
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We implement industry-standard security measures to protect your
                data, including:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Role-based access controls and multi-factor authentication</li>
                <li>Employee training on data protection and security practices</li>
                <li>Incident response procedures with breach notification protocols</li>
                <li>Secure data deletion procedures when data is no longer needed</li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                While we take every reasonable measure to protect your data, no
                method of electronic transmission or storage is 100% secure.
              </p>
            </div>

            {/* Section 6 — CRITICAL FOR META */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                6. How You Can Request Deletion of Your Data
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                You have the right to request deletion of your personal data at
                any time. This right is available to all users who can access
                our application, regardless of location.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                <strong>To request deletion, you may:</strong>
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  Visit our{" "}
                  <a
                    href="/data-deletion"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Data Deletion page
                  </a>{" "}
                  for step-by-step instructions
                </li>
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:privacy@rewaapps.com"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    privacy@rewaapps.com
                  </a>{" "}
                  with the subject &quot;Data Deletion Request&quot;
                </li>
                <li>
                  Call us at{" "}
                  <a
                    href="tel:+17742787300"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    +1 (774) 278-7300
                  </a>
                </li>
                <li>
                  Write to us at: Rewa App, 412 W 7th St, Clovis, NM 88101, USA
                </li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                Upon receiving your request, we will verify your identity,
                process the deletion within 30 days, and send you a confirmation
                with a unique reference code so you can track the status of your
                request. If we are legally required to retain certain data (e.g.,
                for tax or compliance purposes), we will inform you of the
                specific data retained and the legal basis for retention.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                <strong>
                  If you used our application through a Meta platform
                  (Facebook, Instagram, or WhatsApp):
                </strong>{" "}
                you can also manage your data connection through your Facebook
                or Instagram settings under &quot;Apps and Websites.&quot; When you
                remove our application from your Meta account, we will
                automatically delete all Meta Platform Data associated with
                your account within 30 days.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                7. Your Additional Rights
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Depending on your jurisdiction, you may also have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data
                  we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete data
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing of your data
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data in
                  a machine-readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your data
                  for certain purposes, including direct marketing
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Where processing is based
                  on consent, withdraw your consent at any time without
                  affecting the lawfulness of prior processing
                </li>
              </ul>
              <p className="text-muted leading-relaxed mt-2">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@rewaapps.com"
                  className="text-primary hover:text-primary-dark"
                >
                  privacy@rewaapps.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We use cookies and similar technologies to collect information
                about your activity on our website. You can configure your
                browser to refuse cookies, though some website features may not
                function properly without them.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for core website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand visitor
                  behavior and improve our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  and settings
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                9. Data Retention
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We retain your data only for as long as necessary to fulfill the
                purposes described in this policy, or as required by law. When
                data is no longer needed, we securely delete or anonymize it. We
                review our data retention practices regularly to ensure
                compliance.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                10. International Data Transfers
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Your data may be transferred to and processed in countries other
                than your country of residence. We ensure appropriate safeguards
                are in place for such transfers in compliance with applicable
                data protection laws.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                11. Children&apos;s Privacy
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal data from children. If
                we become aware that we have collected data from a child, we will
                delete it promptly.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                12. Third-Party Links
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of those sites and
                encourage you to review their privacy policies.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                13. Changes to This Privacy Policy
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. Material changes will be communicated via
                email or a prominent notice on our website. Your continued use
                of our services after changes constitutes acceptance of the
                updated policy.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-xl font-bold text-secondary">
                14. Contact Us
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                If you have questions or concerns about this Privacy Policy, our
                data practices, or your personal data, please contact us:
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
