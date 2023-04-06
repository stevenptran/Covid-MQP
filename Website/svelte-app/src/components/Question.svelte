<script>
    import { onMount, onDestroy } from "svelte";
    import { routeParams } from "svelte-routing/Router.svelte";
    import { questions } from "../stores";
  
    let questionId;
    let question;
  
    let unsubscribeQuestions;
    let unsubscribeRouteParams;
  
    onMount(() => {
      unsubscribeQuestions = questions.subscribe((qs) => {
        question = qs[questionId - 1]?.question || "Not found";
      });
  
      unsubscribeRouteParams = routeParams.subscribe((params) => {
        questionId = params.id;
        question = $questions[questionId - 1]?.question || "Not found";
      });
    });
  
    onDestroy(() => {
      unsubscribeQuestions();
      unsubscribeRouteParams();
    });
  </script>
  
  <main>
    <h1>Question {questionId}</h1>
    <p>{question}</p>
  </main>
  