module.exports = {
    "globals": {
        "define": true
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-warning-comments": [
            1,
            {
                "terms": ["todo", "fixme"],
                "location": "anywhere"
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error"
    },
    "plugins": [
        "html",
        "react",
        "eslint-plugin-react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    }
};
