import WeekSection from "@/sections/week-section";
import { kebabToTitleCase } from "@/utils";

interface WeekPageProps {
  params: Promise<{ module: string; week: string }>;
}

async function WeekPage({ params }: WeekPageProps) {
  const { module, week } = await params;

  const moduleTitle = kebabToTitleCase(module);
  const weekNumber = Number(week);

  return <WeekSection module={moduleTitle} weekNumber={weekNumber} />;
}

export default WeekPage;
