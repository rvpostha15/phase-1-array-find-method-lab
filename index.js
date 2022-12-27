// code your solution here

let myWins = record => record.result === 'W'

let superbowlWin = (record) => record.find(myWins) ? record.find(myWins).year : undefined