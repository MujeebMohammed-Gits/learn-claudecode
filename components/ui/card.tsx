"use client";

import * as React from "react";
import { Slot } from "@/components/ui/slot";

export interface CardProps {
  className?: string;
}

export function Card({ className }: CardProps) {
  return (
    <div className={className} style={{}}>
      <Slot />
    </div>
  );
}