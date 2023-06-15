const questions = [
    {
        'question': 'DHCP stands for : ',
        'a': 'Dynamic Host Configuration Protocol',
        'b': 'Digital Host Communication Prototype',
        'c': 'Digital Host Communication Protocol',
        'd': 'Dynamic Host Configuration Prototype',
        'correct': 'a'
    },
    {
        'question': 'Key that uniquely identifies each record is called: ',
        'a': 'Key Record',
        'b': 'Unique Key',
        'c': 'Primary Key',
        'd': 'Secondary Key',
        'correct': 'c'
    },
    {
        'question': 'Amount of uncertainty in a system of the symbol is called: ',
        'a': 'Bandwidth',
        'b': 'Entropy',
        'c': 'Loss',
        'd': 'Quantum',
        'correct': 'b'
    },
    {
        'question': 'In operating system, each process has its own: ',
        'a': 'address space and global variables',
        'b': 'open files',
        'c': 'pending alarms, signals and signal handlers',
        'd': 'all of the above',
        'correct': 'd'
    },
    {
        'question': 'Complexity of Binary search algorithm is:',
        'a': 'O(n)',
        'b': 'O(n2)',
        'c': 'O(log n)',
        'd': 'O(n log n)',
        'correct': 'c'
    }
];

const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const submitBtn = document.querySelector('.btn');

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

function getQuestion() {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // console.log(data); 
    quesBox.innerText = `${index + 1}) ${data.question}`;
    // console.log(optionInputs[0]);
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

submitBtn.addEventListener('click', () => submitQuiz());
function submitQuiz() {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    getQuestion();
    return;
}
function getAnswer() {
    let answer;
    optionInputs.forEach(input => {
        if (input.checked) {
            // console.log(input.value);
            answer = input.value;
        }
    })
    return answer;
}
function reset() {
    optionInputs.forEach(input => input.checked = false)
}

function endQuiz() {
    document.getElementById('box').innerHTML = `
    <h3 class="row">Here are the results from Quiz.</h3>
    <h2 class="row">${right}/${total} are Correct </h2>
    `;
}

getQuestion();