export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ISkill {
  id: string;
  name: string;
  title: string;
  description: string;
}

export interface IClient {
  id: string;
  name: string;
  logo: string;
}
