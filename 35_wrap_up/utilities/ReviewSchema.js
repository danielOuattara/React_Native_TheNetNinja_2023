import * as Yup from "yup";

const ReviewSchema = Yup.object().shape({
  title: Yup.string().required("Title is required and 3 chars minimal").min(3),
  body: Yup.string().required("Review body is required ").min(3),
  rating: Yup.string()
    .required()
    .test(
      "is-num-0-to-5",
      "Rating must be a number1 to 5",
      (val) => parseInt(val) < 6 && parseInt(val) > -1,
    ),
});

export default ReviewSchema;
