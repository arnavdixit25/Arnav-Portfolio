import profile from "../data/profile";

export default function Internship() {
  return (
    <section id="internship" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Internship</h2>
      <div className="p-4 bg-gray-100 rounded">
        <h3 className="font-bold">{profile.internship.role}</h3>
        <p>{profile.internship.company}</p>
        <p>{profile.internship.desc}</p>
      </div>
    </section>
  );
}
