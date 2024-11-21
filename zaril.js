const questions = [
    {
        question: "Sino ang unang hari ng Israel?",
        options: ["Saul", "David", "Solomon", "Samuel"],
        correct: "Saul"
    },
    {
        question: "Sino ang nag-lead sa mga Israelites papunta sa Promised Land pagkatapos ni Moses?",
        options: ["Joshua", "Caleb", "David", "Aaron"],
        correct: "Joshua"
    },
    {
        question: "Ano ang huling aklat ng New Testament?",
        options: ["Revelation", "Hebrews", "Jude", "Acts"],
        correct: "Revelation"
    },
    {
        question: "Ilan na plagues ang ipinadala ni God sa Egypt?",
        options: ["Ten", "Seven", "Twelve", "Four"],
        correct: "Ten"
    },
    {
        question: "Sino ang unang martyr sa New Testament?",
        options: ["Stephen", "James", "Peter", "John"],
        correct: "Stephen"
    },
    {
        question: "Sino ang ina ni Samuel?",
        options: ["Hannah", "Sarah", "Rachel", "Elizabeth"],
        correct: "Hannah"
    },
    {
        question: "Anong prophet ang kinain ng malaking isda?",
        options: ["Jonah", "Elijah", "Daniel", "Isaiah"],
        correct: "Jonah"
    },
    {
        question: "Anong disciple ang tinanggi si Jesus ng tatlong beses?",
        options: ["Peter", "John", "Thomas", "James"],
        correct: "Peter"
    },
    {
        question: "Sino ang unang disciple na martyred?",
        options: ["James", "Peter", "John", "Andrew"],
        correct: "James"
    },
    {
        question: "Alin sa mga sumusunod ang aklat ng poetry sa Old Testament?",
        options: ["Psalms", "Leviticus", "Genesis", "Judges"],
        correct: "Psalms"
    },
    {
        question: "Sino ang lalaki na may vision ng isang valley ng dry bones?",
        options: ["Ezekiel", "Daniel", "Isaiah", "Jeremiah"],
        correct: "Ezekiel"
    },
    {
        question: "Ano ang ginawa ni Jesus sa Last Supper?",
        options: ["Broke bread and gave wine", "Hinugasan ang mga paa ng disciples", "Nagdasal mag-isa", "Nagpalayas ng mga demonyo"],
        correct: "Broke bread and gave wine"
    },
    {
        question: "Aling apostle ang tax collector bago sumunod kay Jesus?",
        options: ["Matthew", "Mark", "Luke", "John"],
        correct: "Matthew"
    },
    {
        question: "Sino ang Roman governor na naghatol kay Jesus para ipako sa krus?",
        options: ["Pontius Pilate", "Herod Antipas", "Caesar Augustus", "Tiberius"],
        correct: "Pontius Pilate"
    },
    {
        question: "Aling Old Testament figure ang kilala sa kanyang wisdom?",
        options: ["Solomon", "David", "Isaiah", "Abraham"],
        correct: "Solomon"
    },
    {
        question: "Sino ang sumulat ng karamihan sa mga letters (epistles) sa New Testament?",
        options: ["Paul", "Peter", "John", "James"],
        correct: "Paul"
    },
    {
        question: "Sino ang lalaki na tinalo si Goliath?",
        options: ["David", "Saul", "Samson", "Jonathan"],
        correct: "David"
    },
    {
        question: "Aling Old Testament prophet ang humarap kay King Ahab at Queen Jezebel?",
        options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
        correct: "Elijah"
    },
    {
        question: "Aling hari ng Judah ang kilala sa kanyang mga reforms at sa paghanap ng Book of the Law?",
        options: ["Josiah", "Hezekiah", "Manasseh", "Jehoshaphat"],
        correct: "Josiah"
    },
    {
        question: "Ano ang unang milagro ni Jesus na naitala sa Gospel of John?",
        options: ["Pagtutubig ng tubig sa alak", "Pagpapagaling ng bulag", "Pagpapakain sa 5000", "Pagbabalik-buhay kay Lazarus"],
        correct: "Pagtutubig ng tubig sa alak"
    }
];


// Initialize state variables
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");
const feedbackContainer = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

// Shuffle options for randomness
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

document.getElementById('start-quiz').addEventListener('click', function() {
    // Hide the intro
    document.getElementById('intro-container').style.display = 'none';

    // Show the quiz
    document.getElementById('quiz-container').style.display = 'block';

    // You can also reset the quiz state here if needed (score, progress, etc.)
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestion.question;

    shuffleOptions(currentQuestion.options);

    optionsContainer.innerHTML = "";
    feedbackContainer.innerHTML = "";

    const labels = ["A", "B", "C", "D"];
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${labels[index]}. ${option}`;
        button.classList.add("option-button");
        button.disabled = false;  // Ensure the button is enabled initially
        button.addEventListener("click", () => showFeedback(button, option));
        optionsContainer.appendChild(button);
    });
}
// Function to create and animate particles
function createFallingParticles() {
    const particlesContainer = document.getElementById("particles-container");

    // Create a new particle
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Randomly position the particle
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s

    // Randomly adjust the size of the particle
    const size = Math.random() * 5 + 5; // Random size between 5px and 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Add the particle to the container
    particlesContainer.appendChild(particle);

    // Remove the particle after it has fallen off the screen
    setTimeout(() => {
        particle.remove();
    }, 10000); // Remove after 10 seconds
}

// Create particles at regular intervals
setInterval(createFallingParticles, 100); // Create a particle every 100ms


function showFeedback(selectedButton, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    // Feedback Text and Style
    feedbackContainer.innerHTML = isCorrect
        ? `<p class="feedback correct">Correct! ${selectedOption} is the right answer.</p>`
        : `<p class="feedback incorrect">Incorrect! The correct answer was ${currentQuestion.correct}.</p>`;

    // Play Sounds
    isCorrect ? playCorrectSound() : playIncorrectSound();

    // Update Score
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Disable options after selection
    disableOptions();

    // Show next button
    nextButton.style.display = "inline-block";
    updateProgressBar();
}


function disableOptions() {
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach(button => {
        button.disabled = true; // Disable all option buttons after a choice is made
    });
}

// Example: Update the progress bar width based on the user's progress (change this as per your logic)
function updateProgressBar(currentStep, totalSteps) {
    const progressBar = document.getElementById('progress-bar');
    const progress = (currentStep / totalSteps) * 100;
    progressBar.style.width = progress + '%';
}


function playCorrectSound() {
    document.getElementById("correct-sound").play();
}

function playIncorrectSound() {
    document.getElementById("incorrect-sound").play();
}

function showFinalScore() {
    questionContainer.innerHTML = `<h2>Quiz Completed!</h2>
                                   <div id="final-score">Your Score: ${score} / ${questions.length}</div>`;
    optionsContainer.innerHTML = "";
    feedbackContainer.innerHTML = "";
    nextButton.style.display = "none";
    if (score >= questions.length * 0.8) {
        for (let i = 0; i < 30; i++) createConfetti();
    }
}

// Function to create confetti animation
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;  // Random horizontal position
    confetti.style.animationDelay = `${Math.random() * 3}s`; // Randomize confetti animation timing
    document.body.appendChild(confetti);

    // Remove the confetti after animation is done
    setTimeout(() => confetti.remove(), 3000);
}

// Function to show feedback for correct or incorrect answers
function showFeedback(selectedButton, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    // Feedback Text and Style with Animation
    feedbackContainer.innerHTML = isCorrect
        ? `<p class="feedback correct">Correct! ${selectedOption} is the right answer.</p>`
        : `<p class="feedback incorrect">Incorrect! The correct answer was ${currentQuestion.correct}.</p>`;

    // Add feedback animation for correct/incorrect answer
    const feedbackMessage = feedbackContainer.querySelector('.feedback');
    feedbackMessage.classList.add('animate-feedback'); // Add an animation class (optional)

    // Play Sounds
    isCorrect ? playCorrectSound() : playIncorrectSound();

    // Update Score
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Disable options after selection
    disableOptions();

    // Show next button
    nextButton.style.display = "inline-block";
    updateProgressBar();
}

// Function to update the progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Function to play correct sound
function playCorrectSound() {
    document.getElementById("correct-sound").play();
}

// Function to play incorrect sound
function playIncorrectSound() {
    document.getElementById("incorrect-sound").play();
}

// Function to show the final score with confetti if high score
function showFinalScore() {
    questionContainer.innerHTML = `<h2>Quiz Completed!</h2>
                                   <div id="final-score">Your Score: ${score} / ${questions.length}</div>`;
    optionsContainer.innerHTML = "";
    feedbackContainer.innerHTML = "";
    nextButton.style.display = "none";
    
    // Add confetti if score is high
    if (score >= questions.length * 0.8) {
        for (let i = 0; i < 30; i++) createConfetti();
    }
}

// Next question handler
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showFinalScore();
    }
}

// Event listener for next button click
nextButton.addEventListener("click", nextQuestion);
nextButton.style.display = "none";

// Function to load a new question


document.getElementById('start-quiz').addEventListener('click', function() {
    // Hide the intro
    document.getElementById('intro-container').style.display = 'none';

    // Show the quiz
    document.getElementById('quiz-container').style.display = 'block';

    // Stop the intro music and play the quiz music
    const introMusic = document.getElementById("intro-music");
    const quizMusic = document.getElementById("quiz-music");

    introMusic.pause(); // Stop intro music
    quizMusic.play();   // Start quiz music

    // You can also reset the quiz state here if needed (score, progress, etc.)
});




// Initialize quiz
loadQuestion();
