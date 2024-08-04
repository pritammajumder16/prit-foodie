import { Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import { Toast } from "toastify-react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import Button from "@/components/Ui/Button";
import { MagnifyingGlassCircleIcon } from "react-native-heroicons/solid";
import { generateRequest } from "@/utils/generateRequest";

const addAddress = () => {
  const mapRef = useRef<MapView>(null);
  const [searchText, setSearchText] = useState<string>();
  const [coords, setCoords] = useState<{ lat: number; long: number }>({
    lat: 83,
    long: 22,
  });
  const searchPlace = async () => {
    // https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=66afecef25d69445895548dngeca7b8
    const res = await generateRequest({
      method: "GET",
      url: `https://geocode.maps.co/search?q=${searchText}&api_key=66afecef25d69445895548dngeca7b8`,
    });
    if (res && res[0]) {
      const latitude = parseFloat(res[0].lat);
      const longitude = parseFloat(res[0].lon);

      setCoords({ lat: latitude, long: longitude });

      mapRef.current?.animateToRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };
  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Toast.error("Location permission denied", "top");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setCoords({
          lat: location.coords.latitude,
          long: location.coords.longitude,
        });
        mapRef.current?.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
          200
        );
      } catch (error) {
        Toast.error("Location permission denied", "top");
      }
    };

    getLocation();
  }, []);

  return (
    <SafeAreaView className="items-center py-2">
      <Text className="text-2xl mb-2 px-4 font-semibold w-full  text-black">
        Select your address
      </Text>
      <View className="w-full px-4 flex-row items-center justify-center gap-2">
        <CommonTextInput
          viewClassNames="mt-4 w-full flex-1"
          placeholder="Search Location"
          variant={"default"}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <View className="pt-3">
          <MagnifyingGlassCircleIcon
            onPress={() => {
              searchPlace();
            }}
            color={"#00CCBB"}
            height={35}
            width={35}
          />
        </View>
      </View>
      <MapView
        showsCompass={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsTraffic={true}
        showsScale={true}
        ref={mapRef}
        followsUserLocation={true}
        toolbarEnabled={true}
        initialRegion={{
          latitude: 22,
          longitude: 83,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onPress={(c) => {
          setCoords({
            lat: c.nativeEvent.coordinate.latitude,
            long: c.nativeEvent.coordinate.longitude,
          });
        }}
        className=" w-full mt-4 h-[75%]"
        mapType="terrain"
      >
        <Marker
          coordinate={{
            latitude: coords?.lat,
            longitude: coords?.long,
          }}
          title={"You"}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <View className="px-4 w-full">
        <Button
          variant={"default"}
          title={""}
          className="w-full flex bg-primary-500 items-center justify-center mt-4"
        >
          <Text className="text-primary-50 font-semibold text-center">
            Confirm
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default addAddress;
