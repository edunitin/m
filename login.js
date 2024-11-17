document.addEventListener("DOMContentLoaded", () => {
    // Select the forms
    const adminForm = document.querySelector("form:nth-of-type(1)");
    const userForm = document.querySelector("form:nth-of-type(2)");

    // Handle Admin Login
    adminForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const adminGoogleID = document.getElementById("google-id").value;
        const adminPassword = document.getElementById("password").value;

        const payload = {
            googleID: adminGoogleID,
            password: adminPassword,
        };

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Admin Login Successful!");
                console.log("Admin Data:", result);
                // Redirect to admin dashboard
                window.location.href = "/admin-dashboard";
            } else {
                alert("Admin Login Failed: " + result.message);
            }
        } catch (error) {
            console.error("Error logging in as admin:", error);
        }
    });

    // Handle User Login
    userForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const payload = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (response.ok) {
                alert("User Login/Register Successful!");
                console.log("User Data:", result);
                // Redirect to user dashboard
                window.location.href = "/user-dashboard";
            } else {
                alert("User Login/Register Failed: " + result.message);
            }
        } catch (error) {
            console.error("Error logging in/registering as user:", error);
        }
    });
});
