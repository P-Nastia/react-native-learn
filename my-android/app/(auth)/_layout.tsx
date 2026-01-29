import { Stack } from "expo-router";
import "../../global.css";
import {useSystemBars} from "@/hooks/useSystemBars";

export default function AuthLayout() {
    useSystemBars();

    return (
        <Stack>
        </Stack>
    );
}
