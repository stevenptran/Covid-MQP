import App from './App.svelte';
import "svelte-material-ui/dist/index.css";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
