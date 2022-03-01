/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => {
        return [
            {
                source: "/some-other-app",
                destination:
                    "https://nextjs-multi-zone-app-example.herokuapp.com/",
            },
        ];
    },
};

module.exports = nextConfig;
