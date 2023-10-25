const questions = [
    {
        question: "O que é o Projeto Genoma Humano?",
        options: ["Um programa de computador", "Um projeto de sequenciamento de DNA", "Um projeto de exploração espacial", "Um projeto de construção de carros autônomos"],
        correctAnswer: "Um projeto de sequenciamento de DNA"
    },
    {
        question: "Qual é o objetivo principal do Projeto Genoma Humano?",
        options: ["Desenvolver inteligência artificial avançada", "Explorar Marte", "Construir uma cidade inteligente", "Mapear o código genético humano"],
        correctAnswer: "Mapear o código genético humano"
    },
    {
        question: "Quantos pares de bases de DNA existem no genoma humano?",
        options: ["10 mil pares", "100 mil pares", "1 milhão de pares", "3 bilhões de pares"],
        correctAnswer: "3 bilhões de pares"
    },
    {
        question: "Quem liderou o Projeto Genoma Humano nos Estados Unidos?",
        options: ["Bill Gates", "Elon Musk", "Dr. Francis Collins", "Mark Zuckerberg"],
        correctAnswer: "Dr. Francis Collins"
    },
    {
        question: "Quando o Projeto Genoma Humano foi oficialmente concluído?",
        options: ["2000", "2010", "1995", "2015"],
        correctAnswer: "2000"
    },
    {
        question: "Qual é o termo usado para uma variação genética que ocorre naturalmente em uma população?",
        options: ["Mutação", "Clonagem", "Transgenia", "Genoma"],
        correctAnswer: "Mutação"
    },
    {
        question: "Qual parte do DNA contém as instruções para a síntese de proteínas?",
        options: ["Éxons", "Íntrons", "Promotores", "Sequências não codificantes"],
        correctAnswer: "Éxons"
    },
    {
        question: "Qual tecnologia revolucionou o sequenciamento do DNA, tornando-o mais rápido e acessível?",
        options: ["Microscopia eletrônica", "PCR (Reação em Cadeia da Polimerase)", "CRISPR-Cas9", "Sequenciamento de Nova Geração (NGS)"],
        correctAnswer: "Sequenciamento de Nova Geração (NGS)"
    },
    {
        question: "Quais são os benefícios potenciais do Projeto Genoma?",
        options: ["Desenvolvimento de armas biológicas", "Compreensão de doenças genéticas e desenvolvimento de terapias", "Aumento da clonagem humana", "Exploração espacial"],
        correctAnswer: "Compreensão de doenças genéticas e desenvolvimento de terapias"
    },
    {
        question: "Quem é conhecido por sua contribuição para a técnica de edição genética CRISPR-Cas9?",
        options: ["Thomas Edison", "Marie Curie", "Jennifer Doudna", "Alexander Graham Bell"],
        correctAnswer: "Jennifer Doudna"
    },
    {
        question: "Qual é a sigla do Projeto Genoma Humano?",
        options: ["PGH", "DNAPG", "HGP", "PGS"],
        correctAnswer: "HGP"
    },
    {
        question: "Qual é a função das sequências não codificantes no DNA?",
        options: ["Codificar proteínas", "Regular a expressão gênica", "Não têm função conhecida", "Determinar a cor dos olhos"],
        correctAnswer: "Regular a expressão gênica"
    },
    {
        question: "O que é a genômica comparativa?",
        options: ["O estudo das diferenças entre genes humanos e genes de outras espécies", "O estudo das diferenças entre genes em seres humanos de diferentes raças", "O estudo das diferenças entre genes de irmãos gêmeos", "O estudo das diferenças entre genes de um indivíduo ao longo do tempo"],
        correctAnswer: "O estudo das diferenças entre genes humanos e genes de outras espécies"
    },
    {
        question: "Quais são as preocupações éticas em relação ao Projeto Genoma?",
        options: ["Acesso irrestrito às informações genéticas de indivíduos", "Uso de sequenciamento de DNA para fins criminosos", "Desenvolvimento de tratamentos personalizados", "Aumento da conscientização sobre saúde genética"],
        correctAnswer: "Acesso irrestrito às informações genéticas de indivíduos"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const optionsContainer = document.querySelector(".options");
const endImage = document.getElementById("end-image");

const startButton = document.getElementById("start-button");
const startScreen = document.querySelector(".start-screen");
const gameContainer = document.querySelector(".game-container");

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameContainer.style.display = "block";
    displayQuestion();
});

function displayQuestion() {
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = questions[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(button);
    });
}

function highlightCorrectAnswer(correctOptionIndex) {
    const options = document.querySelectorAll(".option");

    options.forEach((option, index) => {
        if (index === correctOptionIndex) {
            option.style.backgroundColor = "#4CAF50"; // Alternativa correta em verde
        } else {
            option.style.backgroundColor = "#FF5733"; // Alternativas erradas em vermelho
        }
    });

    setTimeout(() => {
        options.forEach(option => {
            option.style.backgroundColor = "#3498db"; // Retorna à cor original após um curto período
        });
        displayNextQuestion(); // Continua para a próxima pergunta após o destaque
    }, 500); // 1500ms (1.5 segundos)
}

function highlightWrongAnswer() {
    const options = document.querySelectorAll(".option");

    options.forEach(option => {
        option.style.backgroundColor = "#FF5733"; // Alternativas erradas em vermelho
    });

    setTimeout(() => {
        options.forEach(option => {
            option.style.backgroundColor = "#3498db"; // Retorna à cor original após um curto período
        });
        displayNextQuestion(); // Continua para a próxima pergunta após o destaque
    }, 500); // 1500ms (1.5 segundos)
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    const correctOptionIndex = questions[currentQuestionIndex].options.indexOf(correctAnswer);
    const selectedOptionIndex = questions[currentQuestionIndex].options.indexOf(selectedOption);

    if (selectedOptionIndex === correctOptionIndex) {
        score += 10;
        scoreDisplay.textContent = score;
        highlightCorrectAnswer(correctOptionIndex);
    } else {
        highlightWrongAnswer();
    }
}
function displayNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionText.textContent = ""; // Clear question text
        optionsContainer.innerHTML = ""; // Clear options

        if (score === 140) {
            const endMessageWin = document.getElementById("end-message-win");
            const easterEggVideo = document.getElementById("easter-egg-video");

            endMessageWin.textContent = "Você acertou todas as perguntas e encontrou um EASTER EGG! PARABÉNS!!!";
            easterEggVideo.style.display = "block";
            endImage.style.display = "none";
        } else if (score >= 70) {
            questionText.textContent = "Você fez 70 pontos ou mais, e ganhou um parabéns! PARABÉNS!";
            endImage.src = "finalbom.jpg"; // Imagem de vitória
            endImage.style.display = "block";
        } else {
            questionText.textContent = "Você fez menos de 70 pontos. TENTE NOVAMENTE!";
            endImage.src = "finalruim.jpg"; // Imagem de derrota
            endImage.style.display = "block";
        }
    }
}
displayQuestion();
