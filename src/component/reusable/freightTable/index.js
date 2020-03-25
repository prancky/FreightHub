import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { SORT } from "../../../redux/types/index";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const columns = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  {
    id: "mode",
    label: "Mode"
  },
  {
    id: "type",
    label: "Type"
  },
  { id: "destination", label: "Destination" },
  { id: "origin", label: "Origin" },
  { id: "total", label: "Total" },
  { id: "status", label: "Status" },
  { id: "userId", label: "userId" },
  { id: "action", label: "Action" }
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "30px",
    marginBottom: "50px"
  },
  container: {
    maxHeight: 600
  },
  chipDefault: {
    color: "#FFF",
    width : '100px'
  },
  chipActive: {
    backgroundColor: "#1480FF"
  },
  chipCompleted: {
    backgroundColor: "#58CF6C"
  },
  chipNew: {
    backgroundColor: "#F5A623"
  }
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === SORT.DESC
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function FlightTable(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [order, setOrder] = useState(SORT.ASC);
  const [orderBy, setOrderBy] = useState("id");
  const [tableData, setTableData] = useState(props.data);
  const [seachText, setSeachText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let rows = tableData;

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === SORT.ASC;
    setOrder(isAsc ? SORT.DESC : SORT.ASC);
    setOrderBy(property);
  };

  useEffect(() => {
    if (props.searchPara && props.searchPara.trim().length > 0) {
      if (seachText !== props.searchPara.trim()) {
        let para = props.searchPara;
        let list = _.filter(
          props.data,
          item =>
            item.id.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.name.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.mode.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.type.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.destination.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.origin.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.total.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.status.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
            item.userId.toUpperCase().indexOf(para.toUpperCase()) > -1
        );

        setSeachText(props.searchPara);
        setTableData(list);
      }
    }
  }, [props.searchPara, props.data, seachText]); 
  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : SORT.ASC}
                    onClick={handleRequestSort.bind(this, column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, k) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={k}>
                    {columns.map(column => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "action" ? <Button
                                component={RouterLink}
                                to={{
                                  pathname: "/Detail",
                                  state: k
                                }}
                                variant="contained"
                              >
                                <OpenInNewIcon />
                                {/* VIEW */}
                              </Button> : column.id == "status" ? 
                              <>
                              {/* <Status>ACTIVE</Status> */}
                              <Chip
                                className={[classes.chipDefault, 
                                  row[column.id] === "ACTIVE" ? classes.chipActive : 
                                  row[column.id] === "COMPLETED" ? classes.chipCompleted : 
                                  classes.chipNew ]}
                                size="small"
                                label={row[column.id]}
                              /> 
                            </> :(
                            row[column.id].toUpperCase()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default FlightTable;
