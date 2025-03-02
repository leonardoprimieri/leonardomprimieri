import { BlurFade } from "~/components/magicui/blur-fade";
import { Marquee } from "~/components/magicui/marquee";
import { SectionTitle } from "~/components/section-title/section-title";
import { BLUR_FADE_BASE_DELAY } from "~/constants/blur-fade-base-delay.const";
import { getGithubPinnedProjects } from "./service/get-github-pinned-projects-service";
import { RepoCard } from "./components/repo-card/repo-card";

export async function GithubProjectsSection() {
  const githubProjects = await getGithubPinnedProjects();
  const onlyStarredRepos = githubProjects.filter(
    (project) => project.stargazers_count > 0
  );

  const firstRow = onlyStarredRepos.slice(0, 3);
  const secondRow = onlyStarredRepos.slice(3, 6);

  return (
    <BlurFade delay={BLUR_FADE_BASE_DELAY * 6}>
      <section>
        <SectionTitle>Github Projects I&apos;m proud of</SectionTitle>
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

          <Marquee pauseOnHover className="[--duration:20s]">
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
