// import React from "react";
// import styled from "styled-components";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableCointainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//     table: {
//       minWidth: 700,
//     },
// });

// export function TableComp(props) {
// const classes = useStyles(); 

//     return (
//         <TableCointainer component={Paper}>
//             <Table className={classes.table} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     <TableRow>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                         <TableCell></TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>
//      </TableCointainer>
//     );
// }
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(coin, price, hour, volume, mkcap) {
  return { coin, price, hour, volume, mkcap };
}

var rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// function getData(pr)

export function TableComp(props) {
  const classes = useStyles();
//   const { data } = props.results;
//   console.log(data);
//   var rows = null;
  getServerSideProps(props).then((response) => {
     rows = response.props.results.data;
    console.log(response.props.results);
});
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
          {rows.map((row) => (
            <StyledTableRow key={row.symbol}>
              <StyledTableCell component="th" scope="row">
                {row.coin}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.hour}</StyledTableCell>
              <StyledTableCell align="right">{row.volume}</StyledTableCell>
              <StyledTableCell align="right">{row.mkcap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}