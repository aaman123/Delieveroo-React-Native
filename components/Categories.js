import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import client from "../sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await client.fetch(
        `
        *[_type == "category"] {
          ...
        }
        `
      );

      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            title={category.name}
            imgUrl={category.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
