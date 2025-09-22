import profile from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      {profile.projects.map((p, i) => (
        <div key={i} className="mb-4 p-4 bg-white shadow rounded">
          <h3 className="font-bold text-lg">
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              {p.title}
            </a>
          </h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
