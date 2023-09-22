import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", content: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
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
              onChangeText={props.handleChange("content")}
              value={props.values.content}
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
