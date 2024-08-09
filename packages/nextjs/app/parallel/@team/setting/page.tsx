import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Team Setting - Next.js',
}

export default function TeamSetting() {
  return (
    <div>
      setting
      <Link href="/parallel"> x</Link>
    </div>
  )
}