import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Ofertas',
      
      href: '/'
  },
  {
      text: 'Ofertas ',
      href: '/about'
  },
  {
      text: 'Terminos y condiciones',
      href: '/contact'
  },
  {
      text: 'Dudas y preguntas',
      href: '/pricing'
  },


];

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
        {
          menuItems.map( ({ text, href }) => (
            <ActiveLink key={ href } text={ text } href={ href } />    
          ))

        }

        {/* 
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/Ofertas" />
        <ActiveLink text="Contact" href="/contactClubOfertas" /> 
        <ActiveLink text="Pricing" href="/pricingClubOfertas" />  
        */}
    </nav>
  );
};
