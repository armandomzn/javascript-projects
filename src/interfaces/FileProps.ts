import { Details } from "./DetailsProps";

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}
