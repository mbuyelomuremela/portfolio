import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-1 w-full px-6 py-4 md:max-w-[1100px] mx-auto mt-15"
    >
      <h2 className="text-center">You Can Contact Me On:</h2>
      <div className="flex flex-col gap-1 md:flex-row md:justify-center md:max-w-[90%] overflow-hidden px-2 py-1 mx-auto mt-5 flex-wrap">
        <div className="flex flex-col gap-1 justify-center items-center flex-wrap m-6">
          <FaWhatsapp />
          <a href="https://wa.me/+27721816840">WhatsApp </a>
          <p>{"(+27721816840)"}</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center flex-wrap m-6">
          <FaEnvelope />
          <a href="mailto:mbuyelomuremela05@gmail.com">Send me an email</a>
          <p>{"(mbuyelomuremela05@gmail.com)"}</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center flex-wrap m-6">
          <FaPhone />
          <a href="tel:+27721816840">Call me on </a>
          <p>{"(+27721816840)"}</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
