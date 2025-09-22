import profile from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {profile.skills.map((s, i) => (
          <li key={i} className="bg-white p-3 rounded shadow text-center">{s}</li>
        ))}
      </ul>
    </section>
  );
}
