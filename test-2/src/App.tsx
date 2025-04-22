import { lazy, useState } from 'react';

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

  return (
    <>
      <Navbar openLoginModal={openLoginModal} />
      <Hero />
      <About />
      <Pricing />
      <Contact />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
      />
    </>
  );
}

export default App

