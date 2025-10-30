import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/userSlice";

export default function Profile() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>User Profile</h2>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <button onClick={() => dispatch(clearUser())}>Logout</button>
                </>
            ) : (
                <button
                    onClick={() => dispatch(setUser({ name: "Micky Love", email: "micky@example.com" }))}
                >
                    Login
                </button>
            )}
        </div>
    );
}
