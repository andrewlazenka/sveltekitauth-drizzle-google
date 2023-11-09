<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client'
	import { page } from '$app/stores';

	const displayName = $page.data?.session?.user?.name ?? 'User';
</script>

{#if $page.data?.session}
	<p>Hello {displayName}</p>
	<button type="button" on:click={() => signOut()}>Sign Out</button>
{:else}
	<p>You're not signed in yet</p>
	<button type="button" on:click={() => signIn("google")}>Sign In</button>
{/if}
