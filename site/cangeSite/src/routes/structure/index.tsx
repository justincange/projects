import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
  return (
    <div>
      <h1>
        How was this website made?
      </h1>
      <h4> <b> Application Code </b></h4>
      <ul> <li> The website was built with Qwik.js and Node.js I used Qwik instead of more popular frameworks like Next 
        or Express as it claims to have an o(1) render time based on its lazy-loading concept, which hydrates pages asynchronously and only when needed to ensure fastest possible render times.</li></ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Justin Cange',
};
