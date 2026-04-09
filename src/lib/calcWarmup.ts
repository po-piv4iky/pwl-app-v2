export interface WarmupSet {
    set: number
    reps: number
    weight: number
}

export function calcWarmup(max: number): WarmupSet[]{
    if(!max) return[]

    const scheme = [
        {type: 'bar', reps: 10},
        {percent: 0.4, reps: 8},
        {percent: 0.5, reps: 6},
        {percent: 0.6, reps: 5},
    ]

    return scheme.map((item, index) => {
        let weight: number
        if('type' in item){
            weight = 20
        } else {
            const calculated = item.percent * max
            weight = Math.max(20, roundTo2_5(calculated))
        }
        return {
            set: index + 1,
            reps: item.reps,
            weight: weight
        }
    })
}

export function roundTo2_5(value: number){
    return Math.round(value / 2.5) * 2.5
}