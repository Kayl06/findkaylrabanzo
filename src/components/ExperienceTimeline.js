import { useState } from "react";
import Link from "next/link";
import { EXPERIENCE } from "@/data/experience";
export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(EXPERIENCE[0]?.id);

  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden md:block"
        aria-hidden
      />
      <ul className="space-y-4 list-none">
        {EXPERIENCE.map((job) => {
          const isOpen = openId === job.id;
          return (
            <li key={job.id} className="relative md:pl-8">
              <span
                className={`absolute left-0 top-6 hidden md:block h-3.5 w-3.5 rounded-full border-2 ${
                  job.current
                    ? "border-cyan-400 bg-cyan-400/20"
                    : "border-gray-600 bg-black"
                }`}
                aria-hidden
              />
              <article
                className={`rounded-xl border p-5 sm:p-6 transition-colors ${
                  job.current
                    ? "border-cyan-400/30 bg-cyan-500/5"
                    : "border-[var(--border)] bg-[var(--surface)] hover:border-white/10"
                }`}
              >
                <button
                  type="button"
                  className="w-full text-left md:cursor-default"
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">
                        {job.website ? (
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                        {job.current && (
                          <span className="ml-2 text-xs text-cyan-400/90 uppercase tracking-wide">
                            Current
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium tabular-nums shrink-0">
                      {job.period}
                    </span>
                  </div>
                </button>
                <ul
                  className={`mt-4 space-y-2 text-gray-400 text-sm leading-relaxed list-none ${
                    isOpen ? "block" : "hidden md:block"
                  }`}
                >
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 pl-0">
                      <span className="text-cyan-500/70 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-gray-500">
        <Link href="/resume" className="text-cyan-400/90 hover:text-cyan-400 transition-colors">
          View full resume →
        </Link>
      </p>
    </div>
  );
}
