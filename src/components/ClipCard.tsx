import { Download, Play, FileText, Clock, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ClipData {
  id: number;
  startTime: string;
  endTime: string;
  duration: number;
  wordsPerSecond: number;
  subtitlePreview: string;
}

interface ClipCardProps {
  clip: ClipData;
  index: number;
}

export function ClipCard({ clip, index }: ClipCardProps) {
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="clip-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Hash className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-sm font-medium">clip_{String(clip.id).padStart(3, "0")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Play className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Timestamps */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-secondary">
            <div className="text-xs text-muted-foreground mb-1">Início</div>
            <div className="font-mono text-sm">{clip.startTime}</div>
          </div>
          <div className="p-3 rounded-lg bg-secondary">
            <div className="text-xs text-muted-foreground mb-1">Fim</div>
            <div className="font-mono text-sm">{clip.endTime}</div>
          </div>
          <div className="p-3 rounded-lg bg-secondary">
            <div className="text-xs text-muted-foreground mb-1">Duração</div>
            <div className="font-mono text-sm flex items-center gap-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              {formatDuration(clip.duration)}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {clip.wordsPerSecond.toFixed(1)} palavras/s
          </span>
        </div>

        {/* Subtitle Preview */}
        <div className="p-3 rounded-lg bg-background border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <FileText className="w-3 h-3" />
            <span>Prévia da legenda</span>
          </div>
          <p className="text-sm leading-relaxed font-mono text-foreground/80">
            {clip.subtitlePreview}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 h-9">
          <Download className="w-3.5 h-3.5 mr-1.5" />
          <span>Vídeo</span>
        </Button>
        <Button variant="outline" size="sm" className="flex-1 h-9">
          <FileText className="w-3.5 h-3.5 mr-1.5" />
          <span>SRT</span>
        </Button>
      </div>
    </div>
  );
}
