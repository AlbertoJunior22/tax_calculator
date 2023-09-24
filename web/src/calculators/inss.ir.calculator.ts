import { InssIrInfo } from "../model/calculations.info.models";
import { SalaryItem } from "../model/salary.config.models";
import { inssCalculator } from "./inss.calculator";
import { irCalculator } from "./ir.calculator";

export function inssIrCalculator(salary: SalaryItem): InssIrInfo {

    const inssDiscount = inssCalculator(salary.salaryWithoutBenefits!!)
    const irDiscount = irCalculator(salary.salaryWithoutBenefits!! - inssDiscount)

    const info =  {
        baseValue: salary.grossWage!!,
        benefits: salary.benefits!!,
        salaryWithoutBenefits: salary.salaryWithoutBenefits!!,
        inssDiscount,
        salaryWithDiscounts: salary.salaryWithoutBenefits!! - inssDiscount - irDiscount,
        irDiscount,
        salary13: salary.salaryWithoutBenefits!!,
        vacations: salary.salaryWithoutBenefits!! * 1.33
    }

    return {...info, annualEarnings: ((info.salaryWithDiscounts + info.benefits) * 12) + info.salary13 + info.vacations}
}