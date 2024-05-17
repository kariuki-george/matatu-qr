"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 w-2/3 m-auto">
      <span>Matatu Name</span>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Username"
      />{" "}
      <Input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button>Login</Button>
    </main>
  );
};

export default page;
