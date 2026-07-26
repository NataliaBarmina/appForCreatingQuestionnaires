import type { ComponentType } from "react";
import { TCreationModeButton } from "@entities/model";

export type TCreationOption = {
  title: string;
  subtitle: string;
  path: string;
  Icon: ComponentType;
  positionClasses: string;
  buttonID: TCreationModeButton;
};
