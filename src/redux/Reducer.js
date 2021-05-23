import { combineReducers } from "redux"

const userData = {
    id:0,
    name:"",
    email: "",
    password: "",
    phone:"",
    address:"",
    isLogin: false,
    initials:"",
}

const laporanData = {
    id: 0,
    name: "",
    address: "",
    keterangan: "",
    status: "",
    gambar: "",
    kejadian: "",
}

const mapData = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

function UserReducer(state = userData, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                [action.inputType]:action.inputValue
            }
            
    
        default:
            return state
    }
}

function LaporanReducer(state = laporanData, action) {
    switch (action.type) {
        case "SET_LAPORAN":
            return {
                ...state,
                [action.inputType]:action.inputValue
            }
            
    
        default:
            return state
    }
}

function MapReducer(state = mapData, action) {
    switch (action.type) {
        case "SET_MAP":
            return {
                ...state,
                [action.inputType]:action.inputValue
            }
            
    
        default:
            return state
    }
}

const reducer = combineReducers({
    UserReducer, LaporanReducer, MapReducer
})

export default reducer