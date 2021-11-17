import Link from 'next/link'
import styles from '../styles/Nav.module.css'
export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>home</Link>
                    <Link href='/about'>about</Link>
                </li>
            </ul>
        </nav>
    )
}
