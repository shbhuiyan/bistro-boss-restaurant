import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems , setMenuItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/menu")
        .then(res => setMenuItems(res.data))
    },[])

    return menuItems;
};

export default useMenu;
