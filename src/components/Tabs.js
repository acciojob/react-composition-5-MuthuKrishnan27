import React,{useState} from "react"

const Tabs = ({tabs})=>{

   
    const [active1Tab,setActive1Tab] = useState(0)
    const [active2Tab,setActive2Tab] = useState(0)

    function handleActive1Tab(index){
        setActive1Tab(index);
    }

    function handleActive2Tab(index){
        setActive2Tab(index);
    }

    return (
        <div>
          <div>
            {
              tabs[0].map((tab,index)=>(              
                <ul>
                  <li onClick={()=>handleActive1Tab(index)}>{tab.title}</li>
                </ul>              
            ))
            }
          </div>
          <p>
            {tabs[0][active1Tab].content}
          </p>
          <div>
            {
              tabs[1].map((tab,index)=>(              
                <ul>
                  <li onClick={()=>handleActive2Tab(index)}>{tab.title}</li>
                </ul>              
            ))
            }
          </div>
          <p>
            {tabs[1][active2Tab].content}
          </p>
        </div>
    )
}

export default Tabs