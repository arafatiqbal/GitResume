<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

{#if data}
	{@html data.readmeText}
{/if}
