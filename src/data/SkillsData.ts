export interface DataItem {
  name: string;
  url: string;
  animation: number;
  is_special?: boolean;
}

const Data: DataItem[] = [
  {
    name: "React js",
    url: "React.webp",
    animation: 2,
    is_special: true,
  },
  {
    name: "Next js",
    animation: 1,
    url: "Next.png",
  },
  {
    name: "JavaScript",
    animation: 1,
    url: "Js.png",
  },
  {
    name: "TypeScript",
    animation: 1,
    url: "TypeScript.png",
  },
  {
    name: "GSAP",
    animation: 1,
    url: "Gsap.png",
  },
  {
    name: "Framer Motion",
    animation: 1,
    url: "FramerMotions.png",
  },
  {
    name: "Styled Components",
    animation: 1,
    url: "StyledComponents.png",
  },
  {
    name: "Photoshop",
    animation: 1,
    url: "Photoshop.png",
    is_special: true,
  },
  {
    name: "Three js",
    animation: 2,
    url: "ThreeJs.png",
  },
  {
    name: "Material UI",
    animation: 1,
    url: "MaterialUI.png",
  },
  {
    name: "React Query",
    animation: 2,
    url: "ReactQuery.png",
  },
  {
    name: "Redux",
    animation: 2,
    url: "Redux.png",
  },
  {
    name: "Web3.js",
    animation: 1,
    url: "Web3Js.png",
  },
  {
    name : "Node Js",
    animation: 1,
    url: "NodeJs.png",
  },
  {
    name: "Spring Boot",
    animation: 2,
    url: "SpringBoot.png",
  }
];

export default Data;
