import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/card/CardStyle";



export function Register(){

    const { t: translate } = useTranslation();

    return(<Flex flexDirection='column'>
        <Text color='yellow' fontSize='45px'>
            {translate('register:participate')}
        </Text>
        <Card>

        </Card>
    </Flex>)
}