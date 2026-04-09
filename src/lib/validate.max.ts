export const validateMax = (value: number) => {
    if(Number.isNaN(value)) return 0
    if(value < 20) return 20
    if(value > 400) return 400
    return value
}