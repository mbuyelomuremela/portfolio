import { Link } from "react-router-dom";
import profile from "@/assets/images/profile.jpg";
import myCV from "@/assets/documents/Mbuyelo_Muremela_CV.pdf";
import {
  FaBriefcase,
  FaCode,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaUser,
} from "react-icons/fa6";

function Hero() {
  return (
    <div className="w-full px-6 py-4 md:max-w-[1100px] mx-auto flex flex-col gap-1 items-center md:flex-row md:justify-betwwen">
      <div className="w-[300px] h-[300px] overflow-hidden rounded-full">
        <img
          src={profile}
          alt="mbuyelo muremela profile picture"
          className="object-fit"
        />
      </div>
      <div className="flex flex-col gap-1 px-6 py-4">
        <h1 className="text-center text-xl md:text-lg">
          Hi, i'm <span className="font-bold">Mbuyelo Muremela</span>
        </h1>
        <div className="flex flex-col gap-1 items-center md:flex-row md:justify-center flex-wrap">
          <p>Junior Front-End Developer</p>
          <p>Junior Back-End Developer</p>
          <p>Junior Full-Stack Developer</p>
          <p>Junior Data Analyst</p>
        </div>
        <div className="grid grid-cols-2 gap-1 justify-items-center md:grid-cols-4 px-6 py-4 mt-6">
          <div className="flex flex-col gap-1 items-center m-6">
            <FaUser />
            <a href="#about">About me</a>
          </div>
          <div className="flex flex-col gap-1 items-center m-6">
            <FaCode />
            <a href="#skills">Skills</a>
          </div>
          <div className="flex flex-col gap-1 items-center m-6">
            <FaBriefcase />
            <a href="#projects">See my work</a>
          </div>
          <div className="flex flex-col gap-1 items-center m-6">
            <FaPhone />
            <a href="#contact">Contact me</a>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center md:flex-row md:justify-center px-4 py-6 mt-6">
          <div className="flex flex-col gap-1 items-center m-6">
            <FaLinkedin />
            <Link to={"https://www.linkedin.com/in/mbuyelo-muremela/"}>
              Linkedin
            </Link>
          </div>
          <div className="flex flex-col gap-1 items-center m-6">
            <FaGithub />
            <Link to={"https://github.com/mbuyelomuremela/"}>GitHub</Link>
          </div>
          <div className="flex flex-col gap-1 items-center m-6 ">
            <FaDownload />
            <a
              href={myCV}
              download
              className="border rounded-full px-2 py-1 text-center transparent"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
