import {
  carers,
  caterthumb,
  taadhod,
  azure,
  neo4j,
  udemy,
  kubicle,
  neom,
  tamm,
  sta,
  quds,
  janah,
} from "../assets";
import ProjectCard from "../components/ProjectCard";
import {
  AiFillGithubLazy,
  AiOutlineMailLazy,
  AiFillLinkedinLazy,
} from "./icons";

export const socials = [
  {
    link: "https://www.linkedin.com/in/smadixd/",
    icon: (props) => <AiFillLinkedinLazy size={23} {...props} />,
    text: "Linkedin",
  },
  {
    link: "https://github.com/smadixd",
    icon: (props) => <AiFillGithubLazy size={23} {...props} />,
    text: "Github",
  },
  {
    link: "mailto:smadi.dev@gmail.com",
    icon: (props) => <AiOutlineMailLazy size={23} {...props} />,
    text: "E-Mail",
  },
];

export const duplicateCertificates = (certificates, copies) => {
  const fullCopies = Math.floor(copies);
  const partialCopyCount = Math.floor(
    (copies - fullCopies) * certificates.length
  );
  let result = [];

  // Add full copies
  for (let i = 0; i < fullCopies; i++) {
    result = result.concat(certificates);
  }

  // Add partial copy
  result = result.concat(certificates.slice(0, partialCopyCount));

  return result;
};

export const originalCertificates = [
  {
    name: "Principles of Generative AI",
    image: kubicle,
    link: "https://app.kubicle.com/certificates/1351698?token=Ebf35tPDDvdSHP3LTFE8xsq6",
  },
  {
    name: "The Complete Guide to Advanced React Component Patterns",
    image: udemy,
    link: "https://www.udemy.com/certificate/UC-230ad6fd-eeab-4b28-87ca-7bdfadd7d8d2/",
  },
  {
    name: "Cypher Fundamentals",
    image: neo4j,
    link: "https://graphacademy.neo4j.com/c/97778f33-e8b3-4134-b210-77d350ac7f9c/",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    image: azure,
    link: "https://www.credly.com/badges/d955a26a-63a0-4af7-9a5c-9785d8a5ce1e/public_url",
  },
  {
    name: "Applying Visual Data Skills in Visualization Fundamentals",
    image: kubicle,
    link: "",
  },
  {
    name: "Building Neo4j Applications with TypeScript",
    image: neo4j,
    link: "https://graphacademy.neo4j.com/c/9ce1fc4d-9cc0-4eb6-a6b4-db71799b7ad8/",
  },
  {
    name: "The Complete SQL Bootcamp 2022: Go from Zero to Hero",
    image: udemy,
    link: "https://www.udemy.com/certificate/UC-5c3b95d5-dbd2-4619-8c66-dc7ea5474e10/",
  },
  {
    name: "Visual Data Thinking in Visualization Fundamentals",
    image: kubicle,
    link: "",
  },
  {
    name: "Neo4j Fundamentals",
    image: neo4j,
    link: "https://graphacademy.neo4j.com/c/c26a1ddf-2570-49d5-bf0f-2e1a7e4c1096/",
  },
];

// export const certificates = duplicateCertificates(origindalCertificates, 3.34);
export const certificates = originalCertificates;

export const projects = [
  {
    key: "1",
    content: (
      <ProjectCard
        imagen={neom}
        link="https://www.neom.com"
        title="Neom (OXAGON)"
        description="A city in neom, oxagon will be a new paradigm where people, industries and technology come together in harmony with nature."
      />
    ),
  },
  {
    key: "2",
    content: (
      <ProjectCard
        imagen={tamm}
        link="https://www.tamm.abudhabi/"
        title="Tamm"
        description="A unified system helping you find Abu Dhabi government services and information"
      />
    ),
  },
  {
    key: "4",
    content: (
      <ProjectCard
        imagen={quds}
        link="https://qudspaints.com/"
        android={
          "https://play.google.com/store/apps/details?id=com.qudspaints.application"
        }
        ios={"https://apps.apple.com/jo/app/quds-paints/id1586441008"}
        title="Quds Paints"
        description="Quds Paints, established in 1993 in Jordan, started small but has become a key player in the paint industry. They focus on quality, eco-friendly products at fair prices, aiming for customer satisfaction and environmental responsibility."
      />
    ),
  },
  {
    key: "5",
    content: (
      <ProjectCard
        imagen={janah}
        link="https://janahalaman.com/"
        android={
          "https://play.google.com/store/apps/details?id=com.janahalaman"
        }
        ios={"https://apps.apple.com/vn/app/janahalaman/id6473704324"}
        title="Janah Al Aman"
        description="A revolutionizing transportation solution in Riyadh, focusing on wheelchair accessibility and family-friendly travel."
      />
    ),
  },
  {
    key: "6",
    content: (
      <ProjectCard
        imagen={carers}
        link="https://carers.care/"
        title="Carers"
        android={
          "https://play.google.com/store/apps/details?id=com.kensoftware.carers&hl=en&gl=US"
        }
        ios={"https://apps.apple.com/jo/app/carers/id1271137642"}
        description="Carers is a Home Care Digital Solution that provides reliable, affordable, and secure home care experiences for Care Receivers, Home Care Agencies, and Care Providers."
      />
    ),
  },
  {
    key: "7",
    content: (
      <ProjectCard
        imagen={taadhod}
        link="https://altaadhod.com/"
        android={
          "https://play.google.com/store/apps/details?id=com.altaadhodgroup.app&hl=en&gl=US"
        }
        ios={
          "https://apps.apple.com/qa/app/al-taadhod-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D8%B6%D8%AF/id1486671642"
        }
        title="Al-Ta'adhod"
        description="Al-Taadhod Mobile application offers you a new experience to buy Gree air conditioner at the best prices in Qatar."
      />
    ),
  },
  {
    key: "8",
    content: (
      <ProjectCard
        imagen={caterthumb}
        link="https://caterthumb.com"
        title="CaterThumb"
        android="https://play.google.com/store/apps/details?id=com.caterthump"
        ios="https://apps.apple.com/us/app/caterthumb/id1668372746"
        description="Cater Thumb is the first end-to-end online SAAS E-procurement solution."
      />
    ),
  },
  {
    key: "3",
    content: (
      <ProjectCard
        imagen={sta}
        link="https://www.sta.gov.sa"
        title="Saudi Tourism Authority"
        description="STA was established to support the growth of the travel and tourism sector by serving the needs of tourism companies and other commercial partners."
      />
    ),
  },
];

export const sections = ["about", "projects", "contact"];

export const games = ["League of Legends", "Counter Strike 2", "Rust"];

export const contributions = [
  {
    name: "Lichess",
    link: "https://github.com/lichess-org/lila",
    repo: "lichess-org/lila",
  },
  {
    name: "Eslint",
    link: "https://github.com/eslint/eslint.org",
    repo: "eslint/eslint.org",
  },
  {
    name: "Yail",
    link: "https://github.com/programmer-network/yail",
    repo: "programmer-network/yail",
  },
];

export const experiences = [
  {
    name: "PriceWaterhouseCoopers (PwC)",
    link: "https://www.pwc.com",
    role: "Senior Software Engineer",
    start: "2021-08-01",
    end: null,
  },
  {
    name: "Kensoftware",
    link: "https://www.kensoftware.com",
    role: "Software Engineer",
    start: "2020-08-01",
    end: "2021-08-01",
  },
];
