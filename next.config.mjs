// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Tumhari API routes
                destination: '/api/:path*' // Same hi rahegi
            },
            {
                source: '/:path*', // Baki sab routes
                destination: '/frontend/:path*' // Tumhara hidden folder
            }
        ]
    }
}

export default nextConfig