import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1>Coming soon.</h1>
        <p className={styles.description}>
          The foundation is ready. The portfolio design will be added next.
        </p>
      </div>
    </main>
  );
}
