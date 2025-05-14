import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleDownload = () => {
    const pdfUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Yasir_Ali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 font-playfair tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-inter leading-relaxed tracking-wide">
            A detailed look at my professional background, skills, and experience.
          </p>
          <Button 
            onClick={handleDownload}
            className="bg-gray-900 hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-lg">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-2 rounded-md transition-all duration-300 font-inter ${
                  activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {activeSection === 'experience' && (
            <ExperienceSection />
          )}
          {activeSection === 'education' && (
            <EducationSection />
          )}
          {activeSection === 'skills' && (
            <SkillsSection />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <TimelineCard
      title="Sr. Software Engineer"
      company="Viaplay Group AB"
      period="2024 - Present"
      description="Providing initiatives and implementing overall architecture improvements for the Apple platform app. Mentor junior engineers, providing technical guidance and fostering career growth."
    />
    <TimelineCard
      title="Sr. Software Engineer"
      company="Doktorse Nordic AB"
      period="2022 - 2024"
      description="Led feature development and app release cycles, collaborating with QA and product teams. Spearheaded architectural transformations, improving codebase scalability."
    />
    <TimelineCard
      title="Sr. Software Engineer"
      company="Sweden Connectivity AB"
      period="2017 - 2022"
      description="Actively collaborated with stakeholders, ensuring alignment with business goals and feature roadmaps. Established CI/CD pipelines, improving deployment efficiency."
    />
  </motion.div>
);

const EducationSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <TimelineCard
      title="Master's Degree"
      company="University of Turku, Finland"
      period="2010 - 2013"
      description="Communication Systems"
    />
    <TimelineCard
      title="Bachelor's Degree"
      company="Sir Syed University of Engineering & Technology"
      period="2009 - 2013"
      description="Computers"
    />
  </motion.div>
);

const SkillsSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8"
  >
    <SkillCategory 
      title="Technical Skills" 
      skills={["Swift", "Objective-C", "Java", "Python", "JavaScript", "MySQL"]} 
    />
    <SkillCategory 
      title="Soft Skills" 
      skills={["Leadership", "Communication", "Problem Solving", "Teamwork"]} 
    />
  </motion.div>
);

const TimelineCard = ({ title, company, period, description }: { 
  title: string; 
  company: string; 
  period: string; 
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative pl-8 pb-8 border-l-2 border-gray-200"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900" />
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 font-space">{title}</CardTitle>
            <p className="text-gray-600 font-inter">{company}</p>
          </div>
          <span className="text-sm text-gray-500 font-inter">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 font-inter leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-900 font-space">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium font-inter"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Resume; 