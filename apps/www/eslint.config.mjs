// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt({
    plugins: {
        prettier,
    },
    rules: {
        ...pluginPrettierRecommended.rules,
        "vue/require-default-prop": "off",
        "vue/no-multiple-template-root": "off",
        "vue/multi-word-component-names": "off",

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
