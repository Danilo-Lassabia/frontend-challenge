import React from 'react';
import { Flex, Text } from 'aiq-design-system';
import { Card, FlexGrid, MovieDetailsButton, StyledText, TextInfo } from './CardStyle';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import axios from 'axios';
import moment from 'moment';
import { StyledLink } from '../../styles';
import { getId } from '../getId';


export function MovieCard(){
    

    const { t: translate } = useTranslation();

    const { isLoading, error, data } = useQuery('queryMovie',() => {
        return axios.get(`https://swapi.dev/api/films`);
      });


      if (isLoading || !data) return 'Loading'

      return(<FlexGrid>
          {data?.data?.results?.map((movie)=>{
              return(<Card>
                  <Text color='yellow' p='5px' pt='15px' fontSize='xlarge' letterSpacing='2px'>
                        {movie?.title}
                    </Text>
                    <Text color='white' fontFamily='sans-serif' fontSize='medium' pl='5px'>
                        {translate("card:episode")} {movie?.episode_id}
                    </Text>
                    <TextInfo>
                        {translate("card:infos")}
                        <StyledText>
                            {translate("card:released")} {moment(movie?.release_date).format('L')}
                        </StyledText>
                        <StyledText mt='6px!important'>
                            {translate("card:directed")} {movie?.director}
                        </StyledText>
                        <Flex mt='25px' mb='15px' mr='15px' width='max-content' justifyContent='center'>
                            <StyledLink to={`/movies/${getId(movie?.url)}`}>
                                <MovieDetailsButton>{translate("card:details")}</MovieDetailsButton>
                            </StyledLink>
                        </Flex>
                    </TextInfo>
              </Card>)
          })}
      </FlexGrid>)

}