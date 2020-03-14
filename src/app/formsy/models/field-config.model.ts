import { Validators } from "@angular/forms";

type FieldTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "multiline";

export type FieldUpdates = "blur" | "change" | "submit";
// export class ModelConfig {
//   controls: FieldConfig[];
//   updateOn?: FieldUpdates = "blur";
// }
export class FieldConfig {
  controlType?: "control" | "group" | "array" = "control";
  type?: FieldTypes = "text";
  name: string;
  controls?: FieldConfig | FieldConfig[];
  label?: string;
  placeholder?: string;
  value?: any = null;
  classes?: string | string[];
  validators?: Validators[];
  options?: FieldOptions[];
  updateOn?: FieldUpdates = "blur";
}

class FieldOptions {
  key: any;
  value: any;
}
