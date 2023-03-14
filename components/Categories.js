import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard title="Pizza" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Thai" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Indian" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Mexican" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="Chinese" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Categories;
