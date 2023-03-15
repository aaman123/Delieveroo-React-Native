import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await client.fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dish[] -> {
            ...
          }
        }
      }
    `
      );

      setFeaturedCategories(data);
    };

    fetchRestaurants();
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 mx-4 items-center space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-500">Deliver Now!</Text>
          <Text className="font-bold text-xl text-black">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" className="mx-1" />
          </Text>
        </View>

        <UserIcon size={24} color="#00CCBB" />
      </View>

      <View className="flex-row pb-2 mx-4">
        <View className="flex-row items-center space-x-2 bg-gray-200 flex-1 p-2">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />

        {featuredCategories?.map((category) => {
          return (
            <Featured
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
              restaurants={category.restaurants}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
