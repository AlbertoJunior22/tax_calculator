export interface SalaryItem {
    grossWage?: number
    benefits?: number
    salaryWithoutBenefits?: number
}

export interface SalaryConfig {
    salaries: Array<SalaryItem>
}