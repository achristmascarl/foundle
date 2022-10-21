import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        {/* <link
          rel="icon"
          href="/birbstreet-mascot-padded400w.png"
        /> */}
        <title>Birb Street</title>
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
      <div id="main" className="flex flex-col max-w-5xl mx-auto min-h-screen overflow-x-hidden">
        <div className="navbar z-50">
          <div className="flex-1">
            {/* <Image src="/birbstreet-mascot-padded.png" alt="birb street logo" height="50px" width="50px" /> */}
          </div>
          <div className="flex-none">
          </div>
        </div>
        <div className="hero">
          <div className="hero-content text-left flex flex-col">
            <div className="max-w-lg">
              <h1 className="text-5xl font-semibold">foundle</h1>
              <p className="py-3">wordle for founders: guess the startup that the slide belongs to</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
