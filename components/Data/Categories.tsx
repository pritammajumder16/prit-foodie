import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { ICategory } from "@/interfaces/interfaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const categoriesRef = collection(db, "categories");
      const categoriesResponse = await getDocs(categoriesRef);
      const tempCategories: any[] = [];
      categoriesResponse.docs.forEach((documentRef) => {
        tempCategories.push({
          ...documentRef.data(),
          id: documentRef.id,
        });
      });
      setCategories(tempCategories);
    })();
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories?.map((category) => (
        <CategoryCard
          key={category.id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
