function stringCalculator(number) {
    if(number == '' || number == null) return 0

    if(number.length == 1) {
        if(parseInt(number) < 0) throw new Error(`negative number not allowed ${parseInt(number)}`)
        return parseInt(number)
    }

    if(number.slice(0,2) == '//') {
        let delimiter = number[2]
        let endIdx = 2
        if(delimiter == '[') {
            endIdx = number.indexOf(']')
            delimiter = number.slice(3, endIdx)
        } 
        number = number.slice(endIdx+1).split(delimiter).join(',')
    }

    if(number.indexOf('\n') != -1) number = number.replace(/\n/g, ',')

    const numArr = number.split(',').filter(num => num != '' && parseInt(num) <= 1000)

    const negativeNums = numArr.filter(num => parseInt(num) < 0)

    if(negativeNums.length) {
        throw new Error(`negative number not allowed ${negativeNums.join(',')}`)
    }

    return numArr.reduce((sum,num) => sum + parseInt(num), 0)  
}

module.exports = stringCalculator