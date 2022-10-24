import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';
import dynamic from 'next/dynamic';
// import styles from '../styles/Home.module.css';
import { c, companies } from '../utils';
import Select from 'react-select';

const foundleId = '123';
const answerIndex = 1;
const slideIndex = 0;
const numGuesses = 5;

const ReactViewer = dynamic(
  () => import('react-viewer'),
  { ssr: false }
)

export default function Home() {
  const [slideViewerVisible, setSlideViewerVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [shareString, setShareString] = useState(`foundle ${foundleId} \n`);
  const [processingGuess, setProcessingGuess] = useState(false);

  // get game state from localStorage upon render
  useEffect(() => {
    const savedGameState = localStorage.getItem(`foundle-${foundleId}`);
    if (savedGameState) {
      const parsedGameState = JSON.parse(savedGameState);
      console.log(parsedGameState);
      setGuesses(parsedGameState.guesses);
      setGameFinished(parsedGameState.gameFinished);
      setGameWon(parsedGameState.gameWon);
      if (parsedGameState.gameFinished) {
        updateShareString(parsedGameState.gameWon);
        setModalOpen(true);
      }
    }
  }, []);

  // check to see if the game is finished
  useEffect(() => {
    if (gameWon && gameFinished) {
      console.log('game finished, won');
      updateShareString(gameWon);
      setModalOpen(true);
      saveGame();
    } else if (gameFinished) {
      console.log('game finished, lost');
      updateShareString(gameWon);
      setModalOpen(true);
      saveGame();
    }
  }, [gameFinished, gameWon]);

  function updateShareString(gameWon) {
    let updatingShareString = `${shareString}`
    if (gameWon) {
      updatingShareString += `${guesses.length}/${numGuesses} \n`;
    } else {
      updatingShareString += `X/${numGuesses} \n`;
    }
    updatingShareString += 'foundle.io';
    setShareString(updatingShareString);
  }

  // save game state to localStorage
  function saveGame() {
    localStorage.setItem(`foundle-${foundleId}`, JSON.stringify({
      guesses: guesses,
      gameFinished: gameFinished,
      gameWon: gameWon,
    }))
  }

  function handleGuess() {
    setProcessingGuess(true);
    const addingNewGuess = Array.from(guesses);
    console.log(selectedOption);
    console.log(addingNewGuess);
    addingNewGuess.push(selectedOption.value);
    console.log(addingNewGuess);
    setGuesses(addingNewGuess);
    if (selectedOption.index === answerIndex) {
      setGameWon(true);
      setGameFinished(true);
    } else if (addingNewGuess.length === numGuesses) {
      setGameFinished(true);
    }
    setSelectedOption(null);
    setProcessingGuess(false);
    saveGame();
  }

  function handleShareResults() {
    navigator.clipboard.writeText(shareString);
    setShowCopiedAlert(true);
    setTimeout(() => {
      setShowCopiedAlert(false);
    }, 2000)
  }

  return (
    <>
      <Head>
        <link
          rel="icon"
          href={
            'data:image/svg+xml,' +
            '<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>' +
            `<text y=%22.9em%22 font-size=%2290%22>🧐</text>` +
            '</svg>'
          }
        />
        <title>foundle</title>
        <meta
          name="og:title"
          content="foundle"
        />
        <meta
          name="description"
          content="wordle for founders: guess the startup that the slide belongs to"
        />
        {/* <meta
          property="og:image"
          content="/birbstreet-banner.png"
        /> */}
      </Head>
      <div id="main" className="flex flex-col max-w-7xl mx-auto min-h-screen overflow-x-hidden content-center p-10">
        <div className="toast toast-top toast-center w-full">
          {showCopiedAlert && (
            <div className="alert alert-info">
              <div>
                <span>Copied results to clipboard.</span>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-semibold">🧐 foundle</h1>
          <p className="py-3">wordle for founders: guess the startup whose pitch deck the slide belongs to.</p>
        </div>
        <div className="divider"></div>
        <div className="max-w-xl w-full mx-auto text-center">
          <h3 className="py-3 text-lg">
            {gameFinished ? (
              gameWon ? (
                `🎉 you won! the pitch deck slide was from ${companies[answerIndex].name}.`
              ) : (
                `maybe next time 😢 the pitch deck slide belongs to ${companies[answerIndex].name}.`
              )
            ) : (
              "guess which company's pitch deck this slide is from!"
            )}
          </h3>
          <Image
            src={companies[answerIndex].slideUrls[slideIndex]}
            placeholder="empty"
            alt="slide deck image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto', cursor: 'zoom-in' }}
            onClick={() => setSlideViewerVisible(true)}
          />
        </div>
        <div className="max-w-lg w-3/4 mx-auto text-center flex flex-col mt-3">
          <h3 className="py-3 text-lg">select a company</h3>
          <Select
            defaultValue={null}
            value={selectedOption}
            onChange={setSelectedOption}
            options={
              companies.map((company, index) => ({
                value: company.name,
                label: company.name,
                index: index,
                name: company.name,
                iconUrl: company.iconUrl,
                facts: company.facts,
                foundingYear: company.foundingYear,
              }))}
            isClearable={true}
            instanceId="foundle-answer-select"
          />
          <button
            className="btn mx-auto my-3"
            disabled={!selectedOption || gameFinished}
            onClick={handleGuess}
          >👆 Guess</button>
        </div>
        <div className="max-w-xl w-3/4 mx-auto text-center flex flex-col mt-3">
          <h3 className="py-3 text-lg">results ({`${numGuesses - guesses.length}/${numGuesses} guesses remaining`})</h3>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
          <div className="w-full h-10 bg-gray-100 my-2 rounded-md"></div>
        </div>
        <ReactViewer
          visible={slideViewerVisible}
          onClose={() => setSlideViewerVisible(false)}
          onMaskClick={() => setSlideViewerVisible(false)}
          images={[{ src: companies[answerIndex].slideUrls[slideIndex], alt: 'slide deck image' }]}
          attribute={false}
          noNavbar={true}
          changeable={false}
        />
        <input
          type="checkbox"
          id="game-finished-modal"
          className="modal-toggle"
          checked={gameFinished && modalOpen}
          onChange={() => setModalOpen(!modalOpen)}
        />
        <label
          htmlFor="game-finished-modal"
          className="modal cursor-pointer"
        >
          <label className="modal-box relative" htmlFor="">
            <label htmlFor="game-finished-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">
              {gameWon ? (
                '🎉 you won!'
              ) : (
                'maybe next time 😢'
              )}
            </h3>
            <p className="py-4">
              {gameWon ? (
                `the pitch deck slide was from ${companies[answerIndex].name}.`
              ) : (
                `the pitch deck slide belongs to ${companies[answerIndex].name}.`
              )}
            </p>
            <button
              className="btn mx-auto my-3"
              onClick={handleShareResults}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
              </svg>
              Share Results
            </button>
          </label>
        </label>
      </div>
    </>
  )
}
