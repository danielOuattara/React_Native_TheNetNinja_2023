import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import FlatButton from "../components/FlatButton";
import { isEmptyObject, ReviewSchema } from "./../utilities/index";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          const styleFunction = (inputItem) => {
            return props.touched[inputItem] && props.errors[inputItem]
              ? { ...globalStyles.input, ...globalStyles.inputError }
              : { ...globalStyles.input };
          };
          return (
            <View>
              <TextInput
                style={styleFunction("title")}
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
                minHeight={120}
                style={styleFunction("body")}
                placeholder="Review content"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={globalStyles.errorFormInput}>
                {props.touched.body && props.errors.body}
              </Text>

              <TextInput
                style={styleFunction("rating")}
                placeholder={`Rating: (0 - 5) ☆☆☆☆☆`}
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
                onBlur={props.handleBlur("rating")}
              />
              <Text style={globalStyles.errorFormInput}>
                {props.touched.rating && props.errors.title}
              </Text>

              <FlatButton
                text={"SUBMIT"}
                style={globalStyles.submit}
                type="submit"
                color={"green"}
                onPress={props.handleSubmit}
                hasError={!isEmptyObject(props.errors)}
              />

              <Text style={globalStyles.errorFormInput}>
                {!isEmptyObject(props.errors) &&
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
