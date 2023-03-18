import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { basketTotalPrice, selectBasketItems } from "../features/BasketSlice";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(basketTotalPrice);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="flex-row space-x-1 p-4 bg-[#00CCBB] mx-5 items-center rounded-lg"
        onPress={() => {
          navigation.navigate("Basket");
        }}
      >
        <Text className="px-2 py-1 bg-[#29968e] text-lg font-extrabold text-white">
          {items.length}
        </Text>
        <Text className="flex-1 px-2 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg">
          $ {totalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
