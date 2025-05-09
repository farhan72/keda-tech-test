import { lazy, useEffect, useState } from 'react';
import scrollToSectionByIdUtils from './utils/scrollToSectionByIdUtils';
import AnimatedWrapper from './components/ui/AnimatedWrapper';

const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Hero = lazy(() => import('./components/Hero'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
// Modal
const LoginModal = lazy(() => import("./components/ui/LoginModal"));

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash; // includes the "#" symbol
    const sectionId = hash.replace("#", "");

    scrollToSectionByIdUtils(sectionId);
  }, []);

  return (
    <>
      <Navbar openLoginModal={openLoginModal} />
      <AnimatedWrapper>
        <Hero />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <About />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <Pricing />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <Contact />
      </AnimatedWrapper>

      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
    </>
  );
}

export default App

