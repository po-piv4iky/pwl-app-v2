import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
   loadPaths: [
    path.resolve(process.cwd(), "src/app/styles"),
   ],
  },
};

export default nextConfig;

