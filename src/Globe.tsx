import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Group, SphereGeometry, TextureLoader } from "three"
import { useSpring } from "framer-motion"
import { motion } from "framer-motion-3d"
import { AdaptiveDpr, Preload, PresentationControls } from "@react-three/drei"
import { ReactNode, Suspense, useEffect, useRef } from "react"

import { ILayer } from "./app.types"
import styles from "./Globe.module.css"

export const Globe = ({
  layer,
  isActive,
}: {
  layer: ILayer
  isActive: boolean
}) => {
  return (
    <Canvas
      camera={{
        far: 100,
        fov: 75,
        near: 0.1,
        position: [0, 0, 1.5],
      }}
      className={styles.Globe}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight args={["rgb(255, 255, 255)", 8]} />

        <directionalLight
          args={["rgb(255, 255, 255)", 0.75]}
          position={[-10, 6.0, 0.0]}
        />
        <RotationManager
          initialRotation={layer.initialRotation}
          isActive={isActive}
        >
          <TextureLayer texture="./textures/ocean.webp" variant="ocean" />
          <TextureLayer texture="./textures/landmass.png" variant="landmass" />
          <TextureLayer texture={layer.texture} variant="data"/>
          <Equator />
        </RotationManager>

        <AdaptiveDpr />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

const RotationManager = ({
  children,
  initialRotation,
  isActive,
}: {
  children: ReactNode
  initialRotation: ILayer["initialRotation"]
  isActive: boolean
}) => {
  const rotationVelocity = useSpring(ROTATION_VELOCITY)
  const autoRotatingGroupRef = useRef<Group>(null)

  useEffect(() => {
    rotationVelocity.set(isActive ? ROTATION_VELOCITY : 0)
  }, [isActive, rotationVelocity])

  useFrame(() => {
    if (!autoRotatingGroupRef.current) return
    autoRotatingGroupRef.current.rotation.y += rotationVelocity.get()
  })

  return (
    <PresentationControls
      global
      polar={[-POLAR, POLAR]}
      speed={2}
      enabled={isActive}
      rotation={initialRotation}
    >
      <group ref={autoRotatingGroupRef}>{children}</group>
    </PresentationControls>
  )
}

const TRANSITION = {
  type: "spring",
  damping: 60,
  stiffness: 120,
}

const Equator = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.9, 0.002, 12, 80]} />
      <motion.meshStandardMaterial
        color="rgba(55, 55, 55)"
        transition={TRANSITION}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </mesh>
  )
}

const emissive = {
  ocean: "rgb(20, 20, 22)",
  landmass: "rgb(10, 10, 10)",
  data: "rgb(0, 0, 0)",
}

const specular = {
  ocean: "rgb(220, 220, 220)",
  landmass: "rgb(120, 120, 120)",
  data: "rgb(0, 0, 0)",
}

const shininess = {
  ocean: 6,
  landmass: 5,
  data: 10,
}

export const TextureLayer = ({
  texture,
  variant,
}: {
  variant: 'ocean' | 'landmass' | 'data'
  texture: string
}) => {
  const baseTexture = useLoader(TextureLoader, process.env.PUBLIC_URL + texture)

  return (
    <mesh geometry={globeGeometry}>
      <motion.meshPhongMaterial
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        color="rgb(200, 200, 200)"
        emissive={emissive[variant]}
        map={baseTexture}
        shininess={shininess[variant]}
        specular={specular[variant]}
        transition={TRANSITION}
      />
    </mesh>
  )
}

const POLAR = Math.PI / 3
const ROTATION_VELOCITY = 0.0017
const globeGeometry = new SphereGeometry(0.88, 64, 64)
