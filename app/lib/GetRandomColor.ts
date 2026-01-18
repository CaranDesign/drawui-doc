export const backgroundColors: string[] = [
  "#fef3c7", 
  "#fde68a",
  "#fcd34d",
  "#fbbf24",
  "#f97316",
  "#fee2e2",
  "#fecaca",
  "#fca5a5",
  "#f87171",
  "#ef4444",
  "#d1fae5", 
  "#a7f3d0",
  "#6ee7b7",
  "#34d399",
  "#10b981",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#ede9fe", 
  "#ddd6fe",
  "#c4b5fd",
  "#a78bfa",
  "#8b5cf6"
];

// return random color from palette
export function getRandomColor(): string {
  const index = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[index];
}
