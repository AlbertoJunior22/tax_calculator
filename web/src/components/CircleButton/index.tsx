import styles from './styles.module.scss'

export interface CircleButtonProps {
    label: string
    onClick?: () => void
}

export function CircleButton(props: CircleButtonProps) {
    return (
        <div className={styles.floatButton} onClick={props.onClick}>
            <p>{props.label}</p>
        </div>
    )
}