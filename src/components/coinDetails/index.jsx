import React, { useEffect, useState }  from 'react';
import { PageContainer } from "../../components/style/style_index";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { getCoinDataById } from "../../apis/coingenckoList";

function CoinDetails(props) {
    const [coin, setCoins] = useState([]);
    var extractedData = JSON.stringify(coin);
    const coinId = props.match.params.id;
    
    useEffect((props) => {
    const params = {
        days: 1,
        vs_currency: 'usd',
        coinId: coinId
    }
      getCoinDataById(params)
      .then(data => {
        let mounted = true;
        if(mounted) {
          setCoins(data.props.results.data)
        }
        return () => mounted = false;
      });
    }, [extractedData, coinId]);

    return (
        <PageContainer>
            <Navbar {...props} style={{ position: "none !important"}}/>
            <Marginer direction="vertical" margin="8em"/>
            <Footer/>
        </PageContainer>
    );
}

export default CoinDetails;