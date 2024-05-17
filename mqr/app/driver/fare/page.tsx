"use client";

import QRCode from "qrcode";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { TableDemo } from "./data";

const fare = async () => {
  const qrstring = await generateQR("wow");
  return (
    <main className="flex min-h-screen justify-center p-10   w-2/3 m-auto">
      <div className="w-2/3 flex flex-col gap-10">
        <section className="flex justify-between">
          <span>Matatu name Info</span>
          <Image src={qrstring} alt="qr" height={100} width={100} />
        </section>
        <section>
          <Input />
          <TableDemo />
        </section>
      </div>{" "}
    </main>
  );
};

export default fare;

const generateQR = async (text: string): Promise<string> => {
  try {
    return QRCode.toDataURL(text);
  } catch (err) {
    console.error(err);
    return "";
  }
};
