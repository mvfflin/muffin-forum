"use client";

import {
  HeroSection,
  NavigationSection,
  RecentPostsSection,
  InvitationSection,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-200">
      <HeroSection />
      <NavigationSection />
      <RecentPostsSection />
      <InvitationSection />
    </main>
  );
}
