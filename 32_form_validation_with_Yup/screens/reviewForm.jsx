import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";

const ReviewSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").min(1),
  body: Yup.string().required("Review content is required ").min(3),
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
        initialValues={{ title: "", content: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
          alert("Form is validated! Submitting the form...");
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review content"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            {/* {errors.password && touched.password && errors.password} */}

            <Button
              style={globalStyles.submit}
              type="submit"
              disabled={props.isSubmitting}
              color={"green"}
              onPress={props.handleSubmit}
              title="Submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
