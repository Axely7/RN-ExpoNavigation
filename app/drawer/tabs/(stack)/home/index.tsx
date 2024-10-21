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
            onPress={() => router.push("/drawer/tabs/products")}
            color="primary"
          >
            Productos
          </CustomButton>
        </View>
        <View className="mb-2">
          <CustomButton
            onPress={() => router.push("/drawer/tabs/profile")}
            color="secondary"
          >
            Profile
          </CustomButton>
        </View>

        <View className="mb-2">
          <CustomButton
            onPress={() => router.push("/drawer/tabs/settings")}
            color="tertiary"
          >
            Ajustes
          </CustomButton>
        </View>

        <Link href={"/drawer/tabs/profile"} asChild>
          <CustomButton variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
