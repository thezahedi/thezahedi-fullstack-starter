<template>
    <div>
        <header
            class="fixed top-0 bg-white shadow-md z-50 w-full px-5 py-2 text-center justify-center">
            <div class="grid grid-cols-1 mx-auto" style="max-width: 1600px;">
                <div>
                    <router-link to="/"
                                 class="text-2xl text-gray-900 hover:text-gray-500 font-extrabold flex justify-center">
                        {{ $t('title') }}
                    </router-link>
                </div>
            </div>
        </header>

        <div class="mx-auto mt-16" style="max-width: 1600px;">
            <div class="bg-gray-50 p-4 border-8 rounded-b-3xl lg:rounded-2xl border-gray-200"
                 style="min-height: 400px;">
                <HelloWorld/>
            </div>

            <div class="text-center mt-4">{{ $t('madeWith') }} <span class="text-red-700">❤</span> {{ $t('by') }} <a
                href="https://go.saman.click" target="_blank"
                class="text-blue-500 hover:text-blue-900">{{ $t('samanZahedi') }}</a></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
