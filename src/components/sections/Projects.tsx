import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Import project screenshots
import fitness1 from '@/assets/projects/fitness-1.png';
import emporium1 from '@/assets/projects/emporium-1.png';
import lenskart1 from '@/assets/projects/lenskart-1.png';
import booking1 from '@/assets/projects/booking-1.png';

const projects = [
  {
    id: 1,
    title: 'FitnessFuel',
    subtitle: 'Health & Fitness Platform',
    description: 'FitnessFuel simplifies nutrition and calorie tracking, provides the data you want, and helps you make sense of it all. It also provides exercise and diet plans according to your needs (beginners, intermediate, expert).',
    tech: ['React', 'Node.js', 'MongoDB', 'Chakra UI', 'Express.js'],
    images: [fitness1],
    githubLink: 'https://github.com/dharmikpuri/FitnessFuel',
    liveLink: 'https://frontend-iota-blond.vercel.app/',
  },
  {
    id: 2,
    title: 'ElectroEmporium',
    subtitle: 'E-commerce Platform',
    description: 'ElectroEmporium is an online platform that allows users to browse and purchase the latest smart devices and gadgets. It has a wide range of devices available in various categories such as Mac, iPhones, iPads, smart watches, airpods, etc.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chakra UI'],
    images: [emporium1],
    githubLink: 'https://github.com/dharmikpuri/Apple-Clone',
    liveLink: 'https://electro-emporium.vercel.app/',
  },
  {
    id: 3,
    title: 'LensKart Clone',
    subtitle: 'Eyewear E-commerce',
    description: 'Lenskart is an Eyecare Website which provides Eyeglasses and Sunglasses at affordable prices. Features include product catalog, cart functionality, user authentication, and seamless checkout experience.',
    tech: ['React', 'JavaScript', 'CSS', 'Node.js', 'MongoDB'],
    images: [lenskart1],
    githubLink: 'https://github.com/dharmikpuri/LensKart-Clone',
    liveLink: 'https://eyecare-dharmikpuri.vercel.app/',
  },
  {
    id: 4,
    title: 'MBooking',
    subtitle: 'Travel Booking Platform',
    description: 'Booking.com clone providing online reservation services for hotels and accommodations. Features include search functionality, booking management, user authentication, and admin dashboard.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chakra UI'],
    images: [booking1],
    githubLink: 'https://github.com/dharmikpuri/Booking.com-Clone',
    liveLink: 'https://mbooking-beta.vercel.app/',
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl group">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Screenshot ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.1
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8 shadow-lg shadow-primary/50' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  isInView 
}: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}
    >
      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
        whileHover={{ 
          scale: 1.03,
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3), 0 0 40px -10px hsl(var(--primary) / 0.2)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated border gradient */}
        <motion.div 
          className="absolute -inset-[1px] rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(280, 87%, 65%, 0.5), hsl(var(--primary) / 0.5))',
            backgroundSize: '200% 200%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
          <ImageCarousel images={project.images} />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-4' : 'lg:pr-4'}`}>
        <motion.span 
          className="inline-block text-primary text-sm font-semibold uppercase tracking-wider"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          {project.subtitle}
        </motion.span>
        
        <motion.h3 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-5 bg-clip-text"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.6 + techIndex * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
        >
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 rounded-xl transition-all font-medium text-sm border border-border hover:border-primary/30 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} />
            View Code
          </motion.a>
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm mb-2 block">Featured Work</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
