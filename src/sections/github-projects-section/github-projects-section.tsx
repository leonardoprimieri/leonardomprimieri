import { BlurFade } from "~/components/magicui/blur-fade";
import { Marquee } from "~/components/magicui/marquee";
import { SectionTitle } from "~/components/section-title/section-title";
import { BLUR_FADE_BASE_DELAY } from "~/constants/blur-fade-base-delay.const";
import { cn } from "~/lib/utils";

type GetGithubProjectsResponse = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}[];

async function fetchGithubPinnedProjects() {
  const response = await fetch(
    "https://api.github.com/users/leonardoprimieri/repos"
  );
  return (await response.json()) as GetGithubProjectsResponse;
}

const RepoCard = ({
  name,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export async function GithubProjectsSection() {
  const githubProjects = await fetchGithubPinnedProjects();
  const onlyStarredRepos = githubProjects.filter(
    (project) => project.stargazers_count > 0
  );

  return (
    <BlurFade delay={BLUR_FADE_BASE_DELAY * 6}>
      <section>
        <SectionTitle>Github Projects I&apos;m proud of</SectionTitle>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {onlyStarredRepos.map((project) => (
              <RepoCard
                key={project.id}
                body={project.description}
                img={project.owner.avatar_url}
                name={project.name}
                username={project.owner.login}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </section>
    </BlurFade>
  );
}
