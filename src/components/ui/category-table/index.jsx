// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { category } from "../../../service";
// import { useState } from "react";
// import { CategoryModal } from "@modal";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#FFFFFF", // Oq background
//     color: "#000000", // Qora text
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     backgroundColor: "#FFFFFF", // Oq background
//     color: "#000000", // Qora text
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "#FFFFFF", // Oq background
//   },
//   "&:nth-of-type(even)": {
//     backgroundColor: "#FFFFFF", // Oq background
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const CustomizedTableContainer = styled(TableContainer)({
//   margin: "0 20px", // Ikki yon tomonidan 20px margin
// });

// const CustomizedTables = ({ data }) => {
//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);

//   const editItem = (item) => {
//     setEdit(item);
//     setOpen(true);
//   };

//   const deleteItem = async (id) => {
//     try {
//       const response = await category.delete(id);
//       if (response.status === 200 || response.status === 201) {
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <CategoryModal
//         item={edit}
//         open={open}
//         handleClose={() => setOpen(false)}
//       />
//       <CustomizedTableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="center">T/R</StyledTableCell>
//               <StyledTableCell align="center">Category Name</StyledTableCell>
//               <StyledTableCell align="center">Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data?.map((item, index) => (
//               <StyledTableRow key={index}>
//                 <StyledTableCell align="center">{index + 1}</StyledTableCell>
//                 <StyledTableCell align="center">
//                   {item.category_name}
//                 </StyledTableCell>
//                 <StyledTableCell align="center">
//                   <button onClick={() => deleteItem(item.category_id)}>
//                     <DeleteIcon />
//                   </button>
//                   <button onClick={() => editItem(item)}>
//                     <EditIcon />
//                   </button>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CustomizedTableContainer>
//     </>
//   );
// };

// export default CustomizedTables;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { category } from '../../../service';
import { useState, useEffect } from 'react';
import { CategoryModal } from '@modal';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFFFFF', // Oq background
    color: '#000000', // Qora text
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: '#FFFFFF', // Oq background
    color: '#000000', // Qora text
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFFFFF', // Oq background
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FFFFFF', // Oq background
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTableContainer = styled(TableContainer)({
  margin: '0 20px', // Ikki yon tomonidan 20px margin
});

const CustomizedTables = ({ data }) => {
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const editItem = (item) => {
    setEdit(item);
    setOpen(true);
  };

  const deleteItem = async (id) => {
    try {
      const response = await category.delete(id);
      if (response.status === 200 || response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CategoryModal
        item={edit}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <CustomizedTableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Category Name</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.category_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => deleteItem(item.category_id)}>
                    <DeleteIcon />
                  </Button>
                  <Button onClick={() => editItem(item)}>
                    <EditIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </CustomizedTableContainer>
    </>
  );
};

export default CustomizedTables;