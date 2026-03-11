// src/effects/customCursor.ts

export function initCustomCursor() {
  // Avoid creating multiple cursors if called twice
  if (document.getElementById("custom-cursor")) return;

  const cursor = document.createElement("div");
  cursor.id = "custom-cursor";
  document.body.appendChild(cursor);

  const move = (e: MouseEvent) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  window.addEventListener("mousemove", move);

  // Optional: grow cursor on interactive elements
  const interactiveSelector = "a, button, [data-cursor-hover]";
  const addHover = () => cursor.classList.add("cursor-hover");
  const removeHover = () => cursor.classList.remove("cursor-hover");

  document.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(interactiveSelector)) addHover();
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(interactiveSelector)) removeHover();
  });
}
