import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import {FacebookShareButton,WhatsappShareButton,TwitterShareButton} from "react-share";
import {FacebookIcon,WhatsappIcon,TwitterIcon} from "react-share";
import { Button } from '@mui/material';
import "./App.css";

function App() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  const [state,setState]=useState()
  const [items,setItems]=useState([])
  // const addmore= () => {
  //   setState([<FacebookShareButton url='https://www.youtube.com/watch?v=2BnTYEafRQc'
  //   quote={"hi"}
  //   hashtag="#react"
  //   >
  //     <FacebookIcon logoFillColor="white" round={true} size={32}></FacebookIcon>
  //   </FacebookShareButton>]);
  //   setItems(state)
  //   console.log(typeof(items))
  // };
  
  return (
    <div>
    <div className='social'>
      <Button className='social1-app'
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? <CloseIcon/> : <ShareIcon/>}
        </Button>
        <section {...getCollapseProps()} className="social">
              <FacebookShareButton url='https://www.youtube.com/watch?v=2BnTYEafRQc'
              quote={"hi"}
              hashtag="#react"
              >
                <FacebookIcon logoFillColor="white" round={true} size={32}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <WhatsappIcon logoFillColor="white" round={true} size={32}>
                </WhatsappIcon>
              </WhatsappShareButton>
              <TwitterShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <TwitterIcon logoFillColor="white" round={true} size={32}>
                </TwitterIcon>
              </TwitterShareButton>
    </section>
    </div>

    </div>
  )
}
export default App;
