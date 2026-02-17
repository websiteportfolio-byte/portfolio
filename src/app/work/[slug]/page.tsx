import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import CaseStudyClient from './CaseStudyClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const nextProject = project.nextProject
    ? projects.find((p) => p.slug === project.nextProject)
    : null;

  return (
    <CaseStudyClient
      project={project}
      nextProject={nextProject}
    />
  );
}
