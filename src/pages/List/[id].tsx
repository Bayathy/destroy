import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ListLayout } from '../../components/template/ListLayout'
// eslint-disable-next-line @typescript-eslint/ban-types

import { CardList } from '../../components/organisms/CardList'

const List: NextPage = () => {
    const id = Number.parseInt(useRouter().query.id as string)

    return (
        <ListLayout Headertitle="GourMap" isHomeLayout={false}>
            <CardList selectid={id} />
        </ListLayout>
    )
}

export default List