<template>
    <div>
        <header class="fixed top-0 bg-white shadow-md z-50 w-full px-5 py-2 grid grid-cols-1 text-center justify-center">
            <div class="my-auto">
                <router-link to="/" class="text-2xl text-gray-900 hover:text-gray-500 font-extrabold flex justify-center">
                    استارتر پک سامان زاهدی
                </router-link>
            </div>
        </header>

        <div class="mx-auto mt-16" style="max-width: 1600px;">
            <div class="bg-gray-50 p-4 border border-gray-200 rounded-lg" style="min-height: 400px;">
                <HelloWorld/>
            </div>

            <div class="text-center mt-4">ساخته شده با <span class="text-red-700">❤</span> توسط <a href="https://go.saman.click" target="_blank" class="text-blue-500 hover:text-blue-900">سامان زاهدی</a></div>
        </div>
    </div>
</template>
