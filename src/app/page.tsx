import { ProjectLink, Skill, SocialLink } from "@/components";
import { IProject, ISkill, ISocialLink } from "@/types";
import { client } from "@/utils/sanity";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiAndroid,
  SiDotnet,
  SiJavascript,
  SiJetpackcompose,
  SiJquery,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

async function getProjects(): Promise<IProject[]> {
  const projects = await client.fetch<IProject[]>(
    `*[_type == "project"] | order(_updatedAt)`
  );
  return projects;
}

export default async function Home() {
  const socialLinks: ISocialLink[] = [
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vipin14444/",
      color: "#0A66C2",
    },
    {
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/vipin14444",
      color: "#F05033",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/vipin14444",
      color: "#0474E8",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/vipin14444/",
      color: "#E62665",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter />,
      link: "https://twitter.com/webhisoka",
      color: "#29C5F6",
    },
  ];

  const skills: ISkill[] = [
    {
      title: "HTML",
      icon: <FaHtml5 />,
      color: "#F1652A",
      animation: "",
    },
    {
      title: "CSS",
      icon: <FaCss3 />,
      color: "#3B9CD7",
      animation: "",
    },
    {
      title: "SCSS",
      icon: <FaSass />,
      color: "#CF649A",
      animation: "sea-saw",
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#38BDF9",
      animation: "",
    },
    {
      title: "Javascript",
      icon: <SiJavascript />,
      color: "#EFDB50",
      animation: "",
    },
    {
      title: "Typescript",
      icon: <SiTypescript />,
      color: "#2F74C0",
      animation: "",
    },
    {
      title: "Jquery",
      icon: <SiJquery />,
      color: "#6BA0AB",
      animation: "scale-top-right",
    },
    {
      title: "React JS",
      icon: <FaReact />,
      color: "#61DAFB",
      animation: "rotate",
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs />,
      color: "white",
      animation: "",
    },
    {
      title: "Svelte",
      icon: <SiSvelte />,
      color: "#FF3E00",
      animation: "",
    },
    {
      title: "Node JS",
      icon: <FaNodeJs />,
      color: "#8CC84B",
      animation: "",
    },
    {
      title: "Dotnet Core",
      icon: <SiDotnet />,
      color: "#621EE5",
      animation: "",
    },
    {
      title: "SQL Server",
      icon: <SiMicrosoftsqlserver />,
      color: "#FFA500",
      animation: "",
    },
    {
      title: "MongoDb",
      icon: <SiMongodb />,
      color: "#6DAC48",
      animation: "left-right",
    },
    {
      title: "AWS",
      icon: <FaAws />,
      color: "#F79400",
      animation: "",
    },
    {
      title: "Android",
      icon: <SiAndroid />,
      color: "#00DE7A",
      animation: "",
    },
    {
      title: "Jetpack Compose",
      icon: <SiJetpackcompose />,
      color: "#4081EC",
      animation: "",
    },
    {
      title: "React Native",
      icon: <FaReact />,
      color: "#61DAFB",
      animation: "",
    },
  ];

  const projects = await getProjects();

  return (
    <Fragment>
      <Head>
        <title>Vipin Sharma - Web Developer</title>
        <meta
          name="description"
          content="I'm Vipin Sharma, from Gurgaon, Haryana, India 🇮🇳. I am currently working as a web developer and freelancer (also looking for interesting job offers)."
        />
        <meta />
        <meta
          name="og_url"
          property="og:url"
          content={"https://www.vipinsharma.me"}
        />
        <meta property="og:image" content={"/images/me.webp"} />
      </Head>
      <main className="max-w-5xl mx-auto w-full">
        <section className="px-4 flex flex-col gap-8 md:flex-row mt-12 md:mt-6">
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-5xl font-semibold mb-4">{`Hey there!`}</h1>
            <p>
              {`I'm Vipin Sharma, from Gurgaon, Haryana, India 🇮🇳. I am currently working as a web developer and freelancer (also looking for interesting job offers).`}
            </p>

            <div className="flex flex-wrap md:flex-col mt-8 gap-4">
              {socialLinks.map((item) => (
                <SocialLink socialLink={item} key={item.title} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-clip shrink-0 aspect-[1/1.28375] relative flex-1">
            <Image src={"/images/me.webp"} alt="me" layout="fill" />
          </div>
        </section>

        <div id="skills" className="mb-32" />

        <section className="px-4">
          <h2 className="text-5xl font-semibold mb-6">{`Skills`}</h2>
          <div className="flex flex-wrap gap-x-12">
            {skills.map((item) => (
              <Skill skill={item} key={item.title} />
            ))}
          </div>
        </section>

        <div id="work" className="mb-32" />

        <section id="work" className="px-4 mb-16 md:mb-32">
          <h2 className="text-5xl font-semibold mb-6">{`It ain't much, but it's honest work`}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <ProjectLink project={item} key={item._id} />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
