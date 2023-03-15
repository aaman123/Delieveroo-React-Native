import { TouchableOpacity, Text, Image, View } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className="bg-white mr-4 shadow">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="p-2">
        <Text className="text-lg font-bold">{title}</Text>
        <View className="flex-row space-x-1 items-center">
          <StarIcon color="green" size={20} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating} </Text> . {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 mt-2">
          <MapPinIcon color="gray" size={20} opacity={0.5} />
          <Text className="text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
