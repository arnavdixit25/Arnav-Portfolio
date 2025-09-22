import profile from "../data/profile";

export default function Hero() {
  return (
    <section className="text-center py-10 bg-gray-50">
      <img
        src={profile.photo}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
      />
      <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
      <p className="mt-2 text-gray-600">
        Full-Stack Developer | AI & ML Enthusiast | Building innovative software solutions.
      </p>
    </section>
  );
}
