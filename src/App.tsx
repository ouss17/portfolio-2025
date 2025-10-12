import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AkhiDev from './components/AkhiDev';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/akhidev" element={<AkhiDev />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
