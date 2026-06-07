import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Rewa App Terms of Service — Read the terms and conditions that govern your use of our services and platform.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Terms of Service
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
                Welcome to Rewa App. These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of the website located at
                rewaapps.com and all associated services, applications, and
                platforms provided by Rewa App (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). By accessing or using our services, you agree to
                be bound by these Terms. If you do not agree, please do not
                use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  <strong>&quot;Services&quot;</strong> refers to all products,
                  applications, APIs, integrations, and platforms provided by
                  Rewa App, including but not limited to WhatsApp Business API
                  integration via Twilio, business messaging solutions, embedded
                  signup, CRM integration, and custom software development.
                </li>
                <li>
                  <strong>&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any
                  individual or entity that accesses or uses our Services.
                </li>
                <li>
                  <strong>&quot;Content&quot;</strong> refers to any text, data,
                  images, files, message templates, or other materials uploaded,
                  submitted, or transmitted through our Services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                2. Eligibility
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                You must be at least 18 years old and have the legal capacity to
                enter into a binding agreement to use our Services. If you are
                using our Services on behalf of a company or organization, you
                represent that you have the authority to bind that entity to
                these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                3. Account Registration
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                To access certain features of our Services, you may need to
                create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password confidential and secure</li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                4. Use of Services
              </h2>
              <h3 className="text-lg font-semibold text-secondary mt-4">
                4.1 Permitted Use
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                You may use our Services only for lawful purposes and in
                accordance with these Terms, all applicable laws and regulations,
                and the terms and policies of any third-party platforms
                (including Meta/WhatsApp policies and Twilio&apos;s Acceptable
                Use Policy) with which our Services integrate.
              </p>
              <h3 className="text-lg font-semibold text-secondary mt-4">
                4.2 Prohibited Use
              </h3>
              <p className="text-muted leading-relaxed mt-2">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  Use our Services for any unlawful, harmful, or fraudulent
                  purpose
                </li>
                <li>Send spam, unsolicited messages, or bulk messaging that violates applicable regulations or platform policies</li>
                <li>
                  Violate any applicable laws, regulations, or third-party rights
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users&apos; accounts
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble any part of our
                  Services
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of our
                  Services
                </li>
                <li>
                  Use our Services in a manner that could damage, disable, or
                  impair our infrastructure
                </li>
                <li>
                  Resell or redistribute our Services without written
                  authorization
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                5. Fees and Payment
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Certain Services may require payment. If applicable:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-1 mt-2">
                <li>
                  Fees will be specified in the applicable service agreement or
                  order form
                </li>
                <li>
                  All fees are non-refundable unless otherwise stated in writing
                </li>
                <li>
                  We reserve the right to modify pricing with 30 days&apos; prior
                  notice
                </li>
                <li>
                  Late payments may incur interest charges and/or suspension of
                  services
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                6. Intellectual Property
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                All intellectual property rights in our Services, including but
                not limited to software, code, designs, trademarks, and
                documentation, are owned by or licensed to Rewa App. You are
                granted a limited, non-exclusive, non-transferable license to use
                our Services in accordance with these Terms. This license does
                not include any right to modify, distribute, or create derivative
                works based on our Services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                7. User Content
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                You retain ownership of any Content you submit through our
                Services, including message templates and business data. By
                submitting Content, you grant us a non-exclusive, worldwide,
                royalty-free license to use, process, and store such Content
                solely as necessary to provide our Services to you. You
                represent that you have all necessary rights and permissions to
                submit such Content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                8. Third-Party Integrations
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Our Services integrate with third-party platforms, including but
                not limited to Meta (WhatsApp Business API) and Twilio. Your use
                of these integrations is also subject to the terms and policies
                of the respective third-party platforms. We are not responsible
                for the availability, accuracy, or content of third-party
                services, and we do not endorse any third-party products or
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                9. Privacy
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                Your use of our Services is also governed by our{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:text-primary-dark"
                >
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your personal
                information. By using our Services, you consent to the data
                practices described in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
                WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR
                ERROR-FREE.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                11. Limitation of Liability
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, REWA APP SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR
                GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR
                SERVICES. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE
                AMOUNTS PAID BY YOU TO US DURING THE TWELVE (12) MONTHS
                PRECEDING THE CLAIM.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                12. Indemnification
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                You agree to indemnify and hold harmless Rewa App, its
                officers, directors, employees, and agents from any claims,
                damages, losses, liabilities, and expenses (including reasonable
                attorneys&apos; fees) arising out of or relating to your use of
                our Services, your violation of these Terms, or your violation of
                any rights of a third party.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                13. Termination
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We may suspend or terminate your access to our Services at any
                time, with or without cause, and with or without notice. Upon
                termination, your right to use our Services will immediately
                cease. Provisions of these Terms that by their nature should
                survive termination shall remain in effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                14. Governing Law
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                These Terms shall be governed by and construed in accordance with
                the laws of the State of New Mexico, United States, without
                regard to its conflict of law provisions. Any disputes arising
                under these Terms shall be subject to the exclusive jurisdiction
                of the courts located in Curry County, New Mexico.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                15. Changes to These Terms
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                We reserve the right to modify these Terms at any time. We will
                provide notice of material changes by posting the revised Terms
                on our website and updating the &quot;Last updated&quot; date. Your
                continued use of our Services after such modifications
                constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary">
                16. Contact Us
              </h2>
              <p className="text-muted leading-relaxed mt-2">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="mt-4 bg-card rounded-xl p-6 border border-border">
                <p className="font-semibold text-secondary">
                  Rewa App — Legal Department
                </p>
                <div className="mt-2 space-y-1 text-sm text-muted">
                  <p>412 W 7th St</p>
                  <p>Clovis, NM 88101, USA</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:legal@rewaapps.com"
                      className="text-primary hover:text-primary-dark"
                    >
                      legal@rewaapps.com
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
