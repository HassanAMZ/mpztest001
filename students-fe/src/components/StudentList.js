import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStudentModal from "./NewStudentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StudentList extends Component {
  render() {
    const students = this.props.students;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Network Technology</th>
            <th>Two G Brands</th>
            <th>Three G Brands</th>
            <th>Four G Bands</th>
            <th>Network Speed</th>
            <th>GPRS</th>
            <th>EDGE</th>
            <th>Announced</th>
            <th>Status</th>
            <th>Dimentions</th>
            <th>weight_g</th>
            <th>weight_oz</th>
            <th>SIM</th>
            <th>display_type</th>
            <th>display_resolution</th>
            <th>display_size</th>
            <th>OS</th>
            <th>CPU</th>
            <th>Chipset</th>
            <th>GPU</th>
            <th>memory_card</th>
            <th>internal_memory</th>
            <th>RAM</th>
            <th>primary_camera</th>
            <th>secondary_camera</th>
            <th>loud_speaker</th>
            <th>audio_jack</th>
            <th>WLAN</th>
            <th>bluetooth</th>
            <th>GPS</th>
            <th>NFC</th>
            <th>radio</th>
            <th>USB</th>
            <th>sensors</th>
            <th>battery</th>
            <th>colors</th>
            <th>approx_price_EUR</th>
            <th>img_url</th>
            <th>FIELD41</th>

            <th>Registration</th>
          </tr>
        </thead>
        <tbody>
          {!students || students.length <= 0 ? (
            <tr>
              <td>
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.pk}>
                <td>{student.brand}</td>
                <td>{student.model}</td>
                <td>{student.network_technology}</td>
                <td>{student.twoG_bands}</td>
                <td>{student.threeoG_bands}</td>
                <td>{student.fourG_bands}</td>
                <td>{student.network_speed}</td>
                <td>{student.GPRS}</td>
                <td>{student.EDGE}</td>
                <td>{student.announced}</td>
                <td>{student.status}</td>
                <td>{student.dimentions}</td>
                <td>{student.weight_g}</td>
                <td>{student.weight_oz}</td>
                <td>{student.SIM}</td>
                <td>{student.display_type}</td>
                <td>{student.display_resolution}</td>
                <td>{student.display_size}</td>
                <td>{student.OS}</td>
                <td>{student.CPU}</td>
                <td>{student.Chipset}</td>
                <td>{student.GPU}</td>
                <td>{student.memory_card}</td>
                <td>{student.internal_memory}</td>
                <td>{student.RAM}</td>
                <td>{student.primary_camera}</td>
                <td>{student.secondary_camera}</td>
                <td>{student.loud_speaker}</td>

                <td>{student.audio_jack}</td>
                <td>{student.WLAN}</td>
                <td>{student.bluetooth}</td>
                <td>{student.GPS}</td>
                <td>{student.NFC}</td>
                <td>{student.radio}</td>
                <td>{student.USB}</td>
                <td>{student.sensors}</td>
                <td>{student.battery}</td>
                <td>{student.colors}</td>
                <td>{student.approx_price_EUR}</td>
                <td>{student.img_url}</td>
                <td>{student.FIELD41}</td>

                <td>{student.registrationDate}</td>
                <td align="center">
                  <NewStudentModal
                    create={false}
                    student={student}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={student.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
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
