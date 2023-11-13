<template>
    <div>
        <section class="py-10 md:py-16 ">
        <div class="container max-w-screen-xl mx-auto px-4 mt-36 md:mt-24 mb-24">

            <div class="text-center">
                <div class="flex justify-center mb-8">
                    <img src="/src/assets/img/portfolio.jpeg" alt="Image" class="rounded-full w-[280px]">
                </div>

                <h1 class="font-questrial font-extrabold text-gray-900 text-4xl md:text-7xl leading-none mb-1">Isaiah Thomas Galay</h1>
                <h6 class="font-questrial font-light text-gray-600 text-lg md:text-2xl mb-40 ">I am a Web Developer</h6>

                <!--<p class="font-normal text-gray-600 text-md md:text-xl mb-16 font-questrial">I have a passion for learning.</p>-->

                <div class="flex justify-center flex-wrap">
                    <a href="mailto:tomgalay@gmail.com"
                        class="px-7 py-3 md:px-9 md:py-3 m-1 font-medium md:font-semibold bg-gray-700 outline outline-offset-0 outline-1 outline-gray-50 text-gray-50 text-sm rounded-lg hover:bg-gray-50 hover:outline-gray-700 hover:text-gray-700 transition ease-linear duration-500">
                        Contact Me
                    </a>

                    <a v-bind:href="resumeLink" target="_blank"
                        class="px-7 py-3 md:px-9 md:py-3 m-1 font-medium md:font-semibold bg-gray-50 outline outline-offset-0 outline-1 outline-gray-700 text-gray-700 text-sm rounded-md hover:bg-gray-700 hover:text-gray-50 transition ease-linear duration-500">
                        View CV
                    </a>
                </div>

            </div>

        </div>
    </section>
    </div>
    
</template>

<script>
import resume from '/src/assets/portfolio/ISAIAH THOMAS GALAY_RESUME.pdf'
export default {
	data() {
		return {
			resumeLink : resume
		}
	}
};
</script>