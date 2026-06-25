import './App.css'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Education from './components/Education'
import CVUpload  from './components/CVUpload'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

const portfolioData = {
  name:     'Divine Ohiri',                    // Your name
  title:    'Data analyst & UI Designer', // Your job title
  bio:      'I Design beautiful, responsive web experiences.',
  email:    'ohiridivine92@gmail.com',
  phone:    '+234 706 440 0733',
  location: 'Lagos, Nigeria',
  github:   'github.com/divineohiri92',
  linkedin: 'linkedin.com/in/divine-ohiri-2966283b4',
}

function App() {
  return (
    <div className="app">
      <Navbar ownerName={portfolioData.name} />
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        bio={portfolioData.bio}
      />
      <About
        name={portfolioData.name}
        bio={portfolioData.bio}
        email={portfolioData.email}
        phone={portfolioData.phone}
        location={portfolioData.location}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
      />
      <Skills />
      <Projects />
      <Education />
      <CVUpload />
      <Contact />
      <Footer ownerName={portfolioData.name} />
    </div>
  )
}
export default App