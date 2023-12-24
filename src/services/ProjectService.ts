import { IProject } from "@/types";
import { client } from "@/utils/sanity";

export class ProjectService {
  static getProjects = async () => {
    const projects = await client.fetch<IProject[]>(
      `*[_type == "project"]{name, slug, _updatedAt, cover, displayNumber} | order(displayNumber)`
    );
    return projects;
  };
}
