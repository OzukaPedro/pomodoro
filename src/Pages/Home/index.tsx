import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TypeStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home() {
  return (
    <MainTemplate>
      <MainForm />
    </MainTemplate>
  );
}
