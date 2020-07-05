import React, { Fragment } from "react";
import NewStudentModal from "./NewStudentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
//material ui

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
//tabel
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//material ui

import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const sahreUrl = "https://www.fb.com";
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
function StudentList(props) {
  const students = props.students;
  const classes = useStyles();
  return (
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
                  {students.map((student) => (
                    <Fragment key={student.pk}>
                      <StyledTableCell>{student.model}</StyledTableCell>
                      <StyledTableCell></StyledTableCell>
                    </Fragment>
                  ))}
                </TableRow>
              </TableHead>
              {students.map((student) => (
                <CardMedia
                  key={student.pk}
                  component="img"
                  alt={student.model}
                  image={student.img_url}
                  title={student.model}
                  height="auto"
                />
              ))}
              {students.map((student) => (
                <TableBody key={student.pk}>
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
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <ConfirmRemovalModal
                        pk={student.pk}
                        resetState={props.resetState}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <NewStudentModal
                        create={false}
                        student={student}
                        resetState={props.resetState}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default StudentList;
// import React, { Component } from "react";
// import { Table } from "reactstrap";
// import NewStudentModal from "./NewStudentModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";

// class StudentList extends Component {
//   render() {
//     const students = this.props.students;
//     return (
//       <Table dark>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Document</th>
//             <th>Phone</th>
//             <th>Registration</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {console.log(students)}
//           {!students || students.length <= 0 ? (
//             <tr>
//               <td colSpan="6" align="center">
//                 <b>Ops, no one here yet</b>
//               </td>
//             </tr>
//           ) : (
//             students.map((student) => (
//               <tr key={student.pk}>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.document}</td>
//                 <td>{student.phone}</td>
//                 <td>{student.registrationDate}</td>
//                 <td align="center">
//                   <NewStudentModal
//                     create={false}
//                     student={student}
//                     resetState={this.props.resetState}
//                   />
//                   &nbsp;&nbsp;
//                   {/* <ConfirmRemovalModal
//                     pk={student.pk}
//                     resetState={this.props.resetState}
//                   /> */}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//     );
//   }
// }

// export default StudentList;
