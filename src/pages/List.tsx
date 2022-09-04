import { NextPage } from 'next'
import { CardList } from '../..//components/organisms/CardList'
import { ListLayout } from '../../components/template/ListLayout'

const List: NextPage = () => {


    return (
        <ListLayout Headertitle="GourMap" isHomeLayout={false}>
            <CardList />
        </ListLayout>
    )
}

export default List