import { Flex, Pagination, Text } from "aiq-design-system";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { SearchBar } from "../MainPagesStyle";
import {CharacterCard} from "../../components/card/CharacterCard"
import { useState } from "react";



export function Characters(){
    const { t: translate } = useTranslation();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const url = "https://swapi.dev/api/people/"

    const { isLoading, error, data } = useQuery('queryPeople',() => 
      {
        if (search === "") {
          return axios.get(`${url}?page=${page}`);
        }
        return axios.get(`${url}?search=${search}`);
      });

      if (isLoading || !data) return(<Flex color="white" justifyContent={'center'} alignItems='center' width={'100%'} mt='  200px'>Tá carregando, Pedro...</Flex>)

      return(<Flex width='100%' alignItems='center' flexDirection='column' p='25px'>
        <Text color='yellow' fontSize='40px' letterSpacing='1px'>{translate("main:characters")}</Text> 
        <SearchBar autoFocus value={search} onInput={(e) => setSearch(e.target.value)}type="text" 
        placeholder={`${translate("main:inputBase")} ${translate("main:characters").toUpperCase()}`}/>
          <CharacterCard data={data}/>
          <Pagination
            defaultPage={page}
            count='9'
            nextPage={data?.data?.next}
            prevPage={data?.data?.previous}
            onChange={(page) => setPage(page)}/>
      </Flex>)

}