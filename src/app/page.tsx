import Link from "next/link";

const services = [
  {
    title: "Web & Mobile Development",
    description:
      "Custom web applications, responsive websites, and native mobile apps built with modern frameworks. From MVPs to enterprise platforms, we deliver polished products.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that converts. We create intuitive interfaces, design systems, and brand identities that make your product stand out and delight users.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "API & Cloud Integration",
    description:
      "Connect your systems with third-party APIs, messaging platforms, payment gateways, and cloud services. We build reliable integrations that scale with your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Business Automation",
    description:
      "Streamline operations with custom CRM solutions, workflow automation, chatbots, and data pipelines. We help teams do more with less through smart technology.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "80+", label: "Clients Worldwide" },
  { value: "15+", label: "Team Members" },
  { value: "5+", label: "Years in Business" },
];

const features = [
  {
    title: "Full-Stack Expertise",
    description:
      "Our engineers work across the entire stack — React, Next.js, Node, Python, Swift, Kotlin, and more. We pick the right tool for the job.",
  },
  {
    title: "Design-Driven Development",
    description:
      "Every project starts with design. We prototype, test, and iterate before writing a single line of production code.",
  },
  {
    title: "Agile & Transparent",
    description:
      "Weekly sprints, shared project boards, and regular demos. You always know where your project stands.",
  },
  {
    title: "Post-Launch Support",
    description:
      "We don't disappear after launch. Ongoing maintenance, monitoring, and feature development keep your product running smoothly.",
  },
];

const industries = [
  "E-Commerce",
  "Healthcare",
  "Financial Services",
  "Logistics",
  "Real Estate",
  "Education",
  "SaaS",
  "Retail",
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
                Software Development &amp; Design Agency
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              We Build Software
              <br />
              That <span className="text-primary-light">Grows</span> Your Business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              Rewa App is a full-service development and design agency. We
              create web apps, mobile apps, API integrations, and custom
              software solutions that help businesses operate smarter and
              reach more customers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
              >
                View Our Services
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
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted">
              From concept to launch, we handle every stage of software
              development — design, engineering, integration, and support.
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                Why Clients Choose Rewa App
              </h2>
              <p className="mt-4 text-lg text-muted">
                We&apos;re not just developers — we&apos;re a team of designers,
                engineers, and strategists who care about building products
                that actually work for your users and your bottom line.
              </p>
              <div className="mt-8 space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
                  <p className="text-sm font-semibold text-secondary mb-3">
                    Industries We Serve
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <span
                        key={industry}
                        className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <p className="text-sm font-semibold text-secondary mb-3">
                    Technologies We Use
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {["React", "Next.js", "Node.js", "Python", "Swift", "Kotlin", "AWS", "PostgreSQL", "Figma"].map((tech) => (
                      <div key={tech} className="bg-card rounded-lg py-2 px-1">
                        <span className="text-xs font-medium text-muted">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <p className="text-sm font-semibold text-secondary mb-2">
                    Client Satisfaction
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

      {/* Process */}
      <section className="bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-muted">
              A clear, collaborative process from first call to launch day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", desc: "We learn about your business, goals, users, and technical requirements through in-depth consultation." },
              { step: "02", title: "Design", desc: "Wireframes, prototypes, and visual designs — reviewed and refined with your feedback before development begins." },
              { step: "03", title: "Develop", desc: "Agile sprints with weekly demos. You see real progress every week and can steer direction in real time." },
              { step: "04", title: "Launch & Support", desc: "Deployment, QA, and go-live. Plus ongoing maintenance, updates, and feature development after launch." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-border">
                <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-secondary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Whether you need a new app, a redesign, or a complex integration —
            let&apos;s talk about how we can bring your idea to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold text-center transition-colors"
            >
              Get a Free Quote
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
