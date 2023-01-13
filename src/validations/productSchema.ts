import * as yup from "yup";
export const productSchema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  categoryId: yup.number().required(),
  images: yup.mixed().test({
    test: (value) => value.length > 0,
    message: "File can not be empty",
  }),
  
});
