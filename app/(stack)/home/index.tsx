import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <View className="mb-2">
          <CustomButton
            onPress={() => router.push("/products")}
            color="primary"
          >
            Productos
          </CustomButton>
        </View>
        <View className="mb-2">
          <CustomButton
            onPress={() => router.push("/profile")}
            color="secondary"
          >
            Profile
          </CustomButton>
        </View>

        <View className="mb-2">
          <CustomButton
            onPress={() => router.push("/settings")}
            color="tertiary"
          >
            Ajustes
          </CustomButton>
        </View>

        <Link href={"/products"} asChild>
          <CustomButton
            variant="text-only"
            onPress={() => router.push("/products")}
            color="primary"
          >
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
