// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // makes static HTML files
  images: { unoptimized: true }, // required for static hosting
  reactCompiler: true,
};

export default nextConfig;