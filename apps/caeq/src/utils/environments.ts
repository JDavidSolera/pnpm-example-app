export const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

export const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

export const uriApi =
  apiDomain && apiVersion
    ? `${apiDomain}/v${apiVersion}`
    : "http://localhost:3000/api/v4";

export const idDev = process.env.NODE_ENV === "development";

export const isProd = process.env.NODE_ENV === "production";
