import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
    //borderWidth: 1,
    //borderColor: "#666",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 5,
    backgroundColor: '#262626',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4EA8DE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#FFF",
  },
  taskMarkerDone: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: "#5E60CE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#666666",
    textDecorationLine: "line-through",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});