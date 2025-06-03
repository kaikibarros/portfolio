// src/app/jogo-da-senha/page.tsx (ou onde quer que seu arquivo esteja)
"use client";

import React, { useState, useEffect, FormEvent } from "react";
import styles from "./jogo.module.css"; // Importa seu CSS Module

interface Attempt {
  guess: string;
  bulls: number;
  cows: number;
}

const MAX_ATTEMPTS = 10;
const CODE_LENGTH = 4;

const JogoDaSenhaPage: React.FC = () => {
  const [secretCode, setSecretCode] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [remainingAttempts, setRemainingAttempts] =
    useState<number>(MAX_ATTEMPTS);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const generateSecretCode = () => {
    let code = "";
    const digits = "0123456789";
    const availableDigits = digits.split("");
    for (let i = 0; i < CODE_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * availableDigits.length);
      code += availableDigits.splice(randomIndex, 1)[0];
    }
    console.log("Novo código secreto (para debug):", code);
    return code;
  };

  const startNewGame = () => {
    setSecretCode(generateSecretCode());
    setCurrentGuess("");
    setAttempts([]);
    setRemainingAttempts(MAX_ATTEMPTS);
    setGameOver(false);
    setGameWon(false);
    setMessage(
      `Adivinhe a senha de ${CODE_LENGTH} dígitos! Você tem ${MAX_ATTEMPTS} tentativas.`
    );
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const calculateResult = (
    guess: string,
    secret: string
  ): { bulls: number; cows: number } => {
    let bulls = 0;
    let cows = 0;
    const secretChars = secret.split("");
    const guessChars = guess.split("");
    for (let i = 0; i < CODE_LENGTH; i++) {
      if (guessChars[i] === secretChars[i]) {
        bulls++;
      }
    }
    for (let i = 0; i < CODE_LENGTH; i++) {
      if (
        secretChars.includes(guessChars[i]) &&
        guessChars[i] !== secretChars[i]
      ) {
        cows++;
      }
    }
    return { bulls, cows };
  };

  const handleSubmitGuess = (e: FormEvent) => {
    e.preventDefault();
    if (gameOver) return;
    if (currentGuess.length !== CODE_LENGTH || !/^\d+$/.test(currentGuess)) {
      setMessage(`Por favor, insira ${CODE_LENGTH} dígitos numéricos.`);
      return;
    }
    const { bulls, cows } = calculateResult(currentGuess, secretCode);
    const newAttempt: Attempt = { guess: currentGuess, bulls, cows };
    setAttempts((prevAttempts) => [newAttempt, ...prevAttempts]);
    if (bulls === CODE_LENGTH) {
      setGameWon(true);
      setGameOver(true);
      setMessage(`Parabéns! Você acertou a senha: ${secretCode}`);
    } else {
      const attemptsLeft = remainingAttempts - 1;
      setRemainingAttempts(attemptsLeft);
      if (attemptsLeft === 0) {
        setGameOver(true);
        setMessage(`Fim de jogo! A senha era: ${secretCode}. Tente novamente!`);
      } else {
        setMessage(`Você tem ${attemptsLeft} tentativa(s) restante(s).`);
      }
    }
    setCurrentGuess("");
  };

  const handleRevealCode = () => {
    alert(`A combinação secreta é: ${secretCode}`);
  };

  return (
    <div className={styles.container}> {/* Container principal da página com fundo bege */}
      {/* O div abaixo ainda usa Tailwind para centralização e padding geral da área de conteúdo */}
      <div className="container mx-auto p-4 flex flex-col items-center w-full">
        {/* Envolve o título e subtítulo no titleBox para o fundo preto */}
        <div className={styles.titleBox}>
          <h1>Jogo da Senha</h1> {/* Estilizado por styles.titleBox h1 no CSS Module */}
        </div>
        <p className={styles.subtitle}> {/* Estilizado por styles.subtitle */}
          Tente adivinhar a senha numérica de {CODE_LENGTH} dígitos.
        </p>

        <div className={styles.form}> {/* Container principal do jogo com fundo escuro */}
          <form onSubmit={handleSubmitGuess}> {/* Estilizado por .form form no CSS Module */}
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              maxLength={CODE_LENGTH}
              // As classes Tailwind para aparência foram removidas, pois .form input[type="text"] cuida disso.
              // Mantenha classes Tailwind apenas se forem estritamente para layout não coberto pelo CSS module.
              placeholder="Digite sua tentativa"
              disabled={gameOver}
            />
            <button
              type="submit"
              className={styles.submitButton} // Usa a classe do CSS Module
              disabled={gameOver || currentGuess.length !== CODE_LENGTH}
            >
              Enviar Tentativa
            </button>
          </form>

          {message && (
            <p
              className={`${styles.messageText} ${ // Classe base do CSS Module
                gameWon
                  ? "text-green-400" // Cor de sucesso do Tailwind (precisa ter bom contraste com fundo do .form)
                  : gameOver
                  ? "text-red-400"   // Cor de erro do Tailwind
                  : styles.infoMessageColor // Cor padrão para mensagens (definida em .messageText ou uma nova classe)
              }`}
            >
              {message}
            </p>
          )}

          {gameOver && (
            <button
              onClick={startNewGame}
              className={styles.newGameButton} // Usa a classe do CSS Module
            >
              Novo Jogo
            </button>
          )}

          <button
            onClick={handleRevealCode}
            className={styles.revealButton} // Usa a classe do CSS Module
          >
            Revelar Senha
          </button>

          <div className={styles.attemptsSection}>
            <h3 className={styles.attemptsTitle}>
              Tentativas Anteriores:
            </h3>
            {attempts.length === 0 && !gameOver ? (
              <p className={styles.noAttemptsText}>
                Nenhuma tentativa ainda.
              </p>
            ) : (
              <ul className={styles.attemptsList}>
                {attempts.map((att, index) => (
                  <li key={index} className={styles.attemptItem}>
                    <span className={styles.attemptGuess}>{att.guess}</span>
                    <span className={styles.attemptResult}>
                      <span className={styles.bulls}> Bulls: {att.bulls}</span>
                      ,{" "}
                      <span className={styles.cows}> Cows: {att.cows}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JogoDaSenhaPage;