import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rewa Apps services: WhatsApp Business API integration, business messaging solutions, CRM integration, and custom software development.",
};

const services = [
  {
    id: "whatsapp-api",
    title: "WhatsApp Business API Integration",
    subtitle: "Connect with 2+ billion users on the world's most popular messaging platform",
    description:
      "As an authorized Meta Tech Provider, we provide full WhatsApp Business API access and integration services. From initial setup to advanced automation, we handle every aspect of your WhatsApp business communication.",
    features: [
      "Official WhatsApp Business API onboarding and setup",
      "Message template creation and management",
      "Automated customer support chatbots",
      "Broadcast messaging and notifications",
      "Two-way conversational commerce",
      "Analytics and performance dashboards",
      "Compliance with Meta policies and guidelines",
      "Multi-agent support for team collaboration",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "messaging",
    title: "Business Messaging Solutions",
    subtitle: "Omnichannel communication that drives engagement",
    description:
      "Build meaningful customer relationships through intelligent messaging across multiple channels. Our solutions help you reach customers where they are, with the right message at the right time.",
    features: [
      "SMS and MMS messaging integration",
      "Email marketing automation",
      "Push notification systems",
      "In-app messaging frameworks",
      "Rich media message support",
      "Audience segmentation and targeting",
      "A/B testing for message optimization",
      "Delivery tracking and analytics",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "crm",
    title: "CRM Integration",
    subtitle: "Unify your customer data and communication channels",
    description:
      "Seamlessly connect your messaging channels with your existing CRM and business tools. We build integrations that unify customer data, automate workflows, and provide a 360-degree view of every customer interaction.",
    features: [
      "Salesforce, HubSpot, and Zoho integration",
      "Custom CRM connector development",
      "Contact synchronization and management",
      "Automated lead capture from messaging channels",
      "Conversation history logging and search",
      "Workflow automation and triggers",
      "Custom reporting and dashboards",
      "API-first integration architecture",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: "development",
    title: "Custom Software Development",
    subtitle: "Tailored solutions built for your unique business needs",
    description:
      "From web applications to mobile platforms, we design and develop custom software that solves real business problems. Our agile development process ensures you get high-quality solutions delivered on time.",
    features: [
      "Full-stack web application development",
      "Mobile app development (iOS & Android)",
      "REST and GraphQL API design and development",
      "Cloud infrastructure setup and management",
      "Database design and optimization",
      "Third-party API integration",
      "Ongoing maintenance and support",
      "Performance optimization and scaling",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business goals, current systems, and communication challenges through in-depth consultations.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team designs a tailored solution architecture, selecting the right technologies and integration approaches for your needs.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Using agile methodology, we build your solution iteratively, keeping you involved with regular demos and feedback cycles.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We handle deployment, training, and provide ongoing support and optimization to ensure long-term success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Comprehensive technology solutions to power your business
              communication and accelerate growth. From API integrations to
              custom development, we deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-primary font-medium">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
                    <h3 className="font-semibold text-secondary mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-muted">
              A proven process that delivers results, from discovery to deployment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <span className="text-4xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us about your project and we&apos;ll design the perfect solution for
            your business.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
