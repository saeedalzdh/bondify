import React from "react";
import {useHistory} from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {MarketItemProps} from "../../../constants/interfaces";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
  },
});

const MarketItem: React.FC<MarketItemProps> = ({columns, row, index}) => {
  const classes = useStyles();
  let history = useHistory();

  function handleClick(marketSymbolId: string) {
    history.push(`/${encodeURIComponent(marketSymbolId)}`);
  }

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
      {columns.map((column) => {
        const value = row[column.id];
        return (
          <TableCell
            className={classes.root}
            key={column.id}
            align={column.align}
            onClick={() => handleClick(row.id)}
          >
            {column.format && typeof value === "number"
              ? column.format(value)
              : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default MarketItem;
