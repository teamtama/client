import * as yup from 'yup';

export type SchemaType = {
  body: string;
};

export const schema = yup.object().shape({
  body: yup.string().max(255).required(),
});