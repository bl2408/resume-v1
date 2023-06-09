import { faCarSide, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CONTENT_AE = {
    title: {
        icon: faCarSide,
        label: "Co-Founder / Web master"
    },
    company: {
        label: (
            <>
                Absolute Enthusiasts
                &nbsp;<a href="https://aeclub.com.au" target="_blank"><FontAwesomeIcon icon={faExternalLink} /></a>
            </>
        )        
    },
    dates: {
        start: "MAR 2019",
        end: "PRESENT"
    },
    content: (
        <ul>
            <li>Co-founded and manage a car club for car enthusiasts.</li>
            <li>Organized and coordinated regular meetings, events, and activities for the club members.</li>
            <li>Passionate about bringing people together around a shared interest and fostering a sense of community. </li>
            <li>Responsible for managing the web server, domain name, hosting, and business email accounts.</li>
            <li>Maintaining the club website using WordPress CMS.</li>
            <li>Designing and developing custom themes, templates, and plugins.</li>
            <li>Designing logos, graphics, and imagery using Photoshop, Lightroom, and vector art software.</li>
        </ul>
    )
}


