import { configs } from "../ApplicationConstants";

export function irCalculator(value: number) {
    const irTable = configs.irTable

    for (const item of irTable) {
        if (value >= item.startRange && value <= item.endRange) {
            return (value * (item.discount??0)) - (item.deduction??0)
        }
        if (item.maxRange && value >= item.startRange)
            return (value * (item.discount??0)) - (item.deduction??0)
    }
    return 0
}