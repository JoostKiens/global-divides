import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"
import useResizeObserver from "use-resize-observer"
import classNames from "classnames"

import { IChapter, ILayer } from "./app.types"
import { Globe } from "./Globe"
import { useSetCssProperty } from "./app.hooks"
import styles from "./Chapter.module.css"

export const Chapter = ({ Content, layer, title }: IChapter) => {
  const [componentRef, inView] = useInView({ threshold: 0.3 })
  const innerRef = useRef<HTMLDivElement>(null)
  const { height: globeHeight, ref: globeRef } = useResizeObserver()

  useSetCssProperty("--h-globe", `${globeHeight}px`, innerRef.current)

  return (
    <article
      className={classNames(styles.Chapter, layer && styles.ChapterWithGlobe)}
      ref={componentRef}
    >
      <div
        className={classNames(styles.Inner, layer && styles.InnerWithGlobe)}
        ref={innerRef}
      >
        {layer && (
          <motion.div
            className={styles.Globe}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0.7 }}
            ref={globeRef}
          >
            <Loader layer={layer} />
            <Globe layer={layer} isActive={inView} />
          </motion.div>
        )}
        <motion.div
          className={styles.Content}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0.5 }}
        >
          {title && <span className={styles.Title}>{title}</span>}
          <Content />
        </motion.div>
      </div>
    </article>
  )
}

const Loader = ({ layer }: { layer: ILayer }) => {
  return (
    <motion.div
      className={styles.Loader}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
        delay: 0.6,
      }}
    >
      <motion.span
        className={styles.LoaderGhost}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        style={{ backgroundImage: `url(${layer.loaderImage})` }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}
