
import { Chrono } from "react-chrono"
import {dataEN as itemsEN, dataFR as itemsFR} from "../data.js"

export default function Chronolg({currentLang}) {
    return (
    <>    
        <section className='w-full grid place-items-center h-fit rounded-3xl border-y-2'>
            <div className='w-full'>
              <Chrono  items={currentLang === "EN" ? itemsEN : itemsFR} mode="VERTICAL_ALTERNATING" toolbarPosition="BOTTOM" disableToolbar={true} highlightCardsOnHover={true} allowDynamicUpdate={true} activeItemIndex={itemsFR.length -1} enableLayoutSwitch={false} enableDarkToggle={true} textDensity="LOW" enableQuickJump={false}  />
            </div>            
        </section>
    </>
    )
}