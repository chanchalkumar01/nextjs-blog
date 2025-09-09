export function getBaseUrl() {
    if (process.env.VERCEL_ENV === "production") {
        const url = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
        if (!url) throw new Error("Missing VERCEL URL environment variable");
        return url.startsWith("http") ? url : `https://${url}`;
    }

    return "http://localhost:3000";
}

export function getApiUrl(path = "") {
    const baseUrl = getBaseUrl();
    // return `${baseUrl}${path}`;
    return `https://nextjs-blog-chanchalkumar01s-projects.vercel.app${path}`;
}
