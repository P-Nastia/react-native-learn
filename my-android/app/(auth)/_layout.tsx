import {Slot} from "expo-router";
import "../../global.css";
import {View} from "react-native";
import AuthTabs from "@/components/auth/authTabs";

export default function AuthLayout() {

    return (
        <View className="flex-1 mb-1-">
            <Slot/>
            <AuthTabs/>
        </View>
    );
}
