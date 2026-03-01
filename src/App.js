import logo from './logo.svg';
import './App.css';
import { Question } from './components/Question';
import { useState } from 'react';
import { Final } from './components/Final';

const questions =
  [
    {
      title: "Какой язык программирования самый быстрый?",
      variants: ["C", "C++", "Assembler", "C#", "Python"],
      correct: 2
    },
    {
      title: "Какой язык является процедурным?",
      variants: ["C", "C++", "C#", "Java"],
      correct: 0
    },
    {
      title: "Что такое функция?",
      variants:
        [
          "Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
          "Именованная область памяти, содержимое которой не может изменяться во время выполнения программы",
          "Именованная область кода, которую можно вызывать при необходимости"
        ],
      correct: 2
    },
    {
      title: "Что такое метод?",
      variants:
        [
          "Переменная внутри класса",
          "Функция внутри класса",
          "Реализация алгоритма"
        ],
      correct: 1
    },
    {
      title: "Что такое переменная?",
      variants:
        [
          "Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
          "Именованная область памяти, содержимое которой не может изменяться во время выполнения программы",
          "Именованная область кода, которую можно вызывать при необходимости"
        ],
      correct: 0
    },
    {
      title: "Какая структура данных обеспечивает доступ к элементам за константное время?",
      variants:
        [
          "Массив",
          "Список",
          "Дерево"
        ],
      correct: 0
    },
    {
      title: "Какая структура данных обеспечивает добавление/удаление элементов за константное время?",
      variants:
        [
          "Массив",
          "Список",
          "Дерево"
        ],
      correct: 1
    }
  ]

function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getShuffledArray(arr) {
  const result = shuffleArray(arr).map(q => {
    const shuffledVariants = shuffleArray(q.variants);
    const correctIndex = shuffledVariants.indexOf(q.variants[q.correct]);
    return {
      title: q.title,
      variants: shuffledVariants,
      correct: correctIndex
    };
  });
  return result;
}


function App() {
  const [newArr, setNewArr] = useState(getShuffledArray(questions));
  const totalQuestions = newArr.length;
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  let question = newArr[step];
  const onClickVairant = (e, variant) => {
    if (variant === question.correct) {
      setCorrect(correct + 1);
      e.target.style.backgroundColor = 'green';
    }
    else e.target.style.backgroundColor = 'red';
    setTimeout(() => {
      setStep(step + 1);
      e.target.style.backgroundColor = 'white';
    }, 1000);
  };
  const onClickReplay = () => {
    setNewArr(getShuffledArray(newArr));
    setStep(0);
    setCorrect(0);
  };
  return (
    <div className='main'>
      {
        step < totalQuestions ?
          <Question question={question} onClickVairant={onClickVairant} totalQuestions={totalQuestions} step={step} />
          : <Final totalQuestions={totalQuestions} correctAnswers={correct} onClickReplay={onClickReplay} />
      }
    </div>
  );

  // const totalQuestions = questions.length;
  // const [step, setStep] = useState(0);
  // const [correct, setCorrect] = useState(0);
  // let question = questions[step];
  // const onClickVairant = (variant) =>
  //   {
  //     setStep(step+1);
  //     if(variant === question.correct)setCorrect(correct+1);
  //   };
  // return (
  //   <div className='main'>
  //     {
  //       step < totalQuestions ?
  //       <Question question={question} onClickVairant={onClickVairant} totalQuestions={totalQuestions} step={step}/>
  //       :<Final totalQuestions={totalQuestions} correctAnswers={correct}/>
  //     }
  //   </div>
  // );
}

export default App;
