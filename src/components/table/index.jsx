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
    minWidth: 700,
  },
});

const CoinLogoImg = styled.img`
  width: 2.5em;
  height: 2.5em;
`;
const coinImageContainer = styled.div`
  display: flex;
`;

export function TableComp(props) {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    let mounted = true;
    getServerSideProps(props)
    .then(data => {
      if(mounted) {
        setCoins(data.props.results.data)
      }
      return () => mounted = false;
    });
  })
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coin</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">1hr</StyledTableCell>
            <StyledTableCell align="right">Volume</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.slice(0, 8).map((coin) => (
            <StyledTableRow key={coin.symbol}>
              <StyledTableCell component="th" scope="row">
                <coinImageContainer>
                  <CoinLogoImg src={coin.image}/>
                    {coin.name}
                </coinImageContainer>
              </StyledTableCell>
              <StyledTableCell align="right">{coin.price}</StyledTableCell>
              <StyledTableCell align="right">{coin.hour}</StyledTableCell>
              <StyledTableCell align="right">{coin.volume}</StyledTableCell>
              <StyledTableCell align="right">{coin.mkcap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}