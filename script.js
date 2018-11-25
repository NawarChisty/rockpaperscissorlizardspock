let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("c");

const getComputerChoice = () =>
{
	const choices = ['r', 'p', 's', 'l', 'c'];
	const randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}

const convertToWord = (letter) =>
{
	if(letter === "r")
	{
		return "Rock";
	}
	else if(letter === "p")
	{
		return "Paper"
	}
	else if(letter === "s")
	{
		return "Scissor";
	}
	else if(letter === "l")
	{
		return "Lizard"
	}
	else
	{
		return "Spock";
	}
}

const win = (userChoice, computerChoice) =>
{
	const subUser = "user".fontsize(3);
	const subComp = "comp".fontsize(3);
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${subUser.sub()} beats ${convertToWord(computerChoice)}${subComp.sub()}. You Win 🔥`;
	userChoice_div.classList.add("green-glow");
	setTimeout( () => userChoice_div.classList.remove("green-glow"),1000);
}

const lose = (userChoice, computerChoice) =>
{
	const subUser = "user".fontsize(3);
	const subComp = "comp".fontsize(3);
	const userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(computerChoice)}${subUser.sub()} beats ${convertToWord(userChoice)}${subComp.sub()}. You Lose 😞`;
	userChoice_div.classList.add("red-glow");
	setTimeout( () => userChoice_div.classList.remove("red-glow"),1000);
}

const draw = (userChoice, computerChoice) =>
{
	const subUser = "user".fontsize(3);
	const subComp = "comp".fontsize(3);
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${subUser.sub()} equals ${convertToWord(computerChoice)}${subComp.sub()}. It's a Draw! 🐧`;
	userChoice_div.classList.add("grey-glow");
	setTimeout( () => userChoice_div.classList.remove("grey-glow"),1000);
}

const game = (userChoice) =>
{
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
		case "cr":
		case "cs":
		case "lp":
		case "lc":
		case "pc":
		case "sl":
		case "rl":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
		case "rc":
		case "sc":
		case "pl":
		case "cl":
		case "cp":
		case "ls":
		case "lr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
		case "ll":
		case "cc":
			draw(userChoice, computerChoice);
			break;
	}
}

const main = () => 
{
	rock_div.addEventListener("click", () => game("r"))
	paper_div.addEventListener("click",() => game("p"))
	scissor_div.addEventListener("click", () => game("s"))
	lizard_div.addEventListener("click", () => game("l"))
	spock_div.addEventListener("click", () => game("c"))
}

main();
