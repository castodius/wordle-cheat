# Introduction

[Wordle](https://www.nytimes.com/games/wordle/index.html) is a fun daily word game. This package makes it simple to cheat, it contains a full list of words until the year 2027. Should the word list be updated this package will break immediately.

## Installation

@castodius/wordle can be installed globally

```
npm install @castodius/wordle -g
```

Alternatively it can be invoked via npx

```
npx @castodius/wordle
```

## Usage

The package takes one optional argument, the day to get the word for in date format *yyyy-MM-dd*. If no word is supplied it defaults to today.

Example using globally installed package

```
wordle-cheat
```

Example using globally installed package and picking the date

```
wordle-cheat 2020-02-14
```

## Why?

I was bored.
