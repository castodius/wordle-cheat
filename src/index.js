const { differenceInDays, parse, add, format } = require("date-fns")

const { answers } = require('./answers')

const defaultDatePattern = /^\d{4}-\d{2}-\d{2}$/

const logAndExit = (message) => {
  console.log(message)
  process.exit()
}

const getCheatDate = () => {
  const argDate = process.argv[2]
  if (!argDate) {
    return new Date()
  }
  if (!defaultDatePattern.test(argDate)) {
    logAndExit(`Argument "${argDate}" does not match pattern yyyy-MM-dd`)
  }

  return parse(argDate, 'yyyy-MM-dd', new Date())
}

const startDateString = '2021-06-19'
const startDate = parse(startDateString, 'yyyy-MM-dd', new Date())
const cheatDate = getCheatDate()

const diff = differenceInDays(cheatDate, startDate)
if (diff < 0) {
  logAndExit(`Your chosen date is too far into the past. The earliest available date is ${startDateString}.`)
} else if (diff >= answers.length) {
  console.log(`Your chosen date is too far into the future. The latest date available date is ${format(add(startDate, { days: answers.length - 1 }), 'yyyy-MM-dd')}`)
} else {
  console.log(answers[diff])
}
