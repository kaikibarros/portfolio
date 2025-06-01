// src/app/jogo-da-senha/page.tsx
'use client'; // Necessário para interatividade no lado do cliente (useState, useEffect)

import React, { useState, useEffect, FormEvent } from 'react';

interface Attempt {
  guess: string;
  bulls: number;
  cows: number;
}

const MAX_ATTEMPTS = 10;
const CODE_LENGTH = 4; // Ou o tamanho que você definir para a senha

const JogoDaSenhaPage: React.FC = () => {
  const [secretCode, setSecretCode] = useState<string>('');
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(MAX_ATTEMPTS);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // Função para gerar um código secreto (ex: 4 dígitos únicos)
  const generateSecretCode = () => {
    // Lógica para gerar um código numérico de CODE_LENGTH dígitos sem repetição
    // Exemplo simples (pode ser aprimorado para garantir unicidade e aleatoriedade):
    let code = '';
    const digits = '0123456789';
    const availableDigits = digits.split('');
    for (let i = 0; i < CODE_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * availableDigits.length);
      code += availableDigits.splice(randomIndex, 1)[0];
    }
    console.log("Novo código secreto (para debug):", code); // Para debug
    return code;
  };

  // Inicializa o jogo
  const startNewGame = () => {
    setSecretCode(generateSecretCode());
    setCurrentGuess('');
    setAttempts([]);
    setRemainingAttempts(MAX_ATTEMPTS);
    setGameOver(false);
    setGameWon(false);
    setMessage(`Adivinhe a senha de ${CODE_LENGTH} dígitos! Você tem ${MAX_ATTEMPTS} tentativas.`);
  };

  // Efeito para iniciar o jogo quando o componente monta
  useEffect(() => {
    startNewGame();
  }, []);

  // Função para calcular Bulls e Cows
  const calculateResult = (guess: string, secret: string): { bulls: number, cows: number } => {
    let bulls = 0;
    let cows = 0;
    const secretChars = secret.split('');
    const guessChars = guess.split('');

    // Calcular Bulls
    for (let i = 0; i < CODE_LENGTH; i++) {
      if (guessChars[i] === secretChars[i]) {
        bulls++;
      }
    }

    // Calcular Cows
    for (let i = 0; i < CODE_LENGTH; i++) {
      if (secretChars.includes(guessChars[i]) && guessChars[i] !== secretChars[i]) {
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
    // Validar se há dígitos repetidos no palpite (opcional, dependendo das regras)
    // const guessDigits = new Set(currentGuess.split(''));
    // if (guessDigits.size !== CODE_LENGTH) {
    //   setMessage("Os dígitos do palpite não devem se repetir.");
    //   return;
    // }


    const { bulls, cows } = calculateResult(currentGuess, secretCode);
    const newAttempt: Attempt = { guess: currentGuess, bulls, cows };
    setAttempts(prevAttempts => [newAttempt, ...prevAttempts]); // Adiciona em ordem reversa

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
    setCurrentGuess(''); // Limpa o input
  };

  const handleRevealCode = () => {
    alert(`A combinação secreta é: ${secretCode}`);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Jogo da Senha</h1>
        <p className="text-lg text-gray-600">Tente adivinhar a senha numérica de {CODE_LENGTH} dígitos.</p>
      </header>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
        <form onSubmit={handleSubmitGuess} className="mb-4">
          <input
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength={CODE_LENGTH}
            className="w-full p-3 border border-gray-300 rounded-md text-lg tracking-widest text-center mb-3"
            placeholder="Digite sua tentativa"
            disabled={gameOver}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md disabled:opacity-50"
            disabled={gameOver || currentGuess.length !== CODE_LENGTH}
          >
            Enviar Tentativa
          </button>
        </form>

        {message && (
          <p className={`text-center mb-4 font-medium ${gameWon ? 'text-green-600' : gameOver ? 'text-red-600' : 'text-gray-700'}`}>
            {message}
          </p>
        )}

        {gameOver && (
          <button
            onClick={startNewGame}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md mb-4"
          >
            Novo Jogo
          </button>
        )}

        <button
          onClick={handleRevealCode}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-md mb-6"
        >
          Revelar Senha 
        </button>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-center">Tentativas Anteriores:</h3>
          {attempts.length === 0 && !gameOver ? (
            <p className="text-center text-gray-500">Nenhuma tentativa ainda.</p>
          ) : (
            <ul className="space-y-2 max-h-60 overflow-y-auto border p-3 rounded-md">
              {attempts.map((att, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span className="text-lg font-mono">{att.guess}</span>
                  <span className="text-sm">
                    <span className="text-red-500 font-bold">Bulls: {att.bulls}</span>,{' '}
                    <span className="text-blue-500 font-bold">Cows: {att.cows}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default JogoDaSenhaPage;