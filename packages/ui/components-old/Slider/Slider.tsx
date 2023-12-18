"use client";

import { forwardRef, useId } from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import styles from "./Slider.module.scss";
import { cn } from "../../utils/cn";

const MAX_TICKS = 20;

interface SliderProps {
  variant?: "circle" | "pill";
  tickMarks?: boolean;
}

export const Slider = forwardRef<
  HTMLSpanElement,
  SliderPrimitive.SliderProps & SliderProps
>(({ tickMarks, ...props }, forwardedRef) => {
  const value = props.value || props.defaultValue;
  const id = useId();

  // const showTicks = !!props.max && !!props.tickMarks;

  return (
    <SliderPrimitive.Slider
      {...props}
      ref={forwardedRef}
      className={cn(styles.sliderRoot, props.className)}
    >
      <SliderPrimitive.Track className={styles.sliderTrack}>
        <SliderPrimitive.Range className={styles.sliderRange} />
      </SliderPrimitive.Track>
      <div className={styles.ticks}>
        {!!(tickMarks && props.max && props.max < MAX_TICKS)
          ? Array(props.max + 1)
              .fill("")
              .map((_, i) => (
                <span
                  className={styles.tick}
                  key={`${id}-slider-tick-${i}`}
                ></span>
              ))
          : null}
      </div>
      {value?.map((_, i) => (
        <SliderPrimitive.Thumb
          key={`${id}-slider-thumb-${i}`}
          className={cn(styles.sliderThumb, {
            [styles.pill]: props.variant === "pill",
          })}
        />
      ))}
    </SliderPrimitive.Slider>
  );
});

Slider.displayName = "Slider";
