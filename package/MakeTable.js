import React from "react";
import { createTheme, makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Radio } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: "100%"
  }
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#2F9398"
    }
  }
});

const MakeTable = props => {
  const classes = useStyles();
  const {
    data,
    style,
    columns,
    clickRow,
    activeRadio,
    selectedId
  } = props;
  return /*#__PURE__*/React.createElement(TableContainer, {
    style: style
  }, /*#__PURE__*/React.createElement(Table, {
    className: classes.table,
    "aria-label": "simple table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, !!columns && !!columns.length && columns.map((item, keys) => keys === 0 ? activeRadio ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableCell, {
    key: item.id,
    align: "center",
    style: {
      fontWeight: "bold"
    }
  }), /*#__PURE__*/React.createElement(TableCell, {
    key: item.id,
    align: "center",
    style: {
      fontWeight: "bold"
    }
  }, item.title)) : /*#__PURE__*/React.createElement(TableCell, {
    key: item.id,
    align: "center",
    style: {
      fontWeight: "bold"
    }
  }, item.title) : /*#__PURE__*/React.createElement(TableCell, {
    key: item.id,
    align: "center",
    style: {
      fontWeight: "bold"
    }
  }, item.title)))), /*#__PURE__*/React.createElement(TableBody, null, !!data && !!data.length && data.map(item => /*#__PURE__*/React.createElement(TableRow, {
    key: item.id,
    hover: true,
    onClick: () => clickRow && clickRow(item),
    style: {
      cursor: "pointer"
    }
  }, activeRadio ? /*#__PURE__*/React.createElement(TableCell, {
    align: "center"
  }, /*#__PURE__*/React.createElement(MuiThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Radio, {
    color: "primary",
    checked: selectedId === item.id
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null), columns.map(vals => /*#__PURE__*/React.createElement(TableCell, {
    align: "center"
  }, item[vals.id])))))));
};

export default MakeTable;