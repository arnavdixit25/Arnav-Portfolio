import profile from "../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc pl-6">
        {profile.certifications.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </section>
  );
}
