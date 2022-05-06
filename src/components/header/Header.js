import { Flex, Button, Text } from 'aiq-design-system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderButton } from './HeaderStyle'



function Header({key}){



    const {t:translate} = useTranslation()
    return(
        <Flex alignItems='center' width='100%' backgroundColor='almostBlack' height='fit-content' padding='15px 100px' justifyContent='space-between' position='fixed'>
        <Flex color='yellow' fontSize='xxlarge' alignItems='center' >
            <Flex flexDirection='column'>
                <Text lineHeight='24px' ml='5px'>
            {translate('menu:logo1')}   
            </Text>
            <Text lineHeight='24px' >
            {translate('menu:logo2')} 
            </Text>
            </Flex>
            <Text ml='10px' fontSize='xlarge'>
            {translate('menu:logo3')}
            </Text>
        </Flex>
        <Flex paddingRight='250px' fontSize='medium'>
            <HeaderButton>{translate('menu:characters')}</HeaderButton>
            <HeaderButton>{translate('menu:movies')}</HeaderButton>
        </Flex>
        <Flex>
            <Button variant='fab' style={{padding:'4px 15px', borderRadius:'0px', backgroundColor:'#0f0f0f', textTransform:'none', border:'2px solid #ffe81f'}}>{translate('menu:register')}</Button>
        </Flex>
        </Flex>
    )
}

export default Header