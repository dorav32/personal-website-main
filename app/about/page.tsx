import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { Timeline, TimelineItem } from '../components/Timeline';
import { profile } from '../../content/profile';
import dor from '../dor.jpeg';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Dor Avraham — Computer Science Graduate | Full-Stack Developer. Skills in React, Node.js, Python, and problem-solving.',
  openGraph: {
    title: 'About · doravraham',
    description:
      'About Dor Avraham — Computer Science Graduate | Full-Stack Developer. Skills in React, Node.js, Python, and problem-solving.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Container>
        <div className="py-14 sm:py-20">
          <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:text-left">
            <Image
              src={dor}
              alt={profile.name}
              width={124}
              height={124}
              priority
              className="h-[124px] w-[124px] rounded-full ring-1 ring-black/10 dark:ring-white/15"
            />
            <div className="flex-1">
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
                About
              </h1>
              <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {profile.title}
              </p>
              <div className="mt-6 space-y-4 text-left text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {profile.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Section title="What I bring" eyebrow="Strengths">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Full-Stack Development
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Building complete web applications with React, Node.js, and REST APIs. Comfortable
                working across the entire stack.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Problem-Solving & Algorithms
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Strong algorithmic thinking and passion for solving complex problems. GPA of 90 in
                Computer Science.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Data Analysis & Python
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Experience with Python for data analysis using Pandas, NumPy, and Sklearn. ML
                fundamentals from coursework.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Quick Learner & Team Player
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Production-oriented mindset with experience managing teams and clients from my
                business background.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Experience" eyebrow="Timeline">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 sm:p-8 dark:border-white/15 dark:bg-black dark:shadow-none">
              <Timeline>
                {profile.experience.map((e) => (
                  <TimelineItem
                    key={`${e.company}-${e.title}-${e.start}`}
                    title={`${e.title} · ${e.company}`}
                    meta={`${e.start} — ${e.end}`}
                  >
                    {e.bullets.length ? (
                      <ul className="list-disc space-y-1 pl-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {e.bullets.slice(0, 6).map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </TimelineItem>
                ))}
              </Timeline>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Skills</h3>
                <div className="mt-4 space-y-4">
                  {profile.skills.map((g) => (
                    <div key={g.label}>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {g.label}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {g.items.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 dark:border-white/15 dark:bg-black dark:shadow-none">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Education</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {profile.education.map((ed) => (
                    <li key={ed.school}>
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {ed.school}
                      </span>{' '}
                      — {ed.degree}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
