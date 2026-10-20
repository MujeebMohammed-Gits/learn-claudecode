"use client";

import * as React from "react";
import { Slot } from "@/components/ui/slot";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p className={className} style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", lineHeight: "1.5" }>...>{/* rendering children directly */}
      {React.Children.toArray(props.children)}
    </p>
  );
}