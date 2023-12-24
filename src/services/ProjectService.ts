import { IProject } from "@/types";
import { client } from "@/utils/sanity";

export class ProjectService {
  static getProjects = async () => {
    const projects = await client.fetch<IProject[]>(
      `*[_type == "project"]{name, slug, _updatedAt, cover, displayNumber} | order(displayNumber)`
    );
    return projects;
  };

  static getProject = async (slug: string) => {
    const projects = await client.fetch<IProject[]>(
      `*[_type == "project" && slug.current == '${slug}']`
    );

    if (projects && projects[0]) {
      return projects[0];
    }

    return null;
  };
}
