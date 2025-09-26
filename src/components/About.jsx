import aboutImage from '../assets/aboutImage.jpg';
import colors from '../constants/colors';

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-[5%] xl:px-[10%] relative"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold whitespace-nowrap"
            style={{ color: colors.text }}
          >
            <span className="font-mono mr-4" style={{ color: colors.accent }}>
              01.
            </span>
            Who I am?
          </h2>
          <div
            className="w-full md:w-64 h-px ml-4"
            style={{ backgroundColor: `${colors.primary}30` }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p style={{ color: colors.textSecondary }}>
                Hello! I'm <span style={{ color: colors.accent }}>Soumadip</span>, a final-year{' '}
                <span style={{ color: colors.accent }}>MCA student</span> based in{' '}
                <span style={{ color: colors.accent }}>Durgapur, West Bengal</span>. I'm passionate
                about <span style={{ color: colors.accent }}>Full stack development</span> and eager
                to start my professional journey.
              </p>
              <p style={{ color: colors.textSecondary }}>
                My interest in tech began during my{' '}
                <span style={{ color: colors.accent }}>BCA</span>, where I discovered a love for
                coding and web technologies. Since then, I've been building my skills and focusing
                on <span style={{ color: colors.accent }}>creating practical solutions</span>.
              </p>
              <p style={{ color: colors.textSecondary }}>
                I'm currently seeking my{' '}
                <span style={{ color: colors.accent }}>first opportunity</span> to grow,
                collaborate, and contribute to{' '}
                <span style={{ color: colors.accent }}>real-world projects</span>.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative group w-full max-w-[280px] md:max-w-[320px]">
              <div
                className="absolute inset-0 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 -rotate-6 -z-10"
                style={{ backgroundColor: colors.accent }}
              />
              <div
                className="absolute inset-0 border-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-6 -z-10"
                style={{ borderColor: colors.accent }}
              />
              <div className="relative overflow-hidden rounded-lg w-full">
                <img
                  src={aboutImage}
                  alt="Soumadip Majila"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ backgroundColor: colors.dark }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
