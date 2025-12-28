import chroma from "chroma-js";

export type ScaleSpec = {
  hue: number;
  points: { l: number; c: number }[];
};

function calcChromacity(spec: ScaleSpec, l: number): number {
  const startPoint = spec.points.findLast((point) => point.l <= l);
  const endPoint = spec.points.find((point) => point.l >= l);

  if (startPoint == null || endPoint == null)
    throw new Error(`No point found for l=${l}`);

  if (startPoint === endPoint) {
    return startPoint.c;
  }

  const dist = (l - startPoint.l) / (endPoint.l - startPoint.l);

  return startPoint.c + (endPoint.c - startPoint.c) * dist;
}

export function sampleScale(
  spec: ScaleSpec,
  prefix: string,
): Record<string, string> {
  const samples: Record<string, string> = {};
  for (let l = 1; l <= 99; l++) {
    const paddedL = l.toString().padStart(2, "0");
    samples[prefix + paddedL] = chroma
      .oklch(l / 100, calcChromacity(spec, l), spec.hue)
      .hex();
  }
  return samples;
}
