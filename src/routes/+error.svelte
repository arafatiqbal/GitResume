<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<img alt="404" src="../error.svg" />

			<h1 class="text-5xl font-bold">{$page?.status}</h1>
			<p class="py-6">
				{$page?.error?.message}
			</p>
			<a href="/">
				<button class="btn btn-primary">Go Back</button>
			</a>
		</div>
	</div>
</div>
