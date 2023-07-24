import { Fields } from "./FieldsProps";
import { Metadata } from "./MetadataProps";
import { Sys } from "./SysProps";

export interface ProjectsProps {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
