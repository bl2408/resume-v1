import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Box({
    title, 
    company, 
    dates, 
    content,
}){

    return(
        <article className='box'>
            <div className='title'>
                <div className='item item-grid date'>
                    <div><FontAwesomeIcon icon={faCalendar} /></div>
                    <div>
                        {dates.start}
                        {
                            dates.end
                                ? ` - ${dates.end}`
                                : null
                        }
                    </div>
                </div>
                
                <div className='item item-grid'>
                    <div><FontAwesomeIcon icon={(
                        company.icon?? faBuilding
                    )}/></div>
                    <div><b>{company.label}</b></div>
                </div>

                <div className='item item-grid'>
                    <div>
                        {
                            title?.icon 
                                ? <FontAwesomeIcon icon={title.icon} />
                                : null
                        }
                    </div>
                    <div>
                        <i>
                            {
                                title?.label
                                    ? title.label
                                    : null
                            }
                        </i>
                        </div>
                </div>
            </div>
            <div className='content'>
                {content}
            </div>
        </article>
    );

}