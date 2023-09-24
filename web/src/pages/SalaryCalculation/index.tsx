import { useState } from 'react'
import { salariesConf } from '../../ApplicationConstants'
import { inssIrCalculator } from '../../calculators/inss.ir.calculator'
import { ImssIrCalculatesCard } from '../../components/InssIrCardInfo'
import { SalaryItem } from '../../model/salary.config.models'
import styles from './styles.module.scss'
import { SalaryConfigService } from '../../components/Services/SalaryConfigService'

const service = new SalaryConfigService()

function comparator(s1: SalaryItem, s2: SalaryItem) {
    return s1.grossWage!! - s2.grossWage!!
}

function getSalaries() {
    const storageValues = service.getSalariesConfig()?.salaries
    if (storageValues)
        return storageValues.sort(comparator)
    return salariesConf.salaries.sort(comparator)
}

export function SalaryCalculationPage() {
    const [salariesConfig] = useState(getSalaries())
    const [calculatedSalaries] = useState(salariesConfig!!.map(inssIrCalculator))

    return (
        <div className={styles.calculations}>
            {
                calculatedSalaries.map(s => <ImssIrCalculatesCard {...s} key={s.baseValue}/>)
            }
        </div>
    )
}