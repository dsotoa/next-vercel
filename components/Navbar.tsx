import Link from "next/link";
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
	{
		text: 'Home',
		href: '/',
		key: '/',
	},
	{
		text: 'About',
		href: '/about',
		key: '/about',
	},
	{
		text: 'Contact',
		href: '/contact',
		key: '/contact',
	},
	{
		text: 'Pricing',
		href: '/pricing',
		key: '/pricing',
	},
];

const Navbar = () => {
	return (
		<nav className={styles['menu-container']}>
			{menuItems.map(({ key, text, href }) => (<ActiveLink key={key} text={text} href={href} />))}
		</nav>
	);
};

export default Navbar;
