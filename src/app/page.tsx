export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="p-8">
        <h2 className="text-[22px] tracking-wide mb-5">Dušan Perić</h2>
        <p className="text-[22px] tracking-wide mb-5">Frontend Developer</p>
        <ul>
          <li>
            <a
              className="text-[22px] tracking-wide hover:opacity-40 transition-all duration-150"
              target="_blank"
              href="https://github.com/dushanperic"
              title="Github profile"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="text-[22px] tracking-wide hover:opacity-40 transition-all duration-150"
              target="_blank"
              href="https://www.linkedin.com/in/dusan-peric/"
              title="Linkedin profile"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="text-[22px] tracking-wide hover:opacity-40 transition-all duration-150"
              target="_blank"
              href="mailto:dushanperic1@gmail.com"
              title="Send email to dushanperic1@gmail.com"
            >
              E-mail
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
