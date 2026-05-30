import { GitBranch } from "lucide-react";
import type { Project } from "../../types/site.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_8px_40px_rgba(2,6,23,0.45)] sm:p-7">
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-900/70">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} demo`}
            loading="lazy"
            decoding="async"
            className="h-56 w-full bg-slate-950 object-contain object-center sm:h-64"
          />
        ) : (
          <div className="flex h-56 w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_50%)] sm:h-64">
            <GitBranch className="h-12 w-12 text-cyan-300/75" />
          </div>
        )}

        <div className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-slate-950/75 backdrop-blur">
          <GitBranch className="h-4 w-4 text-cyan-200" />
        </div>
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
