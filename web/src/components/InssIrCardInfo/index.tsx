import { InssIrCardInfo } from "../../model/calculations.info.models"
import { toReal } from "../../utils/functions.utils"
import { useState } from 'react'
import styles from './styles.module.scss'


const configView: any = {
    baseValue: "Ganho Total Bruto",
    salaryWithoutBenefits: "Salário Bruto (sem benefícios)",
    benefits: "Beneficios",
    salaryWithDiscounts: "Salário Líquido (sem benefícios)",
    salaryPlusBenefits: "Salário Líquido + Benefícios",
    vacations: "Férias",
    salary13: "13º Salário",
    inssDiscount: "Desconto INSS",
    irDiscount: "Desconto IR",
    annualEarnings: "Ganho Anual"
}

function normalizeProps(props: InssIrCardInfo): InssIrCardInfo {
    return {
        ...props,
        salaryPlusBenefits: props.salaryWithDiscounts + props.benefits
    }
}

export function ImssIrCalculatesCard(props: InssIrCardInfo) {

    const [normalizedProps] = useState(normalizeProps(props))

    function getAnuualEarningsDiff() {
        return normalizedProps.annualEarnings - (normalizedProps.reference?.annualEarnings ?? 0)
    }

    function getMonthlyDiff() {
        return getAnuualEarningsDiff() / 12
    }

    function reanderTest(): any[] {
        return Object.keys(configView).map(key => {
            return (
                <div className={styles.infoItem}>
                    <p><b>{configView[key]}:</b></p>
                    <p>{toReal((normalizedProps as any)[key])}</p>
                </div>
            )
        })
    }

    return (
        <div className={styles.card}>
            <p className={styles.title}>{toReal(normalizedProps.baseValue)}</p>
            {[...reanderTest()]}
        </div>
    )
}