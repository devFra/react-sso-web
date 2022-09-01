import { useAuthentication } from "../hooks/useAuth";

const Dashboard = () => {
    const { signOut } = useAuthentication();
    return <>
        <p>Walcome to dashboard</p>
        <button onClick={signOut}>signOut</button>
    </>
}

export default Dashboard;