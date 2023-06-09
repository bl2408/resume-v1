import "./style.css"
import "./style-print.css"

import { itemHobbies, itemSkills, itemSocials, itemSoftSkills } from "./content/items";
import { CONTENT_CROWN } from "./content/box-crown";
import { CONTENT_EUTECTIC } from "./content/box-eutectic";
import { CONTENT_BIGW, CONTENT_CBA, CONTENT_COLES } from "./content/box-other";
import { EDU_AXI, EDU_CROWN, EDU_VU_FOOTS, EDU_VU_SA } from "./content/box-edu";
import { CONTENT_AE } from "./content/box-ae";
import Box from "./Box";
import { CONTENT_LD } from "./content/box-ld";


export default function Resume(){

    return(

        <main>
            <nav>
                <a href="https://github.com/bl2408/resume-v1" target="_blank">View source on Github</a>
            </nav>
            <header>
                <h1>Brian Lambert</h1>
                {/* <p>Software Engineer</p> */}
                <div className="tagline">
                    Passionate problem-solver with a drive to learn and grow, seeking to transition into the world of Software Engineering.
                </div>
                <div className="socials">
                {
                    itemSocials.map(item=>{
                        return (
                            <a key={item.label} className="item item-grid" href={item.to} target="_blank">
                                <div>{item.icon}</div>
                                <div>{item.label}</div>
                            </a>
                        );

                    })
                }
                </div>
                
            </header>
            <section>
                <h2>Experience</h2>
                    <Box {...CONTENT_AE}/>
                    <Box {...CONTENT_CROWN}/>
                    <Box {...CONTENT_EUTECTIC}/>
                <div className='page-break'></div>
                    <Box {...CONTENT_COLES}/>
                    <Box {...CONTENT_BIGW}/>
                    <Box {...CONTENT_CBA}/>

                <h2>Education</h2>
                    <Box {...EDU_AXI}/>
                    <Box {...EDU_CROWN}/>
                    <Box {...EDU_VU_FOOTS}/>
                <div className='page-break'></div>
                    <Box {...EDU_VU_SA}/>

                <h2>Projects</h2>
                    <Box {...CONTENT_LD}/>
            </section>
            <aside>
                <article>
                    <h2>Hard skills</h2>
                    <ul>
                        {
                            itemSkills.map(item=><li key={item.label}>{item.label}</li>)
                        }
                    </ul>
                </article>
                <article>
                    <h2>Soft skills</h2>
                    <ul>
                        {
                            itemSoftSkills.map(item=><li key={item.label}>{item.label}</li>)
                        }
                    </ul>
                </article>
                <article>
                    <h2>Hobbies</h2>
                    <ul>
                        {
                            itemHobbies.map(item=><li key={item.label}>{item.label}</li>)
                        }
                    </ul>
                </article>
                <article>
                    <h2>References</h2>
                    Available upon request.
                </article>
            </aside>
        </main>

    );

}