module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", 
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "warn",
        "no-unused-vars": "warn",
        "no-console": 0
    }
};