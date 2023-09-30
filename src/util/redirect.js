import { NextResponse } from "next/server";

const redirectToAppStore = (req, res) => {
    // Check if the request path is the App Store link.
    if (req.url === "/appstore") {
        // Redirect the user to the App Store.
        res.redirect("https://apps.apple.com/us/app/your-app-name/id123456789");
    } else {
        // Continue with the request as normal.
        res.next();
    }
};

export default redirectToAppStore;
