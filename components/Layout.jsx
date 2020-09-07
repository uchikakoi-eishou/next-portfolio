import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faUser,faBlog,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare,faTwitterSquare,faFacebookSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import layoutStyles from '../styles/Layout.module.scss'

const Layout = (props) => {
    const { title, children } = props;
    const siteTitle = 'Offiter';

    return (
        <>
            <Head>
                <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1 class="header_title"><a href="/" class="header_title_link">Offiter</a></h1>
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

                <div class="header_img">
                    <p class="keyvisual">もっとITを</p>
                </div>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <ul class="footer_sns">
                    <li class="footer_sns_item"><a href="#" class="">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a></li>
                    <li class="footer_sns_item"><a href="#" class="">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a></li>
                    <li class="footer_sns_item"><a href="#" class="">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a></li>
                    <li class="footer_sns_item"><a href="#" class="">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a></li>
                </ul>
                <p class="copyright"><small>&copy;2020 uchikakoi-eishou</small></p>
            </footer>
        </>
    );
};

export default Layout;