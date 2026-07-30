import type { ComponentType } from "react";
import { CreationMode } from "@entities/theme/model/creation-mode-button";

export type TCreationOption = {
  title: string;
  subtitle: string;
  path: string;
  Icon: ComponentType;
  positionClasses: string;
  buttonID: CreationMode;
};
