<script>
  import Button from '@smui/button';
  import { Link } from "svelte-routing";
</script>

<main>
  <h1>Unique Answers from COVID-19 Datasets</h1>
  <div>
    <Link to="/questions">
      <Button raised>Questions</Button>
    </Link>
    <Button
      raised
      href="https://github.com/stevenptran/Covid-MQP"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </Button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
</style>
