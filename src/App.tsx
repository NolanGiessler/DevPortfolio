import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'Project 1',
      description: 'Project 1 description',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['test'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Project 2 description',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: [],
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Project 3 description',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: [],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with dark mode support.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      link: '#'
    }
  ];

  const skills = [
    { 
      name: 'React', 
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Building interactive UIs with React and its ecosystem'
    },
    { 
      name: 'JavaScript', 
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Modern ES6+ JavaScript development'
    },
    { 
      name: 'Node.js', 
      image: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Server-side JavaScript with Node.js'
    },
    { 
      name: 'TypeScript', 
      image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Type-safe JavaScript development'
    },
    { 
      name: 'Responsive Design', 
      image: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Creating layouts that work on any device'
    },
    { 
      name: 'UI/UX Design', 
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Designing intuitive user experiences'
    },
    { 
      name: 'SSMS', 
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'SQL Server Management Studio for database design and implementation'
    },
    { 
      name: 'Git & GitHub', 
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Version control and collaboration'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">Dev</span>Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-2 ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nolan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                I build responsive, user-friendly web applications with modern technologies.
                Let's work together to bring your ideas to life.
              </p>
              <div className="flex space-x-4">
                 <a href="mailto:nolangiessler@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                 Contact me
                </a>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Developer" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Working on laptop" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <p className="text-lg mb-6">
                  I’m a web developer with over two years of experience building responsive and scalable applications. I specialize in modern technologies like React, Node.js, and TypeScript, with a strong focus on performance, maintainability, and user experience.
                </p>
                <p className="text-lg mb-6">
                  I'm passionate about clean code, performance optimization, and creating
                  intuitive user experiences. My background in both frontend and backend
                  development allows me to build complete solutions from concept to deployment.
                </p>
                <p className="text-lg mb-8">
                  Outside of develoment, I stay up to date with industry trends, explore new technologies, and contribute to open-source projects.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/NolanGiessler" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/nolan-giessler/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:nolangiessler@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section className="py-24 px-4" id="contact">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a 
            href="mailto:nolangiessler@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="mr-2" size={20} />
            Get in Touch
          </a>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                <span className="text-blue-400">Dev</span>Portfolio
              </div>
              <p className="text-gray-400 mt-2">Building the web, one project at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/NolanGiessler" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nolan-giessler/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nolangiessler@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nolan Giessler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;