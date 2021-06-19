import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Stream() {
    return (
        <div className={styles.container}>
            <Head>
                <title>salad bowl</title>
                <meta name="description" content="Private Streaming" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <video id="videoElement" controls></video>
            <Script src="https://cdn.jsdelivr.net/npm/hls.js"></Script>
            <Script src="https://cdn.bootcss.com/flv.js/1.5.0/flv.min.js"></Script>
            <Script src="/video.js" strategy="lazyOnload"></Script>
        </div>
    )
}