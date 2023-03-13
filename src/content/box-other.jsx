import { faBagShopping, faCartShopping, faSchool } from "@fortawesome/free-solid-svg-icons";

export const CONTENT_COLES = {
    title: {
        icon: faCartShopping,
        label: "Various departments"
    },
    company: {
        label: "Coles Sanctuary lakes"
    },
    dates: {
        start: "DEC 2009",
        end: "AUG 2012"
    },
    content: (
        <ul>
            <li>Fruit and vegetable, dairy, nightfill and cashier departments</li>
        </ul>
    )
}

export const CONTENT_BIGW = {
    title: {
        icon: faBagShopping,
        label: "Team member"
    },
    company: {
        label: "Big W Altona meadows"
    },
    dates: {
        start: "NOV 2007",
        end: "DEC 2009"
    },
    content: "" 
}

export const CONTENT_CBA = {
    title: {
        icon: faSchool,
        label: "Year 10 work experience"
    },
    company: {
        label: "Commonwealth Bank"
    },
    dates: {
        start: "2006",
    },
    content: "" 
}
