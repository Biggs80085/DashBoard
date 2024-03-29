import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../redux/apiCalls";

const Container = styled.div`
    flex:4;
`;
const UserListUser = styled.div`
    display:flex;
    align-items: center;
`;
const UserListImg = styled.img`
    width:32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
const UserListEdit = styled.button`
    border:none;
    border-radius: 10px;
    padding: 5px; 10px;
    background-color: #3bb077;
    color: white;
    cursor:pointer;
    margin-right: 20px;
`;

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    }
    useEffect(() => {
      getUser(dispatch);
    }, []);

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'userName.name', headerName: 'User', width: 200, renderCell: (params) =>{
            return(
                <UserListUser>
                    <UserListImg src="https://lesexpertsdurecouvrement.com/wp-content/uploads/2015/11/default-avatar.jpg"/>
                    {params.row.userName.name + " " + params.row.userName.lastName}
                </UserListUser>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'isAdmin',
          headerName: 'Admin',
          width: 120,
        },
        /*{
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },*/
        {
          field:"action",
          headerName:"Action",
          width: 150,
          renderCell: (params) =>{
              return(
                  <>
                    <Link to={"/user/"+params.row._id}>
                        <UserListEdit>Edit</UserListEdit>
                    </Link> 
                    <DeleteOutline style={{ color: "red", cursor:"pointer" }} onClick={()=>handleDelete(params.row._id)} />
                  </>
              )
          }
        }
      ];
      
  return (
    <Container>
        <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  )
}

export default UserList