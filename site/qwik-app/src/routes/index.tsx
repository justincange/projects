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
          I'm an full-stack engineer who's passionate about  <br/> building quality products 
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

      <h2>Commands</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static-node</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Community</h2>

      <ul>
        <li>
          <span>Questions or just want to say hi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li>
          <span>Follow </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li>
          <span>Open issues and contribute on </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            Github
          </a>
        </li>
        <li>
          <span>Watch </span>
          <a href="https://qwik.builder.io/media/" target="_blank">
            Presentations, Podcasts, Videos, etc.
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
