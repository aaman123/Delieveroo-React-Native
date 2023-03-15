import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, image, short_description, price }) => {
  const [isPressed, setIsPressed] = useState();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`flex-row p-4 bg-white ${
          !isPressed && "border"
        } p-4 border-gray-200`}
      >
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{short_description}</Text>
          <Text className="text-gray-400 mt-1">$ {price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 rounded-md"
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white flex-row px-4 pb-3 space-x-2 items-center">
          <TouchableOpacity>
            <MinusCircleIcon size={36} color="#00CCBB" />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon size={36} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
