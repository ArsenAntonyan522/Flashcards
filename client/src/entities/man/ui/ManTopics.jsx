import { useState, useEffect } from "react";
 import styles from "../styles/MainPage.module.css";
import { Link } from "react-router-dom";

const ManTopics = () => {


    const [question, setQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState("");
    const [questionId, setQuestionId] = useState(1);
    const [correctAnswer, setCorrectAnswer] = useState("");
  
    // Функция для получения вопроса из API
    const fetchQuestion = async (id) => {
      try {
        const response = await fetch(`/api/men/${id}`); // Замените на ваш путь к API
        const data = await response.json();
        console.log(data)
        setQuestion(data.data.question);
        setCorrectAnswer(data.data.answer);
      } catch (error) {
        console.error("Ошибка при получении вопроса:", error);
      }
    };
  
    useEffect(() => {
      fetchQuestion(questionId);
    }, [questionId]);
  
    const handleSubmit = () => {
      if (userAnswer.trim() === correctAnswer) {
        setResult("Правильно");
      } else {
        setResult(`Не правильно! Правильно: ${correctAnswer}`);
      }
    };
  
    const handleNext = () => {
      setUserAnswer("");
      setResult("");
      setQuestionId((prevId) => prevId + 1); // Увеличиваем ID на 1
    };


    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>ahhh shit, here we go again</h1>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Вопросы для настоящих мужчин</h3>
    
              <h2>Вопрос:</h2>
              <input
                className={styles.input}
                type="text"
                value={question}
                readOnly
              />
              <h2>Ваш ответ:</h2>
              <input
                className={styles.input}
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button className={styles.button} onClick={handleSubmit}>
                Готово
              </button>
    
              {result && (
                <div style={{ color: result === "Правильно" ? "green" : "red" }}>
                  {result}
                </div>
              )}
    
              {result && (
                <button className={styles.button} onClick={handleNext}>
                  Дальше
                </button>
              )}
            </div>
          </div>
          <div className={styles.footer}>
            <span>Все права защищены (с) </span>
            <span>Но это не точно </span>
          </div>
        </div>
    )
};

export default ManTopics;