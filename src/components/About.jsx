function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-1 px-6 py-4 w-full md:max-w-[1100px] mx-auto my-15 flex-wrap overflow-hidden border-t"
    >
      <h2 className="text-center">About me</h2>
      <p className="flex-grow text-center">
        I'm an Informatics graduate currently completing a BSc Honours in
        Computing at the University of South Africa (UNISA). <br />
        I'm interested in building practical software solutions and using data
        to generate meaningful insights. <br />
        My interests span backend development, frontend development, databases,
        and data analytics. <br />I enjoy working across the application stack —
        from designing APIs and database structures to building user interfaces
        and working with data.
      </p>
    </div>
  );
}
export default About;
