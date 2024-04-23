function generateMealPlan() {
    // Collecting the personal information
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userGoal = document.getElementById("userGoal").value;

    // Collecting the meal plan
    const mondayBreakfast = document.getElementById("mondayBreakfast").value;
    const mondaySnack = document.getElementById("mondaySnack").value;
    const mondayLunch = document.getElementById("mondayLunch").value;
    const mondayDinner = document.getElementById("mondayDinner").value;
    
    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Generate the meal plan web page on the fly
    document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Weekly Meal Plan</title>
            <style>
                body { font-family: monospace; }
                h1 { text-align: center; }
            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan for ${userName}</h1>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Goal:</strong> ${userGoal}</p>

            <h2>Monday</h2>
            <p>Breakfast: ${mondayBreakfast}</p>
            <p>Snack: ${mondaySnack}</p>
            <p>Lunch: ${mondayLunch}</p>
            <p>Dinner: ${mondayDinner}</p>
            
            <!-- Repeat for other days (Tuesday - Sunday) -->
        </body>
        </html>
    `);
}
