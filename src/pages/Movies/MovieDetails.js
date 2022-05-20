import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import moment from 'moment';
import { Flex, Text } from 'aiq-design-system';
import { useTranslation } from 'react-i18next';
import { Card, CardLink, StyledText, TextInfo } from '../../components/card/CardStyle';
import { API } from '../../components/api';
import { getId } from '../../components/getId';

export function MovieDetails(){

    const { t: translate } = useTranslation();
    let {id} = useParams()
    
    const { isLoading, error, data } = useQuery('queryMovieDetails',() => {
        return axios.get(`https://swapi.dev/api/films/${id}`);
      });

      if (isLoading || !data) return(<Flex color="white" justifyContent={'center'} alignItems='center' width={'100%'} mt='  200px'>Tá carregando, Pedro...</Flex>)

      return(<Flex flexDirection='column' p='50px' pt='30px' width='100%'>
          <Text color='yellow' fontSize='45px'>
            {data.data.title}
          </Text>
          <Text fontSize='24px' color='white' fontFamily='sans-serif' mt='-10px'>
            {translate("movieDetails:episode")} {data.data.episode_id}
          </Text>
          <Flex>
            <Flex flexDirection='column' width='33%' ml='-18px' mt='30px'>
              <Card >
                <TextInfo color='#ffe81f!important' fontSize='20px!important' mt='5px!important' >
                  {translate("movieDetails:synopsis")}
                </TextInfo>
                <StyledText mt='15px!important' ml='6px!important' mb='5px' color='white' lineHeight='20px'>
                  {data.data.opening_crawl}
                </StyledText>
              </Card>
              <Card >
                <TextInfo color='#ffe81f!important' fontSize='20px!important' mt='5px!important' >
                {translate("movieDetails:technical")}
                </TextInfo>
                <Flex mt='-20px' width='33%'>
                  <TextInfo>
                  {translate("movieDetails:director")}
                    <StyledText width='max-content'>
                      {data.data.director}
                    </StyledText>
                  </TextInfo>
                  <TextInfo pl='65px!important'>
                  {translate("movieDetails:producers")}
                    <StyledText width='180px'>
                      {data.data.producer}
                    </StyledText>
                  </TextInfo>
                </Flex>
                <TextInfo>
                {translate("movieDetails:release")}
                  <StyledText width='max-content'>
                      {moment(data.data.release_date).format('L')}
                    </StyledText>
                </TextInfo>
              </Card>
            </Flex>
            <Flex mt='30px'>
                <Card>
                  <TextInfo color='#ffe81f!important' fontSize='20px!important' mt='5px!important'>
                  {translate("movieDetails:appears")}
                    <Flex>
                      <TextInfo width='max-content'>
                      {translate("movieDetails:characters")}
                        {data.data.characters.map((characters) => (
                                  <StyledText ml='6px' color='white'>
                                    <CardLink to={`/characters/${getId(characters)}`}>
                                        <API url={characters} field="name" />
                                    </CardLink>
                                  </StyledText>
                              ))}
                      </TextInfo>
                      <TextInfo ml='15px'>
                      {translate("movieDetails:species")}
                        {data.data.species.map((species) => (
                                  <StyledText ml='6px' color='white'>
                                        <API url={species} field="name" />
                                  </StyledText>
                              ))}
                      </TextInfo>
                      <TextInfo ml='15px' width='max-content'>
                      {translate("movieDetails:vehicles")}
                        {data.data.vehicles.map((vehicles) => (
                                  <StyledText ml='6px' color='white'>
                                        <API url={vehicles} field="name" />
                                  </StyledText>
                              ))}
                      </TextInfo>
                      <TextInfo ml='15px' width='max-content'>
                      {translate("movieDetails:ships")}
                        {data.data.starships.map((starships) => (
                                  <StyledText ml='6px' color='white'>
                                        <API url={starships} field="name" />
                                  </StyledText>
                              ))}
                      </TextInfo>
                      <TextInfo ml='15px'>
                      {translate("movieDetails:planets")}
                        {data.data.planets.map((planets) => (
                                  <StyledText ml='6px' color='white'>
                                        <API url={planets} field="name" />
                                  </StyledText>
                              ))}
                    </TextInfo>
                  </Flex>
                </TextInfo>
              </Card>
            </Flex>
          </Flex>    
        </Flex>
      )

}