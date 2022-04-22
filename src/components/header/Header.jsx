import {
  header,
  headerContainer,
  headerLogo,
  headerTitle,
} from "./Header.module.css";

const Header = () => {
  return (
    <header className={header}>
      <div className={headerContainer}>
        <span className={headerLogo}></span>
        <span className={headerTitle}>Book tracker app</span>
      </div>
    </header>
  );
};

export default Header;
