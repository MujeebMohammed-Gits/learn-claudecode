"use client";

import * as React from "react";
import { Slot } from "@/components/ui/slot";

export interface CardHeaderProps {
  className?: string;
}

export function CardHeader({ className }: CardHeaderProps) {
  return (
    <div className="flex flex-col space-y-1.5 pr-6 pt-6 pb-4 sm:pb-6 sm:flex-row sm:flex-nowrap sm:items-start {className}" style={{}}>
      <Slot />
    </div>
  );
}