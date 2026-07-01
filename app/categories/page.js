import { Suspense } from "react";
import Categories from "@/components/filters/categories";

export default function page() {
    return (
        <Suspense>
            <Categories />
        </Suspense>
    );
}