import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import NavLinks from "./NavLinks";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface INavbarProps {
  openLoginModal: () => void;
}
const Index: React.FC<INavbarProps> = ({ openLoginModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 20 && !scrolled) {
        setScrolled(true);
      }

      if (y < 5 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles["navbar-wrapper"]}${
        scrolled ? ` ${styles["scrolled"]}` : ""
      }`}
    >
      <button className={styles["brand"]} onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
        </svg>
        <span>Home</span>
      </button>
      {isMobile ? (
        <>
          <button
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={isOpenMobileMenu ? "Close menu" : "Open menu"}
            className={styles["btn-hamburger"]}
          >
            <Menu
              size={24}
              className={`absolute transition-all duration-300 ${
                isHovered || isOpenMobileMenu
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              size={24}
              className={`transition-all duration-300 ${
                isHovered || isOpenMobileMenu
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
              }`}
            />
          </button>

          <MobileMenu
            onClose={() => setIsOpenMobileMenu(false)}
            openLoginModal={openLoginModal}
            isOpen={isOpenMobileMenu}
          />
        </>
      ) : (
        <NavLinks openLoginModal={openLoginModal} />
      )}
    </div>
  );
};

export default Index;
