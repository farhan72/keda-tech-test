import scrollToSectionByIdUtils from '@/utils/scrollToSectionByIdUtils';
import styles from './Navbar.module.scss';

interface INavLinksProps {
  openLoginModal: () => void;
  onClickMenuItem?: (path: string) => void;
}

const navLinks = [
  { label: "About", href: "about" },
  { label: "Pricing", href: "pricing" },
  { label: "Contact", href: "contact" },
];

const NavLinks: React.FC<INavLinksProps> = ({ openLoginModal, onClickMenuItem }) => {
  const clickMenuItem = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    onClickMenuItem?.(href);
    scrollToSectionByIdUtils(href);
  }

  return (
    <ul className={styles["navlinks"]}>
      {navLinks.map((item, i) => (
        <li key={i}>
          <a
            className={styles["navlink-item"]}
            href={item.href}
            onClick={(event) => clickMenuItem(event, item.href)}
          >
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <button className={styles["btn-login"]} onClick={openLoginModal}>
          Login
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;