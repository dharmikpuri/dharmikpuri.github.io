import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-20 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm mb-2 block">My Journey</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-card p-8 relative">
            {/* Timeline dot */}
            <div className="absolute left-8 top-0 bottom-0 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-primary absolute -left-2 top-8" />
              <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent ml-[3px]" />
            </div>

            <div className="md:pl-8">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Full Stack Developer</h3>
                  <p className="text-lg text-primary font-medium">Sogofy Biz Tech Private Limited</p>
                </div>
                <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>July 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin size={14} />
                    <span>Tamil Nadu, India (Hybrid)</span>
                  </div>
                </div>
              </div>

              {/* Projects/Responsibilities */}
              <div className="space-y-6">
                {/* Project 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    CRM & WhatsApp Campaign Automation Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Built CRM modules for WhatsApp campaign automation using React.js, Node.js, and PostgreSQL.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Integrated Meta WhatsApp Business API for template management, conversation tracking, and bulk messaging workflows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Implemented webhook-based real-time message processing for campaign delivery and response tracking.
                    </li>
                  </ul>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    AI-Powered Hiring & Candidate Evaluation Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Implemented AI-powered video-to-transcript processing and automated candidate evaluation workflows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Built dynamic PDF generation for candidate profile exports to streamline recruitment workflows.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Developed full-stack modules for candidate data management and recruiter dashboards.
                    </li>
                  </ul>
                </motion.div>

                {/* Project 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    Server Management & Hosting Automation Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Implemented server provisioning and management workflows using Next.js, TypeScript, Node.js, and PostgreSQL.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Integrated Stripe and Cryptomus gateways for secure server purchase and subscription processing.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Developed backend automation to monitor server status and synchronize resources across providers.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-6"
        >
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-semibold">Education & Certifications</h3>
            </div>
            <div className="space-y-4 pl-4">
              <div>
                <p className="font-medium text-foreground">Bachelor of Science (B.Sc.) in Computer Science</p>
                <p className="text-sm text-muted-foreground">Birla Institute of Technology and Science (BITS), Pilani • Aug 2023 – Jul 2026</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Full Stack Web Development Program (Full Time)</p>
                <p className="text-sm text-muted-foreground">Masai School, Bengaluru, Karnataka • Aug 2022 – Jul 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
