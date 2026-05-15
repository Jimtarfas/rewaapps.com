import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rewa Apps — a technology solutions agency specializing in business messaging, WhatsApp Business API, and custom software development.",
};

const values = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of messaging technology, continuously evolving our solutions to give our clients a competitive edge.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "With 99.9% uptime and enterprise-grade infrastructure, our clients can count on us to keep their communications running 24/7.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We believe in clear communication, honest pricing, and full visibility into project progress. No hidden fees, no surprises.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Client Success",
    description:
      "Your growth is our measure of success. We work as an extension of your team, deeply invested in achieving your business goals.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "James Carter",
    role: "Chief Executive Officer",
    bio: "15+ years in enterprise technology and business development. Previously led digital transformation initiatives at major consulting firms.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    bio: "Expert in API architecture and messaging systems. Former senior engineer at leading communication platforms.",
  },
  {
    name: "David Okafor",
    role: "Head of Solutions",
    bio: "Specializes in designing scalable business communication strategies. Certified Meta Business Solutions expert.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Client Success",
    bio: "Ensures every client achieves their goals. Background in customer experience and enterprise account management.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-800 to-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              About Rewa Apps
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We are a technology solutions agency on a mission to transform how
              businesses communicate with their customers through intelligent
              messaging and seamless integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-secondary">
                Built by Engineers, Driven by Impact
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Rewa Apps was founded with a simple belief: every business
                  deserves access to powerful communication tools, regardless of
                  its size. What started as a small team of engineers passionate
                  about messaging technology has grown into a full-service
                  technology agency serving clients worldwide.
                </p>
                <p>
                  As an official Meta Tech Provider, we have the expertise and
                  authorization to deliver enterprise-grade WhatsApp Business API
                  solutions. We work directly with the Meta platform to ensure
                  our clients get the most reliable, compliant, and feature-rich
                  messaging capabilities available.
                </p>
                <p>
                  Today, we serve over 500 businesses across multiple industries,
                  helping them send over 50 million messages per month. Our
                  clients range from fast-growing startups to established
                  enterprises, all united by the need for effective, scalable
                  customer communication.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-muted">
                    To empower businesses of all sizes with technology solutions
                    that make customer communication smarter, faster, and more
                    personal.
                  </p>
                </div>
                <hr className="border-border" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-muted">
                    To be the most trusted technology partner for business
                    messaging, known for innovation, reliability, and a
                    relentless focus on client success.
                  </p>
                </div>
                <hr className="border-border" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Legal Entity
                  </h3>
                  <p className="mt-2 text-muted text-sm">
                    Rewa Apps is a registered technology company. Our legal
                    business name, address, and registration details are
                    available upon request and are consistent with all official
                    filings and business documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-muted">
              Experienced professionals committed to delivering exceptional
              technology solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-center font-semibold text-secondary">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-primary font-medium">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Want to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            We&apos;d love to hear about your project and explore how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
