import skills from '../constants/skills';
import { useState } from 'react';
import colors from '../constants/colors';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills =
    activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-28 px-[5%] xl:px-[10%] relative"
      style={{ backgroundColor: colors.darker }}
    >
      {/* Background pattern - placed behind content */}
      <div
        className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4YTJiZTIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"
        style={{ zIndex: 0 }} // Ensure this is behind content
      />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold whitespace-nowrap"
              style={{ color: colors.text }}
            >
              <span className="font-mono mr-4" style={{ color: colors.accent }}>
                02.
              </span>
              Skills & Technologies
            </h2>
            <div
              className="w-full md:w-64 h-px ml-4"
              style={{ backgroundColor: `${colors.primary}30` }}
            />
          </div>

          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Here are the technologies I work with on a daily basis
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] text-white shadow-md'
                    : 'bg-transparent text-[#D8BFD8] hover:text-[#8A2BE2] border border-[#8A2BE2] hover:border-[#8A2BE2]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border transition-all duration-300 flex flex-col items-center group hover:-translate-y-2 hover:shadow-lg"
                style={{
                  backgroundColor: colors.dark,
                  borderColor: `${colors.primary}20`,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg p-3"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 style={{ color: colors.text }}>{skill.name}</h3>
                <span className="text-xs mt-1 font-mono" style={{ color: colors.accent }}>
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
