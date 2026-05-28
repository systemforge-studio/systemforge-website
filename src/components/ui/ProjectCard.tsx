import { GitBranch } from "lucide-react";
import type { Project } from "../../types/site.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.45)] sm:p-7">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 sm:h-12 sm:w-12">
        <GitBranch className="h-5 w-5 text-cyan-200 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
