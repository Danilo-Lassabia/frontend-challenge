import { Flex, Text } from "aiq-design-system";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { SearchBar } from "../MainPagesStyle";
import {MovieCard} from "../../components/card/MovieCard"



export function Movies({page}){
    const { t: translate } = useTranslation();

    const { isLoading, error, data } = useQuery('queryMovies',() => {
        return axios.get(`https://swapi.dev/api/films`);
      });

      if (isLoading || !data) return 'Loading'

      return(<Flex width='100%' alignItems='center' flexDirection='column' p='25px'>
        <Text color='yellow' fontSize='40px' letterSpacing='1px'>{page}</Text> 
        <SearchBar placeholder={`${translate("main:inputBase")} ${page.toUpperCase()}`}/>
          <MovieCard data={data}/>
      </Flex>)

}