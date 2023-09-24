import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface MenuItem {
    label?: string
    path?: string
    icon?: string
    fake?: boolean
}

const menus: Array<MenuItem> = [
    {
        label: "Configuração Salários",
        path: "/salarios-config",
        icon: "/images/settings.svg"
    },
    {
        label: "Cálculo Salário",
        path: "/calculo-salario",
        icon: "/images/salario.png"
    },
    {
        fake: true
    }
]

export function Home() {

    const navigate = useNavigate()

    function renderItem(item: MenuItem) {

        if (item.fake)
            return <div className={styles.itemDimension}></div>

        return (
            <div className={styles.menuItem + ' ' + styles.itemDimension} onClick={() => navigate(item.path!!)}>
                <p>{item.label}</p>
                <div className={styles.icon}>
                    <img src={item.icon} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.home}>
            {menus.map(renderItem)}
        </div>
    )
}