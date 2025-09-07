
// lib/url.js
export function getBaseUrl() {
    // Vercel production environment
    if (process.env.VERCEL_ENV === 'production') {
        return `${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    // Vercel preview environment
    // if (process.env.VERCEL_URL) {
    //     return `https://${process.env.VERCEL_URL}`;
    // }

    // Local development
    return 'http://localhost:3000';
}

export function getApiUrl(path = '') {
    const baseUrl = getBaseUrl();
    return `${baseUrl}${path}`;
}