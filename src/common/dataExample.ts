export type TQuestion = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TTopic = {
  [key: string]: TQuestion[];
};

export type TSubject = {
  [key: string]: TTopic[];
};

export type TQuizData = {
  buttonLabel?: string;
  course?: string;
  theme?: string;
  questionsList?: TQuestion[];
  listOfThemes?: TTopic[];
};

export const arr: TSubject[] = [
  {
    JavaScript: [
      {
        "тема 1 JS": [
          {
            question:
              "К какому типу данных преобразует значение функция alert?",
            answer_1: "к строке",
            answer_2: "к числу",
            answer_3: "к символу",
          },
          {
            question:
              "К какому типу данных преобразует значение математические операторы?",
            answer_1: "к числам",
            answer_2: "undefined",
            answer_3: "к нулю",
          },
        ],
      },
      {
        "тема 2 JS": [
          {
            question:
              "Какие символы можно использовать в именах переменных в JavaScript?",
            answer_1: "Буквы, цифры, символы $ и _",
            answer_2: " Пробелы и тире",
            answer_3: "Только буквы латинского алфавита",
          },
          {
            question:
              " Что произойдет, если объявить переменную без присвоения ей значения?",
            answer_1: "Переменная будет содержать значение undefined",
            answer_2: "JavaScript выдаст ошибку",
            answer_3: "Переменная будет содержать значение null",
          },
        ],
      },
    ],
  },
  {
    CSS: [
      {
        "тема 1 CSS": [
          {
            question: "Свойство display какое значение принимает?",
            answer_1: "flex",
            answer_2: "relative",
            answer_3: "justify-content",
          },
          {
            question: "Что такое инлайн - стили и какой они имеют приоритет?",
            answer_1:
              "стили которые пишутся прямо в HTML  и имеют самый высокий приоритет",
            answer_2:
              "стили которые пишутся  в CSS  и имеют самый высокий приоритет",
            answer_3:
              "стили которые пишутся прямо в HTML  и имеют низкий приоритет",
          },
        ],
      },
      {
        "тема 2 CSS": [
          {
            question: "За что отвечает z- index?",
            answer_1: "за расположение элементов по оси z",
            answer_2: "за расположение элементов по оси x",
            answer_3: "за расположение элементов по оси y",
          },
          {
            question: "Какие значения принимает свойство position?",
            answer_1: "relative",
            answer_2: "flex",
            answer_3: "justify-content",
          },
        ],
      },
    ],
  },
  {
    TypeScript: [
      {
        "тема 1 TS": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 TS": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
  {
    HTML: [
      {
        "тема 1 HTML": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 HTML": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
  {
    Git: [
      {
        "тема 1 Git": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 Git": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
  {
    React: [
      {
        "тема 1 React": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 React": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
  {
    Cmd: [
      {
        "тема 1 Cmd": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 Cmd": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
  {
    Прочее: [
      {
        "тема 1 Прочее": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
      {
        "тема 2 Прочее": [
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
          { question: "", answer_1: "", answer_2: "", answer_3: "" },
        ],
      },
    ],
  },
];

export const questionsList = [
  {
    question: "Свойство display какое значение принимает?",
    answer_1: "flex",
    answer_2: "relative",
    answer_3: "justify-content",
  },
  {
    question: "Что такое инлайн - стили и какой они имеют приоритет?",
    answer_1:
      "стили которые пишутся прямо в HTML  и имеют самый высокий приоритет",
    answer_2: "стили которые пишутся  в CSS  и имеют самый высокий приоритет",
    answer_3: "стили которые пишутся прямо в HTML  и имеют низкий приоритет",
  },

  {
    question: "За что отвечает z- index?",
    answer_1: "за расположение элементов по оси z",
    answer_2: "за расположение элементов по оси x",
    answer_3: "за расположение элементов по оси y",
  },
  {
    question: "Какие значения принимает свойство position?",
    answer_1: "relative",
    answer_2: "flex",
    answer_3: "justify-content",
  },
];
