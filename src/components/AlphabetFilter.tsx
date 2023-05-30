import { Text, VStack } from "native-base";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export function AlphabetFilter() {
  const [selectedLetter, setSelectedLetter] = useState<string>("");

  const handleLetterPress = (letter: any) => {
    setSelectedLetter(letter);
    console.log(letter)
    
  };

  return (
    <VStack>
      {Array.from(Array(26), (_, index) => String.fromCharCode(index + 65)).map((letter) => (
        <TouchableOpacity
          key={letter}
          onPress={() => handleLetterPress(letter)}
          style={[
            selectedLetter === letter && styles.selectedLetterButton,
          ]}
        >
          <Text
            style={[
              styles.letterText,
              selectedLetter === letter && styles. selectedLetterText,
            ]}
          >
            {letter}
          </Text>
        </TouchableOpacity>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  selectedLetterButton: {
    backgroundColor: 'transparent',
  },
  letterText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  selectedLetterText: {
    fontSize: 14,
    color:'#F59E0B',
    fontWeight: 'bold',
  },
});