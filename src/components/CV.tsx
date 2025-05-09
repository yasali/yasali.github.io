
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CV = () => {
  return (
    <section id="cv" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional background, skills, and experience.
          </p>
          <Button className="mt-6" variant="outline">
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Sr. Software Engineer</h3>
                    <p className="text-gray-600">Viaplay Group AB Name</p>
                  </div>
                  <span className="text-sm text-gray-500">2024 - Present</span>
                </div>
                <p className="text-gray-700">
                  Providing initiatives and implementing overall architecture improvements for the Apple platform app.
                  Mentor junior engineers, providing technical guidance and fostering career growth.
                  Actively participate in hiring processes, including candidate evaluation and technical interviews.
                  Lead technical discussions and contribute to team strategy and process improvements.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Sr. Software Engineer</h3>
                    <p className="text-gray-600">Doktorse Nordic AB</p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - 2024</span>
                </div>
                <p className="text-gray-700">
                Led feature development and app release cycles, collaborating with QA and product teams.
                Spearheaded architectural transformations, improving codebase scalability.
                Provided technical leadership in Agile planning, sprint execution, and mentoring engineers.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Sr. Software Engineer</h3>
                    <p className="text-gray-600">Sweden Connectivity AB </p>
                  </div>
                  <span className="text-sm text-gray-500">2017 - 2022</span>
                </div>
                <p className="text-gray-700">
                Actively collaborated with stakeholders, ensuring alignment with business goals and feature roadmaps.
                Represented the product at industry events, delivering impactful demonstrations and technical insights to potential clients and partners.
                Established CI/CD pipelines, improving deployment efficiency and automating testing frameworks for faster delivery.
                Developed cloud-based services using AWS, Azure, optimizing scalability and reliability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education and Skills */}
          <div className="space-y-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Master's Degree</h3>
                      <p className="text-gray-600">University of Turku, Turku, Finland</p>
                    </div>
                    <span className="text-sm text-gray-500">2010 - 2013</span>
                  </div>
                  <p className="text-gray-700">Communication Systems</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Bachelor's Degree</h3>
                      <p className="text-gray-600">Sir Syed University of Engineering & Technology, Karachi, Pakistan
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">2009 - 2013</span>
                  </div>
                  <p className="text-gray-700">Computers</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <SkillCategory 
                    title="Technical Skills" 
                    skills={["Swift", "Objective-C", "Java", "Python", "JavaScript", "MySQL"]} 
                  />
                  <SkillCategory 
                    title="Soft Skills" 
                    skills={["Leadership", "Communication", "Problem Solving", "Teamwork"]} 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
    <ul className="space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-700 flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default CV;
