"use server";

import { sleep } from "@/lib/utils";

export async function updateName(name: string) {
  if (!name) {
    return { error: "Name is Require"}
  }
  await sleep(1000)
  return { data: 'ok'}
}