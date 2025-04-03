import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Dashboard from "./pages/Dashboard";
// import Analytics from "./pages/Analytics";
// import Team from "./pages/Team";
// import Settings from "./pages/Settings";
// import Profile from "./pages/Profile";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Main layout wrapper for all pages */}
                <Route element={<SidebarLayout />}>
                    {/* Redirect root to dashboard */}
                    <Route
                        path="/"
                        element={<Navigate to="/dashboard" replace />}
                    />

                    {/* All your pages */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/analytics" element={<Analytics />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} /> */}

                    {/* 404 Handling */}
                    <Route
                        path="*"
                        element={<Navigate to="/dashboard" replace />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
