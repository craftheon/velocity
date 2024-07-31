"use client";

import { useState, useTransition } from "react";
import { updateName } from "./action";

export default function ActionTest() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const submitAction = async (event: any) => {
    event.preventDefault();
    startTransition(async () => {
      const formData = new FormData(event.target);
      const name = formData.get('name');
      const res = await updateName(name as string);
      if (res.error) {
        setError(res.error);
        return
      }
      event.target.reset();
    })
  }

  return (
    <form onSubmit={submitAction}>
      <input type="text" name="name" disabled={isPending} className="border m-2" placeholder="Please input..." />
      <button type="submit" disabled={isPending} className="h-10 px-6 font-semibold rounded-md bg-black text-white">Submit {isPending && "..."}</button>
      {error && <span>Failed: {error}</span>}
    </form>
  )
}