import Layout from "../components/Layout";
import styles from '../styles/stream.module.css'

export default function Vappustriimi() {
    const owncastOrigin = process.env.NEXT_PUBLIC_STREAM_URL
    const streamUrl = `${owncastOrigin}/embed/video`
    const chatUrl = `${owncastOrigin}/embed/chat/readwrite`

    return (
      <Layout>
        <div className={styles.main}>
            <iframe
                className={styles.stream}
                src={streamUrl}
                referrerPolicy="origin"
                allowFullScreen={true}>
            </iframe>
            <iframe
                className={styles.chat}
                src={chatUrl}
                referrerPolicy="origin">
            </iframe>
        </div>
      </Layout>
    );
}