module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './frontend/**/*.js',
        './frontend/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            dana: ['dana', 'sans-serif'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
