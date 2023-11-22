import { IChapter } from "./app.types"

export const chapters = [
  {
    layer: {
      name: "population",
      texture: "./textures/population.png",
      loaderImage: "./textures/population.low-res.webp",
      initialRotation: [
        0.348407346410207, 2.3517274095241927, 0.038407346410207,
      ],
    },
    title: "Population",
    id: "population",
    Content: () => (
      <>
        <h2>The Crowded North</h2>
        <p>
          A world divided. In the Northern hemisphere, home to a staggering{" "}
          <strong>90% of the world's population</strong>, the legacy of
          industrial progress marks every corner.
        </p>
        <p> Here, the air is thick with the outcomes of human advancement.</p>
      </>
    ),
  },
  {
    layer: {
      name: "tree-cover-2010",
      texture: "./textures/tree-cover.png",
      loaderImage: "./textures/tree-cover.low-res.webp",
      initialRotation: [
        -0.151592653589793, -2.40159265358979, 0.018407346410207,
      ],
    },
    id: "tree-cover-2010",
    title: "Tree cover",
    Content: () => (
      <>
        <h2>Forests of the South</h2>
        <p>
          Contrast this with the Southern hemisphere, home to just 10% of
          humanity.
        </p>
        <p>
          This quieter half of our planet cradles{" "}
          <strong>the majority of the world's ancient forests</strong>, serving
          as the Earth's vital lungs and a bastion against climate change.
        </p>
      </>
    ),
  },
  {
    layer: {
      name: "carbon",
      texture: "./textures/carbon.png",
      loaderImage: "./textures/carbon.low-res.webp",
      initialRotation: [-0, 2.76840734641021, 0],
    },
    title: "Carbon stored",
    id: "carbon",
    Content: () => (
      <>
        <h2>Carbon Guardians</h2>
        <p>
          These forests are more than just trees; they are immense carbon
          reservoirs.
        </p>
        <p>
          Their roots, trunks, and leaves silently <a href="https://restor.eco/?dataLayer=FOREST_CARBON_POTENTIAL" target="_blank" rel="noreferrer noopener">combat the climate crisis</a> by
          storing carbon that would otherwise warm our planet.
        </p>
      </>
    ),
  },
  {
    layer: {
      name: "odiac-2022",
      texture: "./textures/pollution.png",
      loaderImage: "./textures/pollution.low-res.webp",
      initialRotation: [0.258407346410207, 2.29840734641021, 0.4],
    },
    id: "odiac-2022",
    title: "Pollution",
    Content: () => (
      <>
        <h2>The Northern Shadow</h2>
        <p>
          The disparity is stark and thought-provoking. The burden of climate
          change, a shadow cast largely by the North, falls unevenly on the
          South.
        </p>
        <p>
          Our collective treasure, these forests, stands threatened on the
          frontlines of a global crisis.
        </p>
      </>
    ),
  },
  {
    id: "call-for-unity",
    Content: () => (
      <>
        <h2>A Call for Unity</h2>
        <p>
          Is it fair for the South to bear the costs of protection alone? Should
          the North, as the principal architects of pollution, step up to share
          this critical responsibility?
        </p>
        <p>
          This is a question of survival, of justice – a call for a unified
          effort to protect these guardians of our globe
        </p>
      </>
    ),
  },
] as IChapter[]
