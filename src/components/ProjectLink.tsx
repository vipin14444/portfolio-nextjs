import { IProject } from "@/types";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

type ProjectLinkProps = {
  project: IProject;
};

const ProjectLink: FC<ProjectLinkProps> = ({ project }) => {
  const { cover, slug, name } = project;
  return (
    <Link className="group" href={`/project/${slug?.current}`}>
      <div className="relative aspect-square w-full overflow-hidden transition-all duration-500 rounded-xl group-hover:scale-95">
        <Image src={urlFor(cover).url()} alt="cover" layout="fill" className="group-hover:scale-125 transition-all duration-500"/>
      </div>
      <div className="flex mt-2 items-center justify-between gap-2">
        <div className="text-lg font-bold">{name}</div>
        <div className="flex items-center justify-center shrink-0">
          <FaArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default ProjectLink;
