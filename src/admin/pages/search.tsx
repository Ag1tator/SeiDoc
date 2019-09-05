import React from 'react'
import SearchBar from '../../components/searchBar'
import Tag from '../../components/tag'
import SystemList from '../components/systemList'
import Footer from '../../components/footer'
import Header from '../components/header'

const Search: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="result">
                <div className="container">
                    <SearchBar pushTo="/search" />
                </div>
                <Tag pushTo="/category" />
                <h3>検索結果</h3>
                <SystemList />
            </div>
            <Footer />
        </div>
    )
}

export default Search