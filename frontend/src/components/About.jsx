import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">{profile.intro}</p>
    </section>
  );
}
