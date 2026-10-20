"use client";

import * from "react";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function CardTitle({
  className,
  ...props
}: CardTitleProps) {
  const baseClasses = "text-2xl font-bold tracking-tight text-emerald-900";
  const secondaryClasses = "sm:text-3xl";

  return (
    <h3 className={`${baseClasses} ${secondaryClasses} ${className}`} {...props}>
      {props.children}
    </h3>
  );
}