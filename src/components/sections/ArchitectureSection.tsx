export function ArchitectureSection() {
  const items = [
    "Microservices",
    "API Gateway",
    "JWT Authentication",
    "RBAC Authorization",
    "PostgreSQL",
    "Cloud Deployment",
    "Docker",
    "CI/CD",
    "Scalable Architecture",
    "Secure Backend Systems",
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Architecture
          </p>

          <h2 className="text-5xl font-black text-white">
            Enterprise engineering foundations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            SystemForge Studio builds scalable systems using modern backend
            architecture, secure APIs, cloud-ready infrastructure, and
            maintainable engineering practices.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item}
              className="glow-hover rounded-2xl border border-cyan-400/10 bg-slate-900/70 p-5 text-center text-sm font-semibold text-cyan-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}