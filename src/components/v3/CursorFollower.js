import { useEffect, useRef } from "react";
import useReducedMotion from "@/hooks/useReducedMotion";

const FOLLOW_EASE = 0.16;
const OFFSET_X = 14;
const OFFSET_Y = 18;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CursorFollower() {
  const elRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const canFollow =
      !reducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canFollow) {
      el.hidden = true;
      return;
    }

    el.hidden = false;

    const state = { x: 0, y: 0, tx: 0, ty: 0, raf: 0, visible: false };

    const apply = () => {
      el.style.transform = `translate(${state.x + OFFSET_X}px, ${state.y + OFFSET_Y}px)`;
    };

    const tick = () => {
      state.x = lerp(state.x, state.tx, FOLLOW_EASE);
      state.y = lerp(state.y, state.ty, FOLLOW_EASE);
      apply();

      const stillMoving =
        Math.abs(state.tx - state.x) > 0.12 || Math.abs(state.ty - state.y) > 0.12;
      state.raf = stillMoving ? requestAnimationFrame(tick) : 0;
    };

    const startTick = () => {
      if (!state.raf) state.raf = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      state.tx = event.clientX;
      state.ty = event.clientY;
      if (!state.visible) {
        state.x = event.clientX;
        state.y = event.clientY;
        state.visible = true;
        el.classList.add("is-visible");
        apply();
      }
      startTick();
    };

    const onLeave = () => {
      state.visible = false;
      el.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (state.raf) cancelAnimationFrame(state.raf);
    };
  }, [reducedMotion]);

  return <div ref={elRef} className="__cursor-follower" aria-hidden />;
}
