import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
  return (
    <div>
      <h1>
        How was this website made?
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Justin Cange',
};
