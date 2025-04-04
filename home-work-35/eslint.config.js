export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                require: 'readonly',
                module: 'readonly',
                process: 'readonly'
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: true
        },
        rules: {
            'no-unused-vars': 'warn'
        }
    }
];