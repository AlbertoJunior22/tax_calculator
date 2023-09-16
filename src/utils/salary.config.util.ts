import { SalaryItem } from "../model/salary.config.models"

export function normalizeSalaries(salaries: Array<SalaryItem>): Array<SalaryItem>  {
    return salaries.map(s => {
        return {
            benefits: s.benefits ?? 0,
            grossWage: s.grossWage ?? 0,
            salaryWithoutBenefits: s.salaryWithoutBenefits ?? 0
        }
    })
    .map(s => {
        if (s.benefits === 0 && s.salaryWithoutBenefits === 0)
            s.salaryWithoutBenefits = s.grossWage
        s.grossWage = s.grossWage === 0? s.benefits + s.salaryWithoutBenefits: s.grossWage
        s.benefits = s.benefits === 0? s.grossWage - s.salaryWithoutBenefits: s.benefits
        s.salaryWithoutBenefits = s.salaryWithoutBenefits === 0? s.grossWage - s.benefits: s.salaryWithoutBenefits
        return s
    }) 
}