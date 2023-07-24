import { SpaceOrEnvironmentOrContentType } from "./SpaceOrEnvironmentOrContentTypeProps";

export interface Sys2 {
  space: SpaceOrEnvironmentOrContentType;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentType;
  revision: number;
  locale: string;
}
