import Head from "next/head";

export default function Container(props) {
    const { children } = props;

    return (
        <div>
            <Head>
                <title>Placeholder Title</title>
                <meta name="description" content="Homepage for Dan Cigrang" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav></nav>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
}
