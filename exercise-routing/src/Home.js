import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      This is the Home Page
      <button
        onClick={() => {
          navigate("/programming");
        }}
      >
        Go to / programming
      </button>
    </div>
  );
}
