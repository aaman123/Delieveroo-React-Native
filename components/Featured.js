import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const Featured = ({ title, description, restaurants }) => {
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
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              title={restaurant.name}
              imgUrl={restaurant.image}
              genre={restaurant.genre}
              address={restaurant.address}
              rating={restaurant.rating}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Featured;
