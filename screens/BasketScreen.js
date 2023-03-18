import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { XCircleIcon } from "react-native-heroicons/outline";
import {
  basketTotalPrice,
  selectBasketItems,
  removeFromBasket,
} from "../features/BasketSlice";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "../sanity";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/RestaurantSlice";

const BasketScreen = () => {
  const DELIVERY_FEE = 4.5;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const basketItems = useSelector(selectBasketItems);
  const basketPrice = useSelector(basketTotalPrice);
  const [groupBasketItems, setGroupBasketItems] = useState();
  const restaurant = useSelector(selectRestaurant);

  useEffect(() => {
    setGroupBasketItems(
      basketItems.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      }, {})
    );
  }, [basketItems]);

  return (
    <View className="h-full">
      <View className="flex-row bg-white p-4 justify-center">
        <View>
          <Text className="text-xl font-bold text-center">Basket</Text>
          <Text className="text-xs text-gray-400 text-center">
            {restaurant.title}
          </Text>
        </View>
        <View className="absolute right-2 top-2">
          <TouchableOpacity onPress={navigation.goBack}>
            <XCircleIcon size={36} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row bg-white p-4 mt-4 space-x-2 items-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-10 w-10 rounded-full bg-gray-400"
        />
        <Text className="flex-1">Delivery in 50-55 minutes</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="mt-4 divide-y divide-gray-100">
        {groupBasketItems &&
          Object.entries(groupBasketItems).map(([key, items]) => {
            return (
              <View
                key={key}
                className="py-2 border border-gray-100 flex-row space-x-4 items-center px-2 bg-white"
              >
                <Text className="text-[#00CCBB]">{items?.length} x</Text>
                <Image
                  source={{
                    uri: urlFor(items[0]?.image).url(),
                  }}
                  className="h-10 w-10 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text>${items[0]?.price}</Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB]"
                    onPress={() => {
                      dispatch(removeFromBasket({ id: key }));
                    }}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>

      <View className="bg-white p-4 mt-4 items-center bottom-0 absolute w-full pb-20">
        <View className="flex-row space-x-2 p-2">
          <Text className="flex-1 text-gray-500">Sub Total</Text>
          <Text className="text-gray-500">${basketPrice}</Text>
        </View>
        <View className="flex-row space-x-2 p-2">
          <Text className="flex-1 text-gray-500">Delivery Fee</Text>
          <Text className="text-gray-500">${DELIVERY_FEE}</Text>
        </View>
        <View className="flex-row space-x-2 p-2">
          <Text className="flex-1 font-bold">Order Total</Text>
          <Text className="font-bold">${basketPrice + DELIVERY_FEE}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreparingOrder");
          }}
          className="bg-[#00CCBB] p-4 rounded-md mt-4 w-5/6 items-center"
        >
          <Text className="text-white font-bold text-lg">Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
