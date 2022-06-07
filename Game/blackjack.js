const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const set = new Set()

const { sleep } = require('../functions')

const addSetBJ = async(user) => {

  set.add(user)

  await sleep(25000)

  set.delete(user)

}

const drawRandomCard = () => {

  var v = Math.floor(Math.random() * deck.length + 0)

  return deck[v]

}

const getHandValue = (hand) => {

  var sum = 0

  for (var i=0; i<hand.length; i++){

    sum += hand[i]

  }

  return sum

}

const position = (bj, from, sender) => {

  let position = false

  Object.keys(bj).forEach((i) => {

    if (bj[i].id === sender && bj[i].from === from) {

      position = i

    }

  })

  if (position !== false) {

    return position

  }

}

const isBJFrom = (bj, from) => {

  let position = false

  Object.keys(bj).forEach((i) => {

    if (bj[i].from === from) {

      position = true

    }

  })

  return position

}

const isBJPlayer = (bj, sender) => {

  let position = false

  Object.keys(bj).forEach((i) => {

    if (bj[i].id === sender) {

      position = true

    }

  })

  return position

}

const isSpamBJ = (user) => set.has(user)

module.exports = { addSetBJ, drawRandomCard, getHandValue, position, isBJFrom, isBJPlayer, isSpamBJ }
