import Head from "next/head";

//Components
import Navbar from "../components/Navbar";

//Views
import Home from "../contents/Home";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Nuvu Saver</title>
            </Head>
            <Navbar
                links={[
                    { name: "Inicio", href: "home", icon: "/icons/home_24px.svg" },
                    {
                        name: "Historial",
                        href: "history",
                        icon: "/icons/format_list_bulleted_24px.svg",
                    },
                    {
                        main: true,
                        name: "Ahorrar",
                        href: "save",
                        icon: "/icons/add_24px.svg",
                    },
                    { name: "Mi perfil", href: "profile", icon: "/icons/account_circle_24px.svg" },
                    { name: "Más", href: "more", icon: "/icons/more_horiz_24px.svg" },
                ]}
            />
            <Home />
        </div>
    );
}
