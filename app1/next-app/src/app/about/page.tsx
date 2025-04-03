import Link from "next/link";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-blue-600">App1 About</h1>
      <Image src={`/pwa-app1.jpg`} alt="Logo" width={512} height={512} />
      <Link
        href="/"
        className="text-xl bg-amber-500 hover:bg-amber-300 px-3 py-2 rounded-lg border-2"
      >
        Go Home
      </Link>
    </div>
  );
};

export default About;
