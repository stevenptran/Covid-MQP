<script>
    import { Link } from "svelte-routing";
    import { List, ListItem } from "svelte-material-ui";
    import { questions } from "../stores";
    import Button from '@smui/button';
  </script>
  
  <main>
    <h1>Questions</h1>
    <List>
      {#each questions as {question, index}}
        <Link to={`/questions/${index + 1}`}>
          <ListItem>{index + 1}. {question}</ListItem>
        </Link>
      {/each}
    </List>
  </main>
  
  <style>
    main {
      padding: 2rem;
    }
  </style>
  