import {
    LuLayoutDashboard,
    LuWalletMinimal,
    LuLogOut,
    LuCoins ,
} from "react-icons/lu";

import { FaRupeeSign } from "react-icons/fa";

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard"
    },
    {
        id: "02",
        label: "Income",
        icon: LuWalletMinimal,
        path: "/income"
    },
    {
        id: "03",
        label: "Expense",
        icon: LuCoins ,
        path: "/expense"
    },
    {
        id: "04",
        label: "Logout",
        icon: LuLogOut,
        path: "logout",
    },
]