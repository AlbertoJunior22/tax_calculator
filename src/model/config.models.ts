export interface IRTableItem {
    startRange: number
    endRange: number
    discount?: number
    deduction?: number
    maxRange?: boolean
}

export interface INSSTableItem {
    startRange: number,
    endRange: number,
    quote: number,
    maxRange?: boolean
}

export interface Config {
    irTable: Array<IRTableItem>
    inssTable: Array<INSSTableItem>
}