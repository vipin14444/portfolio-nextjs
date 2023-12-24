import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ISocialLink {
  title: string;
  icon: any;
  link: string;
  color: string;
}

export interface ISkill {
  title: string;
  icon: any;
  color: string;
  animation: string;
}

export interface IProject {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
  category?: string;
  cover?: SanityImageSource;
  description?: any;
  gallery?: SanityImageArrayModel[];
  name?: string;
  role?: string;
  slug?: SanitySlugModel;
  displayNumber?: number;
}

interface SanityImageModel {
  _type?: string;
  asset?: Asset;
}

interface Asset {
  _ref?: string;
  _type?: string;
}

interface SanityImageArrayModel extends SanityImageModel {
  _key?: string;
  alt?: string;
}

interface SanitySlugModel {
  _type?: string;
  current?: string;
}
