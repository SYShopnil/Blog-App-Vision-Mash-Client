//it will convert all string to capitalized format which connect with (_) underscore
const convertToCapitalized = (string) => {
    let data = string.split ("_")  //split the inputed string by (_) underscore sign
    const capitalized = data.map((letter, ind) =>{
        let context = letter.split ("")
        const convertToUpperCase = letter[0].toUpperCase();
        context.shift()
        context.unshift(convertToUpperCase)
        context = context.join ("")
        return context
    })
    const content = capitalized.join ("")
    return content
}

export default convertToCapitalized