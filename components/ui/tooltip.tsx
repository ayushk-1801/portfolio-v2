"use client";

import * as React from "react";
import { Tooltip as HeroUITooltip } from "@heroui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
  delay?: number;
  showArrow?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = "top",
  delay = 0,
  showArrow = true,
  className = "",
}) => {
  return (
    <HeroUITooltip
      content={content}
      placement={placement}
      delay={delay}
      showArrow={showArrow}
      className={className}
    >
      {children}
    </HeroUITooltip>
  );
};
