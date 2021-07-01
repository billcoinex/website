import CoinGecko from "coingecko-api";
const CoinGeckoClient = new CoinGecko();

export async function getServerSideProps(context) {
    const params = {
        order: CoinGecko.ORDER.MARKET_CAP_DESC,
        per_page: 16
    }
    const results = await CoinGeckoClient.coins.markets(params);
    return {
        props: {
            results
        }
    }
}