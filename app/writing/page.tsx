import type { Metadata } from 'next';

import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { LinkCard } from '../components/LinkCard';
import { profile } from '../../content/profile';
import { writing } from '../../content/writing';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Writing by Dor Avraham on software development, learning, and building modern web applications.',
  openGraph: {
    title: 'Writing · doravraham',
    description:
      'Writing by Dor Avraham on software development, learning, and building modern web applications.',
    url: '/writing',
  },
};

export default function WritingPage() {
  const emailHref =
    profile.links.find((l) => l.label === 'Email')?.href ?? 'mailto:hypsters@gmail.com';

  const hasFeatured = writing.featured.length > 0;

  return (
    <div className="font-sans">
      <Container>
        <div className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
              Writing
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {writing.series.note}
            </p>
          </div>
        </div>

        {hasFeatured && (
          <Section title="Featured" eyebrow="Latest">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {writing.featured.map((item) => (
                <LinkCard
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  description={item.note ?? ''}
                />
              ))}
            </div>
          </Section>
        )}

        <Section
          title={hasFeatured ? 'More coming soon' : 'Coming soon'}
          eyebrow={hasFeatured ? 'Next' : 'Writing'}
        >
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm shadow-black/5 sm:p-8 dark:border-white/15 dark:bg-black dark:shadow-none">
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              I&apos;m planning to write about my journey as a developer, projects I&apos;m
              building, and lessons learned. Want to know when I publish?{' '}
              <a
                href={emailHref}
                className="font-medium text-emerald-700 hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200"
              >
                Email me
              </a>{' '}
              and I&apos;ll let you know.
            </p>
          </div>
        </Section>
      </Container>
    </div>
  );
}
