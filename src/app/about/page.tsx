import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rewa App — a software development and design agency building web apps, mobile apps, and custom technology solutions for businesses worldwide.",
};

const values = [
  {
    title: "Craftsmanship",
    description:
      "We take pride in writing clean, maintainable code and designing interfaces that feel effortless. Quality is never an afterthought.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We hit deadlines, communicate proactively, and stand behind our work. When we commit to a project, we deliver.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No black boxes. You get shared project boards, weekly updates, and honest conversations about tradeoffs, timelines, and costs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, not a vendor. Your success is our success — and we measure ourselves by the results we create together.",
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
    role: "Founder & CEO",
    bio: "Entrepreneur and technologist with a background in software engineering and business strategy. Leads company vision and client relationships.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Engineering",
    bio: "Full-stack architect with deep expertise in cloud infrastructure, API design, and scalable system architecture. Leads the development team.",
  },
  {
    name: "David Okafor",
    role: "Lead Designer",
    bio: "UI/UX designer passionate about creating beautiful, functional interfaces. Background in brand identity, product design, and user research.",
  },
  {
    name: "Priya Sharma",
    role: "Project Manager",
    bio: "Keeps projects on track and clients informed. Expert in agile methodology, cross-functional coordination, and delivery management.",
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
              About Rewa App
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We are a software development and design agency that helps
              businesses build, launch, and scale digital products. From
              startups to established enterprises, we turn ideas into
              technology that works.
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
                Small Team, Big Impact
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Rewa App started with a simple idea: businesses deserve a
                  technology partner who actually cares about outcomes, not
                  just deliverables. Too many agencies ship code and move on.
                  We wanted to build something different — a team that stays
                  invested in your success long after launch day.
                </p>
                <p>
                  Today, our team of designers, engineers, and strategists has
                  delivered over 200 projects across e-commerce, healthcare,
                  fintech, logistics, and more. We build everything from
                  customer-facing mobile apps to internal tools, API
                  integrations, and messaging platforms.
                </p>
                <p>
                  Based in Clovis, New Mexico, we work with clients across the
                  United States and internationally. Our size is our strength —
                  you work directly with senior people who know your project
                  inside and out.
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
                    To help businesses of all sizes leverage technology to
                    operate more efficiently, reach more customers, and grow
                    sustainably — through thoughtful design and solid engineering.
                  </p>
                </div>
                <hr className="border-border" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-muted">
                    To be the agency clients recommend by name — known for
                    delivering exceptional work, on time, and being genuinely
                    great to work with.
                  </p>
                </div>
                <hr className="border-border" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    Company Information
                  </h3>
                  <div className="mt-2 text-sm text-muted space-y-1">
                    <p><span className="font-medium text-secondary">Legal Name:</span> Rewa App</p>
                    <p><span className="font-medium text-secondary">Address:</span> 412 W 7th St, Clovis, NM 88101, USA</p>
                    <p><span className="font-medium text-secondary">Phone:</span> +1 (774) 278-7300</p>
                    <p><span className="font-medium text-secondary">Website:</span> rewaapps.com</p>
                  </div>
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
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted">
              The principles behind every project we take on.
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
              Our Team
            </h2>
            <p className="mt-4 text-lg text-muted">
              Senior professionals who lead your project from start to finish.
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
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Tell us about your project and we&apos;ll put together a plan
            and estimate — no commitment required.
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
