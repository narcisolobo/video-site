import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="px-2 md:container md:mx-auto">
        <div className="footer sm:footer-horizontal">
          <aside>
            <Link href="/">
              <Image
                src="/apple-touch-icon.png"
                width={120}
                height={120}
                alt="Mission Control"
                className="shadow"
              />
            </Link>
            <p>
              WOS Can Code: Mission Control
              <br />
              Built by Narciso Lobo of Ciso Codes
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Videos</h6>
            <Link
              href="/modules/programming-fundamentals/week/1"
              className="link link-hover"
            >
              Programming Fundamentals
            </Link>
            <Link
              href="/modules/web-fundamentals/week/2"
              className="link link-hover"
            >
              Web Fundamentals
            </Link>
            <Link
              href="/modules/sql-fundamentals/week/4"
              className="link link-hover"
            >
              SQL Fundamentals
            </Link>
            <Link
              href="/modules/intro-to-react/week/5"
              className="link link-hover"
            >
              Intro to React
            </Link>
            <Link
              href="/modules/.net-web-development/week/7"
              className="link link-hover"
            >
              .NET Web Development
            </Link>
            <Link
              href="/modules/intro-to-data-engineering/week/13"
              className="link link-hover"
            >
              Intro to Data Engineering
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <Link href="/helpful-links" className="link link-hover">
              Helpful Links
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
