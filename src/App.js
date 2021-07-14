import React,{Component} from "react";
import BandsList from "./components/BandsList";
import Navbar from "./components/Navbar";
import ModalDialog from "./components/Modal";

class App extends Component {

    state = {
        bands : [],
        currentBand : {},
        show: false
    }

    changeCurrentBand = (band) =>{
        console.log(band);
            this.setState({currentBand:band})
            this.handleShow()
    }

    handleShow =()=>{
        this.setState({show:true})
    }

    handleClose =()=>{
        this.setState({show:false})
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.setState({bands:data})
        })
    }
    render(){
        return(
            <>
            <Navbar/>

            <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>

            <ModalDialog show={this.state.show} handleClose={this.handleClose} currentBand={this.state.currentBand}/>

            </>
        )
    }
}

export default App;