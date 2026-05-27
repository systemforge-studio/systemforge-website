import { GitBranch } from "lucide-react";
import type { Project } from "../../types/site.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glow-hover rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
      <GitBranch className="mb-5 h-8 w-8 text-cyan-400" />
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}