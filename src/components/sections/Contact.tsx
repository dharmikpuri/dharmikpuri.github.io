import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "dharmikpuri2004@gmail.com",
    href: "mailto:dharmikpuri2004@gmail.com",
    copyable: true,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9352169357",
    href: "tel:+919352169357",
    copyable: true,
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Udaipur, India",
    href: null,
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    href: "https://github.com/dharmikpuri",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dharmik-puri-goswami-b27272262/",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedValue(null), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };
  // console.log(import.meta.env);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS integration - requires user to set up their EmailJS account
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
        toast.error(
          "Service temporarily unavailable. Please contact me directly via email.",
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setIsSubmitting(false);
        return;
      }

      // Dynamic import of EmailJS
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: "Dharmik",
        },
        emailjsPublicKey,
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error(
        "Failed to send message. Please try again or use direct email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 relative overflow-hidden bg-secondary/30"
    >
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 h-full">
              <h3 className="text-lg font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 flex-1">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-sm hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                    {info.copyable && (
                      <button
                        onClick={() => handleCopy(info.value)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label={`Copy ${info.label}`}
                      >
                        {copiedValue === info.value ? (
                          <Check size={14} className="text-primary" />
                        ) : (
                          <Copy size={14} className="text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Ready to work card */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  💼{" "}
                  <span className="font-medium text-foreground">
                    Currently looking for new opportunities.
                  </span>{" "}
                  Whether you have a project in mind or just want to chat, I'd
                  love to hear from you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
