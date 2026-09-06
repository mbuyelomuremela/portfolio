function SkillsCard({ skillData }) {
  return (
    <div className="flex flex-col gap-1 items-center w-[300px] h-fit overflow-y-hidden px-2 py-1 border rounded-lg">
      <h3 className="text-center mb-1">{skillData.title}</h3>
      <ul className="flex flex-col gap-1 items-center">
        {skillData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCard;
