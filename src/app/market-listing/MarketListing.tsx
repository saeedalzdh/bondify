import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector, useDispatch} from "react-redux";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import {MARKET_LIST_HEADERS} from "../../constants/data";
import {MarketData} from "../../constants/interfaces";
import {fetchMarket} from "../../actions";
import {StateType} from "../../constants/types";
import MarketItem from "./components/MarketItem";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 480,
  },
});

const useLoadCoinLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarket());
  }, [dispatch]);
};

const MarketListing = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useLoadCoinLists();

  const rows = useSelector<StateType, MarketData[]>((state) => state.markets);
  const columns = MARKET_LIST_HEADERS;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box height="100%" className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: MarketData, index: number) => {
                return (
                  <MarketItem
                    columns={columns}
                    row={row}
                    key={index}
                    index={index}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default MarketListing;
