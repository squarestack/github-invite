import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.react,
 ...eslintConfig.next,
];
