import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";

import { arr } from "@common/dataExample";
import FormForCreatingQuestionsByAI from "./formForCreatingQuestionsByAI";

const CoursesSelectionWithShadcnUI = () => {
  return (
    <div className="mx-auto mt-10">
      <Tabs defaultValue="account" className="w-[100%]">
        <TabsList className="bg-red-100">
          {arr.map((item, index: number) => (
            <TabsTrigger value={Object.keys(item)[0]} key={index}>
              {Object.keys(item)[0]}
            </TabsTrigger>
          ))}
        </TabsList>
        {arr.map((item, index: number) => (
          <TabsContent value={Object.keys(item)[0]} key={index}>
            Theme {Object.keys(item)[0]}
          </TabsContent>
        ))}
      </Tabs>
      <FormForCreatingQuestionsByAI />
    </div>
  );
};
export default CoursesSelectionWithShadcnUI;
