import {React,useState,useEffect}from 'react'
import styled from 'styled-components'
import SimpleSelect from './Components/Select'
import {Button} from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SelectFrom from './Components/SelectFrom'
import SelectTo from './Components/SelectTo'
import axios from 'axios'
export default function MainTab() {
    const [data, setData] = useState("")
    const [dest,setDest]=useState('')
    const handleClick=(e)=>{
        e.preventDefault();
        alert("Max Value entered")
        setData(123)
    };
    const handleClickDiscripting=(e)=>{
        e.preventDefault();
        setData("");
        setDest("");
    };
    const [coins, setCoins] = useState([])
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(res=>{
            setCoins(res.data)
            console.log(res.data)
            console.log(res.data[0]);
        }).catch(error =>alert(error.message))
    },[])
    return (
        <Container>
            <MainScreen>
                    <AssetsContainer>
                        <AssetsTitle>Assets</AssetsTitle>
                            <SimpleSelect coins={coins}/>
                    </AssetsContainer>
                    <NetworkContainer>
                        <NetworkFrom>
                            <Title>From</Title>
                            <SelectFrom coins={coins}/>
                        </NetworkFrom>
                        <NetworkChange>
                            <SwapHorizIcon/>
                        </NetworkChange>
                        <NetworkTo>
                            <Title>To</Title>
                            <SelectTo coins={coins}/>
                        </NetworkTo>
                    </NetworkContainer>
                    <h3>Ammount</h3>
                    <EnterAmount>
                        
                        <InputAmmount value={data} placeholder="Enter Ammount" onChange={(e)=>setData(e.target.value)}></InputAmmount>
                        <Button  onClick={handleClick}>
                        MAX
                        </Button>
                    </EnterAmount>
                    <h3>Destination</h3>
                    <EnterDestination>
                        
                        <InputDestination value={dest} onChange={(e)=>setDest(e.target.value)} placeholder="Enter Crypto Wallect Address " ></InputDestination>
                        <Button  onClick={handleClickDiscripting}>
                        CONNECT WALLET
                        </Button>
                    </EnterDestination>
            </MainScreen>
        </Container>
  );
}

const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
`
const MainScreen=styled.div`
  background-color:#F8F8FF;
  padding:30px;
  height: 550px;
  width: 500px;
  border-radius: 30px;
`
const AssetsContainer=styled.div`

`
const AssetsTitle=styled.h3`

`
const Title=styled.h3`

`
const NetworkContainer=styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

`
const NetworkFrom=styled.div`

`
const NetworkTo=styled.div`

`
const NetworkChange=styled.div`

`

const EnterAmount=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    >button{
        
        height:45px;
        margin-left: 10px;
        margin-top: 8px;
        text-transform:inherit !important;
        /* opacity: 0; */
        /* filter: blur(5px); */
        background: linear-gradient(45deg, #ff0000, #002bff, #7a00ff, #ff00c8, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5);
        background-size: 400%;
        color: white;

    }
`
const InputAmmount=styled.input`
    margin-top: 10px;
    flex:1;
    height: 40px;
    border:1px solid #BFBFC4;
    border-radius: 5px;
    padding-left: 20px;
`
const EnterDestination=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    >button{
        width: 100%;
        height:45px;
        /* margin-left: 10px; */
        margin-top: 8px;
        text-transform:inherit !important;
        /* opacity: 0; */
        /* filter: blur(5px); */
        background: linear-gradient(45deg, #ff0000, #002bff, #7a00ff, #ff00c8, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5);
        background-size: 400%;
        color: white;

    }
`
const InputDestination=styled.input`
    margin-top: 10px;
    height: 40px;
    width: 95%;
    border:1px solid #BFBFC4;
    border-radius: 5px;
    padding-left: 20px;
`