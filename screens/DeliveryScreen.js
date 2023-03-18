import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/RestaurantSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row my-4 mx-5 items-center justify-between space-x-2">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XMarkIcon size={32} color="white" className="flex-1" />
          </TouchableOpacity>
          <Text className="text-white text-md font-bold">Order Help</Text>
        </View>

        <View className="w-[90%] left-5  bg-white rounded-md flex-row p-4 justify-between">
          <View>
            <Text className="text-gray-500 text-lg">Estimated Arrival</Text>
            <Text className="text-3xl font-bold">45 - 55 Minutes</Text>
            <Progress.Bar
              size={60}
              indeterminate={true}
              color="#00CCBB"
              className="my-2"
            />
            <Text className="text-gray-500 text-md my-2">
              Your order at {restaurant.title} is being prepared
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 28.5681,
          longitude: 77.3231,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        className="flex-1 -mt-10 z-0"
      >
        <Marker
          coordinate={{
            latitude: 28.5681,
            longitude: 77.3231,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white h-28 flex-row space-x-5 items-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 rounded-full p-4 ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg font-bold">Aman Sutariya</Text>
          <Text className="text-sm text-gray-500">Your rider</Text>
        </View>
        <Text className="mr-5 font-extrabold text-[#00CCBB]">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
