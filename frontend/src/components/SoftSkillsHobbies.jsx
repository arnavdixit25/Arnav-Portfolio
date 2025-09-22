import React, { useState } from "react";
import profile from "../data/profile";

export default function SoftSkillsHobbies() {
  const [showSoftSkills, setShowSoftSkills] = useState(true);

  return (
    <section id="extras" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {showSoftSkills ? "Soft Skills" : "Hobbies & Interests"}
      </h2>

      <div className="max-w-lg mx-auto text-center">
        <ul className="list-disc text-left pl-6">
          {showSoftSkills
            ? profile.softSkills.map((s, i) => <li key={i}>{s}</li>)
            : profile.hobbies.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <button
          onClick={() => setShowSoftSkills(!showSoftSkills)}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Show {showSoftSkills ? "Hobbies" : "Soft Skills"}
        </button>
      </div>
    </section>
  );
}
