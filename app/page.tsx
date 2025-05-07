import Image from "next/image";
import { GeistMono } from "geist/font";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className={`text-3xl font-bold ${GeistMono.className}`}>
            Ayush Kumar Anand
          </h1>
          <p className="text-gray-500 mt-4">
            I&apos;m a 19-year-old developer and a CSAI
            undergrad at IIIT Delhi with a passion for building useful and
            scalable products. I&apos;m also a <span className="decoration-wavy underline text-gray-100">Smart India Hackathon</span> &apos;24 finalist. I have a strong foundation in modern tech. <br />
            <br />
            I&apos;m currently exploring web3.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/profile.jpeg"
            alt="profile"
            width={100}
            height={100}
            className="bg-gray-200 w-full"
          />
        </div>
      </div>
    </div>
  );
}
