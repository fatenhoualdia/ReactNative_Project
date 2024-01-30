import React from 'react';
import { Button, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function DetailsScreen2() {
  const navigation = useNavigation(); // Initialize navigation

  // Define card text variables
  const cardText1 ="يعتبر قسم النبات و الأحياء الدقيقة مؤسسة تعليمية وبحثية منوط بها تطوير ونشر المعرفة في المجالات المختلفة لعلوم النبات والأحياء الدقيقة..."
  const cardText2 = " يهدف القسم من خلال الاستفادة من الامكانات المتوافرة في الجامعة وبالتعاون مع الاقسام المشابهة في الجامعات الوطنية و العالمية ذات السمعة المرموقة...";
  const cardText3 = "يعنى علم الكيمياء الحيوية بدراسة الأنظمة الحيوية في كافة الكائنات, مثل: الإنسان, الحيوان, النبات, الأحياء الدقيقة, والفيروسات...";
  const cardText4 = `يضم القسم أربعة تخصصات هي:
  1) الكيمياء غير العضوية.
  2) الكيمياء الفيزيائية.
  3) الكيمياء العضوية.
  4) الكيمياء التحليلية.
  بالإضافة إلى ماجستير العلوم في علم البوليمرات.
  يعتبر قسم الكيمياء من أقدم الأقسام في الجامعة حيث أسس عند إنشاء كلية العلوم عام 1378هـ الموافق 1957م، وهو من أكبر الأقسام...`;

  const handlePress = (cardText) => {
    navigation.navigate('CardDetails', { cardText }); // Navigate to the CardDetails screen with the cardText as a parameter
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Card 1 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText1)}>
          <Image
            source={require('./FPus42QWUAAAAtg.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>النبات والأحياء الدقيقة</Text>
          <Text style={styles.cardDescription}>
            يعتبر قسم النبات و الأحياء الدقيقة مؤسسة تعليمية وبحثية منوط بها تطوير ونشر المعرفة في المجالات المختلفة لعلوم النبات والأحياء الدقيقة...
          </Text>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText2)}>
          <Image
            source={require('./IMG-20240128-WA0005.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>علم الحيوان</Text>
          <Text style={styles.cardDescription}>
            يهدف القسم من خلال الاستفادة من الامكانات المتوافرة في الجامعة وبالتعاون مع الاقسام المشابهة في الجامعات الوطنية و العالمية ذات السمعة المرموقة...
          </Text>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText3)}>
          <Image
            source={require('./IMG-20240128-WA0015.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>الكيمياء الحيوية</Text>
          <Text style={styles.cardDescription}>
            يعنى علم الكيمياء الحيوية بدراسة الأنظمة الحيوية في كافة الكائنات, مثل: الإنسان, الحيوان, النبات, الأحياء الدقيقة, والفيروسات...
          </Text>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText4)}>
          <Image
            source={require('./F_cieplX0AA915_.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>الكيمياء</Text>
          <Text style={styles.cardDescription}>
            يعتبر قسم الكيمياء من أقدم الأقسام في الجامعة حيث أسس عند إنشاء كلية العلوم عام 1378هـ الموافق 1957م، وهو من أكبر الأقسام...
          </Text>
        </TouchableOpacity>

        {/* Navigation Buttons */}
        <View style={styles.navigationButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>

        <Text style={styles.buttonText}>الرجوع إلى صفحة الرئيسية</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#6495ED',
      textAlign: 'center',
      marginHorizontal: 30,
      marginBottom: 20,
    },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});