"use client";
import { ISocialLink } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import React, { FC, useState } from "react";

type SocialLinkProps = {
  socialLink: ISocialLink;
};

const SocialLink: FC<SocialLinkProps> = ({ socialLink }) => {
  const { title, icon, color, link } = socialLink;
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      href={link}
      style={
        hovered
          ? { background: color, borderColor: color, color: "#FFFFFF" }
          : {}
      }
      className={clsx(
        "flex items-center justify-center gap-4 px-4 py-3 border border-white border-opacity-30 rounded-md w-fit transition-colors"
      )}
    >
      <div>{icon}</div>
      <div className="text-sm">{title}</div>
    </Link>
  );
};

export default SocialLink;
