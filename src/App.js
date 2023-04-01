import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={100}
          messages={220}
          shares={340}
          name="Jose"
          description="Gente boa"
          music="patience - Guns 'n roses"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={555}
          messages={654}
          shares={1}
          name="Pedro"
          description="Gato Massa"
          music="Pedra Leticia"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
