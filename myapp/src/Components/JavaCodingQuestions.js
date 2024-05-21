import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JavaCodingQuestions.css';

const JavaMCQs = () => {
  const navigate = useNavigate();

  const handleBackbtn = () => {
    navigate('/CodingTopics');
  };

  const initialQuestionsState = [
    {
      id: 1,
      question: 'What is the output of the following Java code?',
      code: `public class Main {
  public static void main(String[] args) {
    int x = 10;
    int y = 20;
    System.out.println(x + y);
  }
}`,
      options: ['30', '10', '20', 'Error'],
      answer: '30',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 2,
      question: 'What will be the output of this code?',
      code: `public class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 2;
    int c = a / b;
    System.out.println(c);
  }
}`,
      options: ['2.5', '2', '3', 'Error'],
      answer: '2',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 3,
      question: 'What is the output of this code?',
      code: `public class Main {
  public static void main(String[] args) {
    String s = "Hello";
    System.out.println(s.length());
  }
}`,
      options: ['5', '4', '6', 'Error'],
      answer: '5',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 4,
      question: 'What will this code print?',
      code: `public class Main {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5};
    System.out.println(arr[2]);
  }
}`,
      options: ['1', '2', '3', 'Error'],
      answer: '3',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 5,
      question: 'What is the output of this code?',
      code: `public class Main {
  public static void main(String[] args) {
    String s = "Java";
    String t = s.substring(1, 3);
    System.out.println(t);
  }
}`,
      options: ['av', 'va', 'Ja', 'Error'],
      answer: 'av',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 6,
      question: 'What will this code print?',
      code: `public class Main {
  public static void main(String[] args) {
    int x = 5;
    int y = 10;
    int z = x * y;
    System.out.println(z);
  }
}`,
      options: ['50', '15', '510', 'Error'],
      answer: '50',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 7,
      question: 'What is the output of the following Java code?',
      code: `public class Main {
  public static void main(String[] args) {
    boolean b = true;
    System.out.println(!b);
  }
}`,
      options: ['true', 'false', 'Error', '1'],
      answer: 'false',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 8,
      question: 'What will this code print?',
      code: `public class Main {
  public static void main(String[] args) {
    int x = 10;
    int y = 3;
    int z = x % y;
    System.out.println(z);
  }
}`,
      options: ['3', '1', '0', 'Error'],
      answer: '1',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 9,
      question: 'What is the output of this code?',
      code: `public class Main {
  public static void main(String[] args) {
    String s = "Programming";
    System.out.println(s.charAt(2));
  }
}`,
      options: ['P', 'o', 'r', 'g'],
      answer: 'o',
      selectedOption: '',
      showAnswer: false,
    },
    {
      id: 10,
      question: 'What will this code print?',
      code: `public class Main {
  public static void main(String[] args) {
    int x = 7;
    int y = 3;
    int z = x + y * x / y - y;
    System.out.println(z);
  }
}`,
      options: ['10', '12', '7', 'Error'],
      answer: '10',
      selectedOption: '',
      showAnswer: false,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestionsState);

  const handleOptionSelect = (option, questionId) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        return {
          ...q,
          selectedOption: option,
          showAnswer: true,
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h1>Career Centre</h1>
      <div className='java-container'>
        {questions.map((q) => (
          <div key={q.id} className="question-block">
            <p>{q.question}</p>
            <pre>{q.code}</pre>
            <div>
              {q.options.map((option, index) => (
                <button
                  key={index}
                  style={{ marginRight: '10px' }}
                  onClick={() => handleOptionSelect(option, q.id)}
                  disabled={q.showAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
            {q.showAnswer && (
              <p>
                {q.selectedOption === q.answer
                  ? 'Correct'
                  : `Incorrect. The correct answer is: ${q.answer}`}
              </p>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleBackbtn}>Back</button>
    </div>
  );
};

export default JavaMCQs;
