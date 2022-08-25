import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`

const Newslatter = () => {
  return (
    <div>
        <Container>
            <Title></Title>
            <Description></Description>
            <InputContainer>
                 <Input/>
                 <Button>
                     <Send/>
                 </Button>
            </InputContainer>
        </Container>
    </div>
  )
}

export default Newslatter