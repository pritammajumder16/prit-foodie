import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "@/services/sanity";
import { ICategory } from "@/interfaces/interfaces";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const response = await getCategories();
      setCategories(response);
    })();
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
