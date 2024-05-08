import type {
  IGetForIdRequest,
  IAdvancedSearchFilter,
  IApiFactory,
} from "../types";

export interface IAircraftModule extends IApiFactory<IAircraft> {
  get: (
    request: IGetForIdRequest
  ) => Promise<[IAircraft | undefined, boolean]>;

  create(request: IAircraftCreate): Promise<string | undefined>;
  update(request: IAircraft): Promise<boolean>;

  filter(
    request: IAdvancedSearchFilter
  ): Promise<[IAircraft[] | undefined, boolean]>;
}

export interface IAircraftUpdateRequest {
  uuid: string;
  data: IAircraft;
}
export interface IAircraft extends IAircraftCreate {
  uuid: string;
}
export interface IAircraftCreate {
  name: string;
  imgSrc: string;
}
