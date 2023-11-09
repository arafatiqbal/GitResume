<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	console.log(data.profileData);
</script>

{#if data}
	<img src={`https://ghchart.rshah.org/${data.username}`} alt="Name Your Github chart" />

	<div class="mockup-window border bg-base-300 m-10">
		<h1>{data.profileData.name} - Resume</h1>
		<div class="flex justify-center px-4 py-16 bg-base-200">
			<div class="avatar">
				<div class="w-24 rounded">
					<img src={data.profileData.avatar_url} alt="user profile" />
				</div>
			</div>
			{@html data.content}
		</div>
	</div>
{/if}
