import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//tabel
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

//tabel
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  table: { minWidth: 300 },
});

export default function ListItems({ Data }) {
  const classes = useStyles();

  return (
    <div className="main-flex-box-child ">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell noWrap="false">
                      {student.model}
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <CardMedia
                    component="img"
                    alt={student.model}
                    image={student.img_url}
                    title={student.model}
                    height="auto"
                  />
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Brand
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.brand}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Model
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.model}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Network Technology
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.network_technology}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      2G Bands
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.twoG_bands}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      3G Bands
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.threeoG_bands}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Network Speed
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.network_speed}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      GPRS
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.GPRS}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      EDGE
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.EDGE}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Announced
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.announced}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Status
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.status}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Dimentions
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {student.dimentions}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
