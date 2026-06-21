"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import { getFefcoImage } from "@/data/fefco";

type FefcoImageProps = {
  src: string;
  alt: string;
  className: string;
  onError: () => void;
};

function FefcoImage({ src, alt, className, onError }: FefcoImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        setFailed(true);
        onError();
      }}
    />
  );
}

function CatalogPlaceholder() {
  return (
    <div
      className="mb-6 flex h-36 w-full items-center justify-center border border-brand-green/5 bg-brand-bg/30"
      aria-hidden
    >
      <Layers size={48} strokeWidth={0.5} className="text-brand-green/10" />
    </div>
  );
}

type FefcoCardDiagramProps = {
  code: string;
  name: string;
  variant?: "catalog" | "preview";
};

export function FefcoCardDiagram({
  code,
  name,
  variant = "catalog",
}: FefcoCardDiagramProps) {
  const src = getFefcoImage(code);
  const [missing, setMissing] = useState(!src);

  if (variant === "preview") {
    if (!src || missing) return null;

    return (
      <div className="mb-6 flex h-52 w-full items-center justify-center">
        <FefcoImage
          src={src}
          alt={name}
          className="max-h-full w-full object-contain mix-blend-multiply"
          onError={() => setMissing(true)}
        />
      </div>
    );
  }

  if (!src || missing) return <CatalogPlaceholder />;

  return (
    <div className="mb-6 flex h-36 w-full items-center justify-center">
      <FefcoImage
        src={src}
        alt={name}
        className="max-h-full w-full object-contain mix-blend-multiply"
        onError={() => setMissing(true)}
      />
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
  const [missing, setMissing] = useState(!src);

  return (
    <div className="relative flex aspect-square flex-col items-center justify-center border border-brand-green/10 bg-white p-12">
      <div className="absolute top-6 left-6 border border-brand-green/5 p-2">
        <span className="text-[10px] font-bold text-brand-green/20">{drawingLabel}</span>
      </div>

      {src && !missing ? (
        <div className="flex w-full flex-1 items-center justify-center p-6">
          <FefcoImage
            src={src}
            alt={name}
            className="max-h-72 w-full object-contain mix-blend-multiply"
            onError={() => setMissing(true)}
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
