import Link from "next/link";
import { useState } from "react"; 

const Footer = () => {
  const[numberOfQuotes, setNumberOfQuotes] = useState<number | null>(0)

  return (
    <div className="bg-white/[.2] p-4 rounded-lg">
      <p>Quotes generated: {numberOfQuotes}</p>
      <br />
      <p>
        Developed with &#10084; by
        <Link
          className="border border-white hover:border-dashed p-2 rounded-md"
          href="https://portfolio-v2-mattgomb.vercel.app/"
          target="blank"
          rel="noopener noreferrer"
        >
          MattGomb
        </Link>
      </p>
    </div>
  );
};

export default Footer;
