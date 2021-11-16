import React from "react"
import About from "./about"
import Items from "./items"
import { useSelector } from "react-redux";

export default function ModifierHome() {
    const { items, about } = useSelector(state => state)

    return (
        <div>
            <About about={about} />
            {
                items.map((e) => {
                    return (<Items item={e} />);
                })
            }
        </div>
    )
}