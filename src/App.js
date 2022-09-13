import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import {FacebookShareButton,WhatsappShareButton,TwitterShareButton,LinkedinShareButton,InstapaperShareButton} from "react-share";
import {FacebookIcon,WhatsappIcon,TwitterIcon,LinkedinIcon,InstapaperIcon} from "react-share";
import { Button } from '@mui/material';
import "./App.css";

function App() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  const [textAreaNo,setTextAreaNo] = useState(0);
  const [textAreaNo1,setTextAreaNo1] = useState(0);
  const [textAreaNo2,setTextAreaNo2] = useState(0);
  const [textAreaNo3,setTextAreaNo3] = useState(0);
  const [textAreaNo4,setTextAreaNo4] = useState(0);

  return (
   <>
    <div>
      <Button 
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? <CloseIcon/> : <ShareIcon/>}
        </Button>
        <section {...getCollapseProps()} >
         
        {[...Array(textAreaNo)].map(e=>(
        <div>
        <FacebookShareButton url='https://www.youtube.com/watch?v=2BnTYEafRQc'
                      quote={"hi"}
                      hashtag="#react"
                      name='facebook'
                      id='facebook'
                      >
                        <FacebookIcon logoFillColor="white" round={true} size={32} onClick={()=>setTextAreaNo(textAreaNo-1)}></FacebookIcon>
                      </FacebookShareButton>
        </div>
        )
          
        )}

        {[...Array(textAreaNo1)].map(e=>(
        <div>
        <WhatsappShareButton title='sharing content'
                      url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                        <WhatsappIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo1(textAreaNo1-1)} >
                        </WhatsappIcon>
                      </WhatsappShareButton>
        </div>
        )
          
        )}
        {[...Array(textAreaNo2)].map(e=>(
        <div>
        <TwitterShareButton title='sharing content'
                      url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                        <TwitterIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo2(textAreaNo2-1)} >
                        </TwitterIcon>
                      </TwitterShareButton>
        </div>
        )
          
        )}

        {[...Array(textAreaNo3)].map(e=>(
        <div>
        <LinkedinShareButton title='sharing content'
                      url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                        <LinkedinIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo3(textAreaNo3-1)} >
                        </LinkedinIcon>
                      </LinkedinShareButton>
        </div>
        )
          
        )}

          {[...Array(textAreaNo4)].map(e=>(
    <div>
    <InstapaperShareButton title='sharing content'
                  url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                    <InstapaperIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo4(textAreaNo4-1)} >
                    </InstapaperIcon>
                  </InstapaperShareButton>
    </div>
    )
      
    )}       
    </section>
    </div>
    <div>
       <section >
              <FacebookShareButton url='https://www.youtube.com/watch?v=2BnTYEafRQc'
              quote={"hi"}
              hashtag="#react"
              name='facebook'
              id='facebook'
              >
                <FacebookIcon logoFillColor="white" round={true} size={32} onClick={()=>setTextAreaNo(textAreaNo+1)}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <WhatsappIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo1(textAreaNo1+1)} >
                </WhatsappIcon>
              </WhatsappShareButton>
              <TwitterShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <TwitterIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo2(textAreaNo2+1)} >
                </TwitterIcon>
              </TwitterShareButton>
              <LinkedinShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <LinkedinIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo3(textAreaNo3+1)} >
                </LinkedinIcon>
              </LinkedinShareButton>
              <InstapaperShareButton title='sharing content'
              url='https://www.youtube.com/watch?v=2BnTYEafRQc'>
                <InstapaperIcon logoFillColor="white" round={true} size={32} onClick={()=> setTextAreaNo4(textAreaNo4+1)} >
                </InstapaperIcon>
              </InstapaperShareButton>
    </section>
    </div>

    </>
  )
}
export default App;
