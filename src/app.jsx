import "./app.css";
import "./style.scss";

export function App() {
  return (
    <>
      <div className="card">
        <nav>
          {/* use the class list to remove bullet points and align items side-by-side */}
          <ul>
            <li>Aurore</li>
            <li>VALLEIX</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="image">
          <img src="./src/assets/avatar.jpg" alt="avatar" />

          {/* use the class title to change the title color */}
          <h1>let's go for the week!</h1>
        </div>
        <div className="text">
          <p>A vos côtés pour traverser les emotions de cette semaine !</p>
          <p>Mais pour toute aide technique surtout ne me contacter pas !</p>
        </div>
      </div>
    </>
  );
}
