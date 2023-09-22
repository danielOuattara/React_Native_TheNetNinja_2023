import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";

const ReviewSchema = Yup.object().shape({
  title: Yup.string().required("Title is required and 3 chars minimal").min(3),
  body: Yup.string().required("Review body is required ").min(3),
  rating: Yup.string()
    .required()
    .test(
      "is-num-1-to-5",
      "Rating must be a number1 to 5",
      (val) => parseInt(val) < 6 && parseInt(val) > 0,
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
          alert("Form is validated! Submitting the form...");
        }}
      >
        {(props) => {
          console.log(props.errors);
          return (
            <View>
              <TextInput
                style={
                  props.touched.title && props.errors.title
                    ? { ...globalStyles.input, ...globalStyles.inputError }
                    : { ...globalStyles.input }
                }
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur("title")}
              />
              <Text style={globalStyles.errorFormInput}>
                {props.touched.title && props.errors.title}
              </Text>

              <TextInput
                multiline
                style={
                  props.touched.body && props.errors.body
                    ? { ...globalStyles.input, ...globalStyles.inputError }
                    : { ...globalStyles.input }
                }
                placeholder="Review content"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={globalStyles.errorFormInput}>
                {props.touched.body && props.errors.body}
              </Text>

              <TextInput
                style={
                  props.touched.rating && props.errors.rating
                    ? { ...globalStyles.input, ...globalStyles.inputError }
                    : { ...globalStyles.input }
                }
                placeholder="Rating (1 - 5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
                onBlur={props.handleBlur("rating")}
              />
              <Text style={globalStyles.errorFormInput}>
                {props.touched.rating && props.errors.title}
              </Text>

              <Button
                style={globalStyles.submit}
                type="submit"
                disabled={
                  props.isSubmitting ||
                  !(
                    Object.keys(props.errors).length === 0 &&
                    props.errors.constructor === Object
                  )
                }
                color={"green"}
                onPress={props.handleSubmit}
                title="Submit"
              />
              <Text style={globalStyles.errorFormInput}>
                {props.errors &&
                  "Please correct inputs before submitting".toUpperCase()}
              </Text>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
