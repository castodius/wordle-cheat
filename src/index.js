const { differenceInDays, parse, add, format } = require("date-fns")

const { answers } = require('./answers')

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/
const dateFormat = 'yyyy-MM-dd'
const startDateString = '2021-06-19'
const startDate = parse(startDateString, dateFormat, new Date())

const logAndExit = (message) => {
  console.log(message)
  process.exit()
}

const getCheatDate = (dateString) => {
  if (!dateString) {
    return new Date()
  }

  if (!dateRegexp.test(dateString)) {
    logAndExit(`Argument "${dateString}" does not match pattern ${dateFormat}`)
  }
  
  return parse(dateString, dateFormat, new Date())
}

const getAnswer = (arg) => {
  const cheatDate = getCheatDate(arg)
  const diff = differenceInDays(cheatDate, startDate)

  if (diff < 0) {
    console.log(`Your chosen date is too far into the past. The earliest available date is ${startDateString}.`)
  } else if (diff >= answers.length) {
    console.log(`Your chosen date is too far into the future. The latest date available date is ${format(add(startDate, { days: answers.length - 1 }), dateFormat)}`)
  } else {
    console.log(answers[diff])
  }
}

module.exports = {
  getAnswer
}
