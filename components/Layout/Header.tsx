import headers from "./header.module.css";
import HeaderLinks from "./HeaderLinks";

const Header = (): JSX.Element => {
  return (
    <header className={headers.header}>
      <div className={headers.grid}>
        <div className={headers.logo}>
          <div className={headers.content}>
            <></>
          </div>
        </div>
        <div className={headers.navLinks}>
          <HeaderLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
