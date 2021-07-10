import CoinGecko from "coingecko-api";
const CoinGeckoClient = new CoinGecko();

export async function getCoinList(context) {
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

export async function getCoinDataById(context) {
    const params = {
        days: context.days,
        vs_currency: context.vs_currency
    }
    const results = await CoinGeckoClient.coins.fetchMarketChart(context.coinId, params);
    return {
        props: {
            results
        }
    }
}