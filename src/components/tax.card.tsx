import { InssIrCardInfo } from "../model/calculations.info.models"

export function ImssIrCalculatesCard(props: InssIrCardInfo) {

    function getAnuualEarningsDiff() {
        return props.annualEarnings - (props.reference?.annualEarnings??0)
    }

    function getMonthlyDiff() {
        return getAnuualEarningsDiff() / 12
    }

    return (
        <div>
            <p>Ganho Total Bruto: {props.baseValue}</p>
            <p>Salário Bruto (sem benefícios): {props.salaryWithoutBenefits}</p>
            <p>Beneficios: {props.benefits}</p>
            <p>Salário Líquido (sem benefícios): {props.salaryWithDiscounts}</p>
            <p>Salário Líquido + Benefícios: {props.salaryWithDiscounts + props.benefits}</p>
            <p>Férias: {props.vacations}</p>
            <p>13º Salário: {props.salary13}</p>
            <p>Desconto INSS: {props.inssDiscount}</p>
            <p>Desconto IR: {props.irDiscount}</p>
            <p>Ganho Anual: {props.annualEarnings}</p>
            <p>Diferença Anual: {getAnuualEarningsDiff()}</p>
            <p>Diferença Mensal: {getMonthlyDiff()}</p>
        </div>
    )
}