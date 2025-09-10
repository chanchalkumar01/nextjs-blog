"use server";

import {getApiUrl} from "@/lib/url";

export async function getBlogData() {
    // Server ke andar fetch
    const apiUrl = getApiUrl('/api/getBlogs');
    const response = await fetch(apiUrl, {
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
    });


    // const res = await fetch("/api/getBlogs", { cache: "no-store" });
    // const data = await res.json();
    return await response.json();
}
