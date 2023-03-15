import { faDiagramProject, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CONTENT_LD = {
    company: {
        icon: faDiagramProject,
        label: (
            <>
                Lateduck
                &nbsp;<a href="https://lateduck.com" target="_blank"><FontAwesomeIcon icon={faExternalLink} /></a>
            </>
        )        
    },
    dates: {
        start: "JUN 2020",
        end: "PRESENT"
    },
    content: (
        <ul>
            <li>
                My brother and I combined our artistic and programming talents to design and develop a mobile game that 
                showcased our shared passion for creativity. Together, we leveraged our skillsets, with my brother creating 
                the art and graphics while I brought the game to life through programming.
            </li>
            <li>
                Utilized the power of the Unity game engine and C# language with MonoDevelop.
            </li>
            <li>Experienced using XCode and Gradle to test and deploy on iOS and Android.</li>
            <li>
                Android <a href="https://play.google.com/store/apps/details?id=com.lateduck.swoopy" target="_blank"><FontAwesomeIcon icon={faExternalLink} /></a>
                &nbsp;/&nbsp;
                iOS <a href="https://apps.apple.com/au/app/swoopy/id1597233599" target="_blank"><FontAwesomeIcon icon={faExternalLink} /></a>
            </li>
            <li>
                
            </li>
        </ul>
    )
}


