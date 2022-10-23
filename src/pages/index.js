import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';
import dynamic from 'next/dynamic';
// import styles from '../styles/Home.module.css';
import { c, exampleData } from '../utils';
import Select from 'react-select';
import mitt from 'next/dist/shared/lib/mitt';

const answerIndex = 0;
const slideIndex = 0;

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
  const [shareString, setShareString] = useState('foundle ');
  const [processingGuess, setProcessingGuess] = useState(false);

  useEffect(() => {
    if (gameWon && gameFinished) {
      console.log('game finished, won');
    } else if (gameFinished) {
      console.log('game finished, lost');
    }
  }, [gameFinished, gameWon]);

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
    } else if (addingNewGuess.length === 3) {
      setGameFinished(true);
    }
    setSelectedOption(null);
    setProcessingGuess(false);
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold">🧐 foundle</h1>
          {/* <p className="py-3">wordle for founders: guess the startup that the slide belongs to.</p> */}
        </div>
        <div className="divider"></div>
        <div className="max-w-xl w-full mx-auto text-center">
          <h3 className="py-3 text-lg">guess which company&apos;s pitch deck this slide is from!</h3>
          <Image
            src={exampleData[answerIndex].slideUrls[slideIndex]}
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
              exampleData.map((company, index) => ({
                value: company.name,
                label: company.name,
                index: index,
                name: company.name,
                logoUrl: company.logoUrl,
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
          <h3 className="py-3 text-lg">results</h3>
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
          images={[{ src: exampleData[answerIndex].slideUrls[slideIndex], alt: 'slide deck image' }]}
          attribute={false}
          noNavbar={true}
          changeable={false}
        />
      </div>
    </>
  )
}
