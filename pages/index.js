import Head from "next/head";

//Views
import Home from "../contents/Home";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Nuvu Saver</title>
            </Head>
            <Home />
        </div>
    );
}
