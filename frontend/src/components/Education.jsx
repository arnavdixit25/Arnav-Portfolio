import profile from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {profile.education.map((edu, i) => (
        <div key={i} className="mb-3">
          <h3 className="font-bold">{edu.degree}</h3>
          <p>{edu.institute} ({edu.year})</p>
        </div>
      ))}
    </section>
  );
}
