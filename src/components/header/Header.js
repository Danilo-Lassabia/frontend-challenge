import { Flex, Text } from 'aiq-design-system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderButton, RegisterButton } from './HeaderStyle'




function Header(){
      
      const {t:translate} = useTranslation()
      return(
        <Flex alignItems='center' width='100%' backgroundColor='almostBlack' height='fit-content' padding='15px 100px' justifyContent='space-between' position='fixed'>
        <Flex color='yellow' fontSize='xxlarge' alignItems='center' >
            <Flex flexDirection='column'>
                <Text lineHeight='24px' ml='5px'>
            {translate('header:logo1')}   
            </Text>
            <Text lineHeight='24px' >
            {translate('header:logo2')} 
            </Text>
            </Flex>
            <Text ml='10px' fontSize='xxlarge'>
            {translate('header:logo3')}
            </Text>
        </Flex>
                <Flex paddingRight='250px' fontSize='medium'>
                    <HeaderButton to='/'>
                        {translate('header:characters')}
                    </HeaderButton>
                    <HeaderButton to='movies'>
                         {translate('header:movies')}
                    </HeaderButton>
                </Flex>
        <Flex>
            <RegisterButton to='register'>
                {translate('header:register')}
            </RegisterButton>
        </Flex>
        </Flex>
    )
}

export default Header