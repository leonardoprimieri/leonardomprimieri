import { BlurFade } from "~/components/magicui/blur-fade";
import { Marquee } from "~/components/magicui/marquee";
import { SectionTitle } from "~/components/section-title/section-title";
import { getGithubPinnedProjects } from "./services/get-github-pinned-projects-service";
import { RepoCard } from "./components/repo-card/repo-card";
import { unstable_cache } from "next/cache";
import { getDictionary } from "~/helpers/get-dictionaries";

export async function GithubProjectsSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["github"];
}) {
  const githubProjects = unstable_cache(
    async () => {
      const githubProjects = await getGithubPinnedProjects();
      const onlyStarredRepos = githubProjects.filter(
        (project) => project.stargazers_count > 0
      );
      return onlyStarredRepos;
    },
    ["githubProjects"],
    {
      revalidate: 60 * 60 * 24, // 24 hours,
    }
  );

  const repos = await githubProjects();

  const firstRow = repos.slice(0, Math.ceil(repos.length / 2));
  const secondRow = repos.slice(Math.ceil(repos.length / 2), repos.length);

  return (
    <BlurFade inView>
      <section>
        <SectionTitle>{dictionary.title}</SectionTitle>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((project) => (
              <RepoCard
                key={project.id}
                body={project.description}
                name={project.name}
                html_url={project.html_url}
              />
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:25s]">
            {secondRow.map((project) => (
              <RepoCard
                key={project.id}
                body={project.description}
                name={project.name}
                html_url={project.html_url}
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
