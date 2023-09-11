import { Video, PlayCircle } from "lucide-react"

interface ILesson {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export const Lesson = ({ 
  title, 
  duration, 
  onPlay, 
  isCurrent = false 
}: ILesson) => {
  return (
    <button 
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-indigo-400 enabled:hover:text-zinc-100"
    >
      { isCurrent ? (
        <PlayCircle className="w-4 h-4 text-indigo-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}
