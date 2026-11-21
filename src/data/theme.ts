// Shared palette for CSS and canvas/WebGL illustrations.
const accent = '#B497CF';
const mix = (target: number, amount: number) => '#' + [1, 3, 5].map(start =>
  Math.round(parseInt(accent.slice(start, start + 2), 16) * (1 - amount) + target * amount)
    .toString(16).padStart(2, '0')
).join('');

export const palette = {
  accent,
  hover: mix(255, 0.25),
  soft: mix(255, 0.55),
  muted: mix(0, 0.5),
  surface: mix(0, 0.75),
  ink: mix(0, 0.9),
};
export const accentGradient = [palette.ink, palette.surface, palette.muted, palette.accent, palette.soft];
