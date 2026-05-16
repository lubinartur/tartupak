import Image from "next/image";
import { Layers } from "lucide-react";
import { getFefcoImage } from "@/data/fefco";

/** Placeholder only — no diagram images on catalog/preview cards. */
export function FefcoCardDiagram() {
  return (
    <div
      className="mb-6 flex h-36 w-full items-center justify-center border border-brand-green/5 bg-brand-bg/30"
      aria-hidden
    >
      <Layers size={48} strokeWidth={0.5} className="text-brand-green/10" />
    </div>
  );
}

type FefcoDetailDiagramProps = {
  code: string;
  name: string;
  drawingLabel: string;
  placeholderText: string;
};

export function FefcoDetailDiagram({
  code,
  name,
  drawingLabel,
  placeholderText,
}: FefcoDetailDiagramProps) {
  const src = getFefcoImage(code);

  return (
    <div className="relative flex aspect-square flex-col items-center justify-center border border-brand-green/10 bg-white p-12">
      <div className="absolute top-6 left-6 border border-brand-green/5 p-2">
        <span className="text-[10px] font-bold text-brand-green/20">{drawingLabel}</span>
      </div>

      {src ? (
        <div className="relative flex w-full flex-1 items-center justify-center py-8">
          <Image
            src={src}
            alt={name}
            width={480}
            height={320}
            className="max-h-80 w-full object-contain"
          />
        </div>
      ) : (
        <>
          <Layers
            size={140}
            strokeWidth={0.5}
            className="mb-8 text-brand-green/10"
            aria-hidden
          />
          <div className="mb-8 h-px w-full bg-brand-green/5" />
          <p className="max-w-[200px] text-center text-[10px] font-bold tracking-widest text-brand-text uppercase">
            {placeholderText}
          </p>
        </>
      )}
    </div>
  );
}
