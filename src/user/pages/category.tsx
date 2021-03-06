import React, { useEffect } from 'react';
import SearchBar from '../components/searchBar'
import CategoryCardsList from '../components/categoryCardsList'
import { useDispatch } from 'react-redux'
import { deleteTagCreator, deleteSystemsCreator, initComparisonCreator } from '../../actions/action'
import Footer from '../components/footer';
import Header from '../components/header'
import styled from 'styled-components';
import setting from '../../designSystem/setting';
import { Wrapper } from '../../designSystem/Page';
import { parse } from 'query-string'
import { RouteComponentProps } from 'react-router'

type historyProps = RouteComponentProps

const CategoryContainer = styled.div`
    padding: 16px;
    margin-bottom: 8px;

    background-color: ${setting.White};
`

const Category: React.FC<historyProps> = (props) => {
    const region = parse(props.location.search).region as string
    const dispatch = useDispatch()
    useEffect(() => {
        const deleteTag = () => dispatch(deleteTagCreator())
        const deleteSystems = () => dispatch(deleteSystemsCreator())
        const initComparison = () => dispatch(initComparisonCreator())
        console.log('tag & systems & comparion init')
        deleteTag()
        deleteSystems()
        initComparison()
    }, [dispatch])
    return (
        <Wrapper>
            <Header />
            <CategoryContainer>
                <SearchBar pushTo="/search" center />
                <h2>カテゴリー</h2>
                <CategoryCardsList pushTo="/search" region={region} />
            </CategoryContainer>
            <Footer />
        </Wrapper>
    )
}

export default Category