import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { MainFormContainer } from "../MainFormContainer";

export function MainForm() {
  return (
    <MainFormContainer>
      <DefaultInput
        type="text"
        id="MainInput"
        placeholder="teste"
        labelText="Task"
      />
      <DefaultButton icon={<PlayCircleIcon />} />
    </MainFormContainer>
  );
}
