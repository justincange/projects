import { component$ } from '@builder.io/qwik';
export default component$(() => {
  const styledDiv = {
    justifyContent: 'space-between',
    display: 'flex', 
    margin: '0',
    padding: '0'
  }
  return (
    <div>
      <h1>
        About me 👋 
      </h1>
      <div style={styledDiv}>
        <div> 
        <h3> Where am I from?</h3>
        <p> I grew up on Long Island, New York, in Nassau County. <br/> I loved math and physics in high school, and outside of school I played football and practiced Brazillian Jiu Jitsu.  </p>
        </div>
        <img style={{
         maxWidth: "40%",
         height: '200px'
      }}
      src={'./nassau.jpeg'}/>
      </div>
    </div>
  );
});
