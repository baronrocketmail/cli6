import MenuLinks from "./(components)/MenuLinks";
import React from "react";

//
async function getName(){
    const info = await fetch("https://18572cullcanyon/api/name", { next: { revalidate: 10 } })
    return info.json()
}

async function getApplicationsOpen(){
    const applicationsOpen = await fetch("https://18572cullcanyon.com/api/applicationsOpen" , { next: { revalidate: 10 } })
    return applicationsOpen.json()
}

async function getUnpaid(){
    const unpaid = await fetch("https://18572cullcanyon.com/api/unpaid", { next: { revalidate: 10 } })
    return unpaid.json()
}

export default async function Page(){

    const name = await getName()
    const applicationsOpen = await getApplicationsOpen()
    const unpaid = await getUnpaid()

    let menuLinksObjArray = [{name: name, url: "/"}]

    if (applicationsOpen) {
        menuLinksObjArray.push({name: "apply now", url:"/log"})
        menuLinksObjArray.push({name: "view lease", url:"/viewlease"})
        menuLinksObjArray.push({name: "..." ,url: "/explainer"})
    } else {
        menuLinksObjArray.push({name: "autopay", url:"/autopay"})
        menuLinksObjArray.push(...unpaid)
        menuLinksObjArray.push({name: "...", url:"/log"})
    }

    return(
            <MenuLinks objArray = {menuLinksObjArray}/>
    )
}
