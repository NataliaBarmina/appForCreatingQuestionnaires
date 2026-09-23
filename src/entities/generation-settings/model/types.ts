export type TGenerationSettings = {
  generationCount: number[];
  count: number;
  onCountChange: (count: number) => void;
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
  countTitle: string;
  instructionPlaceholder: string;
  isFetching: boolean;
  loadingModalMessage: string;
};
