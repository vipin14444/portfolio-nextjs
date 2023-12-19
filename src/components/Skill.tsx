import { ISkill } from "@/types";
import clsx from "clsx";
import React, { FC } from "react";

type SkillProps = {
  skill: ISkill;
};

const Skill: FC<SkillProps> = ({ skill }) => {
  const { title, icon, color, animation } = skill;
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div
        style={{ color: color }}
        className={clsx("text-[2rem]", animation ? `anim_${animation}` : "")}
      >
        {icon}
      </div>
      <div className="text-2xl font-semibold">{title}</div>
    </div>
  );
};

export default Skill;
