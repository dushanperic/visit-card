import { Animation } from "@/app/components/Animation";
import { AnchorLink, H1, P, Copyright } from "@/app/components/Typography";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="mb-[20px]">
          <Animation />
        </div>
        <H1>Dušan Perić</H1>
        <P>Frontend Developer</P>
        <AnchorLink href="https://github.com/dushanperic">Github</AnchorLink>
        <AnchorLink href="https://www.linkedin.com/in/dusan-peric/">
          Linkedin
        </AnchorLink>
        <AnchorLink href="mailto:dushanperic1@gmail.com">E-mail</AnchorLink>
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
