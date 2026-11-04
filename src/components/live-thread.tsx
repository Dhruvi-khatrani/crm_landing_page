"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type LiveMessage = {
  id: string;
  align: "start" | "end";
  content: ReactNode;
};

function TypingDots({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className={`typing-dot h-1.5 w-1.5 rounded-full ${onDark ? "bg-white" : "bg-brand-500"}`}
          style={{ animationDelay: `${dot * 0.16}s` }}
        />
      ))}
    </span>
  );
}

export function LiveThread({
  messages,
  minHeightClass = "min-h-0 xl:min-h-[460px]",
  onIndex,
  loop = true,
}: {
  messages: LiveMessage[];
  minHeightClass?: string;
  onIndex?: (index: number) => void;
  loop?: boolean;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [floor, setFloor] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    onIndex?.(Math.max(0, count - 1));
  }, [count, onIndex]);

  useEffect(() => {
    if (reduced) {
      setCount(messages.length);
      setTyping(false);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    async function play() {
      do {
        setCount(0);
        setTyping(false);
        await wait(500);

        for (let index = 0; index < messages.length; index += 1) {
          if (cancelled) return;

          // Person starts typing
          setTyping(true);
          await wait(messages[index].align === "end" ? 1100 : 850);
          if (cancelled) return;

          // Typing stops, message appears
          setTyping(false);
          setCount(index + 1);
          await wait(120);
          if (cancelled) return;

          // Hold the measured height so the card never collapses
          const height = boxRef.current?.offsetHeight ?? 0;
          if (height > 0) setFloor((current) => Math.max(current, height));

          // Pause so the message can be read
          await wait(messages[index].align === "end" ? 1400 : 1100);
        }

        // Hold the finished thread, then soft restart (no black fade)
        await wait(2600);
        if (cancelled || !loop) return;

        const height = boxRef.current?.offsetHeight ?? 0;
        if (height > 0) setFloor((current) => Math.max(current, height));
        await wait(200);
      } while (!cancelled);
    }

    void play();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [loop, messages, reduced]);

  const upcoming = messages[count];

  if (reduced) {
    return (
      <div className={`space-y-4 text-xs sm:text-sm ${minHeightClass}`} aria-live="polite">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.align === "end" ? "justify-end" : ""}`}>
            <div className={message.align === "end" ? "max-w-[88%]" : "max-w-[92%]"}>{message.content}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={boxRef}
      className={`space-y-4 text-xs sm:text-sm ${minHeightClass}`}
      style={floor ? { minHeight: floor } : undefined}
      aria-live="polite"
    >
      {messages.slice(0, count).map((message) => (
        <div
          key={message.id}
          className={`chat-bubble-in flex ${message.align === "end" ? "justify-end" : ""}`}
        >
          <div className={message.align === "end" ? "max-w-[88%]" : "max-w-[92%]"}>{message.content}</div>
        </div>
      ))}

      {typing && upcoming ? (
        <div className={`typing-fade-in flex ${upcoming.align === "end" ? "justify-end" : ""}`}>
          <div
            className={`inline-flex items-center gap-2 rounded-2xl px-3.5 py-2.5 ${
              upcoming.align === "end" ? "rounded-br-sm bg-brand-600" : "rounded-bl-sm bg-slate-100"
            }`}
          >
            <TypingDots onDark={upcoming.align === "end"} />
            <span className={`text-[10px] ${upcoming.align === "end" ? "text-brand-100" : "text-mutedtext"}`}>
              {upcoming.align === "end" ? "AI Receptionist is typing" : "Patient is typing"}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
