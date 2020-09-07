import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUser, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav_item">
                    <Link href="/works">
                        <a className="nav_item_link">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <p className="nav_item_name">Work</p>
                        </a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/abouts">
                        <a className="nav_item_link">
                            <FontAwesomeIcon icon={faUser} />
                            <p className="nav_item_name">About</p>
                        </a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/blogs">
                        <a className="nav_item_link">
                            <FontAwesomeIcon icon={faBlog} />
                            <p className="nav_item_name">Blog</p>
                        </a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/contacts">
                        <a className="nav_item_link">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="nav_item_name">Contact</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;