import { FieldConfig, FieldUpdates } from "./field-config.model";

export class FormConfig {
  controls: FieldConfig[];
  updateOn?: FieldUpdates = "blur";
}
