import styles from './styles.module.scss'

export interface FloatButtonProps {
    label: string
    onClick?: () => void
}

export function FloatButton(props: FloatButtonProps) {
    return (
        <div className={styles.floatButton} onClick={props.onClick}>
            <p>{props.label}</p>
        </div>
    )
}