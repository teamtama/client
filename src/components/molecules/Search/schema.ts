import * as yup from 'yup';

export type SearchSchemaType = {
  keyword: string;
};

export const searchSchema = yup.object().shape({
  keyword: yup.string(),
});
