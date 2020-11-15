import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.API;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_PASSWORD =
  publicRuntimeConfig.GOOGLE_CLIENT_PASSWORD;
