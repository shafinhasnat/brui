import React from "react";
import {
  createTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Radio } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});
const theme = createTheme({
  palette: {
    primary: { main: "#2F9398" },
  },
});
const MakeTable = (props) => {
  const classes = useStyles();
  const { data, style, columns, clickRow, activeRadio, selectedId } = props;
  return (
    <TableContainer style={style}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {!!columns &&
              !!columns.length &&
              columns.map((item, keys) =>
                keys === 0 ? (
                  activeRadio ? (
                    <>
                      <TableCell
                        key={item.id}
                        align="center"
                        style={{ fontWeight: "bold" }}
                      ></TableCell>
                      <TableCell
                        key={item.id}
                        align="center"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.title}
                      </TableCell>
                    </>
                  ) : (
                    <TableCell
                      key={item.id}
                      align="center"
                      style={{ fontWeight: "bold" }}
                    >
                      {item.title}
                    </TableCell>
                  )
                ) : (
                  <TableCell
                    key={item.id}
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.title}
                  </TableCell>
                )
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {!!data &&
            !!data.length &&
            data.map((item) => (
              <TableRow
                key={item.id}
                hover={true}
                onClick={() => clickRow && clickRow(item)}
                style={{ cursor: "pointer" }}
              >
                {activeRadio ? (
                  <TableCell align="center">
                    <MuiThemeProvider theme={theme}>
                      <Radio color="primary" checked={selectedId === item.id} />
                    </MuiThemeProvider>
                  </TableCell>
                ) : (
                  <></>
                )}
                {columns.map((vals) => (
                  <TableCell align="center">{item[vals.id]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MakeTable;
