import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/future/image'
// import styles from '../styles/Home.module.css'
import { c, exampleData } from '../utils';
import Viewer from 'react-viewer';

export default function Home() {
  const [slideViewerVisible, setSlideViewerVisible] = useState(false);

  return (
    <>
      <Head>
        {/* <link
          rel="icon"
          href="/birbstreet-mascot-padded400w.png"
        /> */}
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold">🤓 foundle</h1>
          {/* <p className="py-3">wordle for founders: guess the startup that the slide belongs to</p> */}
          <div className="divider"></div>
          <p className="py-3">guess which company&apos;s pitch deck this slide is from!</p>
          <Image
            src={exampleData[0].slideUrl}
            placeholder="empty"
            alt="slide deck image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto', cursor: 'zoom-in' }}
            onClick={() => setSlideViewerVisible(true)}
          />
        </div>
        <Viewer
          visible={slideViewerVisible}
          onClose={() => setSlideViewerVisible(false)}
          onMaskClick={() => setSlideViewerVisible(false)}
          images={[{ src: exampleData[0].slideUrl, alt: 'slide deck image' }]}
          attribute={false}
          noNavbar={true}
          changeable={false}
        />
      </div>
    </>
  )
}
