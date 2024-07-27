function stringCalculator(number) {
    if(number == '' || number == null) return 0

    if(number.length == 1) return parseInt(number)

    if(number.slice(0,2) == '//') {
        let delimiter = number[2]
        number = number.slice(3).split(delimiter).join(',')
    }

    if(number.indexOf('\n') != -1) number = number.replace(/\n/g, ',')

    const numArr = number.split(',').filter(num => num != '')

    return numArr.reduce((sum,num) => sum + parseInt(num), 0)  
}

module.exports = stringCalculator