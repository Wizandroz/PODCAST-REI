import { notFound } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import { EPISODES } from '@/lib/data';
import EpisodeView from './EpisodeView';

export function generateStaticParams() {
  return EPISODES.map((ep) => ({ id: String(ep.id) }));
}

export default function EpisodePage({ params }: { params: { id: string } }) {
  const ep = EPISODES.find((e) => String(e.id) === params.id);
  if (!ep) notFound();

  const related = EPISODES.filter((e) => e.id !== ep.id).slice(0, 3);

  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Episoade" subtitle="Episod" />
      <EpisodeView episode={ep} related={related} />
    </div>
  );
}
