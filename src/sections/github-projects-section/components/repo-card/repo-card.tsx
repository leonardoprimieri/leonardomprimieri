import { cn } from "~/lib/utils";

export const RepoCard = (props: {
  html_url: string;
  name: string;
  body: string;
}) => {
  return (
    <a href={props.html_url} target="_blank" rel="noreferrer">
      <figure
        className={cn(
          "relative h-full w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {props.name}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{props.body}</blockquote>
      </figure>
    </a>
  );
};
