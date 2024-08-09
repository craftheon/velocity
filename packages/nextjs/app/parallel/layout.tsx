'use client'
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function ParallelLayout({
  children,
  team,
  analytics
}: {
  children: React.ReactNode;
  team: React.ReactNode,
  analytics: React.ReactNode
}) {
  const teamSegment = useSelectedLayoutSegments()

  return (
    <main>
      {teamSegment}
      {children}
      {team}
      {analytics}
    </main>
  )
}