import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "@/components/Ui/Button";
import CommonTextInput from "@/components/Ui/CommonTextInput";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

const AddDocument = () => {
  const [dish, setDish] = useState({
    name: "",
    price: 0,
    short_description: "",
    image: "",
  });
  const [open, setOpen] = useState(false); // Manages the open/close state of the dropdown

  const [openRestaurantList, setOpenRestaurantList] = useState(false); // Manages the open/close state of the dropdown
  const [allDishes, setAllDishes] = useState<any[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);
  const [category, setCategory] = useState({ name: "", image: "" });
  const [selectedDishes, setSelectedDishes] = useState<any[]>([]);

  const [featuredCategory, setFeaturedCategory] = useState({
    name: "",
    short_description: "",
    restaurants: [],
  });
  const [selectedRestaurants, setSelectedRestaurants] = useState<any[]>([]);
  const [restaurant, setRestaurant] = useState({
    name: "",
    rating: "",
    address: "",
    short_description: "",
    lat: "",
    long: "",
    categoryId: "",
    image: "",
    dishes: [] as string[],
  });

  useEffect(() => {
    (async () => {
      try {
        const dishesColRef = collection(db, "dishes");
        const restaurantsColRef = collection(db, "restaurants");
        const dishesResponse = await getDocs(dishesColRef);

        const restaurantsResponse = await getDocs(restaurantsColRef);
        const tempDishes: any[] = [];
        dishesResponse.docs.forEach((documentRef) => {
          tempDishes.push({ ...documentRef.data(), id: documentRef.id });
        });
        const tempRestaurants: any[] = [];
        restaurantsResponse.docs.forEach((documentRef) => {
          tempRestaurants.push({ ...documentRef.data(), id: documentRef.id });
        });
        setAllRestaurants(tempRestaurants);
        setAllDishes(tempDishes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleCategorySubmit = async () => {
    if (!category.name || !category.image) return;
    await addDoc(collection(db, "categories"), { ...category });
    setCategory({ name: "", image: "" });
  };
  const handleSubmit = async () => {
    try {
      if (!dish.name || !dish.price || !dish.short_description || !dish.image) {
        return;
      }
      await addDoc(collection(db, "dishes"), {
        name: dish.name,
        price: dish.price,
        short_description: dish.short_description,
        image: dish.image,
      });
      setDish({
        name: "",
        price: 0,
        short_description: "",
        image: "",
      });
    } catch (error) {
      console.log("Error ", error);
    }
  };
  const handleFeaturedCategorySubmit = async () => {
    const finalObj = { ...featuredCategory, restaurants: selectedRestaurants };
    try {
      if (
        !finalObj.name ||
        !finalObj.short_description ||
        finalObj.restaurants.length == 0
      ) {
        return;
      }
      await addDoc(collection(db, "featuredCategory"), {
        ...finalObj,
      });
      setSelectedRestaurants([]);
      setFeaturedCategory({
        name: "",
        short_description: "",
        restaurants: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestaurantSubmit = async () => {
    console.log("selectedDishes", selectedDishes);
    const finalObj = { ...restaurant, dishes: selectedDishes };
    try {
      if (
        !finalObj.name ||
        !finalObj.rating ||
        !finalObj.short_description ||
        !finalObj.image ||
        !finalObj.categoryId ||
        !finalObj.address ||
        finalObj.dishes.length === 0
      ) {
        return;
      }
      await addDoc(collection(db, "restaurants"), {
        ...finalObj,
      });
      setSelectedDishes([]);
      setRestaurant({
        name: "",
        rating: "",
        address: "",
        categoryId: "",
        short_description: "",
        lat: "",
        long: "",
        image: "",
        dishes: [],
      });
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <SafeAreaView className="px-3 py-10">
      <ScrollView className="gap-10">
        <View className="gap-4">
          <Text className="text-2xl font-semibold">Dish</Text>

          {/* Dish Form Inputs */}
          <CommonTextInput
            variant={"default"}
            placeholder="name"
            value={dish.name}
            onChangeText={(text) => setDish({ ...dish, name: text })}
          />

          <CommonTextInput
            variant={"default"}
            placeholder="price"
            value={String(dish.price)}
            onChangeText={(text) => setDish({ ...dish, price: Number(text) })}
          />

          <CommonTextInput
            variant={"default"}
            placeholder="short_description"
            value={dish.short_description}
            onChangeText={(text) =>
              setDish({ ...dish, short_description: text })
            }
          />

          <CommonTextInput
            variant={"default"}
            value={dish.image}
            placeholder="image"
            onChangeText={(text) => setDish({ ...dish, image: text })}
          />

          <View className="w-fit items-center justify-center">
            <Button
              onPress={() => handleSubmit()}
              variant={"default"}
              title={""}
              className="w-fit"
            >
              <Text className="text-primary-500 font-semibold">Submit</Text>
            </Button>
          </View>
        </View>
        <View className="gap-4">
          <Text className="text-2xl font-semibold">Category</Text>

          {/* Dish Form Inputs */}
          <CommonTextInput
            variant={"default"}
            placeholder="name"
            value={category.name}
            onChangeText={(text) => setCategory({ ...category, name: text })}
          />

          <CommonTextInput
            variant={"default"}
            value={category.image}
            placeholder="image"
            onChangeText={(text) => setCategory({ ...category, image: text })}
          />

          <View className="w-fit items-center justify-center">
            <Button
              onPress={() => handleCategorySubmit()}
              variant={"default"}
              title={""}
              className="w-fit"
            >
              <Text className="text-primary-500 font-semibold">Submit</Text>
            </Button>
          </View>
        </View>
        <View className="gap-4">
          <Text className="text-2xl font-semibold">Restaurant</Text>

          {/* Restaurant Form Inputs */}
          <CommonTextInput
            variant={"default"}
            placeholder="name"
            value={restaurant.name}
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, name: text })
            }
          />
          <CommonTextInput
            variant={"default"}
            placeholder="categoryId"
            value={restaurant.categoryId}
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, categoryId: text })
            }
          />
          <CommonTextInput
            variant={"default"}
            placeholder="short_description"
            value={restaurant.short_description}
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, short_description: text })
            }
          />

          <CommonTextInput
            variant={"default"}
            placeholder="lat"
            value={restaurant.lat}
            keyboardType="decimal-pad" // Ensure decimal input
            onChangeText={(text) => setRestaurant({ ...restaurant, lat: text })}
          />

          <CommonTextInput
            variant={"default"}
            placeholder="long"
            value={restaurant.long}
            keyboardType="decimal-pad" // Ensure decimal input
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, long: text })
            }
          />

          <CommonTextInput
            variant={"default"}
            placeholder="address"
            value={restaurant.address}
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, address: text })
            }
          />

          <CommonTextInput
            variant={"default"}
            placeholder="rating"
            value={restaurant.rating}
            keyboardType="decimal-pad" // Ensure decimal input
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, rating: text })
            }
          />
          <View className="w-[80%]">
            <DropDownPicker
              multiple={true}
              multipleText="%d dishes selected"
              placeholder="Select dishes"
              open={open}
              value={selectedDishes}
              items={allDishes.map((dish) => ({
                label: dish.name,
                value: dish.id,
              }))}
              maxHeight={1000}
              setOpen={setOpen}
              setValue={setSelectedDishes}
              setItems={setAllDishes}
            />
          </View>

          {/* Display Selected Dishes */}
          <View>
            <Text className="text-lg font-semibold">Selected Dishes:</Text>
            {selectedDishes.map((dishId) => {
              const dish = allDishes.find((d) => d.id === dishId);
              return (
                <Text key={dishId} className="text-gray-600">
                  {dish ? dish.name : "Unknown Dish"}
                </Text>
              );
            })}
          </View>

          <CommonTextInput
            variant={"default"}
            value={restaurant.image}
            placeholder="image"
            onChangeText={(text) =>
              setRestaurant({ ...restaurant, image: text })
            }
          />

          <View className="w-fit items-center justify-center">
            <Button
              onPress={() => handleRestaurantSubmit()}
              variant={"default"}
              title={""}
              className="w-fit"
            >
              <Text className="text-primary-500 font-semibold">Submit</Text>
            </Button>
          </View>
        </View>
        <View className="gap-4">
          <Text className="text-2xl font-semibold">Featured Category</Text>

          {/* Dish Form Inputs */}
          <CommonTextInput
            variant={"default"}
            placeholder="name"
            value={featuredCategory.name}
            onChangeText={(text) =>
              setFeaturedCategory({ ...featuredCategory, name: text })
            }
          />

          <CommonTextInput
            variant={"default"}
            placeholder="short_description"
            value={featuredCategory.short_description}
            onChangeText={(text) =>
              setFeaturedCategory({
                ...featuredCategory,
                short_description: text,
              })
            }
          />
          <View className="w-[80%]">
            <DropDownPicker
              multiple={true}
              multipleText="%d restaurants selected"
              placeholder="Select restaurants"
              open={openRestaurantList}
              value={selectedRestaurants}
              items={allRestaurants.map((restaurant) => ({
                label: restaurant.name,
                value: restaurant.id,
              }))}
              maxHeight={1000}
              setOpen={setOpenRestaurantList}
              setValue={setSelectedRestaurants}
              setItems={setAllRestaurants}
            />
          </View>

          {/* Display Selected Dishes */}
          <View>
            <Text className="text-lg font-semibold">Selected Restaurants:</Text>
            {selectedRestaurants.map((restaurantId) => {
              const restaurant = allRestaurants.find(
                (d) => d.id === restaurantId
              );
              return (
                <Text key={restaurantId} className="text-gray-600">
                  {restaurant ? restaurant.name : "Unknown Restaurant"}
                </Text>
              );
            })}
          </View>
          <View className="w-fit items-center justify-center">
            <Button
              onPress={() => handleFeaturedCategorySubmit()}
              variant={"default"}
              title={""}
              className="w-fit"
            >
              <Text className="text-primary-500 font-semibold">Submit</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDocument;
