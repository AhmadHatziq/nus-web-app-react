import "./styles.css";
import Profile from "./Profile";

export default function App() {
  
  // Data taken from https://random-data-api.com/api/v2/users?size=3
  const people = [
    {
      id: 1193,
      first_name: "Coletta",
      last_name: "Spinka",
      email: "coletta.spinka@email.com",
      avatar: "https://robohash.org/voluptatemillumsunt.png?size=300x300",
      phone_number: "+351 1-215-083-8787 x1674",
      date_of_birth: "1982-04-19",
      employment: {
        title: "Product Design Officer",
        key_skill: "Teamwork"
      }
    },
    {
      id: 7268,
      first_name: "Jimmie",
      last_name: "D'Amore",
      email: "jimmie.d'amore@email.com",
      avatar: "https://robohash.org/voluptatemillumsunt.png?size=300x300",
      phone_number: "+249 (156) 785-4858 x9393",
      date_of_birth: "1980-12-21",
      employment: {
        title: "Healthcare Developer",
        key_skill: "Self-motivated"
      }
    },
    {
      id: 6238,
      first_name: "Jackeline",
      last_name: "Kautzer",
      email: "jackeline.kautzer@email.com",
      avatar: "https://robohash.org/voluptatemillumsunt.png?size=300x300",
      phone_number: "+506 307.291.8181 x6275",
      date_of_birth: "1991-06-05",
      employment: {
        title: "Product Government Architect",
        key_skill: "Networking skills"
      }
    }
  ];

  const data = people.map((item) => {
    return <Profile person={item} />;
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Profiles:</h2>

      <ul>
        <div>{data}</div>
      </ul>
    </div>
  );
}
