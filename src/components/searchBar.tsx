import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { fetchSystemByAlgoliaSearch } from '../actions/action'
import { withRouter, RouteComponentProps } from 'react-router'
import '../scss/searchBar.scss'

type historyProps = RouteComponentProps

const SearchBar: React.FC<historyProps> = (props: historyProps) => {
    const tag = useSelector((state: AppState) => state.tagState.tag)
    const dispatch = useDispatch()
    const alogliaSearch = (query: string, category: string) => dispatch(fetchSystemByAlgoliaSearch(query, category))
    let inputValue: string = ''
    console.log('tag:', tag)
    return (
        <div className="container">
            <div className="searchBar">
                <input type="text" onChange={e => { inputValue = e.target.value }} placeholder="「未熟児」などの単語を入力" />
                <button onClick={() => {
                    alogliaSearch(inputValue, tag)
                    props.history.push('/result')
                }}>クリック</button>
            </div>
        </div>
    )
}

export default withRouter<historyProps, React.FC<historyProps>>(SearchBar)