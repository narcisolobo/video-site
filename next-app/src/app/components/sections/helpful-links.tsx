import { FaDiscord, FaGithubAlt } from "react-icons/fa";
import {
  HiAcademicCap,
  HiClock,
  HiExternalLink,
  HiVideoCamera,
} from "react-icons/hi";

function HelpfulLinksSection() {
  return (
    <section id="helpful-links" className="flex flex-col gap-4">
      <div className="card bg-base-100 card-lg shadow-sm">
        <div className="card-body">
          <h1 className="card-title font-display text-3xl">Helpful Links</h1>
        </div>
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row hover:bg-base-200 relative">
          <a
            href="https://wos.instructure.com/courses/458"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Go to WOS Can Code Canvas course"
          />
          <div className="flex items-center justify-center">
            <HiAcademicCap className="h-9 w-9" />
          </div>
          <section>
            <h2>WOS Can Code</h2>
            <p className="text-xs font-semibold uppercase opacity-60">
              Canvas course materials
            </p>
          </section>
          <button className="btn btn-square btn-ghost">
            <HiExternalLink className="h-6 w-6" />
          </button>
        </li>
        <li className="list-row hover:bg-base-200 relative">
          <a
            href="https://us02web.zoom.us/j/84399378864?pwd=eDrAqlOiq4SGFzLbGAmSXa7ZIkZgNb.1&jst=2"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Go to Zoom room"
          />
          <div className="flex items-center justify-center">
            <HiVideoCamera className="h-9 w-9" />
          </div>
          <section>
            <h2>Zoom</h2>
            <p className="text-xs font-semibold uppercase opacity-60">
              Class Zoom room
            </p>
          </section>
          <button className="btn btn-square btn-ghost">
            <HiExternalLink className="h-6 w-6" />
          </button>
        </li>
        <li className="list-row hover:bg-base-200 relative">
          <a
            href="https://us02web.zoom.us/j/81554892956?pwd=inhUfVnD0wtBjFutqPC2HFhKivObob.1"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Go to after hours Zoom room"
          />
          <div className="flex items-center justify-center">
            <HiClock className="h-9 w-9" />
          </div>
          <section>
            <h2>After Hours</h2>
            <p className="text-xs font-semibold uppercase opacity-60">
              After hours Zoom room
            </p>
          </section>
          <button className="btn btn-square btn-ghost">
            <HiExternalLink className="h-6 w-6" />
          </button>
        </li>
        <li className="list-row hover:bg-base-200 relative">
          <a
            href="https://github.com/Ciso-Codes/wos-can-code-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Go to class repository"
          />
          <div className="flex items-center justify-center">
            <FaGithubAlt className="h-9 w-9" />
          </div>
          <section>
            <h2>Repo</h2>
            <p className="text-xs font-semibold uppercase opacity-60">
              GitHub source code
            </p>
          </section>
          <button className="btn btn-square btn-ghost">
            <HiExternalLink className="h-6 w-6" />
          </button>
        </li>
        <li className="list-row hover:bg-base-200 relative">
          <a
            href="https://discord.gg/m3v9twEK"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Go to class Discord server"
          />
          <div className="flex items-center justify-center">
            <FaDiscord className="h-9 w-9" />
          </div>
          <section>
            <h2>Discord</h2>
            <p className="text-xs font-semibold uppercase opacity-60">
              Discussions and chat
            </p>
          </section>
          <button className="btn btn-square btn-ghost">
            <HiExternalLink className="h-6 w-6" />
          </button>
        </li>
      </ul>
    </section>
  );
}

export default HelpfulLinksSection;
