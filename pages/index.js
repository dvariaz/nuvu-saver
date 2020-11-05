import Head from "next/head";
import styles from "../contents/Home/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nuvu Saver</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Nuvu Saver</h1>
            </main>
        </div>
    );
}
