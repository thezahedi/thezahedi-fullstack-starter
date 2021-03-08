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
        extend: {
            float: ['direction'],
            clear: ['direction'],
            objectPosition: ['direction'],
            inset: ['direction'],
            padding: ['direction'],
            margin: ['direction'],
            textAlign: ['direction'],
            backgroundPosition: ['direction'],
            backgroundImage: ['direction'],
            borderRadius: ['direction'],
            borderWidth: ['direction'],
        },
    },
    plugins: [
        require('tailwindcss-dir')()
    ],
}
