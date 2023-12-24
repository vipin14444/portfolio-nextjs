/* eslint-disable @next/next/no-img-element */
import { IProject } from "@/types";
import { blocksToText, client, urlFor } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Fragment } from "react";
import type { Metadata, ResolvingMetadata } from "next";

async function getProject(id: string): Promise<IProject | undefined | null> {
  const projects = await client.fetch<IProject[]>(
    `*[_type == "project" && slug.current == '${id}']`
  );

  if (projects && projects[0]) {
    return projects[0];
  }

  return null;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProject(params.slug);

  return {
    title: project?.name,
    description: blocksToText(project?.description),
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/project/${project?.slug}`,
      images: [urlFor(project?.cover).url()],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const project = await getProject(params.slug);
  console.log(project);

  return (
    <Fragment>
      <main className="max-w-5xl mx-auto w-full flex flex-col items-center pb-16 pt-8">
        <section className="px-4 max-w-[672px] flex flex-col items-center w-full">
          <h1 className="text-5xl font-semibold mb-4 text-center">
            {project?.name}
          </h1>
          <div className="relative aspect-square w-full rounded-xl overflow-hidden">
            <Image
              src={urlFor(project?.cover).url()}
              alt="project_cover"
              width={672}
              height={672}
            />
          </div>

          <div className="flex justify-between mt-4 gap-4 w-full">
            <div>
              <div className="key font-light text-xs">Project Type</div>
              <div className="value font-bold">{project?.category}</div>
            </div>
            <div>
              <div className="key font-light text-xs">Role</div>
              <div className="value font-bold">{project?.role}</div>
            </div>
          </div>

          <div className="mt-8">
            <PortableText value={project?.description} />
          </div>
        </section>

        {project?.gallery && project.gallery.length > 0 ? (
          <section className="mt-16 px-4">
            <h2 className={`text-center text-5xl font-semibold mb-6`}>
              Gallery
            </h2>
            <ul className="flex flex-col gap-8">
              {project.gallery.map(({ _key, asset }) => (
                <li key={_key}>
                  <img
                    className="rounded-xl"
                    src={urlFor(asset).url()}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </Fragment>
  );
}
