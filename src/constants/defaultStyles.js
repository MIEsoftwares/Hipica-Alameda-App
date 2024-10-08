import { StyleSheet } from "react-native";
import { height, width } from "./Dimensions";

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width*0.025,
        paddingTop: height*0.02,
        backgroundColor: "#fff"
    },
    containerWHeader: {
        flex: 1,
        paddingHorizontal: width*0.025,
        marginTop: height*-0.015,
        backgroundColor: "#fff"
    }
})

export default defaultStyles