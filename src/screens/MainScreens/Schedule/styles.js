import { StyleSheet } from "react-native";
import { height, width } from "../../../constants/Dimensions";

const styles = StyleSheet.create({
  divisionBar: {
    height: 1.5,
    backgroundColor: "black",
    width: "100%",
  },
  button: {
    width: width * 0.22,
    alignSelf: "flex-end",
    marginTop: 12,
  },
  cardView: {
    marginTop: height * 0.02,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000080",
    zIndex: 5,
  },
  form: {
    width: width * 0.85,
    paddingVertical: 20,
    backgroundColor: "#ffffff",
    paddingHorizontal: width * 0.025,
    paddingTop: height * 0.02,
    zIndex: 10,
    position: "absolute",
    borderRadius: 16,
    gap: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#000",
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 14,
    color: "#777", // Cinza claro para indicar estado vazio
    marginVertical: 8,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 8, // Espaçamento entre os chips
  },
  chip: {
    backgroundColor: '#e0f7fa',
  },
  disabledChip: {
    backgroundColor: '#ddd',
    opacity: 0.7,
  },
});

export default styles;
