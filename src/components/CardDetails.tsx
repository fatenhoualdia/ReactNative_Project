import React from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function CardDetails() {
  const route = useRoute();
  const { cardText } = route.params;

  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.cardText}>{cardText}</Text>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardText: {
    fontSize: 35,
    textAlign: 'center',
    color : '#3A3B3C',
  },
});
