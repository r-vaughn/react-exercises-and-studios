function Trees(props) {
    const isEvergreen = props.isEvergreen;
    const name = props.name;
    if (isEvergreen) {
      return <h1>{name} is an Evergreen tree</h1>;
    }
   }
   
   export default function App() {
    return (
      <div className="App">
        <Trees isEvergreen={true} name="Silver Fir" />
        <Trees isEvergreen={false} name="Sweet Gum" />
      </div>
    );
   }

   console.log(App)