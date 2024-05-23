import React, {useState} from "react";
import { View, TextInput, Text,Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const[height, setHeight] = useState(null)
    const[weight, setWeight] = useState(null)
    const[messageImc, setMessageimc] = useState("prenche ai obeso")
    const [imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("calcular IMC")
    return (
        <View>

        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
        placeholder="Ex. 1.75"
        keyboardType="numeric"/>


        <Text>Peso</Text>
            <TextInput
              onChangeText={setWeight}
              value={weight}
        placeholder="Ex. 80.365"
        keyboardType="numeric"/>
        <Button
  onPress={()=> validationImc()}
  title={textButton}
/>
          </View>
          <ResultImc messageResulImc={messageImc}
          ResultImc={imc}/>
          </View>
    );
}