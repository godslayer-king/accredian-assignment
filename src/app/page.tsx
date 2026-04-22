import { EnterpriseMetrics } from "@/components/enterprise-metrics";
import { Footer } from "@/components/footer";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";

const edgeItems = [
  {
    title: "Role-based Academies",
    description:
      "Build manager, IC, and leadership tracks aligned to your internal competency framework.",
  },
  {
    title: "Industry-led Curriculum",
    description:
      "Programs co-created with top institutions and reviewed against current market demand.",
  },
  {
    title: "Outcome Analytics",
    description:
      "Track learning progress, completion rates, and capability uplift from one dashboard.",
  },
];

const catPrograms = [
  "AI & Machine Learning for Business Teams",
  "Data Science and Analytics for Decision Making",
  "Cloud and DevOps Excellence",
  "Leadership and Product Management Accelerators",
  "Cybersecurity and Risk Management",
  "Custom Talent Academies",
];

const clientLogos = [
  { name: "Axis Bank", mark: "AB", color: "#8b5cf6" },
  { name: "Jio", mark: "J", color: "#ef4444" },
  { name: "Flipkart", mark: "FK", color: "#2563eb" },
  { name: "HCL", mark: "H", color: "#0f766e" },
  { name: "Razorpay", mark: "RZ", color: "#1d4ed8" },
  { name: "PwC", mark: "P", color: "#ea580c" },
];

const howItWorksSteps = [
  {
    title: "Discover",
    text: "We assess business goals, role requirements, and existing learning maturity.",
  },
  {
    title: "Design",
    text: "Create a customized learning roadmap with timelines and measurable milestones.",
  },
  {
    title: "Deliver",
    text: "Launch blended learning with mentor support, cohort operations, and reporting.",
  },
  {
    title: "Demonstrate Impact",
    text: "Share business-level outcomes with capability and engagement trend data.",
  },
];

const faqs = [
  {
    q: "Can programs be customized for our teams?",
    a: "Yes. Every enterprise roadmap is configured around your roles, goals, and bandwidth.",
  },
  {
    q: "Do you support hybrid teams across locations?",
    a: "Yes. We support blended delivery across time zones with cohort and self-paced formats.",
  },
  {
    q: "How is success measured?",
    a: "We track adoption, completion, and capability uplift with periodic stakeholder reviews.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f4f5f7]">
      <Navbar />

      <main>
        <section id="home" className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200 bg-[#e9edf5] px-6 py-12 sm:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-14">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Next-Gen <span className="text-[#2a73db]">Expertise</span>
                <br />
                For Your <span className="text-[#2a73db]">Enterprise</span>
              </h1>
              <p className="mt-8 text-2xl leading-9 text-slate-900 sm:text-[38px] sm:leading-[46px]">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-medium text-slate-800 sm:text-base">
                <span>✅ Tailored Solutions</span>
                <span>✅ Industry Insights</span>
                <span>✅ Expert Guidance</span>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex rounded-xl bg-[#2a73db] px-7 py-3 text-lg font-semibold text-white transition hover:bg-[#2063c4]"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="relative mt-12 min-h-[340px] lg:mt-0">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Business team discussion"
                  className="h-[360px] w-full object-cover sm:h-[430px]"
                />
              </div>

              <div className="absolute bottom-4 left-0 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm">
                10L+ Learners
              </div>
              <div className="absolute bottom-4 right-0 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm">
                250+ Enterprise Clients
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Stats"
            title="Proven outcomes across enterprise learning"
            description="From adoption to measurable capability uplift, teams trust Accredian to deliver high-impact upskilling at scale."
          />
          <EnterpriseMetrics />
        </section>

        <section id="clients" className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              center
              eyebrow="Clients"
              title="Trusted by teams at leading enterprises"
              description="We partner with fast-growing and global organizations to build future-ready talent pipelines."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clientLogos.map((client) => (
                <article
                  key={client.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: client.color }}
                  >
                    {client.mark}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{client.name}</p>
                    <p className="text-xs text-slate-500">Enterprise client</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="accredian-edge" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Accredian Edge"
            title="What makes our enterprise programs stand out"
            description="A proven blend of customization, quality pedagogy, and performance tracking for modern organizations."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {edgeItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="cat" className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="CAT"
              title="Career Acceleration Tracks for enterprise teams"
              description="Role-relevant, market-aligned programs built to strengthen execution across technology and business domains."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {catPrograms.map((program) => (
                <div
                  key={program}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  {program}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple execution model from planning to outcomes"
            description="A collaborative process designed to help enterprise teams launch quickly and scale effectively."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2a73db] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faqs" className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions from enterprise L&D teams"
              description="Everything you need to know before rolling out a custom program."
            />

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Testimonials"
            title="What enterprise leaders say"
            description="Teams value our consultative approach, quality delivery, and measurable business impact."
          />
          <EnterpriseMetrics showTestimonial />
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <SectionHeading
              eyebrow="Get Started"
              title="Plan your organization’s next learning leap"
              description="Share your goals and team context. We will recommend a custom enterprise learning roadmap and implementation plan."
            />
            <LeadCaptureForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
