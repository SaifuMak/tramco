import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Poppins supports full range
    style: ["normal", "italic"],
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Inter supports full range
    style: ["normal"],
    display: "swap",
});
