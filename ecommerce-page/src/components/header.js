import '../styles/header.css';
import menu from '../images/icon-menu.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="subsectionHeader">
          <img src={menu} alt="menu" className="iconHeader" />
          <h1 className="headerTitle">sneakers</h1>
        </div>
        <div className="subsectionHeader">
          <img src={cart} alt="cart" className="iconHeader" />
          <img src={avatar} alt="cart" className="iconHeader" />
        </div>
      </section>
    </>
  );
};

export default Header;
