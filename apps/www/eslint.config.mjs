// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt({
    plugins: {
        prettier,
    },
    rules: {
        // включить prettier как ESLint правило
        ...pluginPrettierRecommended.rules,

        // твои кастомные правила Prettier
        "prettier/prettier": [
            "error",
            {
                semi: true,
                trailingComma: "all",
                singleQuote: false,
                printWidth: 180,
                tabWidth: 4,
                arrowParens: "avoid",
            },
        ],
    },
});
