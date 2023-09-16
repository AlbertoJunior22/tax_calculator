import { useState } from 'react'
import { normalizeSalaries } from '../utils/salary.config.util'
import { salariesConf } from '../ApplicationConstants'
import { inssIrCalculator } from '../calculators/inss.ir.calculator'
import { ImssIrCalculatesCard } from '../components/tax.card'

export function SalaryCalculationPage() {

    const [salariesConfig] = useState(normalizeSalaries(salariesConf.salaries))
    const [calculatedSalaries] = useState(salariesConfig.map(inssIrCalculator))

    return (
        <div>
            {
                calculatedSalaries.map(s => <ImssIrCalculatesCard {...s} key={s.baseValue}/>)
            }
        </div>
    )
}