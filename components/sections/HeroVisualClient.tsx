"use client";

import dynamic from "next/dynamic";
import { StaticHeroBoxVisual } from "./HeroAnimatedVisual";

const HeroAnimatedVisual = dynamic(() => import("./HeroAnimatedVisual"), {
  ssr: false,
  loading: () => <StaticHeroBoxVisual />,
});

export function HeroVisualClient() {
  return <HeroAnimatedVisual />;
}

