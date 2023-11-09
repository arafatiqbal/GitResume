<script lang="ts">
</script>

<form method="POST">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Hello there</h1>
				<p class="py-6">
					Enter your github username to generate a portfolio based on your profile README.md
				</p>
				<input
					type="text"
					name="userName"
					placeholder="Ex: arafatiqbal"
					class="input input-bordered input-lg w-full max-w-xs mb-5"
				/>
				<button data-sveltekit-preload-data type="submit" class="btn btn-primary"
					>Get Started</button
				>
			</div>
		</div>
	</div>
</form>
