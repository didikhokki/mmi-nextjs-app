"use client";

import Image from "next/image";

export default function ResortIllustration() {
  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="max-w-4xl w-full border bg-white">
        <Image
          src= "https://cpunud.com/timelinebawah.svg"
          alt="Resort Illustration"
          width={1200}
          height={700}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
