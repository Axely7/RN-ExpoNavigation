import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href={"/products"} asChild>
          <CustomButton
            onPress={() => router.push("/products")}
            color="primary"
          >
            Productos de Link
          </CustomButton>
        </Link>
        <CustomButton onPress={() => router.push("/products")} color="primary">
          Productos
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
