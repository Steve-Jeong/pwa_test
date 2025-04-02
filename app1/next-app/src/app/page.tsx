import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-blue-600 p-4">App1 in the root</h1>
      <Link href="/about" className="text-xl bg-amber-500 hover:bg-amber-300 px-8 py-4 m-4 rounded-lg w-fit border-2">About</Link>
      <Image src="/app1/icons/web-app-manifest-512x512.png" alt="Logo" width={512} height={512} />
    </div>
  );
}
