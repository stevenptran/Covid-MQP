<script>
	import { Router, Route, Link } from "svelte-routing";
	import Landing from "./components/Landing.svelte";
	import Questions from "./components/Questions.svelte";
	import Question from "./components/Question.svelte";
	import "svelte-material-ui/bundle.css";
  </script>
  
  <Router>
	<header>
	  <nav>
		<Link to="/">Home</Link>
		<Link to="/questions">Questions</Link>
	  </nav>
	</header>
	<main>
	  <Route path="/" component="{Landing}" />
	  <Route path="/questions" component="{Questions}" />
	  <Route path="/questions/:id" component="{Question}" />
	</main>
  </Router>
  