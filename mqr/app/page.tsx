"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(1000);
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 w-2/3 m-auto">
      <span>Matatu Name</span>
      <Input
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <Button>Pay now</Button>
    </main>
  );
}
