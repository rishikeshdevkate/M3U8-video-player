import { environment } from "../../../../environments/environment";

export const Constants = {
  baseUrl: environment.baseUrl,
  // providerBaseUrl: environment.providerBaseUrl,
  userRole: "ROLE_PROVIDER",
  accessKeyId: environment.accessKeyId,
  region: environment.region,
  secretAccessKey: environment.secretAccessKey,
  artist_bucketname: environment.artist_bucketname
};
