import { Video } from "lucide-react"

interface ILesson {
  title: string;
  duration: string;
}

export const Lesson = ({ title, duration }: ILesson) => {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}