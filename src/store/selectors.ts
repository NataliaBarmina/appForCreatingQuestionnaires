import { TRootState } from "@store/store";
import { createSelector } from "reselect";

const selectCreateByYourSelf = (state: TRootState) => state.createByYourSelf;

export const getQuestionnaire = createSelector(
  [selectCreateByYourSelf],
  (createByYourSelf) => {
    return createByYourSelf
      .flatMap((subject) => {
        const themes = Object.values(subject)[0];
        return themes.flatMap((theme) => Object.values(theme)[0]);
      })
      .filter((objWithQuestion) => objWithQuestion.question.trim() !== "")
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  },
);
