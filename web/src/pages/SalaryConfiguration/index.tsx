import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { SalaryItem } from '../../model/salary.config.models'
import { FloatButton } from '../../components/FloatButton'
import { SalaryConfigCard, SalaryForm } from '../../components/SalaryConfigCard'
import { CircleButton } from '../../components/CircleButton'
import { toReal } from '../../utils/functions.utils'
import { SalaryConfigService } from '../../components/Services/SalaryConfigService'

const service = new SalaryConfigService()
const salaryFormDefaultValue: SalaryForm = {
    benefits: '',
    grossWage: '',
    salaryWithoutBenefits: ''
}

function getStorageValues(): Array<SalaryForm> {
    const config = service.getSalariesConfig()
    if (config) {
        return config.salaries.map(s => ({
            grossWage: toReal(s.grossWage!!),
            benefits: toReal(s.benefits!!),
            salaryWithoutBenefits: toReal(s.salaryWithoutBenefits!!)
        }))
    }
    return []
}

export function SalaryConfiguration() {

    const [cards, setCards] = useState<SalaryForm[]>(getStorageValues())
    const navigate = useNavigate()

    function onItemChange(index: number, value: any) {
        const newCards = [...cards]
        newCards[index] = value
        setCards(newCards)
    }

    function removeFormatation(value: string): number {
        if (!value) return 0;
        return Number(value.replace('R$', '').replace(',', '.').replace(' ', ''))
    }

    function convertSalaryFormToConfig(salaryForm: SalaryForm): SalaryItem {
        return {
            grossWage: removeFormatation(salaryForm.grossWage),
            benefits: removeFormatation(salaryForm.benefits),
            salaryWithoutBenefits: removeFormatation(salaryForm.salaryWithoutBenefits)
        }
    }

    function gotToCalculate() {
        service.saveSalariesConfigFromForm(cards.map(convertSalaryFormToConfig))
        navigate('/')
    }

    function addEmptyCard() {
        setCards(c => [...c, salaryFormDefaultValue])
    }

    function onRemoveCard(index: number) {
        const newCards = [...cards]
        newCards.splice(index, 1)
        setCards(newCards)
    }

    const lastCardIndex = cards.length - 1

    return (
        <div className={styles.salaries}>
            {
                cards.map((el, idx) =>
                    <SalaryConfigCard
                        initialValue={el}
                        key={idx}
                        id={idx}
                        isRemovable={idx === lastCardIndex}
                        onValueChange={(v: any) => onItemChange(idx, v)}
                        onRemoveCard={onRemoveCard}
                    />)
            }
            <div className={styles.addBtn}>
                <CircleButton label='+' onClick={addEmptyCard} />
            </div>
            <FloatButton label='Salvar' onClick={gotToCalculate} />
        </div>
    )
}