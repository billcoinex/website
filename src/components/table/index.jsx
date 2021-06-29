import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

import { getServerSideProps } from "../../apis/coingenckoList";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 1248,
  },
});

const CoinLogoImg = styled.img`
  width: 2.5em;
  height: 2.5em;
`;
const CoinImageContainer = styled.div`
  align-items: center;
  display: flex;
  place-content: space-evenly;
`;

const getColor = (price) => {
  if (price < 0 ) return 'red';
  return 'green';
};

const getPercetage = (percent) => {
  if (percent >= 0 ) {
    return `+${percent.toFixed(1)}%`
  }
  return `${percent.toFixed(1)}%`;
}

export function TableComp(props) {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  var extractedData = JSON.stringify(coins);
  useEffect((props) => {
    getServerSideProps(props)
    .then(data => {
      let mounted = true;
      if(mounted) {
        setCoins(data.props.results.data)
      }
      return () => mounted = false;
    });
  }, [extractedData])
  
  const handleRowClick = () => {
    props.history.push("/coinDetails");
  };
  return (
    <TableContainer className={classes.table}  component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coin</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">24hr</StyledTableCell>
            <StyledTableCell align="right">Volume</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.slice(0, 8).map((coin) => (
            <StyledTableRow key={coin.symbol} onClick={handleRowClick}>
              <StyledTableCell component="th" scope="row">
                <CoinImageContainer>
                  <CoinLogoImg src={coin.image}/>
                  {coin.name}
                </CoinImageContainer>
              </StyledTableCell>
              <StyledTableCell align="right">{coin.current_price}</StyledTableCell>
              <StyledTableCell style={{ color: getColor(coin.price_change_percentage_24h) }} align="right">{getPercetage(coin.price_change_percentage_24h)}</StyledTableCell>
              <StyledTableCell align="right">{coin.total_volume}</StyledTableCell>
              <StyledTableCell align="right">{coin.market_cap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}