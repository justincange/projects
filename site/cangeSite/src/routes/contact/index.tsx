import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
  return (
    <div>
      <h1>
        Contact Info 
      </h1>

      <div>
        <h4> Feel free to reach out!</h4>
        <p> Email: jc5525@columbia.edu <br/></p>

        <a style={{textDecoration: 'none'}}href="https://www.linkedin.com/in/justin-cange/">
          
         LinkedIn <img style={{
         position: 'relative',
         top: '4px',
         maxWidth: "auto",
         height: '20px'
      }}
      src={'./linkedin.png'}/></a>
        
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
