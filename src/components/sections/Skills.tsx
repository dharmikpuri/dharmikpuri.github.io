import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Skill icons using SVG for animated logos
const skillsData = {
  frontend: [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'MUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  ],
};

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-200 group"
    >
      <motion.div
        className="w-8 h-8 md:w-10 md:h-10"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain dark:brightness-110"
          loading="lazy"
        />
      </motion.div>
      <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: 'Frontend', skills: skillsData.frontend },
    { title: 'Backend', skills: skillsData.backend },
    { title: 'Tools', skills: skillsData.tools },
  ];

  const apis = [
    'WhatsApp API', 'OpenAI', 'Stripe', 'Cryptomus', 'Google OAuth', 
    'LinkedIn OAuth', 'GitHub SSO', 'REST APIs', 'JWT', 'OAuth 2.0'
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden bg-secondary/30">
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm mb-2 block">What I Work With</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid - All categories in one row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card/50 rounded-xl p-4 border border-border"
            >
              <h3 className="text-sm md:text-base font-semibold mb-4 text-center text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* APIs - Compact inline tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-sm md:text-base font-semibold mb-3 text-center text-primary">
            APIs & Integrations
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {apis.map((api, index) => (
              <motion.span
                key={api}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.4 + index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
              >
                {api}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;