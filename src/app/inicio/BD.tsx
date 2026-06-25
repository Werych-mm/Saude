import { Stack } from "expo-router";
import { useEffect } from "react";
import { initializeDatabase } from "@/database/database";

export default function Layout() {
    useEffect(() => {
        initializeDatabase();
    }, []);

    return <Stack />;
}