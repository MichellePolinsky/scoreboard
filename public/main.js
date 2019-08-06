let teamOneScore = 0
let teamTwoScore = 0

const teamOneInput = document.querySelector('.team-1-input')

const teamOneName = document.querySelector('.team-1-name')

const teamTwoInput = document.querySelector('.team-2-input')

const teamTwoName = document.querySelector('.team-2-name')

const updateOneName = () => {
  console.log('hello')
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-input'
  ).value
  console.log('updating name one')
}
const updateTwoName = () => {
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-input'
  ).value
}

const addOneTeamOne = () => {
  if (teamOneScore === 21) {
    console.log('team one Won!!!')
    document.querySelector('.team-1-name').append(' Winner!')
    document.querySelector('.team-1-add-1-button').disabled = true
  } else {
    teamOneScore += 1
    document.querySelector('.team-1-score').textContent = teamOneScore
    console.log('adding one to team one!!!', teamOneScore)
  }
}

const addOneTeamTwo = () => {
  if (teamTwoScore === 21) {
    console.log('team Two Won!!!')
    document.querySelector('.team-2-name').append(' Winner!')
    document.querySelector('.team-2-add-1-button').disabled = true //////////////////////////
    console.log('disabling add one button team two')
  } else {
    teamTwoScore += 1
    document.querySelector('.team-2-score').textContent = teamTwoScore
    console.log('adding one to team two!!!', teamTwoScore)
  }
}

const subOneTeamOne = () => {
  if (teamOneScore <= 0) {
    console.log('zoro')
  } else {
    teamOneScore -= 1
    document.querySelector('.team-1-score').textContent = teamOneScore
    console.log('subtracting one from team one', teamOneScore)
  }
}

const subOneTeamTwo = () => {
  if (teamTwoScore <= 0) {
    console.log('zoro')
  } else {
    teamTwoScore -= 1
    document.querySelector('.team-2-score').textContent = teamTwoScore
    console.log('subtracting one from team two', teamTwoScore)
  }
}

//  reset game
const resetGame = () => {
  teamOneScore = 0
  teamTwoScore = 0
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.team-1-input').value = ''
  document.querySelector('.team-2-input').value = ''
  console.log('Game has been Reset')
}
const main = () => {
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-1-input').value = ''
  document.querySelector('.team-2-input').value = ''
  console.log('page has fully reset')
}

// const resetGame = () => {
// document.querySelector(".reset-game").textContent

// enter team 1 name
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateOneName)

// update team 2 name

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTwoName)

//score team 1 add 1

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneTeamOne)

// score team 1 subtract 1

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subOneTeamOne)

// // score team 2 add 1

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneTeamTwo)

// // score team 2 subtract 1
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subOneTeamTwo)

document.querySelector('.reset-score').addEventListener('click', resetGame)

document.addEventListener('DOMContentLoaded', main)
