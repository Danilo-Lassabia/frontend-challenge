import React from 'react';
import { Flex, Text } from 'aiq-design-system';
import { Card, FlexGrid, StyledText, TextInfo } from './CardStyle';
import { useTranslation } from 'react-i18next';
import { API } from '../api';
import { DetailsButton } from './CardStyle';
import { getId } from '../getId';
import { StyledLink } from '../../styles';

export function CharacterCard({data}){

    const { t: translate } = useTranslation();

    return(<FlexGrid>
        {data?.data?.results?.map((character)=>{
            return(<Card>
                    <Text color='yellow' p='5px' pt='15px' fontSize='xlarge' letterSpacing='2px'>
                        {character?.name.toLowerCase() }
                    </Text>
                    <TextInfo>
                        {translate("card:birth")}
                        <StyledText>
                            {translate("card:date")} {character?.birth_year}
                        </StyledText>
                        <StyledText marginTop='6px!important'>
                            {translate("card:planet")} {<API url={character.homeworld} field="name" />}
                        </StyledText>
                    </TextInfo>
                    <TextInfo>
                        {translate("card:physical")}
                        <StyledText>
                            {translate("card:specie")} 
                            {character.species?.length > 0 ?(
                            character.species.map((species) => (
                                <StyledText>
                                    <API url={species} field="name" />
                                </StyledText>
                            ))
                        ) :(
                            <StyledText>{translate("card:unknown")}</StyledText>
                        )
                        }
                        </StyledText>
                        <StyledText marginTop='6px!important'>
                            {translate("card:height")} {character.height}cm
                        </StyledText>
                    </TextInfo>
                    <TextInfo mb='15px'>
                        {translate("card:vehicles")}
                        {character.vehicles.map((vehicles) => (
                                <StyledText>
                                    <API url={vehicles} field="name" />
                                </StyledText>
                            ))}
                        {character.vehicles?.length > 0 || character.starships?.length > 0?(
                            character.starships.map((starships) => (
                                <StyledText>
                                    <API url={starships} field="name" />
                                </StyledText>
                            ))
                        ) :(
                            <StyledText>{translate("card:unknown")}</StyledText>
                        )
                        }
                    </TextInfo>
                    <Flex mt='auto' mb='15px' justifyContent='center'>
                        <StyledLink to={`characters/${getId(character.url)}`}>
                            <DetailsButton>{translate("card:details")}</DetailsButton>
                        </StyledLink>
                    </Flex>
                </Card>)
        })}
    </FlexGrid>)
}