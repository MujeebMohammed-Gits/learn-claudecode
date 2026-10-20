"use client";

import * as React from "react";
import { Slot } from "@/components/ui/slot";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardContent({
  className,
  ...props
}: CardContentProps) {
  return (
    <div className="p-4 pt-0 {className}" style={{}}>
      <Slot />
    </div>
  );
}