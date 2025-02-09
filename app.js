const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const questions = [
	{
		question: 'What is the capital of France?',
		choices: ['A) Berlin', 'B) Madrid', 'C) Paris', 'D) Rome'],
		answer: 'C'
	},
	{
		question: 'Which planet is known as the Red Planet?',
		choices: ['A) Earth', 'B) Mars', 'C) Jupiter', 'D) Venus'],
		answer: 'B'
	},
	{
		question: 'What is the largest ocean on Earth?',
		choices: [
			'A) Atlantic Ocean',
			'B) Indian Ocean',
			'C) Arctic Ocean',
			'D) Pacific Ocean'
		],
		answer: 'D'
	}
]

let score = 0
let currentQuestionIndex = 0

function askQuestion() {
	if (currentQuestionIndex < questions.length) {
		const q = questions[currentQuestionIndex]
		console.log(
			`\nQuestion ${currentQuestionIndex + 1} of ${questions.length}: ${
				q.question
			}`
		)
		q.choices.forEach((choice) => console.log(choice))
		rl.question('Your answer: ', (userAnswer) => {
			if (userAnswer.toUpperCase() === q.answer) {
				console.log('Correct!\n')
				score++
			} else {
				console.log('Wrong answer!\n')
			}
			currentQuestionIndex++
			askQuestion()
		})
	} else {
		console.log(
			`Quiz Completed! Your final score is: ${score}/${questions.length}`
		)
		rl.close()
	}
}

console.log('Welcome to the Quiz!')
askQuestion()
