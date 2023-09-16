export interface InssIrInfo {
    baseValue: number
    benefits: number
    salaryWithoutBenefits: number
    inssDiscount: number
    irDiscount: number
    salaryWithDiscounts: number
    annualEarnings: number
    vacations: number
    salary13: number
}

export interface InssIrCardInfo extends InssIrInfo {
    reference?: InssIrInfo
}