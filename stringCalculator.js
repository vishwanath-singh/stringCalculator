function stringCalculator(number) {
    if(number == '' || number == null) return 0

    if(number.length == 1) return parseInt(number)

    return number.split(',').reduce((sum,num) => sum + parseInt(num), 0)  
}

module.exports = stringCalculator