import { motion } from "motion/react";
import { Target, Compass, Heart, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const highlights = [
  {
    icon: Target,
    title: "Career Goal",
    text: "To keep delivering high-quality, innovative web solutions and grow as a CMS and web developer.",
  },
  {
    icon: Compass,
    title: "Professional Journey",
    text: "From WordPress and Shopify developer to a multi-platform CMS developer — 4+ years building websites.",
  },
  {
    icon: Heart,
    title: "Personal Mission",
    text: "Build websites that feel effortless to use and genuinely help businesses grow online.",
  },
  {
    icon: Code2,
    title: "Core Focus",
    text: "WordPress, Shopify, Squarespace & Wix — with a focus on clean builds, SEO, and performance.",
  },
];

const stack = [
  "WordPress",
  "Shopify",
  "Squarespace",
  "Wix",
  "HTML to Shopify",
  "JavaScript",
  "SEO",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Building dynamic websites with care"
          // description="A full-stack engineer who treats every pixel and every millisecond as part of the experience."
          description="A CMS developer focused on high-quality, innovative web solutions for every project."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass rounded-3xl p-8 shadow-soft"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a <span className="font-semibold text-primary">CMS Developer</span>{" "}
              with <span className="font-semibold text-primary">3+ years</span> of experience
              creating dynamic websites with WordPress, Shopify, Squarespace, and Wix.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I've worked with Ossols, Metalink Systems, and Olive Digital, building and
              customizing websites for different clients and industries. I'm passionate about
              delivering high-quality, innovative web solutions for every project.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Alongside work, I'm studying for my BS at Iqra University and keep improving my
              skills in SEO, JavaScript, and converting HTML designs into Shopify stores.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold">Skills summary</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                className="card-hover rounded-3xl border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                  <h.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
