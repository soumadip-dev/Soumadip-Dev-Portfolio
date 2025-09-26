import colors from '../constants/colors';
import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-28 px-[5%] xl:px-[10%] relative"
      style={{ backgroundColor: colors.darker }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4YTJiZTIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold whitespace-nowrap"
              style={{ color: colors.text }}
            >
              <span className="font-mono mr-4" style={{ color: colors.accent }}>
                04.
              </span>
              Get In Touch
            </h2>
            <div
              className="w-full md:w-64 h-px ml-4"
              style={{ backgroundColor: `${colors.primary}30` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div
              className="p-8 rounded-lg border shadow-lg"
              style={{
                backgroundColor: colors.dark,
                borderColor: `${colors.primary}20`,
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <p style={{ color: colors.textSecondary }}>
                  If you have any questions or opportunities, feel free to reach out. I'll get back
                  to you as soon as possible.
                </p>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-mono text-sm"
                    style={{ color: colors.accent }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.darker,
                      border: `1px solid ${colors.primary}30`,
                      color: colors.text,
                      focus: {
                        borderColor: colors.accent,
                        ring: `${colors.accent}20`,
                      },
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-mono text-sm"
                    style={{ color: colors.accent }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.darker,
                      border: `1px solid ${colors.primary}30`,
                      color: colors.text,
                      focus: {
                        borderColor: colors.accent,
                        ring: `${colors.accent}20`,
                      },
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-mono text-sm"
                    style={{ color: colors.accent }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-md text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.darker,
                      border: `1px solid ${colors.primary}30`,
                      color: colors.text,
                      focus: {
                        borderColor: colors.accent,
                        ring: `${colors.accent}20`,
                      },
                    }}
                    placeholder="Hi Soumadip, I'd like to talk about..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-[#8A2BE2]/30"
                >
                  <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                    Send Message
                  </span>
                  <MdEmail className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className="p-8 rounded-lg border shadow-lg h-full"
              style={{
                backgroundColor: colors.dark,
                borderColor: `${colors.primary}20`,
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
                Contact Information
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Feel free to reach out through any of these channels. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-full border flex-shrink-0"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: `${colors.primary}30`,
                    }}
                  >
                    <MdEmail size={20} style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm mb-1" style={{ color: colors.accent }}>
                      Email
                    </h4>
                    <a
                      href="mailto:soumadipmajila@gmail.com"
                      className="transition-colors duration-300 hover:text-[#8A2BE2]"
                      style={{ color: colors.text }}
                    >
                      soumadipmajila@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-full border flex-shrink-0"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: `${colors.primary}30`,
                    }}
                  >
                    <MdPhone size={20} style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm mb-1" style={{ color: colors.accent }}>
                      Phone
                    </h4>
                    <a
                      href="tel:+919883843512"
                      className="transition-colors duration-300 hover:text-[#8A2BE2]"
                      style={{ color: colors.text }}
                    >
                      +91 9883843512
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-full border flex-shrink-0"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: `${colors.primary}30`,
                    }}
                  >
                    <MdLocationOn size={20} style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <h4 className="font-mono text-sm mb-1" style={{ color: colors.accent }}>
                      Location
                    </h4>
                    <p style={{ color: colors.text }}>Durgapur, West Bengal, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-mono text-sm mb-4" style={{ color: colors.accent }}>
                  CONNECT WITH ME
                </h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub size={20} />, url: 'https://github.com/soumadip-dev' },
                    {
                      icon: <FaLinkedin size={20} />,
                      url: 'https://www.linkedin.com/in/soumadip-majila-dgp/',
                    },
                    { icon: <FaTwitter size={20} />, url: 'https://x.com/SoumadipMajila' },
                    { icon: <FaBlog size={20} />, url: 'https://hashnode.com/@soumadip' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{
                        backgroundColor: colors.darker,
                        border: `1px solid ${colors.primary}30`,
                        color: colors.textSecondary,
                        hover: {
                          borderColor: colors.accent,
                          color: colors.accent,
                        },
                      }}
                      aria-label={social.icon.type.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
