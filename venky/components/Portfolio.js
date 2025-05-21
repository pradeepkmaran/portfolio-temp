import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MapPin, Award, Book, Briefcase, Code, Star, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 py-4 px-6 md:px-12 lg:px-20 bg-purple-950 bg-opacity-80 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">VM</div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-300 transition">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-purple-300 transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-300 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-purple-300 transition">Skills</button>
              <button onClick={() => scrollToSection('awards')} className="text-white hover:text-purple-300 transition">Awards</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-300 transition">Contact</button>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="bg-purple-900 py-16 px-6 pt-32 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Venkatesh Meenakshinathan</h1>
              <h2 className="text-xl md:text-2xl text-purple-200 mb-4">Biomedical Engineer & AI Specialist</h2>
              <p className="mb-6 text-gray-100 max-w-2xl">
                Passionate about revolutionizing healthcare using cutting-edge technology, machine learning, and data analytics to develop innovative solutions that enhance patient care and diagnostic accuracy.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-white text-purple-900 px-4 py-2 rounded-md font-medium hover:bg-purple-100 transition duration-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> Contact Me
                </button>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition duration-300 flex items-center">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition duration-300 flex items-center">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </div>
            </div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
              <span className="text-3xl font-bold">VM</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-300 mb-4">
                I am a highly motivated Biomedical Engineering student driven by a passion for using cutting-edge technology to revolutionize healthcare. With proficiency in machine learning, deep learning, and data analytics, I specialize in developing predictive models, medical image analysis systems, and natural language processing (NLP) applications.
              </p>
              <p className="text-gray-300 mb-4">
                My experience spans biomedical data analysis, including medical imaging, and I am well-versed in biostatistics, medical informatics, and computational modeling. I am adept at utilizing frameworks such as TensorFlow and PyTorch to build innovative solutions that push the boundaries of healthcare technology.
              </p>
              <p className="text-gray-300">
                My expertise also extends to cloud platforms like AWS and Firebase, allowing me to design scalable, full-stack healthcare applications. With a strong foundation in experimental design, data preprocessing, and quality control, my goal is to optimize healthcare systems and improve diagnostic accuracy.
              </p>
            </div>
            <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-200">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Master of Science in Artificial Engineering</p>
                  <p className="text-purple-200">Carnegie Mellon University</p>
                  <p className="text-sm text-gray-300">Aug 2025 – Dec 2026</p>
                </div>
                <div>
                  <p className="font-semibold">Bachelor of Engineering in Biomedical Engineering</p>
                  <p className="text-purple-200">Sri Sivasubramaniya Nadar College of Engineering</p>
                  <p className="text-sm text-gray-300">Aug 2021 – June 2025</p>
                </div>
                <div>
                  <p className="font-semibold">High School Diploma</p>
                  <p className="text-purple-200">D.A.V. Boys School, Gopalapuram</p>
                  <p className="text-sm text-gray-300">Aug 2017 – June 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Intern at TU Delft University</h3>
                <span className="text-purple-300 text-sm">Feb 2025 - April 2025</span>
              </div>
              <p className="text-gray-300 mb-3">Netherlands</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed a biomechanical simulator for upper limb prosthetics</li>
                <li>Used FDM 3D printing for rapid prototyping</li>
                <li>Applied AI-driven control strategies to improve prosthetic simulations</li>
                <li>Collaborated with experts at TU Delft's Bio-Mechanical Engineering department</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Data Scientist at Prediscan Medtech</h3>
                <span className="text-purple-300 text-sm">July 2024 - Jan 2025</span>
              </div>
              <p className="text-gray-300 mb-3">HTIC, IIT Madras, India</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Developed disease progression tracking system with high prediction accuracy</li>
                <li>Identified novel biomarkers in ophthalmic imaging, reducing diagnostic time by 40%</li>
                <li>Executed a clinical correlation study analyzing patient data across multiple parameters</li>
                <li>Engineered vessel and optic disc segmentation tool with 98% anatomical accuracy</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Biomedical Engineer</h3>
                <span className="text-purple-300 text-sm">Jan 2024</span>
              </div>
              <p className="text-gray-300 mb-3">Awali Hospital, Bahrain</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Calibrated critical medical equipment and performed quality assurance</li>
                <li>Managed histology laboratory operations</li>
                <li>Resolved technical issues with 95% first-time fix rate</li>
                <li>Conducted quality control for radiological imaging equipment</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-purple-700 p-4">
                <h3 className="text-xl font-bold">Gaze Mapping Based Attention Monitoring</h3>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900 text-white mb-4">August 2024 - Present</span>
                <p className="text-gray-300 mb-4">Pioneered a gaze tracking system that maps visual attention patterns during cognitive tasks, enabling real-time monitoring of focus levels.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Full Stack</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Machine Learning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-purple-700 p-4">
                <h3 className="text-xl font-bold">Eye Fundus Image-Based Disease Prediction</h3>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900 text-white mb-4">July 2023 - Present</span>
                <p className="text-gray-300 mb-4">Developed an advanced retinal analysis system using fundus imagery that accurately predicts chronic diseases with 95% sensitivity.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Image Segmentation</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Deep Learning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-purple-700 p-4">
                <h3 className="text-xl font-bold">VR-Based System for Home Glaucoma Monitoring</h3>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900 text-white mb-4">July 2024 - Oct 2024</span>
                <p className="text-gray-300 mb-4">Designed an at-home diagnostic platform combining interactive VR technology with non-invasive sensors for glaucoma monitoring.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Unity VR</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Thermal Imaging</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Embedded Systems</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-purple-700 p-4">
                <h3 className="text-xl font-bold">AI for Early Schizophrenia Detection</h3>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900 text-white mb-4">ATSN-2024 Conference</span>
                <p className="text-gray-300 mb-4">Engineered an EEG analysis pipeline detecting early neurological markers of schizophrenia with 99% accuracy.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Transformers</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Attention Networks</span>
                  <span className="px-2 py-1 bg-purple-800 rounded text-xs">Feature Extraction</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Programming Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['Python', 'MATLAB', 'Kotlin', 'R'].map((skill) => (
                  <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center">
                    <span className="text-lg font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
                Development Frameworks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {['LabVIEW', 'SIMULINK', 'Django', 'Flutter', 'Flask'].map((skill) => (
                  <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center">
                    <span className="text-lg font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-purple-400" />
                Machine Learning & Data Science
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Deep Learning', level: 90 },
                  { name: 'Computer Vision', level: 85 },
                  { name: 'Medical Image Processing', level: 95 },
                  { name: 'Signal Processing', level: 85 },
                  { name: 'Data Analytics', level: 80 },
                  { name: 'NLP', level: 75 }
                ].map((skill) => (
                  <div key={skill.name} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards Section */}
        <section id="awards" className="mb-24 scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Awards & Leadership</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 border-b border-purple-500 pb-2">Awards & Recognition</h3>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart India Hackathon 2023</h3>
                    <p className="text-purple-300 font-medium mb-1">Top 5 Team Nationally</p>
                    <p className="text-gray-300">Recognized for developing an innovative solution to address a real-world problem.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">IEEE SPS Multimedia Signal Processing Cup</h3>
                    <p className="text-purple-300 font-medium mb-1">3rd Place Nationally</p>
                    <p className="text-gray-300">Showcased excellence in multimedia signal processing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 border-b border-purple-500 pb-2">Leadership Positions</h3>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold mb-4 text-purple-300">IEEE Signal Processing Society</h4>
                <p className="text-gray-300 mb-2"><span className="font-medium">Position:</span> Chair</p>
                <p className="text-gray-300">Led initiatives, workshops, and events to foster student engagement.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold mb-4 text-purple-300">Math Club at SSN College of Engineering</h4>
                <p className="text-gray-300 mb-2"><span className="font-medium">Position:</span> President</p>
                <p className="text-gray-300">Organized competitions, seminars, and activities to promote mathematical thinking.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="h-0.5 bg-purple-500 flex-grow ml-6"></div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="mailto:venkat011003@gmail.com" className="text-gray-300 hover:text-white transition">venkat011003@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-3">📱</span>
                    <span className="text-gray-300">+91 9789060141</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Pittsburgh, USA</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-purple-700 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-purple-700 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                    <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="message" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  </div>
                  <button type="button" className="bg-purple-600 text-white py-2 px-6 rounded-md font-medium hover:bg-purple-500 transition duration-300">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-purple-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Venkatesh Meenakshinathan. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:venkat011003@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}