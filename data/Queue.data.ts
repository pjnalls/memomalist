import { Card, System } from "../types";

export const system: System = {
  /** TODO: Get the last time decks were reviewed. */
  lastReviewed: Date.now(),
  now: Date.now(),
};

export const ONE_DAY_IN_MILLISECONDS: number = 1000 * 60 * 60 * 24;
