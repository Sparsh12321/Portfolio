import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Coriolis Technologies Pvt. Ltd.",
      logo: "/coriolislogo.png",
      type: "Remote",
      location: "Pune,Maharashtra",
      duration: "June 2025 - Present • 2 mos",
      description:
        "Built a scalable anomaly detection pipeline on 1M+ point time series using Zscore,Prophet, Isolation Forest, One-Class SVM, with Prometheus-Grafana integration and vectorized preprocessing, reducing cleaning time by 40% and training time by 25%.",
      skills: ["Python", "PostgreSQL", "Pandas", "Prometheus","Grafanna"],
      github: "https://colab.research.google.com/drive/1rbVdrBWa6bFU-l6CP_XsIlQkX1A8ChmQ?authuser=2#scrollTo=Z8j9zXrhswi1",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="experience" className="py-28 px-6 bg-background text-foreground">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-base mt-2">
            A glimpse into my professional journey
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={1}
              whileHover={{ scale: 1.01 }}
              className="bg-card/40 border border-border shadow-sm rounded-xl p-6 flex flex-col space-y-4 transition-transform md:space-y-0 md:flex-row md:gap-6 md:items-start"
            >
              {/* Logo + Company Info Block */}
              <div className="flex items-center gap-4 w-full md:w-1/3">
                {exp.logo && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-14 h-14 flex-shrink-0 overflow-hidden rounded-md bg-transparent shadow-md"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-1 bg-transparent"
                    />
                  </motion.div>
                )}

                <motion.div
                  className="space-y-1"
                  variants={fadeUp}
                  custom={1.2}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-primary leading-tight">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-muted-foreground">{exp.type} • {exp.location}</p>
                </motion.div>
              </div>

              {/* Details Block */}
              <div className="flex-1 space-y-3">
                <motion.div
                  className="flex justify-between items-start"
                  variants={fadeUp}
                  custom={1.5}
                >
                  <h3 className="text-base md:text-lg font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                  </span>
                </motion.div>

                <motion.p
                  className="text-sm text-foreground/80 leading-relaxed"
                  variants={fadeUp}
                  custom={1.7}
                >
                  {exp.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mt-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {exp.skills.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      variants={fadeUp}
                      custom={sidx + 2}
                      className="text-xs px-3 py-1 rounded-md bg-muted text-foreground border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {exp.github && (
                  <motion.div className="mt-3 mr-52" variants={fadeUp} custom={3}>
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline gap-1"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
