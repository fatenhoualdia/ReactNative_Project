import React from 'react';
import { Button, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function DetailsScreen({ navigation }: any) {
  const cardText1 = "نرحب بك أيها الزائر الكريم في قسم الفيزياء والفلك بكلية العلوم بجامعة الملك سعود. نأمل أن تجد ما يسر ويفيد. وستلاحظ عزيزي الزائر مايتضمنه القسم من كوادر بشرية وتجهيزات معملية وإمكانات فنية و مسارات بحثية. ولعلها فرصة لك إن كنت من غير المختصين أن تجد المتعة بتجوالك في القسم والخروج بإلمامة عن هذا العلم والمجالات الوظيفية في المملكة العربية السعودية (تحديداً) التي يمكن أن يعمل فيها الفيزيائي والفلكي. كما يسرنا أن نتلقى أي ملاحظات تجدها على موقع القسم أو معلومات إضافية تود الحصول عليها و يمكننا توفيرها لك، أو أي مادة مناسبة تقترح إضافتها.";
  const cardText2 = "نبذة عن القسم\n\nيكتسب قسم الإحصاء وبحوث العمليات أهمية خاصة من خلال الدور المتميز الذي يلعبه تخصص الإحصاء وبحوث العمليات في اتخاذ القرارات المثلى للمشاكل التي تنشأ في ميادين عدة مثل الصناعة والاقتصاد والتجارة والزراعة والنقل والمواصلات والميادين العسكرية, وتتسع دائرة الخدمات التعليمية التي يقدمها القسم داخل وخارج الجامعة فالقسم يقدم مقررات في الإحصاء لطلبة كليات العلوم وعلوم الحاسب الآلي والزراعة والآداب والتربية وغيرها من كليات الجامعة.\nتأسس قسم الإحصاء عام 1399هـ بعد أن كان منذ تأسيس كلية العلوم عام 1387ه جزءاً من قسم الرياضيات. وقد تطور بسرعة خلال السنوات القليلة التي مضت على تأسيسه, حيث بدأ بتقديم برنامج الماجستير في الإحصاء عام ‎1400هـ, كما ازداد عدد الدارسين فيه بصورة ملحوظة وخاصة بعد أن تم افتتاح تخصص بحوث العمليات عام 1406 هـ أما الفرع النسائي فقد تم افتتاحه في عام 1408 هـ كقسم مساند يخدم باقي الأقسام في كلية العلوم وفي الجامعة ويقدم درجتي الماجستير والدكتوراه. وفي عام ‎1440هـ تم افتتاح درجة البكالوريوس في الإحصاء لتكون جامعة الملك سعود الجامعة الحكومية الوحيدة في الرياض التي تقدم هذه الدرجة للطالبات, والسادسة على مستوى المملكة.";
  const cardText3 = "قسم الرياضيات بجامعة الملك سعود بالرياض من أقدم وأكبر أقسام الرياضيات في دول مجلس التعاون الخليجي، فقد أُنشئ القسم مع بداية إنشاء كلية العلوم بالجامعة عام 1378هـ الموافق (1958م) كأول قسم رياضيات في المملكة العربية السعودية. بدأ في ذلك الوقت بتقديم درجة البكالوريوس في الرياضيات للطلاب وفي عام 1403هـ (1983م) توسع القسم ليشمل كذلك الطالبات. على مدى هذه السنوات والقسم يُخرِّج سنوياً مجموعة من الطلاب والطالبات الذين يلتحقون بسوق العمل بكل كفاءة واقتدار. في العام الدراسي 1401/1400هـ الموافق (1981/1980م)، بدأ القسم بتقديم درجة الماجستير في العلوم تخصص رياضيات لكل من الطلاب والطالبات ثم في العام الدراسي 1415/1414هـ بدأ القسم بتقديم درجة الدكتوراه بالمقررات والرسالة لكل من الطلاب والطالبات وبذلك أصبح القسم يقبل سنوياً طلاباً وطالبات في درجات البكالوريوس والماجستير والدكتوراة. استجابة لمتطلبات سوق العمل ومواكبة للتطورات الحالية، فقد قام القسم في العام الدراسي 1436/1435هـ بإنشاء برنامج حديث يمنح درجة البكالوريوس في الرياضيات الإكتوارية والمالية وقد لقي هذا البرنامج إقبالاً كبيراً من الطلاب والطالبات المتميزين والذين أصبحوا لاحقاً مطلب للعديد من جهات التوظيف في هذا المجال. بالإضافة إلى طلاب وطالبات كلية العلوم، فإن القسم يقدّم العديد من المقررات الخدمية لطلاب وطالبات عدد من كليات الجامعة المختلفة في مختلف الدرجات ومنها كليات: الهندسة، علوم الحاسب والمعلومات، العمارة والتخطيط ، التربية، علوم الأغذية والزراعة ويعتبر القسم من أكثر الأقسام الخدمية على مستوى الجامعة. يضم القسم نخبة متميزة من أعضاء وعضوات هيئة التدريس من مختلف المراتب العلمية (أستاذ، وأستاذ مشارك، وأستاذ مساعد) تقوم على العملية التعليمية والبحثية والمجتمعية بالقسم ويساندهم في ذلك كفاءات أكاديمية وفنية وإدارية تضم مجموعة من المحاضرين والمعيدين والباحثين.";
  const cardText4 = "قسم الجيولوجيا والجيوفيزياء له مكانة خاصة من خلال الدور المهم الذي يلعبه تخصص الجيولوجيا والجيوفيزياء في جامعة الملك سعود. يتمتع القسم بمكانة مرموقة بين المتخصصين من جامعات أخرى ومنظمات مهنية. تتمثل مهمته في تقديم خدمات تعليمية للطلاب في الجامعة والمجتمع المحلي والدولي. يعكس القسم التزامه بالتعليم المستدام والبحث العلمي والخدمة العامة. يسعى القسم إلى تقديم كافة الدعم اللازم لتحقيق أهدافه في البحث العلمي وتطوير المجتمع. ويهدف القسم أيضًا إلى تشجيع الطلاب على المشاركة في الأنشطة البحثية والتعليمية.";
  const cardText6= `أ.د. زيد بن عبدالله آل عثمان
  أ. بدر بن حمد الحازمي
  أ. محمد سعد الشهراني
  عميد الكلية
  
  هاتف المكتب: 4676464
  zaothman@ksu.edu.sa`;
  const cardText5 =" وكيل الكلية للشؤون الفنية والمقررات الخدمية";
  const cardText8="تتعهد وكالة الدراسات العليا بكلية العلوم، بأن تعمل وبدأب وإصرار للمحافظة على التميز العلمي ذو جودة ونوعية دولية قادر على تخريج طلاب الدراسات العليا مؤهلين ومتخصصين في مختلف المجلات العلمية التي تلبي متطلبات وإحتياجات سوق العمل السعودي الحالية والمستقبلية بما يتوافق مع تحقيق تنمية اقتصادية واجتماعية مستدامة للوطن."
  const cardText9 = "";
  const cardText10 = "";
  const cardText7 = "hello ";
  const cardText15 = "hello ";


  const handlePress = (cardText) => {
    navigation.navigate('CardDetails', { cardText }); // Navigate to the CardDetails screen with the cardText as a parameter
  };
 
  
  return (
    <ScrollView>
      <View style={styles.container}>

      <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText5 )}>
          <Image
            source={require('./lkolia.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}> الأقسام الأكاديمية والاعتماد الأكاديمي</Text>
          <Text style={styles.cardDescription}>
</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText15 )}>
          <Image
            source={require('./IMG-20240128-WA0011.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>    عميد الكلية</Text>
          <Text style={styles.cardDescription}>
    أ.د. زيد بن عبدالله آل عثمان
    أ. بدر بن حمد الحازمي
    أ. محمد سعد الشهراني
    عميد الكلية

    هاتف المكتب: 4676464
    zaothman@ksu.edu.sa
</Text>

        </TouchableOpacity> 


        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText6 )}>
          <Image
            source={require('./IMG-20240128-WA0010.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>  وكيل الكلية للشؤون الفنية والمقررات الخدمية</Text>
          <Text style={styles.cardDescription}>
    أوكيل كلية العلوم للشؤون الفنية  والمقررات الخدمية


</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText7 )}>
          <Image
            source={require('./imfg2.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>  وكيل الكلية للتطوير والجودة

</Text>
          <Text style={styles.cardDescription}>
         وكيل الكلية للتطوير والجودة

</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText8 )}>
          <Image
            source={require('./IMG-20240128-WA0008.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>  وكالة الكلية لدراسات العليا والبحث العلمي
</Text>
          <Text style={styles.cardDescription}>
          تتعهد وكالة الدراسات العليا بكلية العلوم، بأن تعمل وبدأب وإصرار للمحافظة على التميز العلمي ذو جودة ونوعية دولية قادر على تخريج طلاب الدراسات العليا مؤهلين ومتخصصين في مختلف المجلات العلمية التي تلبي متطلبات وإحتياجات سوق العمل السعودي الحالية والمستقبلية بما يتوافق مع تحقيق تنمية اقتصادية واجتماعية مستدامة للوطن.
</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText9 )}>
          <Image
            source={require('./IMG-20240128-WA0007.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}> وكالة الكلية الشؤون التعليمية والأكاديمية</Text>
          <Text style={styles.cardDescription}>
          تتعهد وكالة الدراسات العليا بكلية العلوم، بأن تعمل وبدأب وإصرار للمحافظة على التميز العلمي ذو جودة ونوعية دولية قادر على تخريج طلاب الدراسات العليا مؤهلين ومتخصصين في مختلف المجلات العلمية التي تلبي متطلبات وإحتياجات سوق العمل السعودي الحالية والمستقبلية بما يتوافق مع تحقيق تنمية اقتصادية واجتماعية مستدامة للوطن.
</Text>
        </TouchableOpacity>

        {/* Card 1 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText1 )}>
          <Image
            source={require('./FmpoIUFWIAYydjQ.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}> قسم الفيزياء</Text>
          <Text style={styles.cardDescription}>
          ن..رحب بك أيها الزائر الكريم في قسم الفيزياء والفلك بكلية العلوم بجامعة الملك سعود. نأمل أن تجد ما يسر ويفيد. وستلاحظ عزيزي الزائر مايتضمنه القسم من كوادر بشرية وتجهيزات معملية وإمكانات فنية و مسارات بحثية. ولعلها فرصة لك إن كنت من غير المختصين أن تجد المتعة بتجوالك في القسم والخروج بإلمامة عن هذا ية (تحديداً) التي يمكن أن يعمل فيها الفيزيائي والفلكي. كما يسرنا أن نتلقى أي ملاحظات تجدها على موقع القسم أو معلومات إضافية تود الحصول عليها و يمكننا توفيرها لك، أو أي مادة مناسبة تقترح إضافتها.
          </Text>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText2)}>
          <Image
            source={require('./F_FBGEkXQAEqb0D.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>قسم الاحصاء و بحوث العمليات</Text>
          <Text style={styles.cardDescription}>يعد قسم الاحصاء و بحوث العمليات من الأقسام المهمة في الجامعة.</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText3)}>
          <Image
            source={require('./FcYiKPBWIAIieYL.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>قسم الرياضيات</Text>
          <Text style={styles.cardDescription}>يعد قسم الرياضيات بجامعة الملك سعود بالرياض من أقدم وأكبر أقسام الرياضيات في دول مجلس التعاون الخليجي، فقد أُنشئ القسم مع بداية إنشاء كلية العلوم بالجامعة عام 1378هـ الموافق (1958م) كأول قسم رياضيات في المملكة العربية السعودية.</Text>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card} onPress={() => handlePress(cardText4)}>
          <Image
            source={require('./F26v4xxWUAAV8We.jpeg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>الجيولوجيا و الجيوفيزياء</Text>
          <Text style={styles.cardDescription}>قسم الجيولوجيا و الجيوفيزياء يقدم برامج تعليمية وبحثية متميزة في مجالات عديدة.</Text>
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