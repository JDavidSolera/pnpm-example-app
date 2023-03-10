export type FontWeightsKeys = "light" | "regular" | "bold";

export type FontWeights = {
  [fontWeight in FontWeightsKeys]: number;
};
