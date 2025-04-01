import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-blue-600">Main App in the root</h1>
      <Link href="/about" className="text-xl bg-amber-500 hover:bg-amber-300 px-3 py-2 rounded-lg border-2">About</Link>
    </div>
  );
}
