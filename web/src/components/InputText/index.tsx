import styles from './styles.module.scss'
import { useState, useRef } from 'react'

export interface InputEvt {
    target: {
        name: string,
        value: any
    }
}

export interface InputTextProps {
    onChange?: (evt: InputEvt) => void
    onChandeMode?: (isInEditMode: boolean) => boolean
    value: any,
    name: string
}

export function InputText(props: InputTextProps) {

    const [editMode, setEditMode] = useState(true)
    const ref = useRef<any>(null)

    function changeMode() {
        if (!props.value) return;
        const newMod = !editMode
        if (newMod)
            setTimeout(() => ref.current?.focus(), 50)
        setEditMode(newMod)
        props.onChandeMode && props.onChandeMode(editMode)
    }

    return (
        <div className={styles.input}>
            <input
                hidden={!editMode && props.value}
                type="text"
                value={props.value}
                onBlur={changeMode}
                onChange={props.onChange}
                name={props.name} ref={ref} />
            <p hidden={editMode} onClick={changeMode}>{props.value}</p>
        </div>
    )
}