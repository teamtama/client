import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.API;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_PASSWORD =
  publicRuntimeConfig.GOOGLE_CLIENT_PASSWORD;
export const FIREBASE_API_KEY = publicRuntimeConfig.FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = publicRuntimeConfig.FIREBASE_AUTH_DOMAIN;
export const FIREBASE_DATABASE_URL = publicRuntimeConfig.FIREBASE_DATABASE_URL;
export const FIREBASE_PROJECT_ID = publicRuntimeConfig.FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET = publicRuntimeConfig.FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGING_SENDER_ID = publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = publicRuntimeConfig.FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID = publicRuntimeConfig.FIREBASE_MEASUREMENT_ID;