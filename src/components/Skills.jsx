import SkillsCard from "@/components/SkillsCard";

function Skills({ skills }) {
  return (
    <div
      id="skills"
      className="flex flex-col gap-1 w-full px-6 py-4 md:max-w-[1100px] mx-auto my-15"
    >
      <h2 className="text-center">My Skills</h2>
      <p className="text-center">Technologies and Tools</p>
      <div className="grid md:grid-cols-2 gap-1 justify-items-center mt-4">
        {skills.map((skill) => (
          <SkillsCard skillData={skill} />
        ))}
      </div>
    </div>
  );
}
export default Skills;
