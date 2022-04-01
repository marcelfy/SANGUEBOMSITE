import { FaFacebook, FaInstagram, FaGooglePlay } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
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
            <p className={style.copyright}>
                <span>Sangue Bom</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer