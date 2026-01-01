import { iconMap } from "./ServicesList";
import { SiTicktick } from "react-icons/si";
import { GoGoal } from "react-icons/go";

export default function ServiceCard({ service }) {
  const { icon, title, description, helps, goal } = service;
  const Icon = iconMap[icon];

  return (
    <div className="p-6 rounded-xl border border-slate-200 transition bg-white flex flex-col gap-4 duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
      {/* Icon */}
      <div className="size-12 rounded-lg bg-orange-100 flex items-center justify-center">
        {Icon && <Icon className="text-orange-500 text-3xl" />}
      </div>

      <h3 className="text-xl font-bold text-[#1E3A8A]">{title}</h3>

      <p className="text-slate-600 leading-relaxed">{description}</p>

      <div className="text-sm text-slate-900 space-y-1">
        <p className="space-x-1">
          <SiTicktick className="inline-flex text-orange-400" />{" "}
          <span>
            <strong>Helps:</strong> {helps}
          </span>
        </p>
        <p className="space-x-1">
          <GoGoal className="inline-flex text-orange-400 font-bold" />{" "}
          <span>
            <strong>Goals:</strong> {goal}
          </span>
        </p>
      </div>
    </div>
  );
}
