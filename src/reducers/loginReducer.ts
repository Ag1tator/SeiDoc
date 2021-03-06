import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { loginCreator, initLoginCreator } from '../actions/action'
import { UserState, TargetFamily } from '../types/type';



const initialState: UserState = {
    userId: '',
    nickName: '',
    birthday: '',
    income: '',
    address: '',
    targetFamily: TargetFamily.不明,
    family: [],
    isAdmin: false,
    department: '',
    sex: 2,
    searchedWords: [],
    viewedCategory: [{categoryName:'子育て',count:0}],
}


export const LoginReducer = reducerWithInitialState(initialState)
    .case(loginCreator, (state, loginData) => {
        return Object.assign({}, state, {
            userId: loginData.userId,
            nickName: loginData.nickName,
            birthday: loginData.birthday,
            income: loginData.income,
            address: loginData.address,
            family: loginData.family,
            department: loginData.department,
            targetFamily: loginData.targetFamily,
            isAdmin: loginData.isAdmin
        })
    })
    .case(initLoginCreator, (state) => {
        return Object.assign({}, state, {
            userId: '',
            nickName: '',
            birthday: '',
            income: '',
            address: '',
            family: '',
            department: '',
            isAdmin: false
        })
    })