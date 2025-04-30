import eslintConfig from "@igorkowalczyk/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
 // prettier
 eslintConfig.base,
 eslintConfig.react,
 eslintConfig.next,
 eslintConfig.node,
 eslintConfig.typescript,
]);
