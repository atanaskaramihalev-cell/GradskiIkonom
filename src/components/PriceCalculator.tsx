"use client";

import { useMemo, useState } from "react";
import { pricing } from "@/lib/business";

const numberFormatter = new Intl.NumberFormat("bg-BG");
const moneyFormatter = new Intl.NumberFormat("bg-BG", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const MIN_UNITS = 1;
const MAX_UNITS = 500;
const DEFAULT_UNITS = 40;

function clampUnits(value: number) {
  if (!Number.isFinite(value)) {
    return DEFAULT_UNITS;
  }

  return Math.min(MAX_UNITS, Math.max(MIN_UNITS, Math.trunc(value)));
}

export function PriceCalculator() {
  const [units, setUnits] = useState(DEFAULT_UNITS);
  const total = useMemo(() => units * pricing.perUnit, [units]);

  return (
    <div className="mt-10 max-w-xl">
      <label htmlFor="unit-count" className="block text-sm font-semibold text-foreground">
        Брой самостоятелни обекти
      </label>
      <input
        id="unit-count"
        type="number"
        inputMode="numeric"
        min={MIN_UNITS}
        max={MAX_UNITS}
        value={units}
        onChange={(event) => setUnits(clampUnits(event.target.valueAsNumber))}
        className="mt-3 w-full max-w-xs rounded-2xl border border-foreground/10 bg-background px-4 py-3 text-base text-foreground"
      />
      <p className="mt-6 text-base leading-7 text-foreground/70">
        {numberFormatter.format(units)} × {pricing.perUnitLabel} = {moneyFormatter.format(total)} €
        на месец за целия вход
      </p>
    </div>
  );
}
