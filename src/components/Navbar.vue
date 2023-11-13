<template>
	<div class="bg-gray-700 fixed w-full z-50">
		<nav class="
			  container
			  px-6
			  py-8
			  mx-auto
			  md:flex md:justify-between md:items-center
			">
			<div class="flex items-center justify-between">
				<!--<router-link to="/" class="
				  text-xl
				  font-bold
				  text-gray-100
				  md:text-2xl
				  hover:text-indigo-400
				">Logo
				</router-link>-->
				<div class="flex">
					<a href="https://www.linkedin.com/in/isaiah-thomas-galay-376990175/" target="_blank">
						<!-- Linkedin -->
						<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="white"
						viewBox="0 0 24 24">
						<path
							d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
						</svg>
					</a>
				</div>
				<!-- Mobile menu button -->
				<div @click="toggleNav" class="flex md:hidden">
					<button type="button" class="
					text-gray-100
					hover:text-gray-400
					focus:outline-none focus:text-gray-400
				  ">
						<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
							<path fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
							</path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<ul :class="showMenu ? 'flex' : 'hidden'" class="
				flex-col
				mt-8
				space-y-4
				md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
			  ">
				<li class="text-gray-100 hover:text-indigo-400"><a href="#experience">Experience</a></li>
				<li class="text-gray-100 hover:text-indigo-400"><a href="#projects">Projects</a></li>
				<li class="text-gray-100 hover:text-indigo-400"><a href="#education">Education</a></li>
				<li class="text-gray-100 hover:text-indigo-400">
					<a v-bind:href="resumeLink" target="_blank"
                        class="px-7 py-3 md:px-9 md:py-3 m-1 font-medium md:font-semibold bg-gray-50 outline outline-offset-0 outline-1 outline-gray-700 hover:outline-gray-50 text-gray-700 text-sm rounded-md hover:bg-gray-700 hover:text-gray-50 transition ease-linear duration-500">
                        View CV
                    </a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
import { ref } from 'vue';
import resume from '/src/assets/portfolio/ISAIAH THOMAS GALAY_RESUME.pdf'

export default {
	setup() {
		let showMenu = ref(false);
		const toggleNav = () => (showMenu.value = !showMenu.value);
		return { showMenu, toggleNav };
	},
	data() {
		return {
			resumeLink : resume
		}
	}
};
</script>