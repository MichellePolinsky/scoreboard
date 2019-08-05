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
  teamOneScore += 1
  document.querySelector('.team-1-score').textContent = teamOneScore
  console.log('adding one to team one!!!', teamOneScore)
}

const addOneTeamTwo = () => {
  teamTwoScore += 1
  document.querySelector('.team-2-score').textContent = teamTwoScore
  console.log('adding one to team two!!!', teamTwoScore)
}

const subOneTeamOne = () => {
  teamOneScore -= 1
  document.querySelector('.team-1-score').textContent = teamOneScore
  console.log('subtracting one from team one', teamOneScore)
}

const subOneTeamTwo = () => {
  teamTwoScore -= 1
  document.querySelector('.team-2-score').textContent = teamTwoScore
  console.log('subtracting one from team two', teamTwoScore)
}

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
