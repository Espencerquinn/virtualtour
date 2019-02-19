import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer';
import {Link} from 'react-router-dom'
// import propertycard from './../../Components/PropertyCard/propertycard'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseList:[]
        }
        this.deleteProperty = this.deleteProperty.bind(this)
    }

    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }

    componentDidMount(){
        // const rent = this.props.match.params.rent || ''
        axios.get('/api/properties')
            .then((res) => {
                this.setState({
                    houseList: res.data
                })
            })
    }

    deleteProperty(id){
        axios.delete(`/api/properties/${id}`)
        .then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render() {
        // this.state.houseList.map( house => (
    const properties = this.state.houseList.map((obj, deleteProperty) => {
        return (<div key={obj.id} className={obj.name}>
            <h1>{obj.name}</h1>
            <ul>
                <div>{obj.id}</div>
                <li>{obj.name}</li>
                <li>{obj.address}</li>
                <li>{obj.city}</li>
                <button>3D Walkthrough</button>
                <button
                className='card-button'
                onClick={() => this.deleteProperty(obj.id)}>delete</button>
            </ul>
            </div> 
        )  
    })
        return (

            <div className='Login'>
                <div>{properties} </div>
            
            <div className='Dashboard'>
                <Link to ='/private/updateuser'><button>update profile</button></Link>
                <button>add new property</button>
                <button>rent vr kit</button>
            </div>
            <div className='Property Display'>

            </div>
            </div>

        )
    
    }
}
//State aka data
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}
//Methods aka actions 
const dispatch = {
    updateUser: updateUser
}

export default connect(mapStateToProps, dispatch)(Dashboard);