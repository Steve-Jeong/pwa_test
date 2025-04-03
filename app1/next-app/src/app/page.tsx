import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  console.log('basePath :', basePath);
  const imageUrlString = `${basePath}/PNG_transparency_demonstration_1.png`;
  console.log('image url', imageUrlString);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-blue-600 p-4">App1 in the root</h1>
      <Link href="/about" className="text-xl bg-amber-500 hover:bg-amber-300 px-8 py-4 m-4 rounded-lg w-fit border-2">About</Link>
      <Image src={`/icons/pwa-app1.jpg`} alt="Logo" width={512} height={512} />
      <div 
        style={{
          backgroundImage: `url('${imageUrlString}')`,
          width: '12rem', // 48px -> rem으로 변경
          height: '12rem', // 48px -> rem으로 변경
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgb(253 230 138)', // amber-300 -> rgb로 변경
          padding: '1rem', // 4px -> rem으로 변경
          margin: '1rem', // 4px -> rem으로 변경
          border: '4px solid rgb(96 165 250)' // blue-400 -> rgb로 변경
        }}
      ></div>
    </div>
  );
}