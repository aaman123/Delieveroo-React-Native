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
      {/* <CategoryCard title="Pizza" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Thai" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Indian" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Mexican" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" /> */}
    </ScrollView>
  );
};

export default Categories;
