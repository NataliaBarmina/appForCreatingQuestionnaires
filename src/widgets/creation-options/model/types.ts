import type { ComponentType } from "react";
import { CreationMode } from "@entities/model";

export type TCreationOption = {
  title: string;
  subtitle: string;
  path: string;
  Icon: ComponentType;
  positionClasses: string;
  buttonID: CreationMode;
};
