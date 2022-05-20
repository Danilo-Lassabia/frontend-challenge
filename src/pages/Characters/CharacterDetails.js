import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import {Card, CardLink, DetailCard, GraphCard, StyledText, TextInfo } from '../../components/card/CardStyle';
import { Flex, Text } from 'aiq-design-system';
import { useTranslation } from 'react-i18next';
import { API } from '../../components/api';
import { getId } from '../../components/getId';
import { PieChart } from '../../components/chart/PieChart';

export function CharacterDetails(){

    const { t: translate } = useTranslation();
    let {id} = useParams()
    
    const { isLoading, error, data } = useQuery('queryPeopleDetails',() => {
        return axios.get(`https://swapi.dev/api/people/${id}`);
      });

      if (isLoading || !data) return(<Flex color="white" justifyContent={'center'} alignItems='center' width={'100%'} mt='  200px'>Tá carregando, Pedro...</Flex>)

      
      return(<Flex flexDirection='column' p='50px' pt='30px' width='100%'>
                <Text color='yellow' fontSize='45px'>
                  {data.data.name.toLowerCase()}
                </Text>
                <Flex>
                  <Flex flexDirection='column'>
                <DetailCard width='12px!important'>
                  <TextInfo color='#ffe81f!important' fontSize='20px!important'>
                    {translate("characterDetails:physical")}
                  </TextInfo>
                  <StyledText mt='20px!important' ml='6px!important' color='white' lineHeight='17px'>
                    {translate("characterDetails:specie")}
                    {data.data.species?.length > 0 ?(
                      data.data.species.map((species) => (
                        <StyledText>
                                    <API url={species} field="name" />
                                </StyledText>
                            ))
                            ) :(
                              <StyledText>{translate("card:unknown")}</StyledText>
                              )
                            }
                        <StyledText ml='65px'>
                          {translate("characterDetails:height")} {data.data.height}cm
                        </StyledText>
                        <StyledText ml='65px'>
                          {translate("characterDetails:mass")} {data.data.mass}Kg
                        </StyledText>
                        <StyledText ml='65px'>
                          {translate("characterDetails:hair")} {data.data.hair_color}
                        </StyledText>
                  </StyledText>
                </DetailCard>
                <DetailCard>
                  <TextInfo color='#ffe81f!important' fontSize='20px!important'>
                    {translate("characterDetails:vehicles")}  
                  </TextInfo>
                  <Flex mt='-10px'>
                    <TextInfo mr='280px'>
                      {translate("characterDetails:cars")}
                      {data.data.vehicles?.length > 0 ?(
                        data.data.vehicles.map((vehicles) => (
                          <StyledText>
                                    <API url={vehicles} field="name" />
                                </StyledText>
                            ))
                            ) :(
                              <StyledText>{translate("card:unknown")}</StyledText>
                              )
                            }
                    </TextInfo>
                    <TextInfo>
                      {translate("characterDetails:ships")}
                      {data.data.starships?.length > 0 ?(
                        data.data.starships.map((starships) => (
                          <StyledText>
                                    <API url={starships} field="name" />
                                </StyledText>
                            ))
                            ) :(
                              <StyledText>{translate("card:unknown")}</StyledText>
                              )
                            }
                    </TextInfo>
                  </Flex>
                </DetailCard>
                </Flex>
                <Flex width='450px'>
                <Card>
                  <TextInfo fontSize='20px!important' color='#ffe81f!important' mb='-55px' width='320px'>
                    {translate("characterDetails:apparition")}
                  </TextInfo>
                  <PieChart data={data}/>
                  {data.data.films.map((films) => (
                    <StyledText ml='6px' color='white'>
                                  <CardLink to={`/movies/${getId(films)}`}>
                                      <API url={films} field="title" />
                                  </CardLink>
                                </StyledText>
                            ))}
                </Card>
              </Flex>
              </Flex>
        </Flex>)

}