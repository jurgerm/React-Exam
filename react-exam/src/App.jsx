import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Nav } from "./organisms/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Container } from "./ui/Container";
import { Skills } from "./pages/Skills";
import { Add } from "./pages/Add";
import { AuthProvider } from "./components/AuthProvider";
import { RequireAuth } from "./components/RequireAuth";
import { MessageProvider } from "./components/MessageProvider";
import { MessageContainer } from "./organisms/MessageContainer";

function App() {
  return (
    <AuthProvider>
      <MessageProvider>
        <Container className="mt-4">
          <Nav />

          <MessageContainer />

          <Routes>

            <Route
              path="/"
              element={
                <RequireAuth>
                  <Skills />
                </RequireAuth>
              }
            />

            <Route path="/add" element={
              <RequireAuth>
                <Add />
              </RequireAuth>
            } />

            <Route path="/login" element={<Login />} />

            <Route path="/register"
              element={
                <Register />
              } />

          </Routes>

        </Container>
      </MessageProvider>
    </AuthProvider>
  );
}

export default App;
;
