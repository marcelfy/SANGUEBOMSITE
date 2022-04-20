import { FaFacebook, FaInstagram, FaGooglePlay } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <p className={style.copyright}>
                <span>sanguebom@gmail.com</span>
            </p>
            <ul className={style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaGooglePlay />
                </li>

            </ul>
        </footer>
    )
}

export default Footer