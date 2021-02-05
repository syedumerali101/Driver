import { StyleSheet } from "react-native";

export default StyleSheet.create({
  signupStyle : (background) =>  ({
    backgroundColor: background, height:70,width: 160,  alignItems: 'center', justifyContent: 'center', borderColor: '#3073f1', borderWidth: 1

  }),

  consumerLabel: (label) => ({
    color: label, fontSize: 16, fontWeight: 'bold'
  }),

  driverStyle : (background) => ({
    height:70,width: 160, backgroundColor: background, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#3073f1'
  }),

  driverLabel: (label) => ({
    color:label, fontSize: 16, fontWeight: 'bold'
  })
});