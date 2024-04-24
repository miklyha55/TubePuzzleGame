import { IVec2 } from "../core/gameObject/types";

export const Utils = {
  v2: (x: number, y: number): IVec2 => {
    return { x, y } as IVec2;
  },

  delay: (ms: number = 0): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  arrayRotate: ([...array]: number[], isReverse: boolean): number[] => {
    if (isReverse) {
      array.unshift(array.pop() || 0);
    } else {
      array.push(array.shift() || 0);
    }
    return array;
  }
};
