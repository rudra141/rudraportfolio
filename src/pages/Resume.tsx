import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Resume</h1>
          <a
            href="/john-doe-resume.pdf"
            download
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download PDF
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 space-y-12">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">B.Tech in Computer Science (AI & ML)</h3>
                <p className="text-gray-700 font-medium">Shri Ramdeobaba College of Engineering and Management (RCOEM)</p>
                <p className="text-gray-600">2021 - 2025</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">AI/ML Intern</h3>
                <p className="text-gray-700 font-medium">Asterisc Technocrat</p>
                <p className="text-gray-600 mb-2">Summer 2023</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Developed high-accuracy prediction models</li>
                  <li>Conducted comprehensive data analysis</li>
                  <li>Implemented machine learning solutions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">Publicity Head</h3>
                <p className="text-gray-700 font-medium">ACM RCOEM</p>
                <p className="text-gray-600 mb-2">2022 - Present</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Organized events for 1000+ attendees</li>
                  <li>Led publicity campaigns</li>
                  <li>Managed team communications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Key Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">AI Water Well Construction Advisor</h3>
                <p className="text-gray-600 mb-2">99% accuracy in well suitability prediction</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Integrated geospatial insights</li>
                  <li>Implemented machine learning algorithms</li>
                  <li>Developed efficient resource management system</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">SKYGUARD - Drone Detection System</h3>
                <p className="text-gray-600 mb-2">95% accuracy using YOLO NAS</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Real-time detection capabilities</li>
                  <li>Dynamic web app with live streaming</li>
                  <li>Integrated chat functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">Legal Mate - AI-Powered Legal Assistant</h3>
                <p className="text-gray-600 mb-2">Simplifying legal documentation with AI</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Automated generation of legal documents</li>
                  <li>Real-time retrieval of case data using RAG</li>
                  <li>Integrated chatbot for legal queries and expert advice</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600 mb-3">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL',
                    'Deep Learning',
                    'Data Visualization',
                    'Machine Learning',
                    'Generative AI',
                    'RAG',
                    'LangChain',
                    'HuggingFace',].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Achievements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Regional Level Cricket Player U-17 & kabaddi U - 14.</li>
              <li>Nationalist at the National Science Exhibition, presenting a project evaluated by a panel of 10+ experts.</li>
              <li>Represented my school in NEERI(National Environmental Research Institute) among 50+ schools.</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}