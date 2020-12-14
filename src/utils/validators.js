
export const requiredField = (value) => {
    if (value) return undefined
    return "error message"
}

export const maxLengthCreator = (maxLength) => {
   return ((value) => {
        if (value && (value.length > maxLength)) return `Max length is ${maxLength} symbols`
        return undefined
    })
}

export const minLengthCreator = (minLength) => {
    return ((value) => {
         if (value && (value.length < minLength)) return `Min length is ${minLength} symbols`
         return undefined
     })
 }