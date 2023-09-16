import { configs } from "../ApplicationConstants";

export function inssCalculator(value: number) {
    const inssTable = configs.inssTable
    for (const item of inssTable) {
        if (value >= item.startRange && value <= item.endRange)
            return value * item.quote
        if (item.maxRange && value >= item.endRange)
            return item.endRange * item.quote
    }
    return 0
}