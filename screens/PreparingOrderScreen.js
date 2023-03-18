import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#00CCBB]">
      <Animatable.Image
        source={{
          uri: "https://media.giphy.com/media/vnk9fctnt0ucvht1Wd/giphy.gif",
        }}
        animation="slideInUp"
        className="h-56 w-64"
        iterationCount={1}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-xl text-center text-white font-bold my-10"
      >
        Waiting for the restaurant to accept your order!
      </Animatable.Text>

      <Progress.Bar
        size={60}
        indeterminate={true}
        color="white"
        className="my-10"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
