import Link from "next/link";

const services = [
  {
    title: "WhatsApp Business API",
    description:
      "Integrate the official WhatsApp Business API into your operations. Send notifications, provide customer support, and automate conversations at scale.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Business Messaging Solutions",
    description:
      "Reach your customers on the channels they prefer. We build omnichannel messaging systems that drive engagement and conversions.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "CRM Integration",
    description:
      "Seamlessly connect your messaging channels with popular CRM platforms. Unify customer data and automate workflows across systems.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description:
      "From concept to deployment, we build tailored software solutions that solve real business problems and scale with your growth.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "50M+", label: "Messages Delivered" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  {
    title: "Official Meta Tech Provider",
    description:
      "As an authorized Meta Tech Provider, we offer direct access to the WhatsApp Business Platform with full API capabilities.",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, GDPR compliance, and SOC 2 aligned practices ensure your data is always protected.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions are built to handle millions of messages. Scale from startup to enterprise without changing platforms.",
  },
  {
    title: "Dedicated Support",
    description:
      "Get a dedicated account manager and technical support team that understands your business and responds fast.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-800 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse"></span>
                Official Meta Tech Provider
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              Powering Business
              <br />
              <span className="text-primary-light">Communication</span> at Scale
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              We help businesses connect with their customers through the
              WhatsApp Business API and intelligent messaging solutions.
              From integration to automation, we handle it all.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
              Our Solutions
            </h2>
            <p className="mt-4 text-lg text-muted">
              End-to-end technology solutions to transform how your business
              communicates with customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Why Businesses Choose Rewa Apps
              </h2>
              <p className="mt-4 text-lg text-muted">
                We combine deep technical expertise with a commitment to your
                success. Our team has helped hundreds of businesses transform
                their customer communication.
              </p>
              <div className="mt-8 space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-border">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.52-1.47A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.686-6.413-1.866l-.447-.292-2.665.866.886-2.61-.319-.476A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        WhatsApp Business API
                      </p>
                      <p className="text-xs text-muted">Connected</p>
                    </div>
                    <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <div className="text-sm text-muted">
                    <p>Messages sent today: <span className="font-semibold text-secondary">12,847</span></p>
                    <p>Delivery rate: <span className="font-semibold text-green-600">99.7%</span></p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <p className="text-sm font-semibold text-secondary mb-2">
                    Customer Satisfaction
                  </p>
                  <div className="flex items-end gap-1">
                    {[40, 55, 45, 65, 50, 70, 85, 75, 90, 80, 92, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 rounded-t"
                          style={{ height: `${h}px` }}
                        >
                          <div
                            className="w-full bg-primary rounded-t"
                            style={{ height: `${h * 0.7}px` }}
                          ></div>
                        </div>
                      )
                    )}
                  </div>
                  <p className="text-xs text-muted mt-2">Last 12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Business Communication?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join hundreds of businesses already using Rewa Apps to connect with
            their customers more effectively. Get started today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/about"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
