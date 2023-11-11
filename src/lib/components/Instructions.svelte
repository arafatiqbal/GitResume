<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Get the container element
		let btnContainer = document.getElementById('accordion');
		// Get all buttons with class="btn" inside the container
		if (btnContainer) {
			let btns = btnContainer.getElementsByClassName('collapse-arrow');
			// Loop through the buttons and add the active class to the current/clicked button
			for (let i = 0; i < btns.length; i++) {
				btns[i].addEventListener('click', function (this: HTMLElement) {
					let current = document.getElementsByClassName('bg-secondary-focus');
					current[0].setAttribute('class', 'collapse collapse-arrow mb-2 bg-secondary');
					this.setAttribute('class', 'collapse collapse-arrow mb-2 bg-secondary-focus');
				});
			}
		}
	});
</script>

<div id="accordion">
	<div class="collapse collapse-arrow bg-secondary-focus mb-2">
		<input type="radio" name="my-accordion-2" checked={true} />
		<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
		<div class="collapse-content">
			<p>hello</p>
		</div>
	</div>
	<div class="collapse collapse-arrow bg-secondary mb-2">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
		<div class="collapse-content">
			<p>hello</p>
		</div>
	</div>
	<div class="collapse collapse-arrow bg-secondary mb-2">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
		<div class="collapse-content">
			<p>hello</p>
		</div>
	</div>
</div>
