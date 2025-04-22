import styles from './Navbar.module.scss';

interface INavLinksProps {
  openLoginModal: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const NavLinks: React.FC<INavLinksProps> = ({ openLoginModal }) => (
  <ul className={styles["navlinks"]}>
    {  navLinks.map((item, i) => (
    <li key={i}>
      <a className={styles["navlink-item"]} href={item.href}>
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

export default NavLinks;