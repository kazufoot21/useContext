import { UserAuth } from "./components/userAuth/userAuth";
import { AuthProvider } from "./context/AuthContext";
import "./styles.css";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>use context</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}
