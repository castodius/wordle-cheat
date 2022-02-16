#!/usr/bin/env node

const { getAnswer } = require("./index")

const arg = process.argv[2]
const answer = getAnswer(arg)
console.log(answer)
