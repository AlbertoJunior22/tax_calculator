import { useState } from 'react'
import styles from './styles.module.scss'
import { InputText } from '../InputText'

export interface SalaryForm {
    grossWage: string
    benefits: string
    salaryWithoutBenefits: string
}

export interface SalaryConfigCardProps {
    onValueChange: (form: SalaryForm) => void
    onRemoveCard?: (id: any) => void
    initialValue?: SalaryForm
    id?: any
    isRemovable?: boolean
}

function currencyMask(value: string) {
    value = value.replace(/[^\d]/gi, '')
    value = value.replace(/(\d*)(\d{2})/, '$1,$2')
    return value && `R$ ${value}`
}

const salaryFormDefaultValue: SalaryForm = {
    benefits: '',
    grossWage: '',
    salaryWithoutBenefits: ''
}

export function SalaryConfigCard(props: SalaryConfigCardProps) {

    const [form, setForm] = useState<SalaryForm>(props?.initialValue || salaryFormDefaultValue)

    function onInputForm(evt: any) {
        const { name, value } = evt.target
        const newForm = { ...form, [name]: currencyMask(value) }
        setForm(newForm)
        props.onValueChange && props.onValueChange(newForm)
    }

    function onRemoveCard() {
        props.onRemoveCard && props.onRemoveCard(props.id)
    }

    const cardClass = props.isRemovable ? styles.card : styles.card + ' ' + styles.notRemovable

    return (
        <div className={styles.container}>
            <div className={cardClass}>
                <div>
                    <p>Salário Bruto:</p>
                    <InputText value={form.grossWage} name="grossWage" onChange={onInputForm} />
                </div>
                <div>
                    <p>Benefícios:</p>
                    <InputText value={form.benefits} name="benefits" onChange={onInputForm} />
                </div>
                <div>
                    <p>Salário Sem Benefícios:</p>
                    <InputText value={form.salaryWithoutBenefits} name="salaryWithoutBenefits" onChange={onInputForm} />
                </div>
            </div>
            {
                props.isRemovable && 
                <div className={styles.removeBtn} onClick={onRemoveCard}>
                    <div></div>
                </div>
            }
        </div>
    )
}