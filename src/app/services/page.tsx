import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Rewa App services: web development, mobile app development, UI/UX design, API integration, business messaging, CRM solutions, and custom software development.",
};

const services = [
  {
    id: "development",
    title: "Web & Mobile App Development",
    subtitle: "Custom applications built with modern technology",
    description:
      "We design and develop web applications, progressive web apps, and native mobile apps for iOS and Android. Whether you need a customer-facing product, an internal dashboard, or a complex SaaS platform, we build solutions that are fast, reliable, and easy to maintain.",
    features: [
      "React, Next.js, and Vue.js web applications",
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform mobile apps with React Native",
      "Progressive web apps (PWA)",
      "E-commerce platforms and marketplaces",
      "Admin dashboards and internal tools",
      "Real-time features (chat, notifications, live updates)",
      "Performance optimization and accessibility compliance",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "UI/UX Design & Branding",
    subtitle: "User-centered design that drives results",
    description:
      "Great software starts with great design. We create intuitive user experiences, beautiful interfaces, and cohesive brand identities. Every design decision is informed by user research, business goals, and industry best practices.",
    features: [
      "User research and persona development",
      "Wireframing and interactive prototyping",
      "Visual design and design systems",
      "Brand identity and style guides",
      "Usability testing and iteration",
      "Responsive and mobile-first design",
      "Design handoff with developer-ready specs",
      "Ongoing design support and iteration",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "messaging",
    title: "Business Messaging & Communication Platforms",
    subtitle: "Help your clients reach customers on the channels they use",
    description:
      "We build messaging solutions that connect businesses with their customers across WhatsApp, SMS, email, and in-app channels. From API integrations with providers like Twilio to full-featured communication platforms, we help you create seamless, automated messaging experiences.",
    features: [
      "WhatsApp Business API integration and management",
      "SMS and multi-channel messaging systems",
      "Chatbot and conversational AI development",
      "Message template management and automation",
      "Customer onboarding and embedded signup flows",
      "Notification and alert delivery systems",
      "Analytics dashboards and delivery reporting",
      "Compliance with messaging platform policies",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "crm",
    title: "API Integration & CRM Solutions",
    subtitle: "Connect your tools and automate your workflows",
    description:
      "We integrate your business systems — CRMs, ERPs, payment gateways, messaging APIs, and third-party services — into unified workflows. Whether you need a custom integration or a full CRM implementation, we make your tech stack work together.",
    features: [
      "Salesforce, HubSpot, and Zoho CRM implementation",
      "Custom API development (REST and GraphQL)",
      "Third-party API integration (Twilio, Stripe, SendGrid, etc.)",
      "Webhook-based event processing",
      "Data synchronization across platforms",
      "Workflow automation and business logic",
      "ETL pipelines and data migration",
      "Custom reporting and analytics dashboards",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Reliable, scalable, and secure hosting for your applications",
    description:
      "We set up and manage cloud infrastructure so your applications run smoothly at any scale. From initial architecture to CI/CD pipelines, monitoring, and security hardening — we handle the ops so you can focus on your business.",
    features: [
      "AWS, Google Cloud, and Azure setup and management",
      "Docker and Kubernetes containerization",
      "CI/CD pipeline configuration",
      "Database design, optimization, and management",
      "Application monitoring and alerting",
      "Security audits and hardening",
      "Auto-scaling and load balancing",
      "Disaster recovery and backup strategies",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with your goals. Through workshops and interviews, we define scope, priorities, and success metrics.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, and visual designs — reviewed and refined with your input before we write code.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile sprints with weekly demos. You see real progress every week and can adjust direction anytime.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We deploy, monitor, and iterate. Post-launch support ensures your product keeps improving.",
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
              Full-service software development, design, and integration.
              We build digital products and platforms that help businesses
              grow — from first prototype to production scale.
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
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
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
                    Discuss This Service
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
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted">
              A proven workflow that keeps projects on track and clients
              informed at every step.
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us what you&apos;re building and we&apos;ll put together a
            proposal with timeline and pricing.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
