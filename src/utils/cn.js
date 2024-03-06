import {clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @param {import("clsx").ClassValue[]} inputs Array of classes to merge
 * @returns {string} String of all classes merged 
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
