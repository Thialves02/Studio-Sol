module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        quotes: ["error","single"],
        indent: ["error",4],
        "comma-spacing": ["error",{ before:false, after:true }]
    }
}
