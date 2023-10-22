import { Animation } from "@/app/components/Animation";
import { AnchorLink, H1, P, Copyright } from "@/app/components/Typography";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <H1>Dušan Perić</H1>
        <P>Frontend Developer</P>
        <AnchorLink href="https://github.com/dushanperic">Github</AnchorLink>
        <AnchorLink href="https://www.linkedin.com/in/dusan-peric/">
          Linkedin
        </AnchorLink>
        <AnchorLink href="mailto:dushanperic1@gmail.com">E-mail</AnchorLink>
      </div>
      <div className="w-full flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between gap-2">
        <Animation />
        <Copyright>
          copyright&#169;DusanPeric{new Date().getFullYear() as number}
        </Copyright>
      </div>
    </>
  );
}
