import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
export default component$(() => {
const styledDiv = {
  justifyContent: 'space-between',
  display: 'flex', 
  margin: '0 auto',
  padding: '10px 0'
}

  return (
    <div>
      <div style={styledDiv}> 
      <h1>
        Justin Cange 
      </h1>
      <img style={{
         borderRadius: "60%",
         maxWidth: "30%",
         height: 'auto'
      }}
      src={'./pic.jpeg'}/>
      </div>
      <div style={{marginTop:'-25%'}}> 
      <ul>
      <li>
          I'm an software engineer highly interested in  <br/> app development and modern tech infrastructure.
        </li>
        <li>
          I study Computer Engineering and Economics at <br/> Columbia University, in the class of 2024.
        </li>
        
        <li>
          Former intern at Compass, working full-stack within the <br/> Tech Infrastructure division.
        </li>
        <li>
          Next summer, I'll be working at Flatiron Health in NYC!
        </li>
        <li>
          To see some examples of what I work on in my spare time, view my Github at <a style={{textDecoration:'none'}} href="https://github.com/justincange"> this link.</a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower">
        Cool feature!
      </Link>
    </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
