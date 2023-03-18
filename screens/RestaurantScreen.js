import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import BasketIcon from "../components/BasketIcon";
import DishRow from "../components/DishRow";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/RestaurantSlice";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      lat,
      long,
      dishes,
      short_description,
    },
  } = useRoute();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        title,
        imgUrl,
        rating,
        genre,
        address,
        lat,
        long,
        dishes,
        short_description,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 p-4 bg-gray-500"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute rounded-full top-14 left-5 p-2 bg-gray-100"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="pt-4 px-4">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row items-center space-x-1 my-1">
              <View className="flex-row items-center space-x-2">
                <StarIcon size={22} opacity={0.5} color="green" />
                <Text className="text-xs text-gray-500">{rating}</Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <MapPinIcon size={22} opacity={0.4} color="green" />
                <Text className="text-xs text-gray-500">
                  {genre} . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2  border-y border-gray-300 p-4">
          <QuestionMarkCircleIcon size={22} color="gray" opacity={0.4} />
          <Text className="flex-1 pl-2 text-md font-bold">
            Have a food allergy ?
          </Text>
          <ChevronRightIcon size={22} color="#00CCBB" />
        </TouchableOpacity>

        <View>
          <Text className="pt-6 font-bold text-xl mb-3 px-4">Menu</Text>

          <View className="pb-36">
            {dishes?.map((dish) => {
              return (
                <DishRow
                  key={dish._id}
                  id={dish._id}
                  name={dish.name}
                  image={dish.image}
                  short_description={dish.short_description}
                  price={dish.price}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
