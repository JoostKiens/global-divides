import { chapters } from "./chapters"
import { Chapter } from "./Chapter"
import { useSetCssProperty } from "./app.hooks"
import styles from "./App.module.css"

function App() {
  useSetCssProperty(
    "--vh-static",
    `${window.innerHeight * WINDOW_HEIGHT_TO_REM_RATIO}rem`,
  )

  return (
    <main className={styles.App}>
      <header className={styles.Header}>
        <h1>Global Divides</h1>
        <span className={styles.Payoff}>
          Population, Forests, Carbon, and Pollution
        </span>
      </header>

      <div className={styles.Chapters}>
        {chapters.map(({ layer, ...rest }) => (
          <Chapter key={rest.id} {...rest} layer={layer} />
        ))}
      </div>

      <Footer />
    </main>
  )
}

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <small>
        ©️ 2023{" "}
        <a
          href="https://www.linkedin.com/in/joostkiens/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joost Kiens
        </a>
        . Made with React Three Fiber, Google Earth Engine, QGIS & Affinity
        Designer.
        <a
          href="https://crocus-reindeer-69c.notion.site/Sources-f49554c9ea484557a3a2c05684b62312?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data sources
        </a>
        .
      </small>
    </footer>
  )
}

const WINDOW_HEIGHT_TO_REM_RATIO = 0.001

export default App
