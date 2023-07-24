import { SpaceOrEnvironmentOrContentType } from "./SpaceOrEnvironmentOrContentTypeProps";

export interface Sys {
  space: SpaceOrEnvironmentOrContentType;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentType;
  revision: number;
  contentType: SpaceOrEnvironmentOrContentType;
  locale: string;
}
