let questions = ["Ты самый...",
"Ты интересуешься...",
"Какая тебе нравится еда:",
"Любимая погода:",
"Ты боишься...",
"Ты бы хотел быть:",
"Тебе нравится тест?",
"Как у тебя дела?",
"Какие котики тебе нравятся?",
"Как ты относишься к учебе?",
"О чём мечтаешь?",
"Сейчас бы...",
"Вопросы становятся скучнее?",
"Твой любимый цвет:",
"Какая профессия тебя привлекает больше всего?",
"Ты призераешь...",
"Главное в жизни?",
"Ты честный???",
"Этот тест заслужил высшей оценки?",
"Рад, что тебе понравилось, мне было приятно пообщаться с тобой)))"
]

let answers = [
  ["Умный", 	"Добрый", 	"Красивый", 	"Крутой", 	"Храбрый ", 	"Сильный"],
  ["Книгами", 	"Сериалами", 	"Автомобилями", 	"Музыкой", 	"Спортом", 	"Видеоиграми"],
  ["Острая", 	"Сладкая", 	"Кислая", 	"Солёная", 	"Пресная", 	"Необычная"],
  ["Солнечная", 	"Морозная", 	"Пасмурная", 	"Дождливая", 	"Прохладная", 	"Жаркая"],
  ["Темноты", 	"Одиночества", 	"Высоты", 	"Толпы", 	" Замкнутого простанства", 	"ничего"],
  ["Волшебником", 	"Джедаем", 	"Космогонщиком", 	"Вервульфом", 	"Вампиром", 	"Супергероем"],
  ["Да", 	"Очень", 	"Безумно", 	"Это лучшая часть моей жизни", 	"Хочу чтоб он не кончался", 	"Что за глупый вопрос"],
  ["Супер", 	"Отлично", 	"Устал, но я со всем справлюсь", 	"Немного грустно, но это пройдет", 	"Хочется увидеть котика", 	"У меня всегда всё хорошо"],
  ["Добрые", 	"Все", 	"Игривые", 	"Спокойные", 	"Бесяры", 	"Все все"],
  ["Мне все равно на учебу", 	"Стараюсь, но в жизни есть дела поважнее учебы", 	"Я обожаю учиться", 	"Учеба дается мне с трудом", 	"Мне без особых усилий дается все предметы", 	"Нейтрально"],
  ["О великом", 	"О мелочах", 	"О мире во всем мире", 	"О господстве темн... То есть чтоб добро победило зло", 	"Не мечтаю, а стремлюсь", 	"секретик"],
  ["В отпуск", 	"Поспать", 	"Поесть", 	"Посмотреть фильм", 	"Побыть с родными и близкими", 	"Совершить невозможное"],
  ["Нет", 	"Конечно нет", 	"Ты великолепен, как и твои вопросы", 	"ЭТО ШЕДЕВРРР", 	"Вопросы всё еще Великолепны", 	"Всё Супер" ],
  ["Красный", 	"Желтый ", 	"Ораньжевый", 	"Синий", 	"Зеленый", 	"Фиолетовый"],
  ["Web-программист", 	"Певец", 	"Дед мороз", 	"Бизнессмен", 	"Библиотекарь", 	"Врач" ],
  ["Лгунов", 	"Живодеров", 	"Душнил", 	"Садистов", 	"Алкоголиков", 	"Никого"],
  ["Быть честным", 	"Не унывать", 	"Быть целеустремленным", 	"Быть собой", 	"Радоваться"],
  ["Никогда не вру", 	"Ложь это грех", 	"Я не слабак, я так не делаю", 	"Конечно!!!", 	"Это моя главная черта", 	"Сила в правдке"],
  ["Да", 	"Конечно", 	"Определенно", 	"А как иначе", 	"Он лучший", 	"Он Великолепен"],
  ["Мне тоже", 	"Жду новой встречи", 	"И мне было приятно", 	"Это был крутой опыт", 	"Дай пять", 	"Мне не могло не понравиться)"],
];

let allScore = [];

allScore[0] = {
  score: 0,
  class: '.cat1',
  name: 'Кот-целовака',
}

allScore[1] = {
  score: 0,
  class: '.cat2',
  name: 'Кот-студент',
}

allScore[2] = {
  score: 0,
  class: '.cat3',
  name: 'Кот-рокер',
}

allScore[3] = {
  score: 0,
  class: '.cat4',
  name: 'Кот-танцор',
}

allScore[4] = {
  score: 0,
  class: '.cat5',
  name: 'Кот-автор',
}

allScore[5] = {
  score: 0,
  class: '.cat6',
  name: 'Кот-джедай',
}

function start() {
  document.querySelector('.start-button').classList.add('disable');
  document.querySelector('.name').classList.remove('disable'); 
}

const questionContainer = document.querySelector('.questions');

function hideAndShow() { 
  questionContainer.classList.add('disable');
  setTimeout(function () {
    questionContainer.classList.remove('disable');
  }, 1);
}

let name;

document.querySelector('.name-button').onclick = function() {
  name =  document.querySelector('input').value;
  if (name != null && typeof name !== "undefined") {
   name = name.trim();
 }
  if (!name) {
    document.querySelector('.input-empty').classList.remove('disable');
 } else {
  document.querySelector('.name').classList.add('disable'); 
  questionContainer.classList.remove('disable');

   showQuestion(randomizeAnswer());
   document.querySelector('.input-empty').classList.add('disable');
 }
}

let questionNumber = 0; 


function randomizeAnswer () { 
  let randomAnswers = answers[questionNumber].slice(0);
  randomAnswers.sort(() => Math.random() - 0.5);
  return randomAnswers;
}

function showQuestion(randomAnswers) {
  document.querySelector('.questions_header h2').innerHTML = questions[questionNumber];
  document.querySelector('.number').innerHTML = 'Вопрос ' + (questionNumber + 1) + '/20';
  document.querySelectorAll('.question li').forEach((item, i) => {
    item.innerHTML = randomAnswers[i];
  });
}



document.querySelector('.question').onclick = function(event) {
  let target = event.target;
  let currentAnswer = answers[questionNumber].indexOf(target.innerHTML, 0); 
  allScore[currentAnswer]['score']++;
  if (questionNumber >= 19) { 
    questionContainer.classList.add('disable');
    summarizing();
    return
  }
  hideAndShow();
  questionNumber++;
  showQuestion(randomizeAnswer());
}

let resultIndex = 0; 

function summarizing() { 
  resultIndex = allScore.reduce(function(max, item, index, array) {
    if (item['score'] > array[max]['score']) {
      max = index;
    }
    return max
  }, 0);


  document.querySelector('.result h2').innerHTML = name + ', ты очень хороший и добоый человек вот тебе ' + allScore[resultIndex]['name'];
  document.querySelector(allScore[resultIndex]['class']).classList.remove('disable');
  document.querySelector('.result').classList.remove('disable');
}


document.querySelector('.restart-button').onclick = function() {
  questionNumber = 0;
  name = null;
  allScore.forEach((item, i) => {
    item.score = 0;
  });
  document.querySelector('.result').classList.add('disable');
  document.querySelector(allScore[resultIndex]['class']).classList.add('disable');
  document.querySelector('.name').classList.remove('disable');
}
