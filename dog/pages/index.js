import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Labore ipsum amet adipisicing ex id aliqua veniam in culpa. Ut esse
          consectetur velit nisi laboris id fugiat nostrud. Laboris consequat
          nulla eu proident eu consectetur nisi reprehenderit enim anim sit.
        </p>
        <p className={styles.text}>
          Labore ipsum amet adipisicing ex id aliqua veniam in culpa. Ut esse
          consectetur velit nisi laboris id fugiat nostrud. Laboris consequat
          nulla eu proident eu consectetur nisi reprehenderit enim anim sit.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
