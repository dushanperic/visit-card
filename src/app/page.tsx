import { Animation } from "@/app/components/Animation";
import { AnchorLink, H1, P, Copyright } from "@/app/components/Typography";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div
          className="mb-[20px] w-content-width"
          title="Eadweard Muybridge (1830 - 1904). Blacksmiths."
        >
          <Animation />
        </div>
        <H1>Dušan Perić</H1>
        <P>Frontend Developer</P>
        <ul>
          <li>
            <AnchorLink href="https://github.com/dushanperic">
              Github
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="https://www.linkedin.com/in/dusan-peric/">
              Linkedin
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="mailto:dushanperic1@gmail.com">E-mail</AnchorLink>
          </li>
        </ul>
      </div>
      <div className="w-full mt-10 xl:mt-0">
        <Copyright>
          &#169;dusanperic
          {new Date().getFullYear() as number}
        </Copyright>
      </div>
    </>
  );
}
