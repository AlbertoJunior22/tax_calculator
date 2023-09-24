import styles from './styles.module.scss'

export function Navbar() {

    function gotToHome() {
        window.location.href = '/'
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img onClick={gotToHome}
                src="/images/open.ico" alt="" />
            </div>
            <div className={styles.sections}>
            </div>
            <div className={styles.settings}>
                <img src="/images/settings.svg" alt="" />
            </div>
        </nav>
    )
}