import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="home" className="flex flex-col gap-4">
      <div className="card bg-base-100 card-lg shadow-sm">
        <div className="card-body">
          <h1 className="card-title font-display text-3xl">
            <Image
              src="/favicon-32x32.png"
              width={32}
              height={32}
              alt="Blast off!"
              priority
            />{" "}
            Mission Control
          </h1>
        </div>
      </div>
      <div className="card bg-base-100 card-lg shadow-sm">
        <div className="card-body">
          <h2 className="font-sans text-xl font-semibold">Miss a class?</h2>
          <p className="mb-8 max-w-prose font-sans text-lg/7">
            Mission Control has you covered with lecture videos as well as key
            links and more. Think of it as your course companion — open 24/7 and
            always in orbit.
          </p>
          <div className="card-actions justify-end">
            <Link
              href="/modules/web-fundamentals/week/3"
              className="btn btn-primary text-lg"
            >
              Videos
            </Link>
            <Link
              href="/helpful-links"
              className="btn btn-outline btn-primary text-lg"
            >
              Helpful Links
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
