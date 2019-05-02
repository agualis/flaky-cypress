export const sleep = (ms) => new Promise(r => setTimeout(r, ms))
export const randomOfTwo = (option1, option2) => Math.random() < 0.5 ? option1 : option2
