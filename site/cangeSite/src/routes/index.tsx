import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
const styledDiv = {
  justifyContent: 'space-between',
  display: 'flex', 
  margin: '0',
  padding: '0'
}
  return (
    <> 
      <div style={styledDiv}> 
      <div> 
      <h1>
        Justin Cange - SITE UNDER CONSTRUCTION
      </h1>
      <ul>
      <li>
          I'm a college junior passionate about modern application development<br/> and tech infrastructure.
        </li>
        <li>
          I study <b>Computer Engineering at Columbia University</b>, in the class of 2024.<br/>
          I'm also the project lead for our school's Autonomous Vehicles Project! <br/>
          <br/>Additionally, I'm a volunteer tutor for Columbia One-To-One tutoring, and <br/> a member of the Rock Climbing Club.
        </li>
        </ul>
      </div>
      <img style={{
         borderRadius: "60%",
         maxWidth: "30%",
         height: '200px'
      }}
      src={'./pic.jpeg'}/>
      </div>
        <div style={styledDiv}> 
        <ul> 
        <li>
      In Summer '22, I was a SWE intern at <b> Compass</b>, working full-stack within the <br/>Tech Infrastructure division to help optimize the CI/CD pipeline.
     </li>
     </ul>
     <img style={{
         borderRadius: "10%",
         maxWidth: "30%",
         position: 'relative',
         right: '3%',
         marginBottom: '2%',
         height: '100px'
      }}
      src={'./compass.png'}/> 
      </div>

      <div style={styledDiv}> <div>  <ul> 
        <li>
          Next summer, I'll be working at Flatiron Health in NYC!
        </li>
        <li>
          To see some examples of what I work on in my spare time, view my Github at <a style={{textDecoration:'none'}} href="https://github.com/justincange"> this link.</a>
        </li>
        </ul>
        </div>
     
      <img style={{
       borderRadius: "10%",
       maxWidth: "30%",
       position: 'relative',
       height: '80px'
      }}
      src={'./flatiron.png'}/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Justin Cange',
};
