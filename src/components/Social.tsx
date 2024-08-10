import { FaGithub, FaEnvelope } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex mt-6 gap-6 text-xl">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/smetzdev/smetzdev"
      >
        <span className="sr-only">Go to Sascha's GitHub profile</span>
        <FaGithub />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:hello@smetz.dev?subject=I really think you are one hell of a developer!"
      >
        <span className="sr-only">Write an email to Sascha</span>
        <FaEnvelope />
      </a>
    </div>
  );
};
