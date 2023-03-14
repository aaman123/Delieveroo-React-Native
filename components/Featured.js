import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const Featured = ({ title, description }) => {
  return (
    <View className="m-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-600">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-5"
      >
        <RestaurantCard
          title="Nando's"
          imgUrl="https://links.papareact.com/gn7"
          genre="Japanese"
          address="123 Main Street"
        />
        <RestaurantCard
          title="Nando's"
          imgUrl="https://links.papareact.com/gn7"
          genre="Japanese"
          address="123 Main Street"
        />
        <RestaurantCard
          title="Nando's"
          imgUrl="https://links.papareact.com/gn7"
          genre="Japanese"
          address="123 Main Street"
        />
        <RestaurantCard
          title="Nando's"
          imgUrl="https://links.papareact.com/gn7"
          genre="Japanese"
          address="123 Main Street"
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
