import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
      
      <div className="max-w-lg mx-auto text-center bg-gray-50 p-6 rounded-lg shadow">
        <p className="text-lg font-medium">📞 {profile.contact.phone}</p>
        <p className="text-lg font-medium">✉️ {profile.contact.email}</p>
        
        <div className="mt-4 space-y-2">
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            🔗 LinkedIn
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            💻 GitHub
          </a>
        </div>

        <p className="mt-6 text-gray-600 italic">
          💬 Use the floating chat button (bottom-right) to send me a direct message.
        </p>
      </div>
    </section>
  );
}
