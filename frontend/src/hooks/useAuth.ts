import { useState } from 'react';

type User = {
    id: string;
    name: string;
    email?: string;
} | null;

// Lightweight auth hook for static/informational site.
// Returns a hardcoded demo user and provides fake login/logout functions.
const useAuth = () => {
    const [user, setUser] = useState<User>({ id: 'demo', name: 'Visitante' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (_credentials?: any) => {
        setLoading(true);
        // Simulate async login and set a demo user
        await new Promise((res) => setTimeout(res, 200));
        setUser({ id: 'demo', name: 'Usuario Demo', email: 'demo@codesmart.co' });
        setLoading(false);
        setError(null);
    };

    const logout = async () => {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 100));
        setUser(null);
        setLoading(false);
    };

    return { user, loading, error, login, logout };
};

export default useAuth;