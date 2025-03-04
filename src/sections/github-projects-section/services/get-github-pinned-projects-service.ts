type GetGithubProjectsResponse = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}[];

export async function getGithubPinnedProjects() {
  const response = await fetch(
    "https://api.github.com/users/leonardoprimieri/repos"
  );
  return (await response.json()) as GetGithubProjectsResponse;
}
