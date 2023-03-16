import { useState } from "react";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  addToBasket,
  selectBasketItemsById,
  removeFromBasket,
} from "../features/BasketSlice";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

const DishRow = ({ id, name, image, short_description, price }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState();
  const items = useSelector((state) => selectBasketItemsById(state, id));

  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, image, short_description, price }));
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

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
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemsFromBasket}
          >
            <MinusCircleIcon
              size={36}
              color={items.length ? `#00CCBB` : "gray"}
            />
          </TouchableOpacity>
          <Text>{items?.length}</Text>
          <TouchableOpacity onPress={addItemsToBasket}>
            <PlusCircleIcon size={36} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
