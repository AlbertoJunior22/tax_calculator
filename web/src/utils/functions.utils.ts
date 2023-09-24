const realFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export function toReal(value: number) {
    return realFormat.format(value)
}